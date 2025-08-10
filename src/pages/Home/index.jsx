import React from "react";
import { Box, Button } from "@mui/material";
import Carousel from "./components/Carousel";

const Home = () => {
	return (
		<Box
			sx={(theme) => ({
				backgroundColor: "brand.neutral.100",
				boxShadow: theme.brand.shadows.medium,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: theme.spacing(24),
				my: theme.spacing(24),
				pb: theme.spacing(24),

				[theme.breakpoints.up("sm")]: {
					my: theme.spacing(48),
					height: theme.spacing(540),
					pb: theme.spacing(0),
				},
			})}
		>
			<Carousel />
			<Button variant="contained" color="brandPrimary">
				Get Stated
			</Button>
		</Box>
	);
};

export default Home;
