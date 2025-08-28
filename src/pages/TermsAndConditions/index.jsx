import { Box, Typography } from "@mui/material";

const TermsAndConditions = () => {
    return (
        <Box
            sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(6),
                backgroundColor: "brand.neutral.100",
                p: theme.spacing(40),
                my: {
                    xs: theme.spacing(20),
                    sm: theme.spacing(30),
                    lg: theme.spacing(40),
                },
                boxShadow: theme.brand.shadows.medium,
                borderRadius: theme.spacing(2),
            })}
        >
            <Typography variant="h2" align="center" color="brand.gray.900" gutterBottom>
                Terms & Conditions
            </Typography>

            <Typography variant="bodyLarge" color="brand.gray.900">
                Welcome to TrackZone. By accessing or using our application, you agree
                to be bound by these Terms & Conditions. Please read them carefully
                before using the service.
            </Typography>
            <br />

            <Typography variant="h4" color="brand.gray.900">
                1. Use of Service
            </Typography>
            <Typography variant="bodyLarge" color="brand.gray.900">
                TrackZone is designed to help users manage multiple time zones and plan
                events. You agree to use the application for lawful purposes only and
                not for any activity that could harm or interfere with its performance.
            </Typography>
            <br />


            <Typography variant="h4" color="brand.gray.900">
                2. User Accounts
            </Typography>
            <Typography variant="bodyLarge" color="brand.gray.900">
                Creating an account is optional. If you choose to register, you are
                responsible for keeping your login credentials secure and for all
                activities under your account.
            </Typography>
            <br />


            <Typography variant="h4" color="brand.gray.900">
                3. Intellectual Property
            </Typography>
            <Typography variant="bodyLarge" color="brand.gray.900">
                All content, design, and code within TrackZone are the property of the
                developers. You may not copy, modify, or distribute any part of the app
                without prior permission.
            </Typography>
            <br />


            <Typography variant="h4" color="brand.gray.900">
                4. Limitation of Liability
            </Typography>
            <Typography variant="bodyLarge" color="brand.gray.900">
                TrackZone is provided on an “as-is” basis. We are not liable for any
                losses, damages, or inconveniences arising from the use of the
                application.
            </Typography>
            <br />


            <Typography variant="h4" color="brand.gray.900">
                5. Changes to Terms
            </Typography>
            <Typography variant="bodyLarge" color="brand.gray.900">
                We reserve the right to update or modify these Terms & Conditions at any
                time. Continued use of the service after changes constitutes acceptance
                of the revised terms.
            </Typography>
            <br />

        </Box>
    );
};

export default TermsAndConditions;
