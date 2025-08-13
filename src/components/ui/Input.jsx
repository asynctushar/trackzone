import React from "react";
import { Box, Typography, styled } from "@mui/material";

const StyledInputContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	gap: theme.spacing(12),

	[theme.breakpoints.up("sm")]: {
		flexDirection: "row",
		alignItems: "center",
	},
}));

const StyledLabel = styled(Typography)(({ theme, hasError }) => ({
	...theme.typography["h5"],
	maxWidth: "40%",
	minWidth: "25%",
	color: hasError ? theme.palette.brand.error[500] : theme.palette.brand.gray[700],
}));

const StyledColon = styled(Typography)(({ theme, hasError }) => ({
	...theme.typography["h4"],
	color: hasError ? theme.palette.brand.error[500] : theme.palette.brand.gray[700],
	width: "5%",
	display: "none",

	[theme.breakpoints.up("sm")]: {
		display: "block",
	},
}));

const StyledInput = styled("input")(({ theme, hasError }) => ({
	outline: "none",
	color: theme.palette.brand.gray[800],
	border: `1px solid ${
		hasError ? theme.palette.brand.error[500] : theme.palette.brand.gray[400]
	}`,
	height: theme.spacing(40),
	paddingRight: theme.spacing(12),
	paddingLeft: theme.spacing(12),
	borderRadius: theme.spacing(4),
	transition: "all ease-in 200ms",

	"&::placeholder": {
		...theme.typography["bodySmall"],
		borderColor: hasError ? theme.palette.brand.error[400] : theme.palette.brand.gray[500],
		color: hasError ? theme.palette.brand.error[400] : theme.palette.brand.gray[600],
		opacity: 1,
	},

	"&:focus": {
		outline: "none",
	},
	"&:hover": {
		borderColor: hasError ? theme.palette.brand.error[500] : theme.palette.brand.gray[700],
		outline: "none",
	},

	[theme.breakpoints.up("sm")]: {
		flex: 1,
	},
}));

const StyledErrorText = styled(Typography)(({ theme }) => ({
	minHeight: theme.spacing(14),
	lineHeight: theme.spacing(14),
	marginTop: theme.spacing(4),
	p: 0,
}));

const Input = ({
	onChange,
	onFocus,
	onBlur,
	name,
	label,
	type = "text",
	placeholder,
	value = "",
	error = "",
	touched = false,
}) => {
	const hasError = touched && error;

	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<StyledInputContainer>
				<StyledLabel hasError={hasError}>{label}</StyledLabel>
				<StyledColon hasError={hasError}>:</StyledColon>

				<StyledInput
					name={name}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					hasError={hasError}
				/>
			</StyledInputContainer>
			<StyledErrorText variant="caption" color="brand.error.500">
				{" "}
				{error}
			</StyledErrorText>
		</Box>
	);
};

export default Input;
