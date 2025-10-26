
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div id="side-bar" className="side-bar header-two">
            <button className="close-icon-menu"><i className="far fa-times"></i></button>
            {/* inner menu area desktop start */}
            <div className="inner-main-wrapper-desk">
                <div className="inner-content">
                    <h4 className="title">Kami Membangun Gedung dan Rumah Konstruktif yang Hebat.</h4>
                    <p className="disc">
                        Kami berhasil mengatasi tugas dengan berbagai kompleksitas, memberikan jaminan jangka panjang, dan secara teratur menguasai teknologi baru.
                    </p>
                    <div className="footer">
                        <h4 className="title">Punya proyek dalam pikiran?</h4>
                        <a href="contact.html" className="rts-btn btn-primary">Mari bicara</a>
                    </div>
                </div>
            </div>
            {/* mobile menu area start */}
            <div className="mobile-menu-main">
                <nav className="nav-main mainmenu-nav mt--30">
                    <ul className="mainmenu metismenu" id="mobile-menu-active">
                        <li>
                            <Link to="/" className="main">Beranda</Link>
                        </li>
                        <li>
                            <Link to="/events" className="main">Acara</Link>
                        </li>
                    </ul>
                </nav>

                <div className="buttons-area">
                    <a href="#" className="rts-btn btn-primary">Mulai Belajar</a>
                </div>

                <div className="rts-social-style-one pl--20 mt--50">
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* mobile menu area end */}
        </div>
    );
};

export default Sidebar;
