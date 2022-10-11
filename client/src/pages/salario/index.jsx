import React, { useState } from "react";
import "./index.sass";

const Index = () => {
	const [base, setBase] = useState(0);
	const [bonus, setBonus] = useState(0);
	const [desc, setDesc] = useState(0);

	return (
		<div className="salario">
			<main>
				<h1>Calcular salário líquido</h1>
				<div>
					Salário Base: <input type="number" min="0" value={base} onChange={(e) => setBase(e.target.value)} />
					<br />
					Bônus em %: <input type="number" min="0" value={bonus} onChange={(e) => setBonus(e.target.value)} />
					<br />
					Desconto em R$: <input type="number" min="0" value={desc} onChange={(e) => setDesc(e.target.value)} />
				</div>
				<div className="salario-total">
					Total: R$
					{(base + (base * bonus / 100) - desc).toLocaleString("pt-BR", {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					})}
				</div>
			</main>
		</div>
	);
};

export default Index;
