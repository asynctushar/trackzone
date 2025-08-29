import React, { useCallback } from "react";
import { Box, Button } from "@mui/material";
import Carousel from "./Carousel";
import Feature1 from "../../../assets/images/feature1.webp";
import Feature2 from "../../../assets/images/feature2.webp";
import Feature3 from "../../../assets/images/feature3.webp";
import Feature4 from "../../../assets/images/feature4.webp";
import { useNavigate } from "react-router";

const items = [
	{
		name: "Multiple Time Zone Clocks",
		cover: Feature1,
	},
	{
		name: "Event Scheduling",
		cover: Feature2,
	},
	{
		name: "Time Difference Calculator",
		cover: Feature3
	},
	{
		name: "Clean & Responsive Design",
		cover: Feature4
	},
];


const Hero = () => {
	const navigate = useNavigate();

	const clickHandler = useCallback(() => {
		navigate("/clocks");
	});

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
			<Button variant="contained" color="brandPrimary" onClick={clickHandler}>
				Get Stated
			</Button>
		</Box>
	);
};

export default Hero;
