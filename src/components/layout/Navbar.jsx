import React from "react";
import { Box, Typography, Container } from "@mui/material";
import NavLink from "./NavLink";
import { Link } from "react-router";

const navLinks = [
	{ label: "Home", path: "/" },
	{ label: "Clocks", path: "/clocks" },
	{ label: "Contact Us", path: "/contact-us" },
	{ label: "About", path: "/about" },
];

const Navbar = () => {
	return (
		<Box
			sx={{
				backgroundColor: "brand.primary.500",
			}}
		>
			<Container
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					height: (theme) => theme.spacing(96),
				}}
			>
				<Typography
					variant="h1"
					sx={{
						color: "brand.neutral.100",
						textDecoration: "none"
					}}
					to="/"
					component={Link}
				>
					Trackzone
				</Typography>

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
			</Container>
		</Box>
	);
};

export default Navbar;
