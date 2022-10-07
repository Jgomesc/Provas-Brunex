import React, { useState } from "react";
import "./index.sass";

const Index = () => {
	const [mes, setMes] = useState("");
	const [dia, setDia] = useState(1);
	const [libra, setLibra] = useState("Não é de libra");

	function verificar() {
		console.log(dia, "Mês: ", mes);
		if (mes === "Setembro" && dia > 23) {
			setLibra("É de libra");
		} else if (mes === "Outubro" && dia < 22) {
			setLibra("É de libra");
		} else {
			setLibra("Não é de libra");
		}
	}

	return (
		<div className="libra">
			<main>
				<h1>Signo</h1>
				<div>
					Dia: <input type="number" placeholder="Dia" min="1" max="31" value={dia} onChange={(e) => setDia(e.target.value)} />
					<br />
					Mes:
					<select defaultValue="Selecione" onChange={(e) => setMes(e.target.value)}>
						<option value="Selecione" disabled="disabled">
							Selecione
						</option>
						<option value="Janeiro">Janeiro</option>
						<option value="Fevereiro">Fevereiro</option>
						<option value="Março">Março</option>
						<option value="Abril">Abril</option>
						<option value="Maio">Maio</option>
						<option value="Junho">Junho</option>
						<option value="Julho">Julho</option>
						<option value="Agosto">Agosto</option>
						<option value="Setembro">Setembro</option>
						<option value="Outubro">Outubro</option>
						<option value="Novembro">Novembro</option>
						<option value="Dezembro">Dezembro</option>
					</select>
					<button onClick={() => verificar()}>Verificar</button>
				</div>
				<div className="resultado">{libra}</div>
			</main>
		</div>
	);
};

export default Index;
