import { Box, Button, Dialog, DialogContent, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import Select from "../ui/Select";
import InputTime from "../ui/InputTime";
import DisplayItem from "../ui/DisplayItem";
import { baseClockFormSchema, otherClockFormSchema } from "../../utils/validations";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";

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

const baseClockInitialValues = {
	time: new Date(0, 0, 0, 0, 0),
	timeZone: "",
	coOrdinate: "",
};

const otherClockInitialValues = {
	title: "",
	timeZone: "",
	coOrdinate: "",
};

const ClockModal = ({ type, action, open, handleClose, handleSubmit: handleFormSubmit, data }) => {
	const theme = useTheme();

	const defaultInitialValues = type === "Base" ? baseClockInitialValues : otherClockInitialValues;

	const mergedInitialValues =
		action === "Update"
			? {
					...defaultInitialValues,
					...data,
					...(type === "Base" && data.time ? { time: new Date(data.time) } : {}),
			  }
			: defaultInitialValues;

	const { handleSubmit, getFieldProps, isSubmitting, resetForm, values, errors, handleChange } =
		useForm({
			initialValues: mergedInitialValues,
			validationSchema: type === "Base" ? baseClockFormSchema : otherClockFormSchema,
			onSubmit: async (formData) => {
				handleFormSubmit(formData);
				resetForm();
			},
			validateOnChange: true,
			validateOnBlur: true,
		});

	useEffect(() => {
		resetForm();
	}, [type, action, data, open, action]);

	return (
		<Dialog onClose={() => handleClose(isSubmitting)} open={open} maxWidth="lg" fullWidth>
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
							sm: theme.spacing(4),
						},
					}}
				>
					{type === "Base" ? (
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
					) : (
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<Box
								component="input"
								{...getFieldProps("title")}
								placeholder="Clock Title"
								sx={{
									width: {
										xs: "90%",
										sm: "70%",
										md: "60%",
									},
									textAlign: "center",
									fontFamily: theme.typography.h2,
									color: "brand.gray.800",
									border: `1px solid ${
										errors.title
											? theme.palette.brand.error[400]
											: theme.palette.brand.gray[400]
									}`,
									px: theme.spacing(16),
									py: theme.spacing(12),
									mx: "auto",
									borderRadius: theme.brand.radius.small,
									"&:focus": {
										outline: "none",
										borderColor: theme.palette.brand.gray[500],
									},
									"&::placeholder": {
										color: theme.palette.brand.gray[400],
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
								{errors.title}
							</Typography>
						</Box>
					)}

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
						{type === "Base" ? (
							<InputTime
								{...getFieldProps("time")}
								onChange={(event) => {

									if (event && !isNaN(event.getTime())) {
										handleChange({ target: { name: "time", value: event } });
									} else {
										// if you want to keep null in state
										handleChange({ target: { name: "time", value: null } });
									}
								}}
								name="time"
								label="Time"
							/>
						) : (
							<DisplayItem variant="Modal" label="Time" value="12 : 03 : 23" />
						)}
						<Select
							name="timeZone"
							label="TimeZone"
							placeholder="Select timezone"
							options={timezones}
							{...getFieldProps("timeZone")}
						/>
						{["GMT", "UTC"].includes(values.timeZone) && (
							<Select
								{...getFieldProps("coOrdinate")}
								name="coOrdinate"
								label="Co-ordinate"
								placeholder="Select co-ordinate"
								options={offsets}
							/>
						)}
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
							onClick={() => {
								handleClose(isSubmitting);
							}}
							type="button"
							variant="contained"
							color="brandError"
							disabled={(type === "Base" && action === "Create") || isSubmitting}
						>
							Cancel
						</Button>
						<Button
							type="submit"
							variant="contained"
							color="brandPrimary"
							disabled={isSubmitting}
						>
							{action}
						</Button>
					</Box>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default ClockModal;
