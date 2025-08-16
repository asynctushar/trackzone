import { Dialog, Button, DialogContent, Typography, Box } from "@mui/material";
import React from "react";

const DeleteDialog = ({ type = "Clock", open, handleClose, handleDeletSubmit }) => {
	return (
		<Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth>
			<DialogContent
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: (theme) => theme.spacing(48),
					p: (theme) => theme.spacing(24),
					width: {
						xs: (theme) => theme.spacing(280),
						sm: (theme) => theme.spacing(400),
						md: (theme) => theme.spacing(600),
					},
					minHeight: {
						xs: (theme) => theme.spacing(280),
					},
				}}
			>
				<Typography variant="h2" color="brand.gray.800">
					Delete {type}
				</Typography>
				{type === "Clock" && (
					<Typography color="brand.gray.800" variant="BodyLarge">
						This Action will delete the events of the Clock as well.
					</Typography>
				)}
				<Box
					sx={{
						display: "flex",
						width: "100%",
						justifyContent: "end",
						gap: (theme) => theme.spacing(16),
					}}
				>
					<Button variant="contained" color="brandWarning" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="contained" color="brandError" onClick={handleDeletSubmit}>
						Delete
					</Button>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default DeleteDialog;
