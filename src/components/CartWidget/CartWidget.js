import cart from '../../assets/carrito.png';
import { useCartContext } from '../../context/CartContex';
import ItemCart from '../ItemCart/ItemCart';
import './CartWidget.css';

const CartWidget = () => {
	const { totalProducts } = useCartContext();
	return (
		<div className="cartWidgetContainer">
			<div className="navbar-cart">
				<img onClick = {(ItemCart)} className="navbar-cart-img" src={cart} alt="Cart Widget" />{' '}
			</div>
				{totalProducts() !== 0 && (
					<span className="total">{totalProducts()}</span>
				)}
		</div>
	);
};
export default CartWidget;
