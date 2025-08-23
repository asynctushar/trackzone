import { Box, useTheme, Button } from "@mui/material";
import React from "react";
import Input from "../../../components/ui/Input";
import useForm from "../../../hooks/useForm";
import TextArea from "../../../components/ui/TextArea";
import { contactFormSchema } from "../../../utils/validations";

const Form = () => {
	const theme = useTheme();

	const { handleSubmit, getFieldProps, isSubmitting, resetForm } = useForm({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		validationSchema: contactFormSchema,
		onSubmit: async (formData) => {
			console.log("Form submitted successfully:", formData);
			resetForm();
		},
		validateOnChange: true,
		validateOnBlur: true,
	});

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				width: {
					md: theme.spacing(700),
					xs: "100%",
				},
				px: {
					xs: theme.spacing(12),
					sm: theme.spacing(16),
				},
				maxHeight: theme.spacing(450),
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				gap: theme.spacing(8),
			}}
		>
			<Input
				{...getFieldProps("name")}
				label="Name"
				type="text"
				placeholder="Enter your name"
			/>

			<Input
				{...getFieldProps("email")}
				label="Email"
				type="email"
				placeholder="Enter your email"
			/>

			<TextArea
				{...getFieldProps("message")}
				label="Message"
				placeholder="Enter your message"
				rows={4}
			/>

			<Box
				sx={{
					display: "flex",
					justifyContent: "end",
					gap: theme.spacing(16),
					mt: theme.spacing(16),
				}}
			>
				<Button
					type="submit"
					variant="contained"
					disabled={isSubmitting}
					color="brandPrimary"
				>
					{isSubmitting ? "Submitting..." : "Submit"}
				</Button>
			</Box>
		</Box>
	);
};

export default Form;
