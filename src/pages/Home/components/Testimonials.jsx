import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Avatar1 from "../../../assets/images/Avatar1.png";
import UserCard from "./UserCard";

const users = [
	{
		name: "Wallace Reid",
		avatar: Avatar1,
		profession: "Programmer",
		comment:
			"Really beautiful product. It helps me to enhance my productivity over different location",
	},
	{
		name: "Wallace Reid",
		avatar: Avatar1,
		profession: "Programmer",
		comment:
			"Really beautiful product. It helps me to enhance my productivity over different location",
	},
	{
		name: "Wallace Reid",
		avatar: Avatar1,
		profession: "Programmer",
		comment:
			"Really beautiful product. It helps me to enhance my productivity over different location",
	},
];

const Testimonials = () => {
	return (
		<Box
			sx={(theme) => ({
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: theme.spacing(32),

				[theme.breakpoints.up("md")]: {
					gap: theme.spacing(96),
				},
			})}
		>
			<Typography variant="h2" align="center" color="brand.gray.800" sx={{ mb: 8 }}>
				What People Says
			</Typography>

			<Grid
				container
				spacing={{
					xs: 24,
					sm: 64,
					md: 96,
					lg: 128,
				}}
			>
				{users.map((user, i) => (
					<Grid
						key={i}
						size={{
							xs: 12,
							sm: 6,
							md: 4,
						}}
					>
						<UserCard user={user} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Testimonials;
