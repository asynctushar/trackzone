import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import HeroImage from "../../../assets/images/HeroImage.png";

const Hero = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				width: "100%",
				height: {
					xs: "auto",
					lg: theme.spacing(380), 
				},
				display: "flex",
				flexDirection: {
					xs: "column", 
					sm: "column",
					lg: "row", 
				},
				alignItems: "center",
				mb: {
					xs: theme.spacing(20),
					sm: theme.spacing(30), 
					lg: theme.spacing(40),
				},
			}}
		>
			<Box
				sx={{
					width: {
						xs: "100%", 
						sm: "100%", 
						lg: "50%", 
					},
					height: {
						xs: "auto", 
						sm: "auto", 
						lg: "100%", 
					},
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					gap: {
						xs: theme.spacing(12), 
						sm: theme.spacing(16), 
						lg: theme.spacing(20),
					},
					px: {
						xs: theme.spacing(16), 
						sm: theme.spacing(32), 
						lg: theme.spacing(48), 
					},
					py: {
						xs: theme.spacing(20), 
						sm: theme.spacing(24), 
						lg: 0, 
					},
					textAlign: {
						xs: "center", 
						sm: "center",
						lg: "justify", 
					},
				}}
			>
				<Typography
					variant="h2"
					color="brand.gray.800"
					
				>
					Trackzone Web Application
				</Typography>
				<Typography
					variant="bodyLarge"
					color="brand.gray.900"
				
				>
					TrackZone can be a metaphor for an athlete's mental state. It's the space of
					focus, determination, and commitment that athletes enter when they are engaged
					in training or competition.
				</Typography>
			</Box>
			<Box
				component="img"
				src={HeroImage}
				alt="Hero-image"
				sx={{
					width: {
						xs: "100%", 
						sm: "80%",
						lg: "50%", 
					},
					height: {
						xs: theme.spacing(200), 
						sm: theme.spacing(240), 
						lg: "100%", 
					},
					objectFit: "cover",
					mt: {
						xs: theme.spacing(16), 
						sm: theme.spacing(20), 
						lg: 0, 
					},
				}}
			/>
		</Box>
	);
};

export default Hero;
