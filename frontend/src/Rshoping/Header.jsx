import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header (){

    return (
        <div className='container-fluid p-0'>

            {/* Nav bar */}
            <nav className="w-100 navbar navbar-white bg-white">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to={'/'}>Rshoping</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-secondary" style={{'width':'250px'}} tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" to={'/'}>Accueil</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/homme'} className="nav-link">Mode Homme</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/femme'} className="nav-link">Mode Femme</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/enfant'} className="nav-link">Mode Enfant</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Se connecter
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li>
                                            <form className="d-flex mt-3">
                                                <Link to={'/Se Connecter'} className="btn btn-secondary mx-auto" type="submit">Se connecter</Link>
                                            </form>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='mx-1'>
                                                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#FFFFFF" stroke-width="1.5"/>
                                                    <path d="M14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25 11.0188 9.25 9.5C9.25 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5Z" stroke="#FFFFFF" stroke-width="1.5"/>
                                                    <path d="M5.5 19L6.0604 18.0193C6.95061 16.4614 8.60733 15.5 10.4016 15.5H13.5984C15.3927 15.5 17.0494 16.4614 17.9396 18.0193L18.5 19" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                Votre Compte
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='mx-1'>
                                                    <path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
                                                    <path d="M6 6H22" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
                                                    <circle cx="6" cy="20" r="2" stroke="#FFFFFF" stroke-width="1.5"/>
                                                    <circle cx="17" cy="20" r="2" stroke="#FFFFFF" stroke-width="1.5"/>
                                                    <path d="M8 20L15 20" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
                                                    <path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
                                                </svg>
                                                Vos Comandes
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='mx-1'>
                                                    <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
                                                </svg>
                                                Votre Listes d'envies
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
    
}

export default Header;
