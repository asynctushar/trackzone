import { Box, Container, Typography, Link as MenuLink } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
	return (
		<Box
			sx={{
				height: 340,
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
					justifyContent: "space-between",
					mt: (theme) => theme.spacing(16),
				}}
			>
				<Box
					sx={{
						width: 370,
						maxHeight: 220,
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-around",
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
					<Box
						sx={{
							color: "brand.gray.900",
						}}
					>
						<Typography variant="italicLabel">Developed By</Typography>
						<Typography variant="h5">Tushar Biswas</Typography>
						<Typography variant="h6">Full stack developer</Typography>
						<Box
							sx={{
								display: "flex",
								gap: (theme) => theme.spacing(4),
								alignItems: "center",
							}}
						>
							<Typography variant="h6">Mail: </Typography>
							<Typography variant="italicLabel">tusarbiswas888@gmail.com</Typography>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						width: 370,
						maxHeight: 220,
						px: (theme) => theme.spacing(78),
						py: (theme) => theme.spacing(24),
						color: "brand.gray.900",
						display: "flex",
						flexDirection: "column",
						gap: (theme) => theme.spacing(24),
					}}
				>
					<Typography variant="h4">Links</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: (theme) => theme.spacing(16),
						}}
					>
						<Typography
							variant="h6"
							component={Link}
							to="#terms-conditions"
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
							to="#privacy-police"
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
						width: 370,
						maxHeight: 220,
						px: (theme) => theme.spacing(78),
						py: (theme) => theme.spacing(24),
						color: "brand.gray.900",
						display: "flex",
						flexDirection: "column",
						gap: (theme) => theme.spacing(24),
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
							to="#facebook"
							sx={{
								textDecoration: "none",
								color: "brand.gray.900",
							}}
						>
							<FacebookIcon
								color="primary"
								sx={{
									fontSize: (theme) => theme.spacing(32),
								}}
							/>
						</MenuLink>
						<MenuLink
							sx={{
								textDecoration: "none",
								color: "brand.gray.900",
							}}
							component={Link}
							to="#linkedin"
						>
							<LinkedInIcon
								sx={{
									fontSize: (theme) => theme.spacing(32),
								}}
								color="primary"
							/>
						</MenuLink>
						<MenuLink
							sx={{
								textDecoration: "none",
								color: "brand.gray.900",
							}}
							component={Link}
							to="#x"
						>
							<XIcon
								sx={{
									color: "brand.neutral.300",
									backgroundColor: "brand.gray.900",
									p: (theme) => theme.spacing(4),
									borderRadius: 1
								}}
							/>
						</MenuLink>
					</Box>
				</Box>
			</Container>
			<Box
				sx={{
					backgroundColor: "brand.gray.800",
					height: 52,
					color: "brand.neutral.200",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography variant="bodyLarge">Trackzone ©2025 All right reserved</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
