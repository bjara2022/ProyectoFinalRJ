import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContex';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
		
	const [cantidad, setCantidad] = useState(0);
	const { addToCart } = useCartContext();

	const onAdd = (count) => {
		setCantidad(count);
		addToCart(product, count);
	};

	return (
		<div className="productDetailContainer">
			<div className="productDetail">
				<img
					className="imgCard"
					alt={product.title}
					src={`/images/${product.pictureUrl}`}
				/>
				<div>
					<h1 className="textCard">{product.title}</h1>
				</div>

				<div>
					<h2 className="textCard priceCard">$ {product.price}</h2>
				</div>
				<div>
					<p className="textCard">{product.description}</p>
				</div>
			</div>

			<div className="countProduct">
				{cantidad > 0 ? (
					<div>
						<Link to="/">
							<button className="seguir">Seguir Comprando</button>
						</Link>
						<Link to="/cart">
							<button className="finalizar">Terminar</button>
						</Link>
					</div>
				) : (
					<div className="countProductCenter">
						<div>
							<ItemCount
								stock={product.stock}
								initial={1}
								onAdd={onAdd}
							/>
						</div>
						<div className="disponible">
							<span>{product.stock} Unidades Disponibles</span>
						</div>
						<div>
							<Link to="/">
								<button className="seguirinicio">Seguir Comprando</button>
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ItemDetail;