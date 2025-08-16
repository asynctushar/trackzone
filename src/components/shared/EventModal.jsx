import { Box, Button, Dialog, DialogContent, Typography, useTheme } from "@mui/material";
import React from "react";

const ClockModal = ({ action = "Create", open, handleClose, handleSubmit }) => {
	const theme = useTheme();

	return (
		<Dialog onClose={handleClose} open={open} maxWidth="lg" fullWidth>
			<DialogContent
				sx={{
					backgroundColor: theme.palette.brand.neutral[100],
					py: {
						xs: theme.spacing(32),
						md: theme.spacing(48),
					},
					px: {
						xs: theme.spacing(24),
						md: theme.spacing(96),
					},
					minHeight: {
						xs: theme.spacing(400),
						sm: theme.spacing(500),
						md: theme.spacing(600),
					},
				}}
			>
				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{
						width: "100%",
						height: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						alignItems: "center",
						minHeight: "inherit",
					}}
				>
					<Box
						sx={{
							textAlign: "center",
							border: `1px solid ${theme.palette.brand.gray[400]}`,
							px: theme.spacing(16),
							py: theme.spacing(12),
							borderRadius: theme.brand.radius.small,
						}}
					>
						<Typography variant="h2" color="brand.gray.800">
							Event 1
						</Typography>
					</Box>

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: theme.spacing(3),
							width: "100%",
							textAlign: "center",
							px: theme.spacing(16),
							gap: theme.spacing(8),

							[theme.breakpoints.up("sm")]: {
								width: "50%",
							},
						}}
					></Box>

					<Box
						sx={{
							alignSelf: { xs: "center", md: "end" },
							display: "flex",
							flexDirection: "row",
							gap: {
								xs: theme.spacing(8),
								sm: theme.spacing(16),
							},
							width: "100%",
							justifyContent: "end",
						}}
					>
						<Button
							onClick={handleClose}
							type="button"
							variant="contained"
							color="brandError"
						>
							Cancel
						</Button>
						<Button type="submit" variant="contained" color="brandPrimary">
							{action}
						</Button>
					</Box>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default ClockModal;
