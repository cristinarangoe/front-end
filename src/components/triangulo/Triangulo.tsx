import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Formula } from './Formula';
import axios from 'axios';

interface NormalFormProps {
	menuValue: string | 'Triangulo' | 'Circulo' | 'Reactangulo';
}
interface ResultadoGeometrico { 
	area: number;
	perimetro: number;
}
export const Triangulo: React.FC<NormalFormProps> = ({ menuValue }) => {
	const [resultado, setResultado] = useState<ResultadoGeometrico | null>(null);

	const formik = useFormik({
		initialValues: {
			l1: '',
			l2: '',
			l3: '',
		},
		onSubmit: async (values, { resetForm }) => {
			const respuesta = await axios.post(`http://localhost:8000/${menuValue}`,values);
			
			setResultado(respuesta.data)
			resetForm({});
		},
	});
	return (
		<div className="flex flex-col items-center justify-start">
			<div className="w-auto flex flex-col items-start">
				<h3 className="font-bold text-lg">Descripción:</h3>
				<p className="text-md align-middle text-gray-500 ">
					Calculo de perímetro y Área de {menuValue} segun sus parámetros.
				</p>
				<p className="text-md align-middle text-gray-500 ">
					Por favor ingrese a continuación los trés lados del triángulo al que le desea hacer los cálculos.
				</p>
				<Formula />
			</div>
			<form
				onSubmit={formik.handleSubmit}
				className="mt-10 flex flex-col space-y-5"
			>
				<div className="flex flex-row space-x-5">
					<label htmlFor="l1">
						<pre>
							<i>l1:</i>
						</pre>
					</label>
					<input
						id="l1"
						name="l1"
						type="number"
						className="px-2 py-1 bg-gray-50 border rounded-md ml-5"
						onChange={formik.handleChange}
						value={formik.values.l1}
					/>
				</div>
				<div className="flex flex-row space-x-5">
					<label htmlFor="l2">
						<pre>
							<i>l2:</i>
						</pre>
					</label>
					<input
						id="l2"
						name="l2"
						type="number"
						className="px-2 py-1 bg-gray-50 border rounded-md ml-5"
						onChange={formik.handleChange}
						value={formik.values.l2}
					/>
				</div>
				<div className="flex flex-row space-x-5">
					<label htmlFor="l3">
						<pre>
							<i>l3:</i>
						</pre>
					</label>
					<input
						id="l3"
						name="l3"
						type="number"
						className="px-2 py-1 bg-gray-50 border rounded-md ml-5"
						onChange={formik.handleChange}
						value={formik.values.l3}
					/>
				</div>
				<button
					type="submit"
					className="ml-10 bg-blue-400 text-white px-2 py-1 rounded-md"
				>
					Calcular
				</button>
			</form>
			<div>
				<pre>{resultado?.area}</pre>
				<pre>{resultado?.perimetro}</pre>

			</div>
		</div>
	);
};
