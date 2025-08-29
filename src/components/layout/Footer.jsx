import {
	Box,
	Container,
	Typography,
	Link as MenuLink,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link } from "react-router";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			sx={{
				minHeight: 300,
				[theme.breakpoints.up("md")]: {
					height: 340,
				},
				backgroundColor: "brand.neutral.400",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<Container
				sx={{
					flexGrow: 1,
					display: "flex",
					flexDirection: isMobile ? "column" : "row",
					justifyContent: isMobile ? "flex-start" : "space-between",
					gap: isMobile ? (theme) => theme.spacing(4) : 0,
					mt: (theme) => theme.spacing(16),
					mb: isMobile ? (theme) => theme.spacing(16) : 0,
				}}
			>
				<Box
					sx={{
						width: isMobile ? "100%" : 370,
						maxHeight: isMobile ? "none" : 220,
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-around",
						gap: isMobile ? (theme) => theme.spacing(16) : 0,
					}}
				>
					<Typography
						variant="h3"
						sx={{
							color: "brand.gray.800",
						}}
					>
						Trackzone
					</Typography>
					<Box sx={{ color: "brand.gray.900" }}>
						<Typography variant="italicLabel">Developed By</Typography>
						<Typography variant="h5">Tushar Biswas</Typography>
						<Typography variant="h6">Full stack developer</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: isMobile ? "column" : "row",
								gap: (theme) => theme.spacing(4),
								alignItems: isMobile ? "flex-start" : "center",
							}}
						>
							<Typography variant="h6">Mail: </Typography>
							<Typography variant="italicLabel">tusarbiswas888@gmail.com</Typography>
						</Box>
					</Box>
				</Box>

				<Box
					sx={{
						width: isMobile ? "100%" : 370,
						maxHeight: isMobile ? "none" : 220,
						px: isMobile ? 0 : (theme) => theme.spacing(78),
						py: (theme) => theme.spacing(24),
						color: "brand.gray.900",
						display: "flex",
						flexDirection: "column",
						gap: isMobile ? (theme) => theme.spacing(12) : (theme) => theme.spacing(24),
					}}
				>
					<Typography variant="h4">Links</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: isMobile
								? (theme) => theme.spacing(4)
								: (theme) => theme.spacing(16),
						}}
					>
						<Typography
							variant="h6"
							component={Link}
							to="/terms&conditions"
							sx={{
								color: "brand.gray.900",
								textDecoration: "none",
							}}
						>
							Terms & Conditions
						</Typography>
						<Typography
							variant="h6"
							component={Link}
							to="/privacy-pollicy"
							sx={{
								color: "brand.gray.900",
								textDecoration: "none",
							}}
						>
							Privacy Policy
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						width: isMobile ? "100%" : 370,
						maxHeight: isMobile ? "none" : 220,
						px: isMobile ? 0 : (theme) => theme.spacing(78),
						py: (theme) => theme.spacing(24),
						color: "brand.gray.900",
						display: "flex",
						flexDirection: "column",
						gap: isMobile ? (theme) => theme.spacing(12) : (theme) => theme.spacing(24),
					}}
				>
					<Typography variant="h4">Socials</Typography>
					<Box
						sx={{
							display: "flex",
							gap: (theme) => theme.spacing(16),
							alignItems: "center",
						}}
					>
						<MenuLink
							component={Link}
							to="https://www.facebook.com/asynctushar"
							target="_blank"
							sx={{ textDecoration: "none", color: "brand.gray.900" }}
						>
							<FacebookIcon
								color="primary"
								sx={{ fontSize: (theme) => theme.spacing(32) }}
							/>
						</MenuLink>
						<MenuLink
							sx={{ textDecoration: "none", color: "brand.gray.900" }}
							component={Link}
							to="https://www.linkedin.com/in/asynctushar/"
							target="_blank"
						>
							<LinkedInIcon
								sx={{ fontSize: (theme) => theme.spacing(32) }}
								color="primary"
							/>
						</MenuLink>
						<MenuLink
							sx={{ textDecoration: "none", color: "brand.gray.900" }}
							component={Link}
							to="https://www.x.com/asynctushar"
							target="_blank"
						>
							<XIcon
								sx={{
									color: "brand.neutral.300",
									backgroundColor: "brand.gray.900",
									p: (theme) => theme.spacing(4),
									borderRadius: 1,
								}}
							/>
						</MenuLink>
					</Box>
				</Box>
			</Container>

			<Box
				sx={{
					backgroundColor: "brand.gray.800",
					minHeight: 52,
					color: "brand.neutral.200",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					py: (theme) => theme.spacing(12),
				}}
			>
				<Typography
					variant="bodyLarge"
					sx={{
						textAlign: "center",
						px: (theme) => theme.spacing(16),
					}}
				>
					Trackzone ©2025 All right reserved.
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
