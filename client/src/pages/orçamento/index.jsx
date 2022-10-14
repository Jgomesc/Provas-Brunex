import React, { useState } from 'react';
import './index.sass';

const Index = () => {
	const [ganhos, setGanho] = useState('');
	const [gastos, setGastos] = useState('');
	const [orcamento, setOrcamento] = useState('Não é de orcamento');

	function orcamentofml() {
		if (gastos >= ganhos) {
			setOrcamento('Orçamento Comprometido');
		} else if (gastos < ganhos) {
			setOrcamento('Orçamentos Normais');
		} else {
			setOrcamento('Sem Orçamentos');
		}
	}

	return (
		<div className='orcamento'>
			<main>
				<h1>Orçamento familiar</h1>
				<div>
					Ganhos:
					<input
						type='number'
						placeholder='Ganhos'
						min='1'
						value={ganhos}
						onChange={e => setGanho(e.target.value)}
					/>
					<br />
					Gastos:
					<input
						type='number'
						placeholder='Gastos'
						value={gastos}
						onChange={e => setGastos(e.target.value)}
					/>
					<button onClick={() => orcamentofml()}>Verificar</button>
				</div>
				<div className='resultado'>{orcamento}</div>
			</main>
		</div>
	);
};

export default Index;
