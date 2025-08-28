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
				In athletics, the word TrackZone refers to the designated lanes where athletes train and compete—the starting line, the finish line, and everything in between. It is the physical ground where races unfold, where dedication meets discipline, and where every stride counts. <br /> <br />But TrackZone is also more than a location. Metaphorically, it represents the focused state of mind that athletes enter when striving for their best. It is the mental space where determination, concentration, and resilience align—reminding us that success is built both on the track and within ourselves.
			</Typography>
		</Box >
	);
};

export default Inspirations;
