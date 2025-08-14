import { Box, useTheme, Button } from "@mui/material";
import React from "react";
import Input from "../../../components/ui/Input";
import useForm from "../../../hooks/useForm";
import TextArea from "../../../components/ui/TextArea";

const formValidation = {
	required:
		(message = "This field is required") =>
		(value) => {
			if (!value || (typeof value === "string" && !value.trim())) {
				return message;
			}
			return "";
		},

	minLength: (min, message) => (value) => {
		if (!value) return "";
		const actualMessage = message || `Must be at least ${min} characters`;
		if (value.length < min) {
			return actualMessage;
		}
		return "";
	},

	maxLength: (max, message) => (value) => {
		if (!value) return "";
		const actualMessage = message || `Must be no more than ${max} characters`;
		if (value.length > max) {
			return actualMessage;
		}
		return "";
	},

	email:
		(message = "Please enter a valid email address") =>
		(value) => {
			if (!value) return "";
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(value)) {
				return message;
			}
			return "";
		},

	pattern:
		(regex, message = "Invalid format") =>
		(value) => {
			if (!value) return "";
			if (!regex.test(value)) {
				return message;
			}
			return "";
		},

	custom: (validator, message) => (value, allValues) => {
		if (validator(value, allValues)) {
			return "";
		}
		return message || "Invalid value";
	},
};

const Form = () => {
	const theme = useTheme();

	const { handleSubmit, getFieldProps, isSubmitting, resetForm } = useForm({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		validationSchema: {
			name: [
				formValidation.required("Name is required"),
				formValidation.minLength(2, "Name must be at least 2 characters"),
				formValidation.maxLength(50, "Name must be less than 50 characters"),
			],
			email: [formValidation.required("Email is required"), formValidation.email()],
			message: [
				formValidation.required("Message is required"),
				formValidation.minLength(10, "Message must be at least 10 characters"),
				formValidation.maxLength(500, "Message must be less than 500 characters"),
			],
		},
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
