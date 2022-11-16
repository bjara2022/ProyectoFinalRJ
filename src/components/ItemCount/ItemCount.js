import { useState } from 'react';
import './ItemCount.css';
const ItemCount = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(initial);

	const add = () => {
		if (count < stock) {
			setCount(count + 1);
		} else {
			console.log('No hay stock');
		}
	};

	const less = () => {
		if (count > initial) {
			setCount(count - 1);
		} else {
			console.log('No puede quitar productos');
		}
	};

	return (
		<div className="buttonsContainerItemCount">
			<div className="controlsContainerItemCount">
				<button
					onClick={add}
					className="buttonControlItemCount"
					disabled={count >= stock}
				>
					+
				</button>
				<span className="messageItemCount">{count}</span>
				<button
					onClick={less}
					className="buttonControlItemCount buttonLessItemCount"
					disabled={count <= 0}
				>
					-
				</button>
			</div>
			<div className="buttonCartContainerItemCount">
				<button
					onClick={() => onAdd(count)}
					className="buttonAddCartItemCount"
					disabled={count > stock || count <= 0}
				>
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

export default ItemCount;
