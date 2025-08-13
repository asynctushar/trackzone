import React from "react";
import { Box, Typography } from "@mui/material";

const Inspirations = () => {
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
				Inspiration
			</Typography>
			<Typography variant="bodyLarge" color="brand.gray.900">
				TrackZone, in the context of a running or athletic environment, generally refers to
				the designated area or lane where athletes compete or train, often on a track. It's
				the space where races, sprints, and other track and field events take place.
				Metaphorically, TrackZone can also represent a zone of focus and determination for
				athletes, the space where they concentrate on their performance and push their
				limits. <br /> <br />
				In its most literal sense, TrackZone is the actual physical area of the track where
				runners compete. It includes the lanes, the starting line, and the finish line, all
				part of the designated running surface.
			</Typography>
		</Box>
	);
};

export default Inspirations;
