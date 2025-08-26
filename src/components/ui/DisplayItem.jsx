import React from "react";
import { Box, Typography, styled } from "@mui/material";

const StyledDisplayContainer = styled(Box)(({ theme, type, variant }) => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	gap: theme.spacing(4),
	marginBottom: variant === "Modal" ? theme.spacing(14) : 0,

	[theme.breakpoints.up("sm")]: {
		gap: theme.spacing(12),
		width: variant === "Modal" ? "100%" : "80%",
		flexDirection: "row",
		alignItems: type === "desc" ? "start" : "center",
	},

	[theme.breakpoints.up("md")]: {
		width: variant === "Large" ? "50%" : "100%",
	},

	[theme.breakpoints.up("lg")]: {
		width: variant === "Large" ? "45%" : variant === "Modal" ? "100%" : "90%",
	},
}));

const StyledLabel = styled(Typography)(({ theme, variant }) => ({
	...theme.typography["h5"],
	textAlign: "left",
	...(variant === "Modal"
		? {
			maxWidth: "40%",
			minWidth: "25%",
		}
		: {
			width: "100%",
			color: theme.palette.brand.gray[700],
			maxWidth: "40%",
			minWidth: "25%",
			[theme.breakpoints.up("sm")]: {
				width: "40%",
			},
			[theme.breakpoints.up("md")]: {
				width: "55%",
			},
			[theme.breakpoints.up("lg")]: {
				width: variant === "Large" ? "25%" : "35%",
			},
		}),
}));

const StyledColon = styled(Typography)(({ theme, variant }) => ({
	...theme.typography["h4"],
	color: theme.palette.brand.gray[700],
	width: variant === "Modal" ? "5%" : "2%",
	display: "none",

	[theme.breakpoints.up("sm")]: {
		display: "block",
	},
}));

const StyledValue = styled(Typography)(({ type, theme }) => ({
	...theme.typography["bodyLarge"],
	outline: "none",
	color: theme.palette.brand.gray[800],
	textAlign: "left",

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
			<StyledLabel variant={variant}>{label}</StyledLabel>
			<StyledColon variant={variant}>:</StyledColon>

			<StyledValue type={type}>{value}</StyledValue>
		</StyledDisplayContainer>
	);
};

export default DisplayItem;
