import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Formula } from './Formula';
import requestCalculos from '../../request';

interface NormalFormProps {
	menuValue: string | 'Triangulo' | 'Circulo' | 'Reactangulo';
}
interface ResultadoGeometrico { 
	area: number;
	perimetro: number;
}
// function negate<N extends number>(n: NonNegativeInteger<N>): number {
//     return -n;
// }
type positive<T extends number> =
    number extends T 
        ? never 
        : `${T}` extends `-${string}` | `${string}.${string}`
            ? never 
            : T;
interface RectanguloInterface {
	largo: positive<number>
	ancho: positive<number>
}
export const Reactangulo: React.FC<NormalFormProps> = ({ menuValue }) => {
	const [resultado, setResultado] = useState<ResultadoGeometrico | null >();(null);
	const [error, setError] = useState<string | null >(null);

	const formik = useFormik({
		initialValues: {
			largo: '',
			ancho: '',
		} as RectanguloInterface,
		onSubmit: async(values:RectanguloInterface, { resetForm }) => {
			
			if (values.largo <= 0 || values.ancho <= 0) {
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
