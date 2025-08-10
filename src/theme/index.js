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
					paddingLeft: theme.spacing(16),
					paddingRight: theme.spacing(16),

					[theme.breakpoints.up("sm")]: {
						paddingLeft: theme.spacing(24),
						paddingRight: theme.spacing(24),
					},

					[theme.breakpoints.up("lg")]: {
						paddingLeft: theme.spacing(48),
						paddingRight: theme.spacing(48),
					},

					[theme.breakpoints.up("xl")]: {
						paddingLeft: theme.spacing(120),
						paddingRight: theme.spacing(120),
						maxWidth: "100vw",
					},
				}),
			},
		},
	},
});

theme = createTheme(theme, {
	typography: {
		fontFamily: typography(theme).fontFamily,
		h1: typography(theme).h1,
		h2: typography(theme).h2,
		h3: typography(theme).h3,
		h4: typography(theme).h4,
		h5: typography(theme).h5,
		h6: typography(theme).h6,
		caption: typography(theme).caption,
		button: typography(theme).button,
		// custom
		italicLabel: typography(theme).italicLabel,
		bodyLarge: typography(theme).body.large,
		bodyMedium: typography(theme).body.medium,
		bodySmall: typography(theme).body.small,

		body1: typography(theme).body.medium,
		body2: typography(theme).body.small,
	},
});

export default theme;
