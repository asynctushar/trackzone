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

export const contactFormSchema = {
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
};

export const otherClockFormSchema = {
	title: [
		formValidation.required("Title is required"),
		formValidation.minLength(2, "Title must be at least 2 characters"),
		formValidation.maxLength(12, "Title must be less than 50 characters"),
	],
	timeZone: [formValidation.required("Timezone is required")],
	coOrdinate: [
		formValidation.custom((value, allValues) => {
			if (allValues.timeZone === "UTC" || allValues.timeZone === "GMT") {
				return value && value.trim() !== "";
			}
			return true;
		}, "Co-Ordinate is required"),
	],
};

export const baseClockFormSchema = {
	time: [
		formValidation.custom(
			(value) => value instanceof Date && !isNaN(value.getTime()),
			"Time is required"
		),
	],
	timeZone: [formValidation.required("Timezone is required")],
	coOrdinate: [
		formValidation.custom((value, allValues) => {
			if (allValues.timeZone === "UTC" || allValues.timeZone === "GMT") {
				return value && value.trim() !== "";
			}
			return true;
		}, "Co-Ordinate is required"),
	],
};

export const eventFormSchema = {
	time: [
		formValidation.custom(
			(value) => value instanceof Date && !isNaN(value.getTime()),
			"Time is required"
		),
	],
	title: [
		formValidation.required("Title is required"),
		formValidation.minLength(2, "Title must be at least 2 characters"),
		formValidation.maxLength(12, "Title must be less than 50 characters"),
	],
	description: [
		formValidation.required("Description is required"),
		formValidation.minLength(10, "Description must be at least 10 characters"),
		formValidation.maxLength(500, "Description must be less than 500 characters"),
	],
};
