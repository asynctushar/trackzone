import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import spacing from "./spacing";
import radius from "./radius";
import shadows from "./shadows";

let theme = createTheme({
	palette: {
		brand: palette,
	},
	typography: {
		fontFamily: typography.fontFamily,
		h1: typography.h1,
		h2: typography.h2,
		h3: typography.h3,
		h4: typography.h4,
		h5: typography.h5,
		h6: typography.h6,
		caption: typography.caption,
		button: typography.button,
		// Custom typography variants
		italicLabel: typography.italicLabel,
		bodyLarge: typography.body.large,
		bodyMedium: typography.body.medium,
		bodySmall: typography.body.small,
		// Override default body variants to match your design
		body1: typography.body.medium,
		body2: typography.body.small,
	},
	spacing: (key) => `${spacing[key] ?? key}px`,
	brand: {
		spacing,
		radius,
		shadows,
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					padding: `${theme.spacing(12)} ${theme.spacing(24)}`,
					borderRadius: theme.brand.radius.small,
				}),
			},
			variants: [
				{
					props: { variant: "contained", color: "brandPrimary" },
					style: ({ theme }) => ({
						backgroundColor: theme.palette.brand.primary[500],
						color: theme.palette.brand.neutral[100],
						"&:hover": {
							backgroundColor: theme.palette.brand.primary[600],
						},
					}),
				},
			],
		},

		MuiContainer: {
			styleOverrides: {
				root: ({ theme }) => ({
					[theme.breakpoints.up("xl")]: {
						paddingLeft: theme.spacing(120),
						maxWidth: "100vw",
						paddingRight: theme.spacing(120),
					},
					[theme.breakpoints.down("lg")]: {
						paddingLeft: theme.spacing(24),
						paddingRight: theme.spacing(24),
					},
				}),
			},
		},
	},
});

export default theme;
