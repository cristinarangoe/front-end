import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Formula } from './Formula';
import axios from'axios';
import requestCalculos from '../../request';


interface NormalFormProps {
	menuValue: string;
}

type positive<T extends number> =
    number extends T 
        ? never 
        : `${T}` extends `-${string}` | `${string}.${string}`
            ? never 
            : T;
interface FibonacciInterface {
	n: positive<number>

}

export const Fibonacci: React.FC<NormalFormProps> = ({ menuValue }) => {
	const [resultado, setResultado] = useState<null | number[]>(null);
	const [estadoConsulta, setEstadoConsulta] = useState<string | null>(null);
	const [error, setError] = useState<string | null >(null);


	const formik = useFormik({
		initialValues: {
			n: '',
		} as FibonacciInterface,
		onSubmit: async (values:FibonacciInterface, { resetForm }) => {

			if (values.n < 0 || !Number.isInteger(values.n)) {
				setError('Error valores negativos o nulls') 	
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
					Generacion de secuencia {menuValue}, a partir de un número n
				</p>
				<p className="text-md align-middle text-gray-500 ">
					Por favor ingrese a continuación el número n al que le desea hacer los cálculos.
				</p>
					<Formula />
				
			</div>

			<form onSubmit={formik.handleSubmit} className="mt-10">
				<label htmlFor="n">n:</label>
				<input
					id="n"
					name="n"
					type="number"
					className="px-2 py-1 bg-gray-50 border rounded-md ml-5"
					onChange={formik.handleChange}
					value={formik.values.n}
				/>
				<button
					type="submit"
					className="ml-10 bg-blue-400 text-white px-2 py-1 rounded-md"
				>
					Calcular
				</button>
			</form>
			<div className="w-full bg-gray-50 border rounded-md mt-10 px-10 py-5 mb-20">
				<pre className="text-red-500">Serie:</pre>
				<div className="mt-4">
				{error == null ? (
						<>
							{resultado?.map((val,key) => (
					<div key={key} className="px-15">
					<pre ><span className="text-sm font-bold">{key}</span>: {val}</pre>
					</div>
				))}
						</>
): <pre className="text-red-500">{error}</pre>}
				{/* {resultado?.map((val,key) => (
					<div key={key} className="px-15">
					<pre ><span className="text-sm font-bold">{key}</span>: {val}</pre>
					</div>
				))} */}
				</div>
				
			</div>
		</div>
	);
};
