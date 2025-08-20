import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import ClockIcon from "../../assets/images/ClockIcon.png";
import EventIcon from "../../assets/images/EventIcon.png";

const CreateCard = ({ type = "Clock", onCreate }) => {
	const theme = useTheme();

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
				justifyContent: "center",
				gap: theme.spacing(48),

				[theme.breakpoints.up("sm")]: {
					height: theme.spacing(450),
					gap: theme.spacing(64),
					py: theme.spacing(118),
					px: theme.spacing(100),
					boxShadow: theme.brand.shadows.high,
				},

				[theme.breakpoints.up("md")]: {
					height: theme.spacing(480),
				},
			}}
		>
			<Box
				component="img"
				src={type === "Clock" ? ClockIcon : EventIcon}
				alt="create-icon"
				sx={{
					width: theme.spacing(150),
					height: theme.spacing(150),
					objectFit: "cover",
				}}
			/>
			<Button variant="contained" color="brandPrimary" onClick={onCreate}>
				{type === "Clock" ? "Add Clock" : "Add Event"}
			</Button>
		</Box>
	);
};

export default CreateCard;
