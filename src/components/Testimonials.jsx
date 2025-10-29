import React from 'react';

const Testimonials = () => {
    return (
        <section className="rts-testimonials-area section-bg">
            <div className="container">
                <div className="section-title-area text-center">
                    <p className="pre-title justify-content-center"><img src="assets/images/banner/title-img.svg" alt="" />Testimoni</p>
                    <h2 className="section-title">Apa Kata Orang Tua Tentang Kami</h2>
                    <p className="desc">Setiap senyum, tawa, dan cerita dari anak-anak berarti banyak bagi kami. <br/>
                        Berikut cerita dan kesan para orang tua tentang pengalaman anak mereka bersama KindboLab.</p>
                </div>
                <div className="slider-inner">
                    <div className="swiper mySwiper-category-1 swiper-data" data-swiper='{
                            "spaceBetween":30,
                            "slidesPerView":3,
                            "loop": true,
                            "speed": 1500,
                            "navigation":{
                                "nextEl":".swiper-button-next3",
                                "prevEl":".swiper-button-prev3"
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
                                "slidesPerView":1,
                                "spaceBetween":30},
                            "840":{
                                "slidesPerView":1,
                                "spaceBetween":30},
                            "1140":{
                                "slidesPerView":1,
                                "spaceBetween":30}
                            }
                        }'>

                        {/* 👇 Wrapper untuk semua slide 👇 */}
                        <div className="swiper-wrapper">

                            {/* --- Slide 1: Ibu Rani --- */}
                            <div className="swiper-slide">
                                <div className="testimonials-wrapper">
                                    <div className="wrapper-inner">
                                        <div className="content">
                                            <h4 className="author">Ibu Rani, orang tua Aira (5 tahun)</h4>
                                            <p className="desig"></p>
                                            <p className="desc">Awalnya anak saya pemalu dan sulit fokus, tapi setelah ikut program di KindboLab, dia jadi lebih berani mencoba hal baru. Sekarang setiap minggu dia selalu tanya, ‘Kapan ke Kindbo lagi?’ 😊</p>
                                            <ul className="star-rating-area">
                                                <li><a href="#"><i className="fa-sharp fa-solid fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa-sharp fa-solid fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa-sharp fa-solid fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa-sharp fa-solid fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa-sharp fa-solid fa-star"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="testimonials-shape-image">
                                            <div className="shape one"><img src="assets/images/banner/shape/13.svg" alt="shape_image" /></div>
                                            <div className="shape two"><img src="assets/images/banner/shape/14.svg" alt="shape_image" /></div>
                                            <div className="shape three"><img src="assets/images/banner/shape/15.svg" alt="shape_image" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* --- Akhir Slide 1 --- */}

                            {/* --- Slide 2: Pak Dimas --- */}
                            <div className="swiper-slide">
                                <div className="testimonials-wrapper">
                                    <div className="wrapper-inner">
                                        <div className="content">
                                            <h4 className="author">Pak Dimas, ayah dari Nara (6 tahun)</h4>
                                            <p className="desig"></p>
                                            <p className="desc">Saya suka sekali konsep KindboLab yang tidak memaksa anak belajar, tapi justru membuat mereka penasaran. Anak saya jadi sering cerita sendiri tentang apa yang dia temukan di kelas tematiknya.</p>
                                            {/* Saya gunakan rating yang sama untuk konsistensi */}
                                            <ul className="star-rating-area">
                                                <li><a href="#"><i className="fa-sharp fa-solid fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa-sharp fa-solid fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa-sharp fa-solid fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa-sharp fa-solid fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa-sharp fa-solid fa-star"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="testimonials-shape-image">
                                            <div className="shape one"><img src="assets/images/banner/shape/13.svg" alt="shape_image" /></div>
                                            <div className="shape two"><img src="assets/images/banner/shape/14.svg" alt="shape_image" /></div>
                                            <div className="shape three"><img src="assets/images/banner/shape/15.svg" alt="shape_image" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* --- Akhir Slide 2 --- */}

                            {/* --- Slide 3: Ibu Sari --- */}
                            <div className="swiper-slide">
                                <div className="testimonials-wrapper">
                                    <div className="wrapper-inner">
                                        <div className="content">
                                            <h4 className="author">Ibu Sari, orang tua Livia (4 tahun)</h4>
                                            <p className="desig"></p>
                                            <p className="desc">Yang saya suka, kegiatan di KindboLab bisa dinikmati bareng anak. Kami jadi punya waktu berkualitas sambil belajar hal baru bersama.</p>
                                            {/* Saya gunakan rating yang sama untuk konsistensi */}
                                            <ul className="star-rating-area">
                                                <li><a href="#"><i className="fa-sharp fa-solid fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa-sharp fa-solid fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa-sharp fa-solid fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa-sharp fa-solid fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa-sharp fa-solid fa-star"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="testimonials-shape-image">
                                            <div className="shape one"><img src="assets/images/banner/shape/13.svg" alt="shape_image" /></div>
                                            <div className="shape two"><img src="assets/images/banner/shape/14.svg" alt="shape_image" /></div>
                                            <div className="shape three"><img src="assets/images/banner/shape/15.svg" alt="shape_image" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* --- Akhir Slide 3 --- */}

                        </div>
                        {/* --- Akhir swiper-wrapper --- */}
                    </div>

                    {/* --- Tombol Navigasi (Sama seperti sebelumnya) --- */}
                    <div className="swiper-btn swiper-button-next3">
                        <div className="inner">
                            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.6918 20C1.80148 20.0006 1.91019 19.9796 2.01173 19.9381C2.11326 19.8967 2.2056 19.8356 2.28347 19.7583L9.0918 12.95C9.47983 12.5629 9.78769 12.1032 9.99774 11.5969C10.2078 11.0907 10.3159 10.5481 10.3159 10C10.3159 9.45194 10.2078 8.90926 9.99774 8.40305C9.78769 7.89685 9.47983 7.43705 9.0918 7.05L2.28347 0.241678C2.20577 0.163979 2.11353 0.102345 2.01201 0.0602948C1.91049 0.0182446 1.80169 -0.00339842 1.6918 -0.00339842C1.58192 -0.00339842 1.47311 0.0182446 1.3716 0.0602948C1.27008 0.102345 1.17784 0.163979 1.10014 0.241678C1.02244 0.319376 0.960803 0.411618 0.918753 0.513136C0.876703 0.614655 0.85506 0.723461 0.85506 0.833344C0.85506 0.943226 0.876703 1.05203 0.918753 1.15355C0.960803 1.25507 1.02244 1.34731 1.10014 1.42501L7.90847 8.23333C8.37664 8.70209 8.6396 9.3375 8.6396 10C8.6396 10.6625 8.37664 11.2979 7.90847 11.7667L1.10014 18.575C1.02203 18.6525 0.960034 18.7446 0.917726 18.8462C0.875419 18.9477 0.853638 19.0566 0.853638 19.1667C0.853638 19.2767 0.875419 19.3856 0.917726 19.4871C0.960034 19.5887 1.02203 19.6809 1.10014 19.7583C11.178 19.8356 1.27035 19.8967 1.37188 19.9381C1.47341 19.9796 1.58213 20.0006 1.6918 20Z" fill="#262626" />
                            </svg>
                        </div>
                    </div>
                    <div className="swiper-btn swiper-button-prev3">
                        <div className="inner">
                            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.30869 20C9.19901 20.0006 9.09029 19.9796 8.98876 19.9381C8.88723 19.8966 8.79488 19.8355 8.71702 19.7583L1.90869 12.95C1.52066 12.5629 1.2128 12.1031 1.00275 11.5969C0.792694 11.0907 0.68457 10.548 0.68457 9.99998C0.68457 9.45192 0.792694 8.90924 1.00275 8.40303C1.2128 7.89683 1.52066 7.43703 1.90869 7.04998L8.71702 0.241658C8.79472 0.163959 8.88696 0.102325 8.98848 0.0602752C9.09 0.018225 9.1988 -0.00341797 9.30869 -0.00341797C9.41857 -0.00341797 9.52737 0.018225 9.62889 0.0602752C9.73041 0.102325 9.82265 0.163959 9.90035 0.241658C9.97805 0.319357 10.0397 0.411599 10.0817 0.513117C10.1238 0.614635 10.1454 0.723442 10.1454 0.833324C10.1454 0.943207 10.1238 1.05201 10.0817 1.15353C10.0397 1.25505 9.97805 1.34729 9.90035 1.42499L3.09202 8.23332C2.62385 8.70207 2.36088 9.33748 2.36088 9.99998C2.36088 10.6625 2.62385 11.2979 3.09202 11.7666L9.90035 18.575C9.97846 18.6524 10.0405 18.7446 10.0828 18.8462C10.1251 18.9477 10.1469 19.0566 10.1469 19.1666C10.1469 19.2766 10.1251 19.3856 10.0828 19.4871C10.0405 19.5887 9.97846 19.6808 9.90035 19.7583C9.82248 19.8355 9.73014 19.8966 9.62861 19.9381C9.52708 19.9796 9.41836 20.0006 9.30869 20Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <img className="banner-bg-shape-3" src="assets/images/banner/banner-bg-2.png" alt="" />
        </section>
    );
};

export default Testimonials;