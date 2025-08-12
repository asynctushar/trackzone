import React from "react";
import { Box, Button } from "@mui/material";
import Carousel from "./Carousel";
import Feature1 from "../../../assets/images/Feature1.png";

const items = [
	{ name: "Feature 1", cover: Feature1 },
	{ name: "Feature 2", cover: Feature1 },
	{ name: "Feature 3", cover: Feature1 },
	{ name: "Feature 4", cover: Feature1 },
];

const Hero = () => {
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
				width: "100%",

				[theme.breakpoints.up("sm")]: {
					my: theme.spacing(48),
					height: theme.spacing(540),
					pb: theme.spacing(0),
				},
			})}
		>
			<Carousel items={items} />
			<Button variant="contained" color="brandPrimary">
				Get Stated
			</Button>
		</Box>
	);
};

export default Hero;
