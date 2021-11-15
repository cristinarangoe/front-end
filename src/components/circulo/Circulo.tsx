import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Formula } from './Formula';
import requestCalculos from '../../request'

interface NormalFormProps {
	menuValue: string | 'Triangulo' | 'Circulo' | 'Rectangulo';
}

interface ResultadoGeometrico { 
	area: number;
	perimetro: number;
}

type positive<T extends number> =
    number extends T 
        ? never 
        : `${T}` extends `-${string}` | `${string}.${string}`
            ? never 
            : T;
interface CirculoInterface {
	r: positive<number>
}

export const Circulo: React.FC<NormalFormProps> = ({ menuValue }) => {
	const [resultado, setResultado] = useState<ResultadoGeometrico | null>(null);
	const [error, setError] = useState<string | null >(null);

	const formik = useFormik({
		initialValues: {
			r: '',
		} as CirculoInterface,
		onSubmit: async (values: CirculoInterface, { resetForm }) => {
			
			if (values.r <= 0 ) {
				setError('Error valores negativos, 0 o nulls') 	
			}else{
				setError(null)
			}
			const respuesta = await requestCalculos(menuValue,values)
			
			setResultado(respuesta)
			// resetForm({});
		},
	});
	return (
		<div className="flex flex-col items-center justify-start">
			<div className="w-auto flex flex-col items-start">
				<h3 className="font-bold text-lg">Descripción:</h3>
				<p className="text-md align-middle text-gray-500 ">
					Cálculo de perimetro y Área de {menuValue} según sus parametros.
				</p>
				<p className="text-md align-middle text-gray-500 ">
					Por favor ingrese a continuación el radio del círculo al que le desea hacer los cálculos.
				</p>
				<Formula />
			</div>
			<form
				onSubmit={formik.handleSubmit}
				className="mt-10 flex flex-col space-y-5"
			>
				<div className="flex flex-row space-x-5">
					<label htmlFor="r">
						<pre>
							<i>r:</i>
						</pre>
					</label>
					<input
						id="r"
						name="r"
						type="number"
						className="px-2 py-1 bg-gray-50 border rounded-md ml-5"
						onChange={formik.handleChange}
						value={formik.values.r}
					/>
				</div>
				<button
					type="submit"
					className="ml-10 bg-blue-400 text-white px-2 py-1 rounded-md"
				>
					Calcular
				</button>
			</form>
			<div className="w-full bg-gray-50 border rounded-md mt-10 px-10 py-5 mb-20">
				<pre><span className="text-red-500">Respuesta:</span></pre>
				<div className="flex flex-col space-y-2 mt-4">
				{error == null ? (
						<>
						<pre><span className="font-semibold">Area:</span> {resultado?.area } u<sup>2</sup></pre>
					<pre><span className="font-semibold">Perimetro:</span> {resultado?.perimetro} u<sup>2</sup></pre></>
): <pre className="text-red-500">{error}</pre>}
					
				</div>
			</div>
		</div>
	);
};
