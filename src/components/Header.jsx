
import React from 'react';

const Header = () => {
    return (
        <header className="header-one header--sticky">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-one-wrapper">
                            <div className="left-side-header">
                                <a href="index.html" className="logo-area">
                                    <img src="assets/images/logo/logo-1.png" alt="logo" />
                                </a>
                            </div>

                            <div className="main-nav-one">
                                <nav>
                                    <ul>
                                        <li style={{position: 'static'}}>
                                            <a className="nav-link" href="#">Beranda</a>
                                        </li>
                                        <li style={{position: 'static'}}>
                                            <a className="nav-link" href="#">Acara</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="header-right-area-one">
                                <div className="buttons-area">
                                    <a href="contact.html" className="rts-btn btn-primary border-radius">Mulai Belajar</a>
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
