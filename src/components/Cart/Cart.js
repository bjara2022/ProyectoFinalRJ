import { Link, useNavigate  } from 'react-router-dom';
import { useCartContext } from '../../context/CartContex';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css';
import Swal from 'sweetalert2';
import {
	addDoc,
	collection,
	getFirestore,
	serverTimestamp,
	doc,
	updateDoc,
} from 'firebase/firestore';

import { useState } from 'react';
import './Cart.css';

const Cart = () => {
	const { cartList, totalPrice, removeList } = useCartContext();
	const navigate = useNavigate();
	const [formValues, setFormValues] = useState({
		user: '',
		email: '',
		phone: '',
		address: '',
	});

	const inputChange = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const order = {
		buyer: {
			user: formValues.user,
			email: formValues.email,
			phone: formValues.phone,
			address: formValues.address,
		},
		item: cartList.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
		date: serverTimestamp(),
	};

	const buyFinish = () => {
		if (
			formValues.user !== '' &&
			formValues.email !== '' &&
			formValues.phone !== '' &&
			formValues.address !== ''
		) {
			const buyDb = getFirestore();
			const orderBuyCollection = collection(buyDb, 'orders');
			addDoc(orderBuyCollection, order)
				.then(({ id }) => {
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: `Muchas Gracias por su Compra!`,
						text: `Su número de orden es:  ${id}`,
						showConfirmButton: true,
					});
					removeList();
					navigate('/');
				})
				.then(() => {
					cartList.forEach((product) => {
						const query = doc(buyDb, 'products', product.id);
						updateDoc(query, { stock: product.stock - product.quantity });
					});
				})
				.catch((error) => console.log(error));
		} else {
			Swal.fire('Complete el formulario')
		}
	};

	if (cartList.length === 0) {
		return (
			<>
				<h1 className="vacio">No hay productos en el carrito</h1>
				<Link to="/">
					<button className="regresoinicio">Volver</button>
				</Link>
			</>
		);
	}

	return (
		<>
			<div className="cartContainer">
				{cartList.map((product) => (
					<ItemCart key={product.id} product={product} />
				))}
				<h1>Precio Total: ${totalPrice()}</h1>
				
			</div>
			<div>
				
				<h2 className="titulo">Por favor complete sus datos:</h2>
				<div className="paraComprar">
					<input
						className="fieldInput"
						name="user"
						type="text"
						placeHolder="Nombre Completo"
						value={formValues.user}
						onChange={inputChange}
					/>
					<input
						className="fieldInput"
						name="email"
						type="email"
						placeHolder="E-mail"
						value={formValues.email}
						onChange={inputChange}
					/>
					<input
						className="fieldInput"
						name="phone"
						type="tel"
						placeHolder="Teléfono"
						value={formValues.phone}
						onChange={inputChange}
					/>
					<input
						className="fieldInput"
						name="address"
						type="text"
						placeHolder="Dirección"
						value={formValues.address}
						onChange={inputChange}
					/>
				</div>

				<button className="Buy" onClick={buyFinish}>
					Comprar
				</button>
			</div>
		</>
	);
};

export default Cart;