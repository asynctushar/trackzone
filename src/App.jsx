import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { ErrorBoundary } from "react-error-boundary";
import FallbackUI from "./components/layout/FallbackUI";

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
			<ErrorBoundary
				FallbackComponent={FallbackUI}
				onError={(error, info) => {
					// You can log to monitoring service here
					console.error("Error caught by ErrorBoundary:", error, info);
				}}
			>

				<Container
					sx={{
						flexGrow: 1,
					}}
				>
					<Outlet />
				</Container>
			</ErrorBoundary >
			<Footer />
		</Box>

	);
};

export default App;
