import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
	//Función Add Cart
	const onAdd = (cantidad) => {
		console.log(cantidad);
	};
	return (
		<div className="productDetailContainer">
			<div className="productDetail">
				<img
					className="imgCard"
					alt={product.title}
					src={`../images/${product.pictureUrl}.jpeg`}
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
				<div className="countProductCenter">
					<div>
						<ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
					</div>
					<div className="cardBottom">
						<span>{product.stock} Unidades Disponibles</span>
					</div>
					<div>
						<Link to="/" className="buttonBack">
							Volver al Inicio
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
