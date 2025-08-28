import React from "react";
import { Box, Typography } from "@mui/material";

const Goals = () => {
	return (
		<Box
			sx={(theme) => ({
				width: "100%",
				height: {
					xs: "auto",
					sm: "auto",
					lg: theme.spacing(300),
				},
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				px: {
					xs: theme.spacing(16),
					sm: theme.spacing(32),
					lg: theme.spacing(48),
				},
				py: {
					xs: theme.spacing(24),
					sm: theme.spacing(28),
					lg: 0,
				},
				gap: {
					xs: theme.spacing(16),
					sm: theme.spacing(24),
					lg: theme.spacing(32),
				},
				textAlign: {
					xs: "left",
					sm: "left",
					lg: "justify",
				},
			})}
		>
			<Typography
				variant="h2"
				color="brand.gray.800"
				sx={{

					textAlign: {
						xs: "center",
						sm: "center",
						lg: "left",
					},
				}}
			>
				Our Goals
			</Typography>
			<Typography
				variant="bodyLarge"
				color="brand.gray.900"

			>
				At its heart, TrackZone aims to capture that same spirit of focus and determination, translating it into a digital experience. Just as athletes eliminate distractions to perform at their peak, our goal is to give users a simple yet powerful way to track time zones, schedule events, and stay organized—no matter where in the world they are.
				<br /> <br />We believe productivity is a race against time, and TrackZone is the tool that helps you stay in control of it. By bridging the metaphor of the track with the practical needs of time management, our goal is to create a space where clarity, efficiency, and commitment come together—helping users focus on what truly matters.
			</Typography>
		</Box>
	);
};

export default Goals;
