import React, { useState } from "react";
import {
	Box,
	Typography,
	Container,
	IconButton,
	Menu,
	MenuItem,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavLink from "./NavLink";
import { Link, useNavigate } from "react-router";

const navLinks = [
	{ label: "Home", path: "/" },
	{ label: "Clocks", path: "/clocks" },
	{ label: "Contact Us", path: "/contact-us" },
	{ label: "About", path: "/about" },
];

const Navbar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const theme = useTheme();
	const navigate = useNavigate();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const open = Boolean(anchorEl);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleMenuItemClick = (path) => {
		navigate(path);
		handleMenuClose();
	};

	return (
		<Box sx={{ backgroundColor: "brand.primary.500" }}>
			<Container
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					height: (theme) => theme.spacing(64),
					[theme.breakpoints.up("md")]: {
						height: (theme) => theme.spacing(96),
					},
				}}
			>
				<Typography
					variant="h1"
					sx={{
						color: "brand.neutral.100",
						textDecoration: "none",
					}}
					to="/"
					component={Link}
				>
					Trackzone
				</Typography>

				{!isMobile ? (
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							gap: (theme) => theme.spacing(24),
						}}
					>
						{navLinks.map((link) => (
							<NavLink link={link} key={link.path} />
						))}
					</Box>
				) : (
					<>
						<IconButton
							id="mobile-menu-button"
							aria-controls={open ? "mobile-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleMenuOpen}
							sx={{
								color: "brand.neutral.100",
								padding: (theme) => theme.spacing(8),
							}}
						>
							<MenuIcon sx={{ fontSize: "1.5rem" }} />
						</IconButton>

						<Menu
							id="mobile-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleMenuClose}
							sx={{
								"& .MuiPaper-root": {
									backgroundColor: "brand.neutral.100",
									minWidth: 200,
									boxShadow: (theme) => theme.brand.shadows.high,
									borderRadius: (theme) => theme.brand.radius.low,
									mt: 1,
								},
							}}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "right",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
						>
							{navLinks.map((link) => (
								<MenuItem
									key={link.path}
									onClick={() => handleMenuItemClick(link.path)}
									sx={{
										px: (theme) => theme.spacing(24),
										py: (theme) => theme.spacing(12),
										"&:hover": {
											backgroundColor: "rgba(0, 0, 0, 0.04)",
										},
									}}
								>
									<Typography
										variant="h6"
										sx={{
											color: "brand.gray.800",
											fontWeight: 500,
										}}
									>
										{link.label}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</>
				)}
			</Container>
		</Box>
	);
};

export default Navbar;
