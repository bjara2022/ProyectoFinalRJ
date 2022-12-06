import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
//import { data } from '../../data/data';
import './ItemListContainer.css';
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
//import { data } from '../../data/data';


const ItemListContainer = ({ greeting }) => {
	const [productList, setProductList] = useState([]);
	const { categoryId } = useParams();
	const getProducts = () => {
		const db = getFirestore ();
		const queryBase = collection (db, "product")
		const querySnapshot = categoryId ? query(queryBase, where("category", "==", categoryId)) : queryBase;
		getDocs (querySnapshot)
			.then((response) => {
				const data = response.docs.map((product) => {
				return {id: product.id, ...product.data()};
			});
			
				setProductList (data);
			})
			.catch( (error) => {console.log (error)})
	};

	useEffect(() => { getProducts();}, [categoryId]);

	return (
		<div className="containerMsgAndCards">
		<div className="greeting-container">
			<h2 className="greeting-message">{greeting}</h2>
		</div>{<ItemList productList={productList} />}</div>
	);
};

export default ItemListContainer;
