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
});

export default theme;
