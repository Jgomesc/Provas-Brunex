import React, { useState } from "react";
import "./index.sass";

const Index = () => {
	const [grama, setGrama] = useState(0);
	const [result, setResult] = useState(0);

	function verificar() {
		console.log(result);
		if (grama > 1000) {
			setResult(grama * 0.035);
		} else {
			setResult(grama * 0.03);
		}
	}

	return (
		<div className="sorvete">
			<main>
				<h1>Sorvete</h1>
				<div>
					Gramas: <input type="number" value={grama} onChange={(e) => setGrama(e.target.value)} />
					<br />
					<button onClick={() => verificar()}>Verificar</button>
				</div>
				<div className="sorvete-total">
					Total: R$
					{result.toLocaleString("pt-BR", {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					})}
				</div>
			</main>
		</div>
	);
};

export default Index;
