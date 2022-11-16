import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../data/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
	const [productSelec, setProductSelec] = useState();
	const { id } = useParams();
	const getProduct = new Promise((resolve, reject) => {
		setTimeout(() => {
			const filterProduct = data.find((item) => {
				return item.id === parseInt(id);
			});
			resolve(filterProduct);
		}, 2000);
	});

	useEffect(() => {
		getProduct.then((response) => {
			setProductSelec(response);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return <div>{productSelec && <ItemDetail product={productSelec} />}</div>;
};

export default ItemDetailContainer;
