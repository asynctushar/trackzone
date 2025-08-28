import { Box, Button, Dialog, DialogContent, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import Select from "../ui/Select";
import InputTime from "../ui/InputTime";
import DisplayItem from "../ui/DisplayItem";
import { baseClockFormSchema, otherClockFormSchema } from "../../utils/validations";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";
import { addMilliseconds, format, setHours, setMinutes, setSeconds } from "date-fns";
import { getOtherClockTime, offsets, getTimeZones, getBaseDate } from "../../utils/clock";

const timezones = getTimeZones();

const baseClockInitialValues = {
	time: getBaseDate(),
	timeZone: "",
	coOrdinate: "",
};

const otherClockInitialValues = {
	title: "",
	timeZone: "",
	coOrdinate: "",
};

const ClockModal = ({ type, action, open, handleClose, handleSubmit: handleFormSubmit, data, baseClock }) => {
	const theme = useTheme();
	const [displayTime, setDisplayTime] = useState(null);

	const defaultInitialValues = type === "Base" ? baseClockInitialValues : otherClockInitialValues;
	const mergedInitialValues =
		action === "Update"
			? {
				...defaultInitialValues,
				...data,
				...(type === "Base" && data.timeDifference ? { time: addMilliseconds(Date.now(), data.timeDifference) } : {}),
			}
			: defaultInitialValues;

	const {
		handleSubmit,
		getFieldProps,
		isSubmitting,
		resetForm,
		values,
		errors,
		handleChange,
		setFieldValue,
	} = useForm({
		initialValues: mergedInitialValues,
		validationSchema:
			type === "Base" ? baseClockFormSchema : otherClockFormSchema,
		onSubmit: async (formData) => {
			handleFormSubmit(formData);
			resetForm();
			setDisplayTime(null);
		},
		validateOnChange: true,
		validateOnBlur: true,
	});

	useEffect(() => {
		resetForm();
		setDisplayTime(null);
	}, [type, action, data, open, action]);


	useEffect(() => {
		if (type === "Other" && baseClock && values) {
			const updateTime = () => {

				const time = getOtherClockTime(baseClock, values);
				if (time) setDisplayTime(format(time, "HH:mm:ss", { timeZone: values.timeZone }));
			};

			updateTime();
			const interval = setInterval(updateTime, 1000);
			return () => clearInterval(interval);
		}
	}, [type, baseClock, values]);

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
							sm: theme.spacing(4),
							xs: theme.spacing(32),
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
									border: `1px solid ${errors.title
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
										const baseDate = getBaseDate();

										// merge the chosen time into the base date
										const withDate = setSeconds(
											setMinutes(
												setHours(baseDate, event.getHours()),
												event.getMinutes()
											),
											event.getSeconds()
										);

										handleChange({ target: { name: "time", value: withDate } });
									} else {
										handleChange({ target: { name: "time", value: null } });
									}
								}}
								name="time"
								label="Time"
							/>
						) : (
							<DisplayItem variant="Modal" label="Time" value={displayTime} />
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
