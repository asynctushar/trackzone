import React from "react";
import { Box, Typography, styled } from "@mui/material";

const StyledDisplayContainer = styled(Box)(({ theme, type }) => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	gap: theme.spacing(4),

	[theme.breakpoints.up("sm")]: {
		gap: theme.spacing(12),
		flexDirection: "row",
		width: "70%",
		alignItems: type === "desc" ? "start" : "center",
	},

	[theme.breakpoints.up("md")]: {
		width: "40%",
	},
}));

const StyledLabel = styled(Typography)(({ theme }) => ({
	...theme.typography["h5"],
	maxWidth: "100%",
	minWidth: "25%",
	color: theme.palette.brand.gray[700],

	[theme.breakpoints.up("sm")]: {
		maxWidth: "40%",
		minWidth: "25%",
	},
}));

const StyledColon = styled(Typography)(({ theme }) => ({
	...theme.typography["h4"],
	color: theme.palette.brand.gray[700],
	width: "5%",
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

const DisplayItem = ({ label, value, type = "normal" }) => {
	return (
		<StyledDisplayContainer type={type}>
			<StyledLabel>{label}</StyledLabel>
			<StyledColon>:</StyledColon>

			<StyledValue type={type}>{value}</StyledValue>
		</StyledDisplayContainer>
	);
};

export default DisplayItem;
