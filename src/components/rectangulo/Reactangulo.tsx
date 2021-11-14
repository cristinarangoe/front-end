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
export const Reactangulo: React.FC<NormalFormProps> = ({ menuValue }) => {
	const [resultado, setResultado] = useState<ResultadoGeometrico | null>(null);

	const formik = useFormik({
		initialValues: {
			largo: '',
			ancho: '',
		},
		onSubmit: async(values, { resetForm }) => {
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
					Por favor ingrese a continuación el largo y ancho del rectángulo al que le desea hacer los cálculos.
				</p>
				<Formula />
			</div>
			<form
				onSubmit={formik.handleSubmit}
				className="mt-10 flex flex-col space-y-5"
			>
				<div className="flex flex-row space-x-5">
					<label htmlFor="largo">
						<pre>
							<i>largo:</i>
						</pre>
					</label>
					<input
						id="largo"
						name="largo"
						type="number"
						className="px-2 py-1 bg-gray-50 border rounded-md ml-5"
						onChange={formik.handleChange}
						value={formik.values.largo}
					/>
				</div>
				<div className="flex flex-row space-x-5">
					<label htmlFor="ancho">
						<pre>
							<i>ancho:</i>
						</pre>
					</label>
					<input
						id="ancho"
						name="ancho"
						type="number"
						className="px-2 py-1 bg-gray-50 border rounded-md ml-5"
						onChange={formik.handleChange}
						value={formik.values.ancho}
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
