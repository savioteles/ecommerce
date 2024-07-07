import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingContext } from '../../contexts/ShoppingProvider';
import { FilePen, ShoppingCart, User } from 'lucide-react';
import logo from '/logo.svg';


export function Header() {

    const { state } = useContext(ShoppingContext);

    const navItems = [
        { to: '/', label: 'Início' },
        { to: '/products', label: 'Produtos' },
        { to: '/about', label: 'Sobre' },
        { to: '/contact', label: 'Contato' },
    ];

    const userActions = [
        { to: '/login', label: 'Login', icon: <User /> },
        { to: '/register', label: 'Cadastro', icon: <FilePen /> },
        { to: '/cart', label: `Carrinho (${state.reduce((acc, item) => acc + item.quantity, 0)})`, icon: <ShoppingCart /> },
    ];

    return (
        <header className='p-5 flex justify-between items-center md:fixed bg-slate-100 w-full flex-wrap gap-10'>
            <NavLink to="/" className="text-3xl font-bold flex gap-2.5 justify-center items-center">
                <img src={logo} alt="Ecommerce App" className="w-16 aspect-square" />
                <span>
                    Ecommerce App
                </span>
            </NavLink>
            <nav className='w-full md:w-fit'>
                <ul className='w-full flex gap-5 text-lg justify-center items-center md:w-fit'>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.to} className="hover:text-black/100 text-black/70 transition-all" >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='flex gap-2.5 justify-center items-center w-full md:w-fit'>
                {
                    userActions.map((item, index) => (
                        <NavLink key={index} to={item.to} className="transition-all ring-2 ring-black rounded py-1 px-2 text-sm hover:bg-black hover:text-white flex items-center gap-2">
                            {item.icon && item.icon}
                            {item.label}
                        </NavLink>

                    ))
                }
            </div>
        </header>
    )
}
