import React, { useState } from 'react';
import './index.sass';

const Index = () => {
	const [inteira, setInteira] = useState(0);
	const [meia, setMeia] = useState(0);
	const [dia, setDia] = useState('Selecione');
	const [total, setTotal] = useState(0);

	function verificar() {
		if (dia === 'Quarta') {
			setTotal(14.25 * (meia + inteira));
		} else {
			setTotal(28.5 * inteira + 14.25 * meia);
		}
	}

	return (
		<div className='cinema'>
			<main>
				<h1>Cinema</h1>
				<div>
					Meia:{' '}
					<input
						type='number'
						value={meia}
						onChange={e => setMeia(Number(e.target.value))}
					/>
					<br />
					Inteira:{' '}
					<input
						type='number'
						value={inteira}
						onChange={e => setInteira(Number(e.target.value))}
					/>
					<br />
					<select
						defaultValue='Selecione'
						onChange={e => setDia(e.target.value)}>
						<option
							value='Selecione'
							disabled='disabled'>
							Selecione
						</option>
						<option value='Segunda'>Segunda</option>
						<option value='Terca'>Terça</option>
						<option value='Quarta'>Quarta</option>
						<option value='Quinta'>Quinta</option>
						<option value='Sexta'>Sexta</option>
						<option value='Sabado'>Sábado</option>
						<option value='Domingo'>Domingo</option>
					</select>
					<button onClick={() => verificar()}>Verificar</button>
				</div>
				<div className='sorvete-total'>
					Total: R$
					{total.toLocaleString('pt-BR', {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					})}
				</div>
			</main>
		</div>
	);
};

export default Index;
