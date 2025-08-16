import React from "react";
import { Box, Typography, styled, Select as MuiSelect, MenuItem } from "@mui/material";

const StyledSelectContainer = styled(Box)(({ theme }) => ({
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
	textAlign: "left",
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

const StyledSelect = styled(MuiSelect)(({ theme, hasError }) => ({
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
	"&:hover": {
		borderColor: hasError ? theme.palette.brand.error[500] : theme.palette.brand.gray[500],
		outline: "none",
	},
	"&.Mui-focused": {
		borderColor: hasError ? theme.palette.brand.error[500] : theme.palette.brand.gray[600],
		outline: "none",
	},
	"& .MuiOutlinedInput-notchedOutline": {
		border: "none",
	},
	"&:hover .MuiOutlinedInput-notchedOutline": {
		border: "none",
	},
	"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
		border: "none",
	},
	[theme.breakpoints.up("sm")]: {
		flex: 1
	},
}));

const StyledErrorText = styled(Typography)(({ theme }) => ({
	minHeight: theme.spacing(14),
	lineHeight: theme.spacing(14),
	marginTop: theme.spacing(4),
	textAlign: "left",
	p: 0,
}));

const Select = ({
	onChange,
	onFocus,
	onBlur,
	name,
	label,
	placeholder,
	value = "",
	options = [],
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
			<StyledSelectContainer>
				<StyledLabel hasError={hasError}>{label}</StyledLabel>
				<StyledColon hasError={hasError}>:</StyledColon>
				<StyledSelect
					name={name}
					value={value}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					displayEmpty
					renderValue={(selected) => {
						if (!selected) {
							return (
								<Typography sx={{ color: "brand.gray.500" }}>
									{placeholder}
								</Typography>
							);
						}
						return options.find((opt) => opt.value === selected)?.label;
					}}
					hasError={hasError}
					MenuProps={{
						anchorOrigin: {
							vertical: "bottom",
							horizontal: "left",
						},
						transformOrigin: {
							vertical: "top",
							horizontal: "left",
						},

						getContentAnchorEl: null,
						PaperProps: {
							style: {
								maxHeight: 200,
								marginTop: 4,
							},
						},
					}}
				>
					<MenuItem value="" disabled>
						<em>{placeholder}</em>
					</MenuItem>
					{options.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</StyledSelect>
			</StyledSelectContainer>
			<StyledErrorText variant="caption" color="brand.error.500">
				{" "}
				{error}
			</StyledErrorText>
		</Box>
	);
};

export default Select;
