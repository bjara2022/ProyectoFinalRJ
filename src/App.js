import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContex';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { NavBar } from './components/NavBar/NavBar';
import './App.css';

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={
							<ItemListContainer greeting="Bienvenidos a Fructuoso Tattoo" />
						}
					/>
					<Route
						path="/category/:categoryId"
						element={
							<ItemListContainer greeting="Tu Lugar de tintas" />
						}
					/>
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;