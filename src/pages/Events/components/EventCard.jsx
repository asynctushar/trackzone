import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import DisplayItem from "../../../components/ui/DisplayItem";
import { format } from "date-fns";
import { formatTimeDifference, getOtherClockTime, getTimeDifference } from "../../../utils/clock";

const EventCard = ({ event, onUpdate, onDelete, baseClock, clock }) => {
	const theme = useTheme();

	const [title, setTitle] = useState("");
	const [time, setTime] = useState(null);
	const [description, setDescription] = useState("");
	const [timeDifference, setTimeDifference] = useState(null);
	const [timeLeft, setTimeLeft] = useState(null);
	const [eventPast, setEventPast] = useState(false);

	useEffect(() => {
		setTime(event?.time ? format(event.time, "HH:mm:ss") : null);
		setTitle(event?.title ?? "");
		setDescription(event?.description);
	}, [event]);


	useEffect(() => {
		if (event && event.time && baseClock && baseClock.timeDifference !== undefined && clock) {
			const updateTime = () => {
				const clockTime = getOtherClockTime(baseClock, clock);
				if (clockTime) {
					const timeLeft = new Date(event.time) - clockTime;

					if (timeLeft <= 0) {
						setEventPast(true);
					} else {
						setEventPast(false);
						setTimeLeft(formatTimeDifference(timeLeft, false));
					}
				}
			};

			updateTime();
			const interval = setInterval(updateTime, 1000);

			return () => clearInterval(interval);
		}
	}, [event, clock, baseClock]);

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
				transition: "all",
				transitionDuration: "100ms",


				"&:hover": {
					boxShadow: theme.brand.shadows.high,
				},

				[theme.breakpoints.up("sm")]: {
					gap: theme.spacing(48),
					px: theme.spacing(24),
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
				<DisplayItem variant="Small" label="Time Left" value={eventPast ? "Passed" : timeLeft} />
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
				<Button disabled={eventPast} color="brandPrimary" variant="contained" onClick={() => onUpdate(event)}>
					Edit
				</Button>
			</Box>
		</Box>
	);
};

export default EventCard;
