import React from "react";
import Hero from "./components/Hero";
import { Box } from "@mui/material";
import Testimonials from "./components/Testimonials";

const Home = () => {
	return (
		<Box
			sx={(theme) => ({
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: theme.spacing(24),
				pb: theme.spacing(48),

				[theme.breakpoints.up("md")]: {
					pb: theme.spacing(96),
				},
			})}
		>
			<Hero />
			<Testimonials />
		</Box>
	);
};

export default Home;
