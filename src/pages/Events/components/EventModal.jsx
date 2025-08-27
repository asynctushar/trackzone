import { Box, Button, Dialog, DialogContent, Typography, useTheme } from "@mui/material";
import InputTime from "../../../components/ui/InputTime";
import TextArea from "../../../components/ui/TextArea";
import { eventFormSchema } from "../../../utils/validations";
import useForm from "../../../hooks/useForm";
import { useEffect } from "react";
import { setHours, setMinutes, setSeconds, isBefore } from "date-fns";
import { getBaseDate, getOtherClockTime } from "../../../utils/clock";


const initialValues = {
	title: "",
	time: getBaseDate(true),
	desciption: "",
};

const EventModal = ({ action, open, handleClose, handleSubmit: handleFormSubmit, data, clock, baseClock }) => {
	const theme = useTheme();

	const mergedInitialValues =
		action === "Update"
			? {
				initialValues,
				...data,
				...(data.time ? { time: new Date(data.time) } : {}),
			}
			: initialValues;

	const { handleSubmit, getFieldProps, isSubmitting, resetForm, errors, handleChange } = useForm({
		initialValues: mergedInitialValues,
		validationSchema: eventFormSchema,
		onSubmit: async (formData) => {
			handleFormSubmit(formData);
			resetForm();
		},
		validateOnChange: true,
		validateOnBlur: true,
	});

	useEffect(() => {
		resetForm();
	}, [action, data, open, action]);

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
							{...getFieldProps("title")}
							placeholder="Event Title"
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
						<InputTime
							{...getFieldProps("time")}
							onChange={(event) => {
								if (event && !isNaN(event.getTime())) {
									const otherClockTime = getOtherClockTime(baseClock, clock);
									const today = getBaseDate();
									const tomorrow = getBaseDate(true);

									// merge event’s time into today
									const candidate = setSeconds(
										setMinutes(
											setHours(today, event.getHours()),
											event.getMinutes()
										),
										event.getSeconds()
									);


									// if candidate < otherClockTime, use tomorrow
									const withDate = isBefore(candidate, otherClockTime)
										? setSeconds(
											setMinutes(
												setHours(tomorrow, event.getHours()),
												event.getMinutes()
											),
											event.getSeconds()
										)
										: candidate;

									handleChange({ target: { name: "time", value: withDate } });
								} else {
									handleChange({ target: { name: "time", value: null } });
								}
							}}
							name="time"
							label="Time"
						/>
						<TextArea
							{...getFieldProps("description")}
							label="Description"
							placeholder="Enter Description"
							rows={4}
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
							onClick={() => handleClose(isSubmitting)}
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
