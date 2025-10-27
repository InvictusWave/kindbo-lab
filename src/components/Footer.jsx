
import React, { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Footer = () => {
    const [result, setResult] = useState("");
    const [hCaptchaToken, setHCaptchaToken] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "26a10ed0-0f57-44c7-ba00-7a5a915736f5");
        // Ensure only h-captcha-response is sent, remove g-recaptcha-response if present
        if (formData.has("g-recaptcha-response")) {
            formData.delete("g-recaptcha-response");
        }
        if (hCaptchaToken) {
            formData.append("h-captcha-response", hCaptchaToken);
        } else {
            setResult("Mohon selesaikan verifikasi hCaptcha.");
            return;
        }

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Terima kasih! Pesan Anda telah terkirim dengan sukses. Kami akan segera menghubungi Anda!" : "Gagal mengirim pesan. Silakan coba lagi nanti.");
    };

    const onHCaptchaChange = (token) => {
        setHCaptchaToken(token);
    };

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
                            <div className="container">
                                <div className="section-inner">
                                    <div className="row">
                                        <div >
                                            <form onSubmit={onSubmit} className="contact-form">
                                                <div className="form-inner">
                                                    <div className="single-input">
                                                        <input type="text" name="name" placeholder="Nama Anda" required />
                                                    </div>
                                                    <div className="single-input">
                                                        <input type="email" name="email" placeholder="Alamat Email" required />
                                                    </div>
                                                    <div className="single-input message">
                                                        <textarea name="message" placeholder="Pesan" required></textarea>
                                                    </div>
                                                    <div className="h-captcha" data-captcha="true">
                                                        <HCaptcha
                                                            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                                                            onVerify={onHCaptchaChange}
                                                        />
                                                    </div>
                                                    <div className="form-btn">
                                                        <button type="submit" className="rts-btn btn-primary">Kirim Pesan</button>
                                                    </div>
                                                    <p style={{ color: result.includes("sukses") ? 'green' : 'red', fontWeight: 'bold', marginTop: '10px' }}>{result}</p>
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
                                <div className="social-media-area">
                                    <ul className="social-media-area">
                                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
