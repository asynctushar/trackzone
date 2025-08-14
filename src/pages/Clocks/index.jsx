import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ClockCard from "../../components/shared/ClockCard";
import CreateCard from "../../components/shared/CreateCard";

const Clocks = () => {
	return (
		<Box
			sx={(theme) => ({
				display: "flex",
				flexDirection: "column",
				gap: theme.spacing(48),
				py: theme.spacing(48),
				alignItems: "center",
			})}
		>
			<ClockCard type="Base" variant="Large" />
			<Box
				sx={(theme) => ({
					width: "100%",
					backgroundColor: theme.palette.brand.neutral[100],
					boxShadow: theme.brand.shadows.medium,
					py: theme.spacing(32),
					px: theme.spacing(16),
					display: "flex",
					flexDirection: "column",
					gap: theme.spacing(40),

					[theme.breakpoints.up("sm")]: {
						py: theme.spacing(64),
						px: theme.spacing(48),
						gap: theme.spacing(40),
					},
				})}
			>
				<Typography variant="h2" color="brand.gray.800">
					Other Clocks
				</Typography>
				<Grid
					container
					spacing={{
						sm: 48,
						xs: 24,
					}}
				>
					<Grid
						size={{
							xs: 12,
							md: 6,
						}}
					>
						<ClockCard type="Other" variant="Small" />
					</Grid>
					<Grid
						size={{
							xs: 12,
							md: 6,
						}}
					>
						<ClockCard type="Other" variant="Small" />
					</Grid>
					<Grid
						size={{
							xs: 12,
							md: 6,
						}}
					>
						<CreateCard type="Clock" />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Clocks;
