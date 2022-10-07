import React, { useState } from "react";
import "./index.sass";

const Index = () => {
	const [peq, setPeq] = useState(0);
	const [med, setMed] = useState(0);
	const [gra, setGra] = useState(0);
	const [desc, setDesc] = useState(0);

	return (
		<div className="sorvete">
			<main>
				<h1>Açaí</h1>
				<div>
					Pequeno: <input type="number" value={peq} onChange={(e) => setPeq(e.target.value)} />
					<br />
					Médio: <input type="number" value={med} onChange={(e) => setMed(e.target.value)} />
					<br />
					Grande: <input type="number" value={gra} onChange={(e) => setGra(e.target.value)} />
					<br />
					Desconto em %: <input type="number" value={desc} onChange={(e) => setDesc(e.target.value)} />
				</div>
				<div className="sorvete-total">Total: {desc !== 0 ? peq * 13.5 + med * 15 + gra * 17.5 - ((peq * 13.5 + med * 15 + gra * 17.5) * desc) / 100 : peq * 13.5 + med * 15 + gra * 17.5}</div>
			</main>
		</div>
	);
};

export default Index;
