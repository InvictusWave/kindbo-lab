
import React from 'react';

const Footer = () => {
    return (
        <div className="rts-footer-area section-bg">
            <div className="container">
                <div className="row ptb--65">
                    <div className="col-lg-12">
                        {/* footer main wrapper */}
                        <div className="footer-one-main-wrapper">
                            {/* single sized  footer  */}
                            <div className="footer-single-wized left-logo">
                                <div className="head">
                                    <a href="#">
                                        <img src="assets/images/logo/logo-1.png" alt="logo" loading="lazy" />
                                    </a>
                                </div>
                                <div className="body">
                                    <p className="dsic">
                                        Kami adalah pendidik yang bersemangat yang berdedikasi untuk menyediakan sumber daya berkualitas tinggi bagi pelajar
                                        dari semua latar belakang.
                                    </p>
                                    <ul className="wrapper-list">
                                        <li><i className="fa-regular fa-location-dot"></i>Yarra Park, Melbourne, Australia </li>
                                        <li><i className="fa-regular fa-phone"></i><a href="tel:+4733378901">+(61) 485-826-710</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* single sized  footer end */}
                            {/* single sized  footer  */}
                            <div className="footer-single-wized">
                                <div className="head">
                                    <h6 className="title">Tentang Kami</h6>
                                </div>
                                <div className="body">
                                    <ul className="menu">
                                        <li><a href="about.html">Tentang Kami</a></li>
                                        <li><a href="team.html">Guru</a></li>
                                        <li><a href="team-details.html">Info Guru</a></li>
                                        <li><a href="zoom-meeting.html">Acara</a></li>
                                        <li><a href="pricing.html">Harga</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* single sized  footer end */}
                            <div className="container">
                                <div className="section-inner">
                                    <div className="row">
                                        <div >
                                            <form action="#" className="contact-form">
                                                <div className="form-inner">
                                                    <div className="single-input">
                                                        <input type="text" name="Name" placeholder="Nama Anda" required />
                                                    </div>
                                                    <div className="single-input">
                                                        <input type="email" name="Email" placeholder="Alamat Email" required />
                                                    </div>
                                                    <div className="single-input message">
                                                        <textarea name="Message" placeholder="Pesan" required></textarea>
                                                    </div>
                                                    <div className="form-btn">
                                                        <button type="submit" className="rts-btn btn-primary">Kirim Pesan</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer main wrapper end */}
                    </div>
                </div>
            </div>
            <div className="copyright-area-one-border">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-area-one">
                                <p>Hak Cipta © 2024 Semua Hak Dilindungi oleh Kindbo Lab</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
