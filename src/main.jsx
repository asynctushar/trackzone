import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import router from "./router";
import "./index.css";
import { AlertProvider } from "./contexts/AlertContext";

createRoot(document.getElementById("root")).render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<AlertProvider >
			<RouterProvider router={router} />
		</AlertProvider>
	</ThemeProvider>
);
