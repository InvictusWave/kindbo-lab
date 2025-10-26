
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-one header--sticky">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-one-wrapper">
                            <div className="left-side-header">
                                <Link to="/" className="logo-area">
                                    <img src="assets/images/logo/logo-1.png" alt="logo" />
                                </Link>
                            </div>

                            <div className="main-nav-one">
                                <nav>
                                    <ul>
                                        <li style={{position: 'static'}}>
                                            <Link className="nav-link fw-bold" to="/">Beranda</Link>
                                        </li>
                                        <li style={{position: 'static'}}>
                                            <Link className="nav-link fw-bold" to="/events">Acara</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="header-right-area-one">
                                <div className="buttons-area">
                                    <a href="contact.html" className="rts-btn btn-primary border-radius fw-bolder">Mulai Belajar</a>
                                </div>
                                <div className="menu-btn" id="menu-btn">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                                        <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                                        <rect width="20" height="2" fill="#1F1F25"></rect>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
