import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContex';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css';

const Cart = () => {
	const { cartList, totalPrice } = useCartContext();
	if (cartList.length === 0) {
		return (
			<>
				<h1 className="vacio">No hay productos en el carrito</h1>
				<Link to="/">
					<button className="regresoinicio">Volver</button>
				</Link>
			</>
		);
	}

	return (
		<div className="cartContainer">
			{cartList.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}

			<h1 className="total">Precio Total: ${totalPrice()}</h1>
		</div>
	);
};

export default Cart;