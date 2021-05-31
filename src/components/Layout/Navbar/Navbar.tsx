import React from 'react'
import Routes from '../../../router/Routes';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction } from '../../../redux/auth';
import './Navbar.css';

const Navbar = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { role } = useSelector( (state: any) => state.auth.user );

    const onLogOut = (): void => {
        dispatch( logOutAction() );
    }

    const toggleMenu = (): void => {
        let burguerMenu = document.querySelector( '#navbarBasic' );
        burguerMenu?.classList.toggle( 'is-active' );
    }

    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <img alt='capgemini logo' src='https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg' width='120' height='28'/>

                <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='navbarBasic' onClick={ toggleMenu }>
                <span aria-hidden='true'></span>
                <span aria-hidden='true'></span>
                <span aria-hidden='true'></span>
                </a>
            </div>

            <div id='navbarBasic' className='navbar-menu'>
                <div className='navbar-start'>
                { Routes[role === 'admin' ? 'admin' : 'user'].map(( route: any, index: number ) => {
                    return <a
                        key={`${index}-${route.name}`}
                        className='navbar-item'
                        onClick={() => history.push( route.path )}>
                            { route.name }
                        </a>
                })}
                </div>
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <a className='navbar-item navbar-item__logout' onClick={ onLogOut }>
                            Log out
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;