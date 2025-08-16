import { Box, Typography, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import ClockCard from "../../components/shared/ClockCard";
import EventCard from "./components/EventCard";
import CreateCard from "../../components/shared/CreateCard";
import EventModal from "../../components/shared/EventModal";
import DeleteDialog from "../../components/shared/DeleteDialog";

const Events = () => {
	const [isModalOpen, setIsModalOpen] = useState(true);
	const [isDeleteOpen, setIsDeleteOpen] = useState(true);

	const handleDeleteClose = useCallback(() => {
		setIsDeleteOpen(false);
		console.log("Modal Closed");
	}, []);

	const handleModalClose = useCallback(() => {
		setIsModalOpen(false);
		console.log("Modal Closed");
	}, []);

	const handleDeletSubmit = useCallback(
		(event) => {
			setIsDeleteOpen(false);
		},
		[isModalOpen]
	);
	const handleModalSubmit = useCallback(
		(event) => {
			event.preventDefault();

			console.log("Modal form submitted");
			setIsModalOpen(false);
		},
		[isModalOpen]
	);

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
			<ClockCard type="Other" variant="Large" />
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
					<Grid
						size={{
							xs: 12,
							md: 6,
						}}
					>
						<EventCard />
					</Grid>
					<Grid
						size={{
							xs: 12,
							md: 6,
						}}
					>
						<EventCard />
					</Grid>
					<Grid
						size={{
							xs: 12,
							md: 6,
						}}
					>
						<CreateCard type="Event" />
					</Grid>
				</Grid>
			</Box>
			<EventModal
				action="Create"
				handleClose={handleModalClose}
				open={isModalOpen}
				handleSubmit={handleModalSubmit}
			/>

			<DeleteDialog
				type="Event"
				handleClose={handleDeleteClose}
				open={isDeleteOpen}
				handleDeletSubmit={handleDeletSubmit}
			/>
		</Box>
	);
};

export default Events;
