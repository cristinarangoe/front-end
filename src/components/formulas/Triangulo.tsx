import React from 'react';

export const Triangulo = () => {
	return (
		<div className="mt-2">
			<h3 className="underline text-md">Fórmulas usadas:</h3>
			<pre>
				<i>Perímetro</i> <i>p</i> = <i>l1 + l2 + l3</i>
			</pre>
			<pre>
				<i>Semiperímetro</i> <i>s</i> = <i>p/2</i>
			</pre>
			<pre>
				<i>Área</i> ={' '}
				<i>
					(s x (s-l1) x (s-l2) x (s-l3))<sup>1/2</sup>
				</i>
			</pre>
		</div>
	);
};
