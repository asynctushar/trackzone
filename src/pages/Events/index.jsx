import { Box, Typography, Grid } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";
import ClockCard from "../../components/shared/ClockCard";
import EventCard from "./components/EventCard";
import CreateCard from "../../components/shared/CreateCard";
import EventModal from "../../components/shared/EventModal";
import DeleteDialog from "../../components/shared/DeleteDialog";
import { useNavigate, useParams } from "react-router";
import NotFound from "../NotFound";
import ClockModal from "../../components/shared/ClockModal";

const Events = () => {
	const [baseClock, setBaseClock] = useState(null);
	const [clocks, setClocks] = useState([]);
	const [allEvents, setAllEvents] = useState([]);
	const [clock, setClock] = useState(null);
	const [events, setEvents] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { clockId } = useParams();
	const navigate = useNavigate();

	const [deleteState, setDeleteState] = useState({
		open: false,
		type: null, // Clock | Event
		_id: null,
	});

	const [modalState, setModalState] = useState({
		open: false,
		type: null, // "Clock" | "Event"
		action: null, // "Create" | "Update"
		data: null, // actual clock or Event data
	});

	// Load baseClock and other clocks initially
	useEffect(() => {
		setIsLoading(true);
		const data = getLocalStorage("Base");
		setBaseClock(data);

		const othersClocks = getLocalStorage("Others");
		if (othersClocks !== null) {
			setClocks(othersClocks);
		}

		const allEvents = getLocalStorage("Events");
		if (allEvents !== null) {
			setAllEvents(allEvents);
		}
	}, []);

	useEffect(() => {
		setIsLoading(true);
		const currentClock = clocks.find((clock) => clock._id === clockId);

		if (currentClock) {
			setClock(currentClock);
		}

		setIsLoading(false);
	}, [clockId, clocks]);

	useEffect(() => {
		if (clock) {
			const currentEvents = allEvents.filter((event) => event.clockId === clock._id);

			if (currentEvents !== null) {
				setEvents(currentEvents);
			}
		}
	}, [clock, allEvents, clockId]);

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

			if (type === "Clock") {
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

				setClock((prev) => {
					const newData = { ...prev, ...formData };

					// cleanup after merge
					if (!["GMT", "UTC"].includes(newData.timeZone)) {
						delete newData.coOrdinate;
					}

					return newData;
				});
			}

			if (type === "Event") {
				if (action === "Create") {
					const newEvent = {
						_id: Math.random().toString(36).substr(2, 9), // random string id
						clockId: clock._id,
						...formData,
					};

					setAllEvents((prev) => {
						const newData = [...prev, newEvent];
						setLocalStorage("Events", newData);

						return newData;
					});

					setEvents((prev) => [...prev, newEvent]);
				} else if (action === "Update") {
					setAllEvents((prev) => {
						const newEvents = prev.map((event) => {
							const newEvent =
								event._id === data._id ? { ...event, ...formData } : { ...event };

							return newEvent;
						});

						setLocalStorage("Events", newEvents);
						return newEvents;
					});

					setEvents((prev) => {
						const newEvents = prev.map((event) => {
							const newEvent =
								event._id === data._id ? { ...event, ...formData } : { ...event };

							return newEvent;
						});

						return newEvents;
					});
				}
			}

			setModalState((prev) => ({
				...prev,
				open: false,
				data: { ...prev.data, ...formData },
			}));
		},
		[modalState, clock]
	);

	// 🔥 Triggers Clock
	const handleUpdateClock = (data) => {
		setModalState({
			open: true,
			type: "Clock",
			action: "Update",
			data,
		});
	};

	const handleDeleteClock = (id) => {
		setDeleteState({
			open: true,
			_id: id,
			type: "Clock",
		});
	};

	// 🔥 Triggers Event
	const handleUpdateEvent = (data) => {
		setModalState({
			open: true,
			type: "Event",
			action: "Update",
			data,
		});
	};

	const handleDeleteEvent = (id) => {
		setDeleteState({
			open: true,
			_id: id,
			type: "Event",
		});
	};

	const handleCreateEvent = () => {
		setModalState({
			open: true,
			type: "Event",
			action: "Create",
			data: null,
		});
	};

	// delete submit
	const handleDeleteSubmit = (id) => {
		if (deleteState.type === "Clock") {
			const newClocks = clocks.filter((clock) => clock._id !== id);
			setLocalStorage("Others", newClocks);

			// delete all Events of the Clock
			const newAllEvents = allEvents.filter((event) => event.clockId !== id);
			setLocalStorage("Events", newAllEvents);

			navigate(-1);
		} else {
			setAllEvents((prev) => {
				const newAllEvents = prev.filter((event) => event._id !== id);
				setLocalStorage("Events", newAllEvents);

				return newAllEvents;
			});

			setEvents((prev) => {
				const newEvents = prev.filter((event) => event._id !== id);

				return newEvents;
			});
		}

		setDeleteState({
			type: null,
			open: false,
			_id: null,
		});
	};

	const handleDeleteClose = () => {
		setDeleteState({
			open: false,
			_id: null,
			type: null,
		});
	};

	return (
		<>
			{" "}
			{isLoading ? (
				<div>Loading...</div>
			) : !clock ? (
				<NotFound />
			) : (
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
					<ClockCard
						type="Other"
						variant="Large"
						data={clock}
						onUpdate={handleUpdateClock}
						onDelete={handleDeleteClock}
					/>
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
							Events
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
							{events.map((event) => (
								<Grid
									key={event._id}
									size={{
										xs: 12,
										md: 6,
									}}
								>
									<EventCard
										event={event}
										onDelete={handleDeleteEvent}
										onUpdate={handleUpdateEvent}
									/>
								</Grid>
							))}
							<Grid
								size={{
									xs: 12,
									md: 6,
								}}
							>
								<CreateCard type="Event" onCreate={handleCreateEvent} />
							</Grid>
						</Grid>
					</Box>
					{modalState.type === "Clock" ? (
						<ClockModal
							type="Other"
							action={modalState.action}
							handleClose={handleModalClose}
							open={modalState.open}
							handleSubmit={handleModalSubmit}
							data={modalState.data}
						/>
					) : (
						<EventModal
							action={modalState.action}
							handleClose={handleModalClose}
							open={modalState.open}
							handleSubmit={handleModalSubmit}
							data={modalState.data}
							clock={clock}
						/>
					)}

					<DeleteDialog
						type={deleteState.type}
						handleClose={handleDeleteClose}
						open={deleteState.open}
						handleDeletSubmit={handleDeleteSubmit}
						id={deleteState._id}
					/>
				</Box>
			)}
		</>
	);
};

export default Events;
