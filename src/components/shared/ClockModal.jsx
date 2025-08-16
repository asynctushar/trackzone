import { Box, Button, Dialog, DialogContent, Typography, useTheme } from "@mui/material";
import React from "react";
import Select from "../ui/Select";
import InputTime from "../ui/InputTime";

const timezones = [
	{
		label: "UTC",
		value: "UTC",
	},
	{
		label: "EST",
		value: "EST",
	},
	{
		label: "PST",
		value: "PST",
	},
	{
		label: "GMT",
		value: "GMT",
	},
];

const offsets = [
	{ label: "-12:00", value: "-12.00" },
	{ label: "-11:00", value: "-11.00" },
	{ label: "-10:00", value: "-10.00" },
	{ label: "-09:30", value: "-09.50" },
	{ label: "-09:00", value: "-09.00" },
	{ label: "-08:00", value: "-08.00" },
	{ label: "-07:00", value: "-07.00" },
	{ label: "-06:00", value: "-06.00" },
	{ label: "-05:00", value: "-05.00" },
	{ label: "-04:30", value: "-04.50" },
	{ label: "-04:00", value: "-04.00" },
	{ label: "-03:30", value: "-03.50" },
	{ label: "-03:00", value: "-03.00" },
	{ label: "-02:00", value: "-02.00" },
	{ label: "-01:00", value: "-01.00" },
	{ label: "+00:00", value: "+00.00" },
	{ label: "+01:00", value: "+01.00" },
	{ label: "+02:00", value: "+02.00" },
	{ label: "+03:00", value: "+03.00" },
	{ label: "+03:30", value: "+03.50" },
	{ label: "+04:00", value: "+04.00" },
	{ label: "+04:30", value: "+04.50" },
	{ label: "+05:00", value: "+05.00" },
	{ label: "+05:30", value: "+05.50" },
	{ label: "+05:45", value: "+05.75" },
	{ label: "+06:00", value: "+06.00" },
	{ label: "+06:30", value: "+06.50" },
	{ label: "+07:00", value: "+07.00" },
	{ label: "+08:00", value: "+08.00" },
	{ label: "+08:45", value: "+08.75" },
	{ label: "+09:00", value: "+09.00" },
	{ label: "+09:30", value: "+09.50" },
	{ label: "+10:00", value: "+10.00" },
	{ label: "+10:30", value: "+10.50" },
	{ label: "+11:00", value: "+11.00" },
	{ label: "+12:00", value: "+12.00" },
	{ label: "+12:45", value: "+12.75" },
	{ label: "+13:00", value: "+13.00" },
	{ label: "+14:00", value: "+14.00" },
];

const ClockModal = ({ type = "Base", action = "Create", open, handleClose, handleSubmit }) => {
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
						gap: {
							xs: theme.spacing(32),
							sm: theme.spacing(4)
						}
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
							Base Clock
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
						<Select
							name="timezone"
							label="Timezone"
							placeholder="Select timezone"
							options={timezones}
						/>
						<Select
							name="co-ordinate"
							label="Co-ordinate"
							placeholder="Select co-ordinate"
							options={offsets}
						/>
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

export default ClockModal;
