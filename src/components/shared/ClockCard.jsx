import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import DisplayItem from "../ui/DisplayItem";

const ClockCard = ({ type = "Base", variant = "Large" }) => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				width: "100%",
				height: theme.spacing(420),
				boxShadow: theme.brand.shadows.medium,
				py: theme.spacing(24),
				px: theme.spacing(24),
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-between",
				gap: theme.spacing(24),

				[theme.breakpoints.up("sm")]: {
					gap: theme.spacing(48),
					height: theme.spacing(450),
					px:
						type === "Other" && variant === "Small"
							? theme.spacing(24)
							: theme.spacing(96),
					boxShadow:
						variant === "Large" ? theme.brand.shadows.medium : theme.brand.shadows.high,
				},

				[theme.breakpoints.up("md")]: {
					height: theme.spacing(480),
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
				<DisplayItem variant={variant} label="Time" value="12 : 03 : 23" />
				<DisplayItem variant={variant} label="Timezone" value="UTC" />
				<DisplayItem variant={variant} label="Co-ordinate" value="+5.50" />
				{type === "Other" && (
					<DisplayItem variant={variant} label="Difference(Base)" value="12 : 03 : 23" />
				)}
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
			) : type === "Other" && variant === "Small" ? (
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
			) : (
				<Box
					sx={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "end",
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
			)}
		</Box>
	);
};

export default ClockCard;
