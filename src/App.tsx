import React from "react";

import "./App.css";

import { Menu } from "./components/Menu";
import { MostSearchedCategories } from "./components/MostSearchedCategories";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { RoutesApplication } from "./routes";

function App() {
	return (
		<>
			<Menu />
			<RoutesApplication />
			<MostSearchedCategories />
			<Newsletter />
			<Footer />
		</>
	);
}

export default App;
