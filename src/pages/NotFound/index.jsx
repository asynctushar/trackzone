import { Box } from "@mui/material";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import NotFoundComponent from "../../components/shared/NotFound";

const NotFound = () => {
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
			<NotFoundComponent />
			<Footer />
		</Box>

	);
};

export default NotFound;
