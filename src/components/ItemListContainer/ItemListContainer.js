import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { data } from '../../data/data';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
	const [productList, setProductList] = useState([]);
	const { categoryId } = useParams();
	const getProducts = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (categoryId) {
				const filterCategory = data.filter((item) => {
					return item.category === categoryId;
				});
				resolve(filterCategory);
			} else {
				resolve(data);
			}
		}, 2000);
	});

	useEffect(() => {
		getProducts.then((response) => {
			setProductList(response);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryId]);

	return (
		<div className="containerMsgAndCards">
			<div className="greeting-container">
				<h2 className="greeting-message">{greeting}</h2>
			</div>
			<ItemList productList={productList} />
		</div>
	);
};

export default ItemListContainer;
