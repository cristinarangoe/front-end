import React from 'react';
import { useFormik } from 'formik';
import { Factorial } from './formulas/Factorial';
import { Fibonacci } from './formulas/Fibonacci';

interface NormalFormProps {
	menuValue: string;
}

export const NormalForm: React.FC<NormalFormProps> = ({ menuValue }) => {
	const formik = useFormik({
		initialValues: {
			n: '',
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
					Generacion de secuencia {menuValue}, a partir de un valor n
				</p>
				{menuValue == 'Fibonacci' ? (
					<Fibonacci />
				) : menuValue == 'Factorial' ? (
					<Factorial />
				) : null}
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
					className="ml-10 bg-green-500 text-white px-2 py-1 rounded-md"
				>
					Submit
				</button>
			</form>
		</div>
	);
};
