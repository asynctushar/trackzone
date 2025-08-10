const typography = (theme) => ({
	fontFamily: "'Inter', sans-serif",

	h1: {
		fontSize: 32,
		fontWeight: 700,
		[theme.breakpoints.up("sm")]: { fontSize: 40 },
	},
	h2: {
		fontSize: 28,
		fontWeight: 700,
		[theme.breakpoints.up("sm")]: { fontSize: 32 },
	},
	h3: {
		fontSize: 24,
		fontWeight: 700,
		[theme.breakpoints.up("sm")]: { fontSize: 28 },
	},
	h4: {
		fontSize: 20,
		fontWeight: 700,
		[theme.breakpoints.up("sm")]: { fontSize: 24 },
	},
	h5: {
		fontSize: 16,
		fontWeight: 700,
		[theme.breakpoints.up("sm")]: { fontSize: 20 },
	},
	h6: {
		fontSize: 14,
		fontWeight: 700,
		[theme.breakpoints.up("sm")]: { fontSize: 16 },
	},
	caption: {
		fontSize: "0.75rem",
		fontWeight: 400,
	},
	button: {
		fontSize: 14,
		fontWeight: 500,
		textTransform: "none",
		[theme.breakpoints.up("sm")]: { fontSize: 16 },
	},
	italicLabel: {
		fontSize: 14,
		fontWeight: 500,
		fontStyle: "italic",
		[theme.breakpoints.up("sm")]: { fontSize: 16 },
	},
	body: {
		large: {
			fontSize: 16,
			fontWeight: 400,
			[theme.breakpoints.up("sm")]: { fontSize: 18 },
		},
		medium: {
			fontSize: "0.9375rem",
			fontWeight: 400,
			[theme.breakpoints.up("sm")]: { fontSize: 16 },
		},
		small: {
			fontSize: 14,
			fontWeight: 400,
		},
	},
});

export default typography;
