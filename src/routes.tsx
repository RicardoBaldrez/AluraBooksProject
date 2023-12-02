import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { LoggedArea } from "./pages/LoggedArea";
import Requests from "./components/LoggedArea/Requests";

export function RoutesApplication() {
	return (
		<Routes>
			<Route path='/' element={<Home />}  />
			<Route path='/area-logada' element={<LoggedArea />}>
				<Route path='pedidos' element={<Requests />} />
				<Route path='trocas' element={<h1>Trocas</h1>} />
				<Route path='cupons' element={<h1>Cupons</h1>} />
				<Route path='dados' element={<h1>Dados</h1>} />
			</Route>
		</Routes>
	);
}
