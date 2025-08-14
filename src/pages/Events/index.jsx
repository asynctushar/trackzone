import { Box, Typography } from "@mui/material";
import React from "react";
import ClockCard from "../../components/shared/ClockCard";
import EventCard from "./components/EventCard";
import CreateCard from "../../components/shared/CreateCard";

const Events = () => {
	return (
		<Box>
			<ClockCard type="Other" variant="Large" />
			<Box>
				<Typography>Events</Typography>
				<Box>
					<EventCard />
					<EventCard />
					<CreateCard type="Event" />
				</Box>
			</Box>
		</Box>
	);
};

export default Events;
