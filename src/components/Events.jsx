
import React from 'react';

const Events = () => {
    return (
        <section className="rts-event-area rts-section-gapTop">
            <div className="container">
                <div className="section-title-area text-center">
                    <p className="pre-title justify-content-center"><img src="assets/images/banner/title-img.svg" alt="" />Acara</p>
                    <h2 className="section-title">Acara Mendatang</h2>
                    <p className="desc">Kami sangat senang mengumumkan acara kami yang akan datang, <br /> Hari Penjelajah sebuah perayaan pengetahuan</p>
                </div>
                <div className="section-inner">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="event-wrapper">
                                <div className="wrapper-inner bg-one">
                                    <div className="date">
                                        <span>29</span>
                                        Januari
                                        <img src="assets/images/events/01.png" width="132" alt="" className="shape" />
                                    </div>
                                    <div className="content">
                                        <a href="program-details.html">
                                            <h4 className="title">Program Budaya Tahunan</h4>
                                            <ul className="meta-wrapper">
                                                <li><i className="fa-regular fa-clock"></i>9:00 Pagi - 12:00 Siang</li>
                                                <li><i className="fa-light fa-location-dot"></i>55 Clark St, Brooklyn, NY 11201, USA</li>
                                            </ul>
                                        </a>
                                    </div>
                                    <div className="shape-icon"><img src="assets/images/events/event-blink.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event-wrapper two">
                                <div className="wrapper-inner bg-four">
                                    <div className="date">
                                        <span>05</span>
                                        Maret
                                        <img src="assets/images/events/01.png" width="132" alt="" className="shape" />
                                    </div>
                                    <div className="content">
                                        <a href="program-details.html">
                                            <h4 className="title">Dunia Cerita Menanti</h4>
                                        </a>
                                        <ul className="meta-wrapper">
                                            <li><i className="fa-regular fa-clock"></i>9:00 Pagi - 12:00 Siang</li>
                                            <li><i className="fa-light fa-location-dot"></i>55 Clark St, Brooklyn, NY 11201, USA</li>
                                        </ul>
                                    </div>
                                    <div className="shape-icon"><img src="assets/images/events/event-blink.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event-wrapper three">
                                <div className="wrapper-inner bg-two">
                                    <div className="date">
                                        <span>11</span>
                                        Maret
                                        <img src="assets/images/events/01.png" width="132" alt="" className="shape" />
                                    </div>
                                    <div className="content">
                                        <a href="program-details.html">
                                            <h4 className="title">Hari Menggambar Sedunia</h4>
                                        </a>
                                        <ul className="meta-wrapper">
                                            <li><i className="fa-regular fa-clock"></i>9:00 Pagi - 12:00 Siang</li>
                                            <li><i className="fa-light fa-location-dot"></i>55 Clark St, Brooklyn, NY 11201, USA</li>
                                        </ul>
                                    </div>
                                    <div className="shape-icon"><img src="assets/images/events/event-blink.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event-wrapper four">
                                <div className="wrapper-inner bg-three">
                                    <div className="date">
                                        <span>19</span>
                                        April
                                        <img src="assets/images/events/01.png" width="132" alt="" className="shape" />
                                    </div>
                                    <div className="content">
                                        <a href="program-details.html">
                                            <h4 className="title">Hari Anak Sedunia</h4>
                                        </a>
                                        <ul className="meta-wrapper">
                                            <li><i className="fa-regular fa-clock"></i>9:00 Pagi - 12:00 Siang</li>
                                            <li><i className="fa-light fa-location-dot"></i>55 Clark St, Brooklyn, NY 11201, USA</li>
                                        </ul>
                                    </div>
                                    <div className="shape-icon"><img src="assets/images/events/event-blink.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-btn-area">
                    <a href="about.html" className="rts-btn btn-primary border-radius">Lihat Semua Acara <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </section>
    );
};

export default Events;
