import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const App = () => {
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
				sx={{
					flexGrow: 1,
				}}
			>
				<Outlet />
			</Container>
			<Footer />
		</Box>
	);
};

export default App;
