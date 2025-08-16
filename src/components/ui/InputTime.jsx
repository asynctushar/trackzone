import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const StyledInputTimeContainer = styled(Box)(({ theme }) => ({
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
	textAlign: "left",
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

const StyledInputTime = styled(TimeField, {
	shouldForwardProp: (prop) => prop !== "hasError",
})(({ theme, hasError }) => ({
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
	width: "100%",
	textAlign: "left",
	display: "flex",
	alignItems: "center",
    textTransform : "uppercase",

	"&:hover": {
		borderColor: hasError ? theme.palette.brand.error[500] : theme.palette.brand.gray[500],
	},

	"&.Mui-focused": {
		borderColor: hasError ? theme.palette.brand.error[500] : theme.palette.brand.gray[600],
	},

	[theme.breakpoints.up("sm")]: {
		width: theme.spacing(250),
	},

	"& .MuiPickersInputBase-root": {
		flex: 1, 
		height: "100%",
		"& fieldset": {
			border: "none !important",
		},
		"&:hover fieldset": {
			border: "none !important",
		},
		"&.Mui-focused fieldset": {
			border: "none !important",
		},

		// ✅ Align the input text & icons
		"& input": {
			height: "100%",
			padding: 0,
			margin: 0,
			display: "flex",
			alignItems: "center",
		},
		"& .MuiInputAdornment-root": {
			margin: 0,
			height: "100%",
			display: "flex",
			alignItems: "center",
		},
	},
}));

const StyledErrorText = styled(Typography)(({ theme }) => ({
	minHeight: theme.spacing(14),
	lineHeight: theme.spacing(14),
	marginTop: theme.spacing(4),
	p: 0,
}));

const InputTime = ({
	onChange,
	onFocus,
	onBlur,
	name,
	label,
	value = "",
	error = "",
	touched = false,
}) => {
	const hasError = touched && error;

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<StyledInputTimeContainer>
					<StyledLabel hasError={hasError}>{label}</StyledLabel>
					<StyledColon hasError={hasError}>:</StyledColon>

					<StyledInputTime
						name={name}
						value={value}
						format="HH:mm:ss"
						onChange={onChange}
						onFocus={onFocus}
						onBlur={onBlur}
						hasError={hasError}
						error={hasError}
						variant="outlined"
						helperText=""
					/>
				</StyledInputTimeContainer>
				<StyledErrorText variant="caption" color="brand.error.500">
					{error}
				</StyledErrorText>
			</Box>
		</LocalizationProvider>
	);
};

export default InputTime;
