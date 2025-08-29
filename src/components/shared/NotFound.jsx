import { Typography, Button, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router";

const NotFound = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Container
            maxWidth="md"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: "50vh",
                gap: theme => theme.spacing(16),
            }}
        >

            <Typography
                variant="h2"
                sx={{ fontWeight: "bold", color: theme.palette.brand.error[400], mb: 2 }}
            >
                404
            </Typography>

            <Typography
                variant="h5"
                sx={{ color: theme.palette.brand.error[400] }}
            >
                Oops! The page you're looking for doesn't exist.
            </Typography>

            <Button variant="contained" color="brandError"
                onClick={() => navigate("/")}
            >
                Go Home
            </Button>
        </Container>
    );
};

export default NotFound;