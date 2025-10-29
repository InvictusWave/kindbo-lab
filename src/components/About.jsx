
import React from 'react';

const About = ({ id }) => {
    return (
        <>
            <section id={id} className="rts-about-area rts-shape-move rts-section-gap">
                <div className="container">
                    <div className="section-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about-image">
                                    <img src="assets/images/about/about-1.webp" width="630" height="473" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <div className="section-title-area">
                                        <p className="pre-title"><img src="assets/images/banner/title-img.svg" alt="" />Tentang Kami</p>
                                        <h2 className="section-title">Tempat Anak Bereksperimen, Bermain, dan Berkembang</h2>
                                        <p className="desc">KindboLab adalah ruang eksplorasi tematik bagi anak untuk belajar lewat pengalaman nyata. Kami percaya, rasa ingin tahu adalah awal dari kreativitas dan keberanian mencoba. Di sini, anak-anak tidak hanya belajar — tapi menemukan, bereksperimen, dan berkreasi melalui berbagai pengalaman bermakna setiap aktivitasnya</p>
                                    </div>
                                    <ul className="about-wrapper">
                                        <li className="wrapper-list">
                                            <div className="list-inner">
                                                <div className="icon"><img src="assets/images/icon/01.svg" alt="" /></div>
                                                <div className="content">
                                                    <h4 className="title">Visi</h4>
                                                    <p className="desc">Menjadi ruang eksplorasi yang menumbuhkan rasa ingin tahu, kreativitas, dan kemandirian anak melalui pengalaman belajar yang bermakna dan menyenangkan.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="wrapper-list">
                                            <div className="list-inner">
                                                <div className="icon"><img src="assets/images/icon/02.svg" alt="" /></div>
                                                <div className="content">
                                                    <h4 className="title">Misi</h4>
                                                    <p className="desc">Menghadirkan ruang tematik yang mendorong anak bereksperimen dan berkreasi melalui pengalaman langsung, menumbuhkan rasa percaya diri, empati, dan keberanian mencoba, serta melibatkan orang tua dalam proses belajar yang bermakna dan menyenangkan.</p>
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
                                <img src="assets/images/about/about-2.webp" width="295" height="393" alt="" />
                                <img className="shape-img" src="assets/images/about/shape-01.png" alt="" />
                                <img className="shape-img2" src="assets/images/banner/shape/02.svg" alt="" />
                            </div>
                            <div className="right-side-content">
                                <h2 className="heading-title">Mengapa kami hadir</h2>
                                <p className="desc">Di tengah dunia yang serba cepat dan digital, anak-anak membutuhkan ruang untuk berhenti sejenak — untuk merasakan, mencoba, dan menemukan.
                                    KindboLab hadir sebagai tempat di mana rasa ingin tahu anak tak hanya dijawab, tapi dirayakan.
                                    Kami ingin mengembalikan keajaiban belajar yang lahir dari tangan kotor, tawa lepas, dan momen “Aha!” saat anak menemukan hal baru dengan caranya sendiri.
                                </p>
                                {/*<div className="button-area">*/}
                                {/*    <a href="about.html" className="rts-btn">Kunjungi Sekarang <i className="fa-solid fa-arrow-right"></i></a>*/}
                                {/*</div>*/}
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
