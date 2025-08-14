import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import DisplayItem from "../../../components/ui/DisplayItem";

const EventCard = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				width: "100%",
				height: "auto",
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
					px: theme.spacing(24),
					boxShadow: theme.brand.shadows.high,
				},
			}}
		>
			<Typography variant="h2" color="brand.gray.800">
				Event 1
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
				<DisplayItem variant="Small" label="Time" value="12 : 03 : 23" />
				<DisplayItem variant="Small" label="Difference(Base)" value="12 : 03 : 23" />
				<DisplayItem variant="Small" label="Time Left" value="12 : 03 : 23" />
				<DisplayItem
					variant="Small"
					label="Description"
					type="desc"
					value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consectetur quibusdam quam est! Autem architecto, quasi alias consectetur fugiat nam tenetur incidunt quaerat quibusdam unde voluptate vitae. Ipsa, commodi quidem."
				/>
			</Box>

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
		</Box>
	);
};

export default EventCard;
