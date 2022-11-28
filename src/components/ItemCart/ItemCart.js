import { useCartContext } from '../../context/CartContex';
import './ItemCart.css';

const ItemCart = ({ product }) => {
	const { deleteItem } = useCartContext();
	const {delet} = useCartContext();
	return (
		<div className="cartProduct">
			<img
				className="cartImage"
				src={`../images/${product.pictureUrl}.jpeg`}
				alt={product.title}
			/>
			<div>
				<p>
					<b>Producto:</b> {product.title}
				</p>
				<p>
					<b>Cantidad:</b> {product.quantity}
				</p>
				<p>
					<b>Precio:</b> ${product.price}
				</p>
				<p>
					<b>Subtotal:</b> ${product.quantity * product.price}
				</p>
				<button
					className="buttonDelete"
					onClick={() => deleteItem(product.id)}
				>
					Vaciar
				</button>
				
			</div>
		</div>
	);
};

export default ItemCart;