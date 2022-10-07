import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Acai from "./pages/acai";
import Libra from "./pages/libra";
import Sorvete from "./pages/sorvete";

const Index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/acai" exact element={<Acai />} />
				<Route path="/libra" exact element={<Libra />} />
				<Route path="/sorvete" exact element={<Sorvete />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Index;
