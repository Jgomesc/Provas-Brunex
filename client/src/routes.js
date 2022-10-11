import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Acai from "./pages/acai";
import Libra from "./pages/libra";
import Sorvete from "./pages/sorvete";
import Salario from "./pages/salario";
import Consumo from "./pages/consumo";
import Febre from "./pages/febre";

const Index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/acai" exact element={<Acai />} />
				<Route path="/libra" exact element={<Libra />} />
				<Route path="/sorvete" exact element={<Sorvete />} />
				<Route path="/salario" exact element={<Salario />} />
				<Route path="/consumo" exact element={<Consumo />} />
				<Route path="/febre" exact element={<Febre />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Index;
