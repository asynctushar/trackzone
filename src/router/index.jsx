import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Clocks from "../pages/Clocks";
import Events from "../pages/Events";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import App from "../App";

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "clocks",
				Component: Clocks,
			},
			{
				path: "clocks/:clockId/events",
				Component: Events,
			},
			{
				path: "contact-us",
				Component: ContactUs,
			},
			{
				path: "about",
				Component: About,
			},
		],
	},
	{
		path: "*",
		Component: NotFound,
	},
]);

export default router;
