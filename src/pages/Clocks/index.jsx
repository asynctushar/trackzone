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
		id: null,
	});
	const [modalState, setModalState] = useState({
		open: false,
		type: null, // "Base" | "Other"
		action: null, // "Create" | "Update"
		data: null, // actual clock data
	});

	// Load baseClock initially
	useEffect(() => {
		const data = getLocalStorage("Base");
		setBaseClock(data);

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
	const handleModalClose = useCallback(() => {
		setModalState((prev) => ({ ...prev, open: false }));
	}, []);

	// Submit modal
	const handleModalSubmit = useCallback(
		(formData) => {
			const { type, action, data } = modalState;

			if (type === "Base") {
				if (action === "Create") {
					setBaseClock(formData);
					setLocalStorage("base", formData);
				} else if (action === "Update") {
					setBaseClock(formData);
					setLocalStorage("base", formData);
				}
			}

			if (type === "Other") {
				if (action === "Create") {
					setClocks((prev) => [...prev, { id: Date.now(), ...formData }]);
				} else if (action === "Update") {
					setClocks((prev) =>
						prev.map((clock) =>
							clock.id === data.id ? { ...clock, ...formData } : clock
						)
					);
				}
			}

			setModalState((prev) => ({ ...prev, open: false }));
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
			id,
		});
	};

	const handleDeleteSubmit = (id) => {
		setClocks((prev) => prev.filter((clock) => clock._id !== id));
		setDeleteState({
			open: false,
			id: null,
		});
	};

	const handleDeleteClose = () => {
		setDeleteState({
			open: false,
			id: null,
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
						<Grid key={clock.id} size={{ xs: 12, md: 6 }}>
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
				clockId={deleteState.id}
				handleClose={handleDeleteClose}
				handleDeletSubmit={handleDeleteSubmit}
			/>
		</Box>
	);
};

export default Clocks;
