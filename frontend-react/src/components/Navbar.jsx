import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> SISTEMA DE CONTROLE DE PEDIDOS - SCP
                </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Página inicial </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Produtos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">Sobre</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contato</NavLink>
                        </li>
                    </ul>
                    <div className="nav-buttons">
                        <NavLink to="/login" className="btn btn-outline-dark"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark"><i className="fa fa-user-plus mr-1"></i> Cadastro</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark"><i className="fa fa-cart-shopping mr-1"></i> Carrinho ({state.length})</NavLink>
                        <NavLink to="/OrdersPage" className="btn btn-outline-dark"><i className="fa fa-sign-in-alt mr-1"></i> Histórico</NavLink>
                    </div>

                </div>


            </div>
        </nav>
    )
}

export default Navbar