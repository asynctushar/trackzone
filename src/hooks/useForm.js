import { useState, useCallback } from "react";

const useForm = ({
	initialValues = {},
	validationSchema = {},
	onSubmit,
	validateOnChange = true,
	validateOnBlur = true,
}) => {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState({});
	const [focusedField, setFocusedField] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Validate a single field
	const validateField = useCallback(
		(fieldName, value) => {
			const validator = validationSchema[fieldName];
			if (!validator) return "";

			if (typeof validator === "function") {
				return validator(value, values);
			}

			if (Array.isArray(validator)) {
				for (const rule of validator) {
					const error = rule(value, values);
					if (error) return error;
				}
			}

			return "";
		},
		[validationSchema]
	);

	// Validate all fields
	const validateAll = useCallback(() => {
		const newErrors = {};
		let isValid = true;

		Object.keys(validationSchema).forEach((fieldName) => {
			const error = validateField(fieldName, values[fieldName] || "", values);
			newErrors[fieldName] = error;
			if (error) isValid = false;
		});

		setErrors(newErrors);
		return isValid;
	}, [validateField, validationSchema, values]);

	// Handle field value change
	const handleChange = useCallback(
		(event) => {
			const { name, value } = event.target;

			setValues((prev) => ({
				...prev,
				[name]: value,
			}));

			// Validate on change if enabled and field has been touched or is focused
			if (validateOnChange && (touched[name] || focusedField === name)) {
				const error = validateField(name, value, values);
				setErrors((prev) => ({
					...prev,
					[name]: error,
				}));
			}
		},
		[validateField, validateOnChange, touched, focusedField]
	);

	// Handle field focus
	const handleFocus = useCallback((event) => {
		const { name } = event.target;
		setFocusedField(name);
	}, []);

	// Handle field blur
	const handleBlur = useCallback(
		(event) => {
			const { name, value } = event.target;

			setTouched((prev) => ({
				...prev,
				[name]: true,
			}));

			// Validate on blur if enabled
			if (validateOnBlur) {
				const error = validateField(name, value, values);
				setErrors((prev) => ({
					...prev,
					[name]: error,
				}));
			}

			setFocusedField("");
		},
		[validateField, validateOnBlur]
	);

	// Handle form submission
	const handleSubmit = useCallback(
		(event) => {
			if (event) {
				event.preventDefault();
			}

			setIsSubmitting(true);

			// Mark all fields as touched
			const allTouched = Object.keys(validationSchema).reduce((acc, key) => {
				acc[key] = true;
				return acc;
			}, {});
			setTouched(allTouched);

			// Validate all fields
			const isValid = validateAll();

			if (isValid && onSubmit) {
				try {
					const result = onSubmit(values);

					// Handle async onSubmit
					if (result && typeof result.then === "function") {
						result
							.then(() => {
								setIsSubmitting(false);
							})
							.catch((error) => {
								console.error("Form submission error:", error);
								setIsSubmitting(false);
							});
					} else {
						setIsSubmitting(false);
					}
				} catch (error) {
					console.error("Form submission error:", error);
					setIsSubmitting(false);
				}
			} else {
				setIsSubmitting(false);
			}
		},
		[validateAll, onSubmit, values, validationSchema]
	);

	// Reset form to initial state
	const resetForm = useCallback(() => {
		setValues(initialValues);
		setErrors({});
		setTouched({});
		setFocusedField("");
		setIsSubmitting(false);
	}, [initialValues]);

	// Set field value programmatically
	const setFieldValue = useCallback(
		(fieldName, value) => {
			setValues((prev) => ({
				...prev,
				[fieldName]: value,
			}));

			// Validate if field has been touched
			if (touched[fieldName]) {
				const error = validateField(fieldName, value, values);
				setErrors((prev) => ({
					...prev,
					[fieldName]: error,
				}));
			}
		},
		[validateField, touched]
	);

	// Set field error programmatically
	const setFieldError = useCallback((fieldName, error) => {
		setErrors((prev) => ({
			...prev,
			[fieldName]: error,
		}));
	}, []);

	// Set field touched programmatically
	const setFieldTouched = useCallback((fieldName, touched = true) => {
		setTouched((prev) => ({
			...prev,
			[fieldName]: touched,
		}));
	}, []);

	// Get field props for input components
	const getFieldProps = useCallback(
		(fieldName) => ({
			name: fieldName,
			value: values[fieldName] || "",
			onChange: handleChange,
			onFocus: handleFocus,
			onBlur: handleBlur,
			error: errors[fieldName] || "",
			touched: touched[fieldName] || false,
		}),
		[values, handleChange, handleFocus, handleBlur, errors, touched]
	);

	// Check if form is valid
	const isValid = Object.keys(errors).every((key) => !errors[key]);

	// Check if form is dirty (has changes from initial values)
	const isDirty = Object.keys(values).some((key) => values[key] !== initialValues[key]);

	return {
		// Form state
		values,
		errors,
		touched,
		focusedField,
		isSubmitting,
		isValid,
		isDirty,

		// Form handlers
		handleChange,
		handleFocus,
		handleBlur,
		handleSubmit,

		// Utility functions
		resetForm,
		validateAll,
		setFieldValue,
		setFieldError,
		setFieldTouched,
		getFieldProps,
	};
};

export default useForm;
