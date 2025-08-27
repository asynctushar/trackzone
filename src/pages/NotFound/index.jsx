
import { Typography, Button, Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const NotFound = () => {
	const theme = useTheme();
	const navigate = useNavigate();

	return (

		<Box
			sx={(theme) => ({
				background: theme.palette.brand.neutral[200],
				width: "100%",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			})}
		>
			<Navbar />
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
			<Footer />
		</Box>

	);
};

export default NotFound;
