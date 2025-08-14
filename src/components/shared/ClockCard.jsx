import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import DisplayItem from "../ui/DisplayItem";

const ClockCard = ({ type, variant }) => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				width: "100%",
				height: theme.spacing(400),
				boxShadow: theme.brand.shadows.medium,
				py: theme.spacing(24),
				px: theme.spacing(24),
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-evenly",
				gap: theme.spacing(24),

				[theme.breakpoints.up("sm")]: {
					gap: theme.spacing(48),
					py: theme.spacing(24),
					px: type === "Base" ? theme.spacing(96) : theme.spacing(24),
					boxShadow:
						type === "Base" ? theme.brand.shadows.medium : theme.brand.shadows.high,
				},
			}}
		>
			<Typography variant="h2" color="brand.gray.800">
				{type === "Base" ? "Base Clock" : "Clock 1"}
			</Typography>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: {
						xs: theme.spacing(12),
						sm: theme.spacing(24),
					},
				}}
			>
				<DisplayItem label="Time" value="12 : 03 : 23" />
				<DisplayItem label="Timezone" value="UTC" />
				<DisplayItem label="Co-ordinate" value="+5.50" />
			</Box>
			{type === "Base" ? (
				<Button
					color="brandPrimary"
					variant="contained"
					sx={{
						alignSelf: "flex-end",
					}}
				>
					Edit
				</Button>
			) : (
				<Box
					sx={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						gap: theme.spacing(16),
					}}
				>
					<Button color="brandWarning" variant="contained">
						Events
					</Button>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: theme.spacing(16),
						}}
					>
						<Button color="brandError" variant="contained">
							Delete
						</Button>
						<Button color="brandPrimary" variant="contained">
							Edit
						</Button>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default ClockCard;
