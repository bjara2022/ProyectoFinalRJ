/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import cart from '../../assets/logo.jpeg';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = () => {
	return (
		<div className="navbar-container">
			<img className="logo" src={cart} alt="Cart Widget" />{' '}
			<h1>
				<Link to="/" className="navbar-titulo">
					Fructuoso Tattoo
				</Link>
			</h1>
			<ul className="navbar-list">
				<li className="navbar-item">
					<Link to="/" className="navbar-item-link">
						Inicio
					</Link>
				</li>
				<li className="navbar-item">
					<Link to="/category/cremas" className="navbar-item-link">
						Cremas
					</Link>
				</li>
				<li className="navbar-item">
					<Link to="/category/jabón Limpiador" className="navbar-item-link">
						Jabones
					</Link>
				</li>
				<li className="navbar-item">
					<Link to="/category/agujas" className="navbar-item-link">
						Agujas
					</Link>
				</li>
			</ul>
			<CartWidget />
		</div>
	);
};
