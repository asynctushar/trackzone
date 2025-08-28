import { Box, useTheme, Button } from "@mui/material";
import Input from "../../../components/ui/Input";
import useForm from "../../../hooks/useForm";
import TextArea from "../../../components/ui/TextArea";
import { contactFormSchema } from "../../../utils/validations";
import { useAlert } from "../../../contexts/AlertContext";

const Form = () => {
	const theme = useTheme();
	const { showAlert } = useAlert();

	const { handleSubmit, getFieldProps, isSubmitting, resetForm } = useForm({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		validationSchema: contactFormSchema,
		onSubmit: async (formData) => {
			try {
				const res = await fetch("https://asynctushar.vercel.app/api/public/message", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						...formData,
						subject: "New Contact Message on Trackzone Web App",
					}),
				});

				const data = await res.json();

				if (!res.ok) {
					// error response from API
					showAlert(data.error || "Failed to send message", "error");
				} else {
					// success
					showAlert(data.success || "Message sent successfully!", "success");
					resetForm();
				}
			} catch (err) {
				console.error("Contact form error:", err);
				showAlert("Something went wrong. Please try again later.", "error");
			}
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
