import React, { useState } from "react";
import { useEffect } from "react";
import "./index.sass";

const Index = () => {
	const [data, setData] = useState("");
	const [libra, setLibra] = useState(false);

	useEffect(() => {
		let mes = Number(data.substring(5, 7));
		let dia = Number(data.substring(8, 10));

		console.log("dia: ", dia, "mes: ", mes);

		if (mes >= 9 && dia >= 23 ) {
			setLibra(true);
		} else if (mes <= 10 && dia <= 22) {
			setLibra(true);
		} else {
			setLibra(false);
		}
	}, [data]);

	return (
		<div className="libra">
			<main>
				<h1>Signo</h1>
				<div>
					<input type="date" value={data} onChange={(e) => setData(e.target.value)} />
				</div>
				<div className="resultado">{libra ? "É de libra" : "Não é de libra"}</div>
			</main>
		</div>
	);
};

export default Index;
