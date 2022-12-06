import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { data } from '../../data/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { doc, getDoc, getFirestore} from 'firebase/firestore';

const ItemDetailContainer = () => {
	const [productSelec, setProductSelec] = useState();
	const { id } = useParams();
	const getProduct = () => {
		const db = getFirestore();
		const query = doc(db, 'product', id);
		getDoc(query)
			.then((response)=> {
				console.log(response.data());
				setProductSelec({id: response.id, ...response.data()});
			})
			.catch ((error)=> console.log(error));
		
	};

	useEffect(() => {
		getProduct();
	 },[id]);
	 return (
		<div>{productSelec && <ItemDetail product={productSelec} />}</div>

	 );
	
};

export default ItemDetailContainer;
