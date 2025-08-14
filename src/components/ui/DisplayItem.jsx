import React from "react";
import { Box, Typography, styled } from "@mui/material";

const StyledDisplayContainer = styled(Box)(({ theme, type, variant }) => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	gap: theme.spacing(4),

	[theme.breakpoints.up("sm")]: {
		gap: theme.spacing(12),
		width: "80%",
		flexDirection: "row",
		alignItems: type === "desc" ? "start" : "center",
	},

	[theme.breakpoints.up("md")]: {
		width: variant === "Large" ? "50%" : "100%",
	},

	[theme.breakpoints.up("lg")]: {
		width: variant === "Large" ? "45%" : "90%",
	},
}));

const StyledLabel = styled(Typography)(({ theme, variant }) => ({
	...theme.typography["h5"],
	width: "100%",
	color: theme.palette.brand.gray[700],

	[theme.breakpoints.up("sm")]: {
		width: "40%",
	},
	[theme.breakpoints.up("md")]: {
		width: "55%",
	},
	[theme.breakpoints.up("lg")]: {
		width: variant === "Large" ? "25%" : "35%",
	},
}));

const StyledColon = styled(Typography)(({ theme }) => ({
	...theme.typography["h4"],
	color: theme.palette.brand.gray[700],
	width: "2%",
	display: "none",

	[theme.breakpoints.up("sm")]: {
		display: "block",
	},
}));

const StyledValue = styled(Typography)(({ type, theme }) => ({
	...theme.typography["bodyLarge"],
	outline: "none",
	color: theme.palette.brand.gray[800],

	transition: "all ease-in 200ms",

	[theme.breakpoints.up("sm")]: {
		flex: 1,
		paddingRight: theme.spacing(12),
		paddingLeft: theme.spacing(12),
	},
}));

const DisplayItem = ({ label, value, type = "normal", variant = "Large" }) => {
	return (
		<StyledDisplayContainer variant={variant} type={type}>
			<StyledLabel>{label}</StyledLabel>
			<StyledColon>:</StyledColon>

			<StyledValue type={type}>{value}</StyledValue>
		</StyledDisplayContainer>
	);
};

export default DisplayItem;
