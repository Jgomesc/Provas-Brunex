import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acai from "./pages/acai";
import Libra from "./pages/libra";
import Sorvete from "./pages/sorvete";

const Index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/acai" exact element={<Acai />} />
				<Route path="/libra" exact element={<Libra />} />
				<Route path="/sorvete" exact element={<Sorvete />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Index;
