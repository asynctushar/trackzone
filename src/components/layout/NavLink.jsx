import React from "react";
import { NavLink as Link } from "react-router";
import { Link as MuiLink } from "@mui/material";

const NavLink = ({ link }) => {
	return (
		<MuiLink
			component={Link}
			to={link.path}
			sx={{
				fontSize: "h3.fontSize",
				fontWeight: "h3.fontWeight",
				color: "brand.neutral.200",
				textDecoration: "none",
				px: (theme) => theme.spacing(16),
				py: (theme) => theme.spacing(8),
				transition: "background-color 0.2s ease",
				"&:hover": {
					backgroundColor: "rgba(255, 255, 255, 0.10)",
				},
				"&:active": {
					backgroundColor: "rgba(255, 255, 255, 0.15)",
				},
				"&.active": {
					backgroundColor: "rgba(255, 255, 255, 0.12)",
					color: "brand.primary.main",
				},
			}}
		>
			{link.label}
		</MuiLink>
	);
};

export default NavLink;
