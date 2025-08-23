import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import DisplayItem from "../../../components/ui/DisplayItem";
import { format } from "date-fns";

const EventCard = ({ event, onUpdate, onDelete }) => {
	const theme = useTheme();

	const [title, setTitle] = useState("");
	const [time, setTime] = useState(null);
	const [description, setDescription] = useState("");
	const [timeDifference, setTimeDifference] = useState(null);
	const [timeLeft, setTimeLeft] = useState(null);

	useEffect(() => {
		setTime(event?.time ? format(event.time, "HH:mm:ss") : null);
		setTitle(event?.title ?? "");
		setDescription(event?.description);
	}, [event]);

	return (
		<Box
			sx={{
				width: "100%",
				height: "auto",
				boxShadow: theme.brand.shadows.medium,
				py: theme.spacing(24),
				px: theme.spacing(24),
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-between",
				gap: theme.spacing(24),

				[theme.breakpoints.up("sm")]: {
					gap: theme.spacing(48),
					px: theme.spacing(24),
					boxShadow: theme.brand.shadows.high,
				},
			}}
		>
			<Typography variant="h2" color="brand.gray.800">
				{title}
			</Typography>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: {
						xs: theme.spacing(12),
						sm: theme.spacing(24),
					},
				}}
			>
				<DisplayItem variant="Small" label="Time" value={time} />
				<DisplayItem variant="Small" label="Difference(Base)" value={timeDifference} />
				<DisplayItem variant="Small" label="Time Left" value={timeLeft} />
				<DisplayItem variant="Small" label="Description" type="desc" value={description} />
			</Box>

			<Box
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "end",
					gap: theme.spacing(16),
				}}
			>
				<Button color="brandError" variant="contained" onClick={() => onDelete(event._id)}>
					Delete
				</Button>
				<Button color="brandPrimary" variant="contained" onClick={() => onUpdate(event)}>
					Edit
				</Button>
			</Box>
		</Box>
	);
};

export default EventCard;
