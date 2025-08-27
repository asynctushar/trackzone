import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import DisplayItem from "../ui/DisplayItem";
import { useCallback } from "react";
import { addMilliseconds, format } from "date-fns";
import { useNavigate } from "react-router";
import { formatTimeDifference, getOffsetLabel, getOtherClockTime, getTimeDifference } from "../../utils/clock";

const ClockCard = ({ type, variant, onUpdate, data, onDelete, baseClock }) => {
	const theme = useTheme();
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [time, setTime] = useState(null);
	const [timeZone, setTimeZone] = useState("");
	const [coOrdinate, setCoOrdinate] = useState(null);
	const [timeDifference, setTimeDifference] = useState(null);

	useEffect(() => {
		setTitle(data?.title ?? "");
		setTimeZone(data?.timeZone ?? "");
		setCoOrdinate(data?.coOrdinate ?? null);
	}, [data]);


	useEffect(() => {
		if (data && type === "Base" && data.timeDifference !== undefined) {
			const updateTime = () => {
				const baseTime = addMilliseconds(Date.now(), data.timeDifference);
				setTime(format(baseTime, "HH:mm:ss"));
			};

			updateTime();
			const interval = setInterval(updateTime, 1000);

			return () => clearInterval(interval);
		}

		if (data && type === "Other" && baseClock && baseClock.timeDifference !== undefined) {
			const updateTime = () => {
				const time = getOtherClockTime(baseClock, data);
				if (time) setTime(format(time, "HH:mm:ss"));

				const timeDiff = getTimeDifference(baseClock, data);
				if (timeDiff) setTimeDifference(formatTimeDifference(timeDiff));
			};

			updateTime();
			const interval = setInterval(updateTime, 1000);

			return () => clearInterval(interval);
		}
	}, [type, data, baseClock]);


	const onEventsClick = useCallback(() => {
		navigate(`/clocks/${data._id}/events`);
	}, [data]);


	return (
		<Box
			sx={{
				width: "100%",
				height: theme.spacing(420),
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
					height: theme.spacing(450),
					px:
						type === "Other" && variant === "Small"
							? theme.spacing(24)
							: theme.spacing(96),
					boxShadow:
						variant === "Large" ? theme.brand.shadows.medium : theme.brand.shadows.high,
				},

				[theme.breakpoints.up("md")]: {
					height: theme.spacing(480),
				},
			}}
		>
			<Typography variant="h2" color="brand.gray.800">
				{type === "Base" ? "Base Clock" : title}
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
				<DisplayItem variant={variant} label="Time" value={time} />
				<DisplayItem variant={variant} label="Timezone" value={timeZone} />
				{["GMT", "UTC"].includes(timeZone) && (
					<DisplayItem variant={variant} label="Co-ordinate" value={getOffsetLabel(coOrdinate)} />
				)}
				{type === "Other" && (
					<DisplayItem
						variant={variant}
						label="Difference(Base)"
						value={timeDifference}
					/>
				)}
			</Box>
			{type === "Base" ? (
				<Button
					color="brandPrimary"
					variant="contained"
					sx={{
						alignSelf: "flex-end",
					}}
					onClick={() => onUpdate(data)}
				>
					Edit
				</Button>
			) : type === "Other" && variant === "Small" ? (
				<Box
					sx={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						gap: theme.spacing(16),
					}}
				>
					<Button color="brandWarning" variant="contained" onClick={onEventsClick}>
						Events
					</Button>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: theme.spacing(16),
						}}
					>
						<Button
							color="brandError"
							variant="contained"
							onClick={() => onDelete(data._id)}
						>
							Delete
						</Button>
						<Button
							color="brandPrimary"
							variant="contained"
							onClick={() => onUpdate(data)}
						>
							Edit
						</Button>
					</Box>
				</Box>
			) : (
				<Box
					sx={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "end",
						gap: theme.spacing(16),
					}}
				>
					<Button
						color="brandError"
						variant="contained"
						onClick={() => onDelete(data._id)}
					>
						Delete
					</Button>
					<Button color="brandPrimary" variant="contained" onClick={() => onUpdate(data)}>
						Edit
					</Button>
				</Box>
			)}
		</Box>
	);
};

export default ClockCard;
