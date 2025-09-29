import React from "react";
import { Avatar, Box, Card, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

// Styled Card with theme values
const StyledUserCard = styled(Card)(({ theme }) => ({
	backgroundColor: theme.palette.brand.neutral[300],
	borderRadius: theme.brand.radius.small,
	boxShadow: theme.brand.shadows.medium,
	display: "flex",
	flexDirection: "column",
	height: theme.spacing(260),
	width: "100%",

	"&:hover": {
		boxShadow: theme.brand.shadows.high,
	}
}));

const UserCard = ({ user }) => {
	const theme = useTheme();

	return (
		<StyledUserCard>
			<Box
				sx={{
					display: "flex",
					gap: theme.spacing(16),
					height: theme.spacing(70),
					backgroundColor: "brand.neutral.500",
					px: theme.spacing(10),
				}}
			>
				<Avatar
					sx={{
						width: theme.spacing(64),
						height: theme.spacing(64),
					}}
					src={user.avatar}
				/>
				<Box
					sx={{
						flexGrow: 1,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						gap: theme.spacing(6),
					}}
				>
					<Typography variant="h4" color="brand.gray.800">
						{user.name}
					</Typography>
					<Typography variant="bodySmall" color="brand.gray.900">
						{user.profession}
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					flexGrow: 1,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					px: theme.spacing(12),
				}}
			>
				<Typography variant="h5" color="brand.gray.800" textAlign="center">
					{`"${user.comment}"`}
				</Typography>
			</Box>
		</StyledUserCard>
	);
};

export default UserCard;
