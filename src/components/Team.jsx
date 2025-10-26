
import React from 'react';

const Team = () => {
    return (
        <section className="rts-team-area section-bg">
            <div className="container">
                <div className="section-title-area text-center">
                    <p className="pre-title justify-content-center"><img src="assets/images/banner/title-img.svg" alt="" />Guru</p>
                    <h2 className="section-title">Guru Ahli Kami</h2>
                    <p className="desc">kami bangga dengan tim guru kami yang berdedikasi dan ahli <br /> yang memainkan peran penting dalam membentuk.</p>
                </div>
                <div className="slider-inner">
                    <div className="swiper mySwiper-category-1 swiper-data" data-swiper='{
                            "spaceBetween":30,
                            "slidesPerView":3,
                            "loop": true,
                            "speed": 1500,
                            "pagination":{
                                "el": ".swiper-pagination3",
                                "clickable": "true"
                            },
                            "autoplay":{
                                "delay":"4000"
                            },
                            "breakpoints":{
                            "0":{
                                "slidesPerView":1,
                                "spaceBetween":30},
                            "320":{
                                "slidesPerView":1,
                                "spaceBetween":30},
                            "480":{
                                "slidesPerView":1,
                                "spaceBetween":30},
                            "640":{
                                "slidesPerView":2,
                                "spaceBetween":30},
                            "840":{
                                "slidesPerView":2,
                                "spaceBetween":30},
                            "1140":{
                                "slidesPerView":3,
                                "spaceBetween":30}
                            }
                        }'>
                        <div className="swiper-wrapper">
                            {/* single swiper style */}
                            <div className="swiper-slide">
                                <div className="team-wrapper">
                                    <div className="wrapper-inner">
                                        <div className="image">
                                            <img src="assets/images/instructor/01.jpg" alt="" />
                                            <ul className="social-area">
                                                <li><a href="#"><img src="assets/images/instructor/social-01.svg" alt="" /></a></li>
                                                <li><a href="#"><img src="assets/images/instructor/social-02.svg" alt="" /></a></li>
                                                <li><a href="#"><img src="assets/images/instructor/social-03.svg" alt="" /></a></li>
                                                <li><a href="#"><img src="assets/images/instructor/social-04.svg" alt="" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4 className="title"><a href="team-details.html">Eleanor Alice</a></h4>
                                    </div>
                                </div>
                            </div>
                            {/* single swiper style */}
                            {/* single swiper style */}
                            <div className="swiper-slide">
                                <div className="team-wrapper">
                                    <div className="wrapper-inner">
                                        <div className="image">
                                            <img src="assets/images/instructor/02.jpg" alt="" />
                                            <ul className="social-area">
                                                <li><a href="#"><img src="assets/images/instructor/social-01.svg" alt="" /></a></li>
                                                <li><a href="#"><img src="assets/images/instructor/social-02.svg" alt="" /></a></li>
                                                <li><a href="#"><img src="assets/images/instructor/social-03.svg" alt="" /></a></li>
                                                <li><a href="#"><img src="assets/images/instructor/social-04.svg" alt="" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4 className="title"><a href="team-details.html">Isabella Jane</a></h4>
                                    </div>
                                </div>
                            </div>
                            {/* single swiper style */}
                            {/* single swiper style */}
                            <div className="swiper-slide">
                                <div className="team-wrapper">
                                    <div className="wrapper-inner">
                                        <div className="image">
                                            <img src="assets/images/instructor/03.jpg" alt="" />
                                            <ul className="social-area">
                                                <li><a href="#"><img src="assets/images/instructor/social-01.svg" alt="" /></a></li>
                                                <li><a href="#"><img src="assets/images/instructor/social-02.svg" alt="" /></a></li>
                                                <li><a href="#"><img src="assets/images/instructor/social-03.svg" alt="" /></a></li>
                                                <li><a href="#"><img src="assets/images/instructor/social-04.svg" alt="" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4 className="title"><a href="team-details.html">Catherine Avery</a></h4>
                                    </div>
                                </div>
                            </div>
                            {/* single swiper style */}
                        </div>
                    </div>
                    <div className="swiper-pagination3"></div>
                </div>
                <img className="banner-bg-shape-3" src="assets/images/banner/banner-bg-2.png" alt="" />
            </div>
        </section>
    );
};

export default Team;
