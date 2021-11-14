import { useFormik } from 'formik';
import React from 'react';
import { Circulo as Formula } from './formulas/Circulo';
interface NormalFormProps {
	menuValue: string | 'Triangulo' | 'Circulo' | 'Rectangulo';
}

export const Circulo: React.FC<NormalFormProps> = ({ menuValue }) => {
	const formik = useFormik({
		initialValues: {
			r: '',
		},
		onSubmit: (values, { resetForm }) => {
			alert(JSON.stringify(values, null, 2));
			resetForm({});
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
					className="ml-10 bg-green-500 text-white px-2 py-1 rounded-md"
				>
					Calcular
				</button>
			</form>
		</div>
	);
};
