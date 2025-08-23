import { Box, Grid, Typography } from "@mui/material";
import ClockCard from "../../components/shared/ClockCard";
import CreateCard from "../../components/shared/CreateCard";
import ClockModal from "../../components/shared/ClockModal";
import { useCallback, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";
import DeleteDialog from "../../components/shared/DeleteDialog";

const Clocks = () => {
	const [baseClock, setBaseClock] = useState(null);
	const [clocks, setClocks] = useState([]);

	const [deleteState, setDeleteState] = useState({
		open: false,
		_id: null,
	});
	const [modalState, setModalState] = useState({
		open: false,
		type: null, // "Base" | "Other"
		action: null, // "Create" | "Update"
		data: null, // actual clock data
	});

	// Load baseClock and other clocks initially
	useEffect(() => {
		const data = getLocalStorage("Base");
		setBaseClock(data);

		const othersClocks = getLocalStorage("Others");

		if (othersClocks !== null) {
			setClocks(othersClocks);
		}

		if (!data) {
			// Case 1: No baseClock → open modal with Base Create
			setModalState({
				open: true,
				type: "Base",
				action: "Create",
				data: null,
			});
		}
	}, []);

	// Close modal
	const handleModalClose = useCallback((isSubmitting) => {
		if (!isSubmitting) {
			setModalState((prev) => ({ ...prev, open: false }));
		}
	}, []);

	// Submit modal
	const handleModalSubmit = useCallback(
		(formData) => {
			const { type, action, data } = modalState;

			if (type === "Base") {
				if (action === "Create") {
					setBaseClock(formData);
					setLocalStorage("Base", formData);
				} else if (action === "Update") {
					setBaseClock((prev) => {
						const newData = { ...prev, ...formData };

						// cleanup after merge
						if (!["GMT", "UTC"].includes(newData.timeZone)) {
							delete newData.coOrdinate;
						}
						setLocalStorage("Base", newData);

						return newData;
					});
				}
			}

			if (type === "Other") {
				if (action === "Create") {
					setClocks((prev) => {
						const newClock = {
							_id: Math.random().toString(36).substr(2, 9), // random string id
							...formData,
						};

						const newData = [...prev, newClock];
						setLocalStorage("Others", newData);

						return newData;
					});
				} else if (action === "Update") {
					setClocks((prev) => {
						const newClocks = prev.map((clock) => {
							const newClock =
								clock._id === data._id ? { ...clock, ...formData } : { ...clock };

							// cleanup after merge
							if (!["GMT", "UTC"].includes(newClock.timeZone)) {
								delete newClock.coOrdinate;
							}

							return newClock;
						});

						setLocalStorage("Others", newClocks);
						return newClocks;
					});
				}
			}

			setModalState((prev) => ({
				...prev,
				open: false,
				data: { ...prev.data, ...formData },
			}));
		},
		[modalState]
	);

	// 🔥 Triggers
	const handleUpdateBaseClock = (data) => {
		setModalState({
			open: true,
			type: "Base",
			action: "Update",
			data,
		});
	};

	const handleUpdateOtherClock = (data) => {
		setModalState({
			open: true,
			type: "Other",
			action: "Update",
			data,
		});
	};

	const handleCreateOtherClock = () => {
		setModalState({
			open: true,
			type: "Other",
			action: "Create",
			data: null,
		});
	};

	const handleDeleteOtherClock = (id) => {
		setDeleteState({
			open: true,
			_id: id,
		});
	};

	// delete submit
	const handleDeleteSubmit = (id) => {
		setClocks((prev) => {
			const newClocks = prev.filter((clock) => clock._id !== id);
			setLocalStorage("Others", newClocks);

			return newClocks;
		});

		setDeleteState({
			open: false,
			_id: null,
		});
	};

	const handleDeleteClose = () => {
		setDeleteState({
			open: false,
			_id: null,
		});
	};

	return (
		<Box
			sx={(theme) => ({
				display: "flex",
				flexDirection: "column",
				gap: theme.spacing(48),
				py: theme.spacing(48),
				alignItems: "center",
				justifyContent: "space-between",
			})}
		>
			{/* Base Clock */}
			<ClockCard
				type="Base"
				variant="Large"
				data={baseClock}
				onUpdate={() => handleUpdateBaseClock(baseClock)}
			/>

			{/* Other Clocks */}
			<Box
				sx={(theme) => ({
					width: "100%",
					backgroundColor: theme.palette.brand.neutral[100],
					boxShadow: theme.brand.shadows.medium,
					py: theme.spacing(32),
					px: theme.spacing(16),
					display: "flex",
					flexDirection: "column",
					gap: theme.spacing(40),

					[theme.breakpoints.up("sm")]: {
						py: theme.spacing(64),
						px: theme.spacing(48),
						gap: theme.spacing(40),
					},
				})}
			>
				<Typography variant="h2" color="brand.gray.800">
					Other Clocks
				</Typography>
				<Grid
					container
					spacing={{
						lg: 52,
						md: 40,
						sm: 32,
						xs: 24,
					}}
				>
					{clocks.map((clock) => (
						<Grid key={clock._id} size={{ xs: 12, md: 6 }}>
							<ClockCard
								type="Other"
								variant="Small"
								data={clock}
								onUpdate={handleUpdateOtherClock}
								onDelete={handleDeleteOtherClock}
							/>
						</Grid>
					))}

					<Grid size={{ xs: 12, md: 6 }}>
						<CreateCard type="Clock" onCreate={handleCreateOtherClock} />
					</Grid>
				</Grid>
			</Box>

			{/* Modal */}
			<ClockModal
				type={modalState.type}
				action={modalState.action}
				data={modalState.data}
				open={modalState.open}
				handleClose={handleModalClose}
				handleSubmit={handleModalSubmit}
			/>
			<DeleteDialog
				type="Clock"
				open={deleteState.open}
				id={deleteState._id}
				handleClose={handleDeleteClose}
				handleDeletSubmit={handleDeleteSubmit}
			/>
		</Box>
	);
};

export default Clocks;
