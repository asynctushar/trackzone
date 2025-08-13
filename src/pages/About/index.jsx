import { Box } from "@mui/material";
import React from "react";
import Hero from "./components/Hero";
import Inspirations from "./components/Inspirations";
import Goals from "./components/Goals";

const About = () => {
	return (
		<Box
			sx={(theme) => ({
				display: "flex",
				flexDirection: "column",
				my: {
					xs: theme.spacing(20), 
					sm: theme.spacing(30), 
					lg: theme.spacing(40), 
				},
				boxShadow: theme.brand.shadows.medium,
			})}
		>
			<Hero />
			<Inspirations />
			<Goals />
		</Box>
	);
};

export default About;
