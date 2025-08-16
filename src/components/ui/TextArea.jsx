import React from "react";
import { Box, Typography, styled } from "@mui/material";

const StyledTextAreaContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	gap: theme.spacing(12),

	[theme.breakpoints.up("sm")]: {
		flexDirection: "row",
		alignItems: "flex-start",
	},
}));

const StyledLabel = styled(Typography)(({ theme, hasError }) => ({
	...theme.typography["h5"],
	maxWidth: "40%",
	minWidth: "25%",
	color: hasError ? theme.palette.brand.error[500] : theme.palette.brand.gray[700],
	textAlign: "left",

	[theme.breakpoints.up("sm")]: {
		paddingTop: theme.spacing(12),
	},
}));

const StyledColon = styled(Typography)(({ theme, hasError }) => ({
	...theme.typography["h4"],
	color: hasError ? theme.palette.brand.error[500] : theme.palette.brand.gray[700],
	width: "5%",
	display: "none",

	[theme.breakpoints.up("sm")]: {
		display: "block",
		paddingTop: theme.spacing(12),
	},
}));

const StyledInputWrapper = styled(Box)(({ theme }) => ({
	flex: 1,
	display: "flex",
	flexDirection: "column",
	width: "100%",

	[theme.breakpoints.up("sm")]: {
		width: "auto",
	},
}));

const StyledTextArea = styled("textarea")(({ theme, hasError }) => ({
	outline: "none",
	color: theme.palette.brand.gray[800],
	border: `1px solid ${
		hasError ? theme.palette.brand.error[500] : theme.palette.brand.gray[400]
	}`,
	height: theme.spacing(190),
	padding: theme.spacing(12),
	borderRadius: theme.spacing(4),
	transition: "all ease-in 200ms",
	width: "100%",
	resize: "none",

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
}));

const StyledErrorText = styled(Typography)(({ theme }) => ({
	minHeight: theme.spacing(14),
	lineHeight: theme.spacing(14),
	marginTop: theme.spacing(4),
	color: theme.palette.brand.error[500],
}));

const TextArea = ({
	onChange,
	onFocus,
	onBlur,
	name,
	label,
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
			<StyledTextAreaContainer>
				<StyledLabel hasError={hasError}>{label}</StyledLabel>
				<StyledColon hasError={hasError}>:</StyledColon>
				<StyledInputWrapper>
					<StyledTextArea
						name={name}
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						onFocus={onFocus}
						onBlur={onBlur}
						hasError={hasError}
					/>
					<StyledErrorText variant="caption">{error}</StyledErrorText>
				</StyledInputWrapper>
			</StyledTextAreaContainer>
		</Box>
	);
};

export default TextArea;
