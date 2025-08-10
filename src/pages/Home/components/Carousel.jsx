import React from "react";
import MuiCarousel from "react-material-ui-carousel";
import { Box, Typography, useTheme } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
import Feature1 from "../../../assets/images/Feature1.png";

const items = [
	{ name: "Feature 1", cover: Feature1 },
	{ name: "Feature 2", cover: Feature1 },
	{ name: "Feature 3", cover: Feature1 },
	{ name: "Feature 4", cover: Feature1 },
];

const Carousel = () => {
	const theme = useTheme();

	return (
		<MuiCarousel
			className="carousel"
			sx={{
				width: "100%",
				px: theme.spacing(0),
				[theme.breakpoints.up("sm")]: {
					px: theme.spacing(96),
				},
			}}
			NextIcon={
				<ArrowForwardIosIcon
					sx={{
						fontSize: theme.spacing(40),
						color: theme.palette.brand.gray[500],
						[theme.breakpoints.up("sm")]: {
							fontSize: theme.spacing(48),
						},
					}}
				/>
			}
			PrevIcon={
				<ArrowForwardIosIcon
					sx={{
						transform: "rotate(180deg)",
						fontSize: theme.spacing(40),
						color: theme.palette.brand.gray[500],
						[theme.breakpoints.up("sm")]: {
							fontSize: theme.spacing(48),
						},
					}}
				/>
			}
			IndicatorIcon={
				<CircleIcon
					sx={{
						fontSize: theme.spacing(12),
					}}
				/>
			}
			autoPlay={false}
			navButtonsAlwaysVisible
			navButtonsProps={{
				style: {
					backgroundColor: "transparent",
				},
				className: "nav-button",
			}}
			navButtonsWrapperProps={{
				style: {
					height: 0,
					top: "40%",
				},
				className: "nav-button-wrapper",
			}}
			indicatorIconButtonProps={{
				style: {
					color: theme.palette.brand.gray[300],
				},
			}}
			activeIndicatorIconButtonProps={{
				style: {
					color: theme.palette.brand.primary[500],
				},
			}}
			fullHeightHover={false}
			swipe={true}
		>
			{items.map((item, i) => (
				<Box
					key={i}
					sx={{
						height: theme.spacing(310),
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						margin: "auto auto",
						backgroundImage: `url(${item.cover})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundColor: "rgba(0, 0, 0, 0.1)",
						backgroundBlendMode: "darken",
					}}
				>
					<Typography variant="h2" sx={{ color: "brand.gray.800" }}>
						{item.name}
					</Typography>
				</Box>
			))}
		</MuiCarousel>
	);
};

export default Carousel;
