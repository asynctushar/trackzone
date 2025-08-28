import { Box, Grid, Typography } from "@mui/material";
import Avatar1 from "../../../assets/images/Avatar1.webp";
import Avatar2 from "../../../assets/images/Avatar2.webp";
import Avatar3 from "../../../assets/images/Avatar3.webp";
import UserCard from "./UserCard";

const users = [
	{
		name: "Sophia Martinez",
		avatar: Avatar1,
		profession: "Project Manager",
		comment:
			"TrackZone makes coordinating across time zones effortless. I can plan meetings with my global team without confusion.",
	},
	{
		name: "Daniel Chen",
		avatar: Avatar2,
		profession: "Freelance Designer",
		comment:
			"I often work with clients overseas, and TrackZone keeps me on track. The clean interface makes it easy to manage my schedules.",
	},
	{
		name: "Emily Johnson",
		avatar: Avatar3,
		profession: "Entrepreneur",
		comment:
			"This app is a game-changer. I can manage events and track time differences quickly—perfect for my busy lifestyle.",
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
