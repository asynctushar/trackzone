import { Box, Typography } from "@mui/material";

const PrivacyPollicy = () => {
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
                Privacy Policy
            </Typography>

            <Typography variant="bodyLarge" color="brand.gray.900">
                At TrackZone, we respect your privacy. This policy explains how we
                collect, use, and safeguard your information when you use our
                application.
            </Typography>
            <br />


            <Typography variant="h4" color="brand.gray.900">
                1. Information We Collect
            </Typography>
            <Typography variant="bodyLarge" color="brand.gray.900">
                TrackZone does not require personal information to use its basic
                features. If you choose to create an account, we may collect your name,
                email address, and time zone preferences.
            </Typography>
            <br />


            <Typography variant="h4" color="brand.gray.900">
                2. How We Use Information
            </Typography>
            <Typography variant="bodyLarge" color="brand.gray.900">
                Information you provide is used solely to enhance your experience,
                including saving your clocks and events across sessions. We do not sell
                or share your data with third parties.
            </Typography>
            <br />


            <Typography variant="h4" color="brand.gray.900">
                3. Data Security
            </Typography>
            <Typography variant="bodyLarge" color="brand.gray.900">
                We take reasonable measures to protect your data from unauthorized
                access, alteration, or disclosure. However, no online service can be
                completely secure.
            </Typography>
            <br />


            <Typography variant="h4" color="brand.gray.900">
                4. Cookies
            </Typography>
            <Typography variant="bodyLarge" color="brand.gray.900">
                TrackZone may use cookies or local storage to remember your preferences.
                These do not contain personal information and can be cleared anytime
                through your browser settings.
            </Typography>
            <br />


            <Typography variant="h4" color="brand.gray.900">
                5. Changes to Policy
            </Typography>
            <Typography variant="bodyLarge" color="brand.gray.900">
                We may update this Privacy Policy occasionally. Any changes will be
                reflected on this page, and continued use of the app indicates your
                acceptance of the updated policy.
            </Typography>
            <br />

        </Box>
    );
};

export default PrivacyPollicy;
