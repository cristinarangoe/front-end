import { useFormik } from 'formik';
import React from 'react';
import { Triangulo as Formula } from './formulas/Triangulo';

interface NormalFormProps {
	menuValue: string | 'Triangulo' | 'Circulo' | 'Reactangulo';
}

export const Triangulo: React.FC<NormalFormProps> = ({ menuValue }) => {
	const formik = useFormik({
		initialValues: {
			l1: '',
			l2: '',
			l3: '',
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
					className="ml-10 bg-green-500 text-white px-2 py-1 rounded-md"
				>
					Submit
				</button>
			</form>
		</div>
	);
};
