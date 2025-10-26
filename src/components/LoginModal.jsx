
import React from 'react';

const LoginModal = () => {
    return (
        <div className="modal login-pupup-modal fade" id="exampleModal-login" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Hai, Selamat datang kembali!</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action="#" className="login-form">
                            <input type="text" placeholder="Nama Pengguna atau Alamat Email" required />
                            <input type="password" placeholder="Kata Sandi" required />
                            <div className="d-flex mb--20 align-items-center">
                                <input type="checkbox" id="examplecheck-modal" />
                                <label htmlFor="examplecheck-modal">Saya setuju dengan syarat penggunaan dan kebijakan privasi.</label>
                            </div>
                            <button type="submit" className="rts-btn btn-primary">Masuk</button>

                            <p className="dont-acc mt--20">Tidak Punya Akun? <a href="registration.html">Daftar</a> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
