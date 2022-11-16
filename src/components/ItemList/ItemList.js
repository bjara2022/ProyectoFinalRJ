import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ productList }) => {
	return (
		<div className="cards">
			{productList.map((product) => (
				<Item key={product.id} product={product} />
			))}
		</div>
	);
};

export default ItemList;
