import cart from '../../assets/carrito.png';
import './CartWidget.css';

const CartWidget = () => {
	return (
		<div className="navbar-cart">
			<img className="navbar-cart-img" src={cart} alt="Cart Widget" />
		</div>
	);
};

export default CartWidget;
