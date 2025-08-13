import { Box, Typography } from "@mui/material";
import React from "react";
import Form from "./comonents/Form";

const ContactUs = () => {
	return (
		<Box
			sx={(theme) => ({
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				borderRadius: theme.brand.radius.small,
				backgroundColor: "brand.neutral.100",
				boxShadow: theme.brand.shadows.medium,
				gap: {
					md: theme.spacing(48),
					xs: theme.spacing(24),
				},
				my: {
					xs: theme.spacing(32),
					sm: theme.spacing(48),
					lg: theme.spacing(64),
				},
				width: "100%",
				height: {
					md: theme.spacing(585),
					xs: theme.spacing(620)
				},
			})}
		>
			<Typography variant="h2" color="brand.gray.800">
				Get In Touch
			</Typography>
			<Form />
		</Box>
	);
};

export default ContactUs;
