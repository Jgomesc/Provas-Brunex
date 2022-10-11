import React, { useState } from "react";
import "./index.sass";

const Index = () => {
	const [capac, setCapac] = useState(5);
	const [consu, setConsu] = useState(1);
	const [dista, setDista] = useState(100);
	let total = Math.ceil(dista / (capac * consu));

	return (
		<div className="consumo">
			<main>
				<h1>Calcular paradas</h1>
				<div>
					Capacidade do tanque: <input type="number" min="1" value={capac} onChange={(e) => setCapac(Number(e.target.value))} />
					<br />
					Consumo médio: <input type="number" min="1" value={consu} onChange={(e) => setConsu(Number(e.target.value))} />
					<br />
					Distância em km: <input type="number" min="1" value={dista} onChange={(e) => setDista(Number(e.target.value))} />
				</div>
				<div className="consumo-total">Total: {total}</div>
			</main>
		</div>
	);
};

export default Index;
