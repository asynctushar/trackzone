import { Box, Button, Dialog, DialogContent, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import InputTime from "../ui/InputTime";
import TextArea from "../ui/TextArea";

const EventModal = ({ action = "Create", open, handleClose, handleSubmit }) => {
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
						overflow: "hidden",
						flexDirection: "column",
						justifyContent: "space-between",
						alignItems: "center",
						minHeight: "inherit",
						gap: {
							xs: theme.spacing(32),
							sm: theme.spacing(12),
						},
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<Box
							component="input"
							sx={{
								width: {
									xs: "90%",
									sm: "70%",
									md: "60%",
								},
								textAlign: "center",
								fontFamily: theme.typography.h2,
								color: "brand.gray.800",
								border: `1px solid ${theme.palette.brand.error[400]}`,
								px: theme.spacing(16),
								py: theme.spacing(12),
								mx: "auto",
								borderRadius: theme.brand.radius.small,
								"&:focus": {
									outline: "none",
									borderColor: theme.palette.brand.error[500],
								},
							}}
						/>

						<Typography
							variant="caption"
							color="brand.error.500"
							sx={{
								minHeight: theme.spacing(14),
								lineHeight: theme.spacing(14),
								marginTop: theme.spacing(4),
								textAlign: "center",
								p: 0,
							}}
						>
							error
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
					>
						<InputTime name="time" label="Time" />
						<TextArea label="Description" placeholder="Enter Description" rows={4} />
					</Box>

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

export default EventModal;
