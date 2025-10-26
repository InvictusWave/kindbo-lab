
import React from 'react';

const Banner = () => {
    return (
        <section className="banner-area-one rts-shape-move">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-xl-1 order-lg-1 order-sm-2 order-2">
                        <div className="banner-content-one">
                            <div className="inner">
                                <h1 className="title-banner">
                                    Temukan Keajaiban <br /> Belajar di <span>Kindbo Lab</span>
                                    <img src="assets/images/banner/title-shape-1.svg" alt="banner" />
                                </h1>
                                <p className="disc">Selamat datang di Kindbo Lab di mana setiap hari membawa peluang baru untuk
                                    penemuan dan pertumbuhan. Komunitas kami yang dinamis berdedikasi.</p>
                                <div className="banner-btn">
                                    <a href="about.html" className="rts-btn btn-primary border-radius">Mulai Belajar Sekarang</a>
                                    <div className="video-btn-area">
                                        <div className="vedio-icone">
                                            <a className="video-play-button play-video popup-video" href="https://www.youtube.com/watch?v=ezbJwaLmOeM">
                                                <span className="icon"><img src="assets/images/banner/play.svg" alt="" /></span>
                                            </a>
                                            <div className="video-overlay">
                                                <a className="video-overlay-close">×</a>
                                            </div>
                                        </div>
                                        <p className="intro">Tonton Video</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-change order-lg-2 order-sm-1 order-1">
                        <div className="banner-right-img">
                            <img src="assets/images/banner/01.png" width="672" alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
            <img className="banner-bg-shape-2" src="assets/images/banner/banner-bg-1.png" alt="" />
            <div className="shape-image">
                <div className="shape one" data-speed="0.04" data-revert="true"><img src="assets/images/banner/shape/01.svg" alt="shape_image" /></div>
                <div className="shape two" data-speed="0.04"><img src="assets/images/banner/shape/02.svg" alt="shape_image" /></div>
                <div className="shape three" data-speed="0.04" data-revert="true"><img src="assets/images/banner/shape/03.svg" alt="shape_image" /></div>
                <div className="shape four" data-speed="0.04" data-revert="true"><img src="assets/images/banner/shape/04.svg" alt="shape_image" /></div>
                <div className="shape five" data-speed="0.04"><img src="assets/images/banner/shape/05.svg" alt="shape_image" /></div>
                <div className="shape six" data-speed="0.04"><img src="assets/images/banner/shape/06.svg" alt="shape_image" /></div>
                <div className="shape seven" data-speed="0.04" data-revert="true"><img src="assets/images/banner/shape/07.svg" alt="shape_image" /></div>
            </div>
            <div className="banner-bg-grid-shape">
            </div>
        </section>
    );
};

export default Banner;
