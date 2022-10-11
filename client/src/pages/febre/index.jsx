import React, { useState } from "react";
import "./index.sass";

const Index = () => {
	const [temp, setTemp] = useState(0);
	let febre = temp > 41 ? "Hipetermia" : temp >= 39.6 ? "Febre alta" : temp >= 37.6 ? "Febre" : temp >= 36 ? "Normal" : "Hipotermia";

	return (
		<div className="febre">
			<main>
				<h1>Verificar estado febrio</h1>
				<div>
					Temperatura: <input type="number" min="0" value={temp} onChange={(e) => setTemp(Number(e.target.value))} />
				</div>
				<div className="febre-total">Situação: {febre}</div>
			</main>
		</div>
	);
};

export default Index;
