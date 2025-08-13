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
				TrackZone can be a metaphor for an athlete's mental state. It's the space of focus,
				determination, and commitment that athletes enter when they are engaged in training
				or competition. It's where they block out distractions and concentrate on their
				performance. <br /> <br />
				In its most literal sense, TrackZone is the actual physical area of the track where
				runners compete. It includes the lanes, the starting line, and the finish line, all
				part of the designated running surface.
			</Typography>
		</Box>
	);
};

export default Goals;
