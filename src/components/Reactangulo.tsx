import { useFormik } from 'formik';
import React from 'react';
import { Reactangulo as Formula } from './formulas/Reactangulo';
import { Triangulo } from './formulas/Triangulo';

interface NormalFormProps {
	menuValue: string | 'Triangulo' | 'Circulo' | 'Reactangulo';
}

export const Reactangulo: React.FC<NormalFormProps> = ({ menuValue }) => {
	const formik = useFormik({
		initialValues: {
			largo: '',
			ancho: '',
		},
		onSubmit: (values, { resetForm }) => {
			alert(JSON.stringify(values, null, 2));
			resetForm({});
		},
	});
	return (
		<div className="flex flex-col items-center justify-start">
			<div className="w-auto flex flex-col items-start">
				<h3 className="font-bold text-lg">Description:</h3>
				<p className="text-md align-middle text-gray-500 ">
					Calculo de perimetro y Area de {menuValue} segun sus parametros
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
					className="ml-10 bg-green-500 text-white px-2 py-1 rounded-md"
				>
					Submit
				</button>
			</form>
		</div>
	);
};
