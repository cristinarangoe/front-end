import { useState } from 'react';
import { Menu } from './components/Menu';

function App() {
	return (
		<div className="flex flex-col">
			<header className="w-full flex flex-col justify-center items-center mt-20">
				<h1 className="flex flex-col items-center">
					<span className="text-5xl font-bold">Final</span>
					<span className="text-5xl font-bold">Implementación</span>
				</h1>
			</header>
			<Menu />
		</div>
	);
}

export default App;
