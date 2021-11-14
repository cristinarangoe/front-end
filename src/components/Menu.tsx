import React, { useState } from 'react';
import { NormalForm } from './NormalForm';
import { MenuType } from '../types/menu';
import { Circulo } from './Circulo';
import { Triangulo } from './Triangulo';
import { Reactangulo } from './Reactangulo';

export const Menu = () => {
	const [menuValue, setMenuValue] = useState<MenuType>('Fibonacci');
	const menuOptions: string[] = [
		'Fibonacci',
		'Factorial',
		'Triangulo',
		'Circulo',
		'Rectangulo',
	];
	const normalForm: string[] = ['Fibonacci', 'Factorial'];
	const complexForm: string[] = ['Triangulo', 'Circulo', 'Rectangulo'];
	return (
		<main className=" flex flex-col justify-center items-center">
			<nav className="flex flex-row space-x-4 mt-10">
				{menuOptions.map((val, key) => {
					return (
						<div
							{...{ key }}
							onClick={() => setMenuValue(val as MenuType)}
							className={`px-3 py-1  rounded-md cursor-pointer ${
								menuValue == val
									? 'bg-gray-100 font-semibold'
									: 'hover:bg-gray-50 '
							}`}
						>
							<p>{val}</p>
						</div>
					);
				})}
			</nav>
			<section className="mt-10 ">
				{normalForm.includes(menuValue) ? (
					<NormalForm menuValue={menuValue} />
				) : menuValue == 'Circulo' ? (
					<Circulo menuValue={menuValue} />
				) : menuValue == 'Triangulo' ? (
					<Triangulo menuValue={menuValue} />
				) : (
					<Reactangulo menuValue={menuValue} />
				)}
			</section>
		</main>
	);
};
