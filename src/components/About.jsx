
import React from 'react';

const About = () => {
    return (
        <>
            <section className="rts-about-area rts-shape-move rts-section-gap">
                <div className="container">
                    <div className="section-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about-image">
                                    <img src="assets/images/about/about-01.png" width="630" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <div className="section-title-area">
                                        <p className="pre-title"><img src="assets/images/banner/title-img.svg" alt="" />Tentang Kami</p>
                                        <h2 className="section-title">Temukan Misi Kami untuk <br /> Akademi Kindbo Lab</h2>
                                        <p className="desc">Selamat datang di Kindbo Lab, tempat pendidikan bertemu inspirasi, dan setiap <br /> perjalanan anak adalah kisah pertumbuhan dan penemuan.</p>
                                    </div>
                                    <ul className="about-wrapper">
                                        <li className="wrapper-list">
                                            <div className="list-inner">
                                                <div className="icon"><img src="assets/images/icon/01.svg" alt="" /></div>
                                                <div className="content">
                                                    <h4 className="title">Misi Kami</h4>
                                                    <p className="desc">Di Kindbo Lab, misi kami adalah untuk menumbuhkan <br />
                                                        lingkungan di mana rasa ingin tahu muncul.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="wrapper-list">
                                            <div className="list-inner">
                                                <div className="icon"><img src="assets/images/icon/02.svg" alt="" /></div>
                                                <div className="content">
                                                    <h4 className="title">Komitmen Kami</h4>
                                                    <p className="desc">Saat kita memulai perjalanan pendidikan <br />
                                                        bersama, kami tetap berkomitmen untuk menyediakan.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-image">
                    <div className="shape one" data-speed="0.04" data-revert="true"><img src="assets/images/banner/shape/08.svg" alt="shape_image" /></div>
                    <div className="shape two" data-speed="0.04" data-revert="true"><img src="assets/images/banner/shape/09.svg" alt="shape_image" /></div>
                    <div className="shape three" data-speed="0.04"><img src="assets/images/banner/shape/10.svg" alt="shape_image" /></div>
                </div>
            </section>
            <section className="rts-about-area area-3 rts-section-gap">
                <div className="container">
                    <div className="section-inner">
                        <div className="section-bg-area">
                            <img src="assets/images/about/about-bg.png" alt="" />
                        </div>
                        <div className="content-inner rts-shape-move">
                            <div className="image-area">
                                <img src="assets/images/about/about-03.jpg" width="295" alt="" />
                                <img className="shape-img" src="assets/images/about/shape-01.png" alt="" />
                                <img className="shape-img2" src="assets/images/banner/shape/02.svg" alt="" />
                            </div>
                            <div className="right-side-content">
                                <h2 className="heading-title">Cara Mendaftarkan Anak Anda
                                    di Kelas Kami</h2>
                                <p className="desc">Mendaftarkan anak Anda di Kindbo Lab adalah proses yang sederhana dan mudah. Kami senang menyambut keluarga Anda ke dalam komunitas belajar kami yang dinamis.</p>
                                <div className="button-area">
                                    <a href="about.html" className="rts-btn">Kunjungi Sekarang <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="shape-image">
                            <div className="shape one" data-speed="0.04" data-revert="true"><img src="assets/images/about/01.svg" alt="shape_image" /></div>
                            <div className="shape two" data-speed="0.04"><img src="assets/images/about/02.svg" alt="shape_image" /></div>
                            <div className="shape three" data-speed="0.04" data-revert="true"><img src="assets/images/about/03.svg" alt="shape_image" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
