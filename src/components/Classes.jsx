import React from 'react';

const Classes = ({ id }) => {
    return (
        <section id={id} className="rts-class-area">
            <div className="container">
                <div className="section-title-area text-center">
                    <p className="pre-title justify-content-center"><img src="assets/images/banner/title-img.svg" alt="" />Jenjang Petualangan di KindboLab</p>
                    <h2 className="section-title">Setiap Usia, Punya Petualangan Belajarnya Sendiri</h2>
                    <p className="desc">Setiap tahap usia membawa cara baru untuk belajar, bereksperimen, <br />dan menemukan keajaiban lewat pengalaman nyata.</p>
                </div>
                <div className="section-inner">
                    <div className="row g-5">

                        {/* --- Kolom 1 --- */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* 👇 Tambahkan 'h-100' di sini */}
                            <div className="class-wrapper h-100">
                                <div className="wrapper-inner">
                                    <div className="icon">
                                        <img src="assets/images/icon/03.svg" alt="" />
                                    </div>
                                    <a href="program-details.html">
                                        <h4 className="title">Balita</h4>
                                    </a>
                                    <p className="period">(2–3 tahun)</p>
                                    <p className="desc"><strong>Petualangan Pertama: Mengenal Dunia Lewat Indera.</strong> <br />Anak mulai menjelajah lewat sentuhan, warna, dan bunyi — fondasi awal untuk tumbuhnya rasa ingin tahu.</p>                                    <div className="shape-icon"><img src="assets/images/banner/blink.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>

                        {/* --- Kolom 2 --- */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* 👇 Tambahkan 'h-100' di sini */}
                            <div className="class-wrapper two h-100">
                                <div className="wrapper-inner">
                                    <div className="icon">
                                        <img src="assets/images/icon/04.svg" alt="" />
                                    </div>
                                    <a href="program-details.html">
                                        <h4 className="title">Prasekolah</h4>
                                    </a>
                                    <p className="period">( 4 - 5 tahun)</p>
                                    <p className="desc"><strong>Petualangan Kreatif: Mencoba, Membentuk, dan Bertanya</strong> <br/> Anak mulai berekspresi lewat karya, permainan peran, dan eksperimen sederhana.</p>
                                    <div className="shape-icon"><img src="assets/images/banner/blink.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>

                        {/* --- Kolom 3 --- */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* 👇 Tambahkan 'h-100' di sini */}
                            <div className="class-wrapper three h-100">
                                <div className="wrapper-inner">
                                    <div className="icon">
                                        <img src="assets/images/icon/05.svg" alt="" />
                                    </div>
                                    <a href="program-details.html">
                                        <h4 className="title">TK</h4>
                                    </a>
                                    <p className="period">( 5 - 6 tahun)</p>
                                    <p className="desc"><strong>Petualangan Mandiri: Belajar Lewat Proyek dan Kolaborasi</strong><br/>Anak mulai memahami proses, berinteraksi, dan menciptakan sesuatu bersama teman.</p>
                                    <div className="shape-icon"><img src="assets/images/banner/blink.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>

                        {/* --- Kolom 4 --- */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* 👇 Tambahkan 'h-100' di sini */}
                            <div className="class-wrapper four h-100">
                                <div className="wrapper-inner">
                                    <div className="icon">
                                        <img src="assets/images/icon/06.svg" alt="" />
                                    </div>
                                    <a href="program-details.html">
                                        <h4 className="title">SD</h4>
                                    </a>
                                    <p className="period">( 7 - 10 tahun)</p>
                                    <p className="desc"><strong>Petualangan Penemu: Menghubungkan Ide dan Dunia Nyata</strong><br/>Anak mulai berpikir kritis, berinovasi, dan menemukan “aha moment” lewat kegiatan tematik yang menantang.</p>
                                    <div className="shape-icon"><img src="assets/images/banner/blink.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Classes;