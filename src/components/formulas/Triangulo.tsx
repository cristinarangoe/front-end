import React from 'react';

export const Triangulo = () => {
	return (
		<div className="mt-2">
			<pre>
				<i>Perimetro:</i> <i>p</i> = <i>l1 + l2 + l3</i>
			</pre>
			<pre>
				<i>Semiperimetro:</i> <i>s</i> = <i>p/2</i>
			</pre>
			<pre>
				<i>Area</i> ={' '}
				<i>
					(s(s-l1)(s-l2)(s-l3))<sup>1/2</sup>
				</i>
			</pre>
		</div>
	);
};
