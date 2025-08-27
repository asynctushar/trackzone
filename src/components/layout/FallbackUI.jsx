import { Container, Typography, Button } from "@mui/material";

const FallbackUI = ({ error, resetErrorBoundary }) => {
    return (
        <Container
            maxWidth="md"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: theme => theme.spacing(16),
            }}
        >

            <Typography
                variant="h2"
                sx={{ fontWeight: "bold", color: theme => theme.palette.brand.error[400], mb: 2 }}
            >
                Oops! Something went wrong.
            </Typography>

            <Typography
                variant="h5"
                sx={{ color: theme => theme.palette.brand.error[400] }}
            >
                {error?.message || "An unexpected error occurred."}
            </Typography>

            <Button variant="contained" color="brandError"
                onClick={resetErrorBoundary}
            >
                Try Again
            </Button>
        </Container>

    );
};

export default FallbackUI;
