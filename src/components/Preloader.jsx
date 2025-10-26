
import React from 'react';

const Preloader = () => {
    return (
        <div id="preloader" className="preloader">
            <div className="animation-preloader">
                <div className="txt-loading">
                    <span data-text-preloader="K" className="letters-loading first">
                        K
                    </span>
                    <span data-text-preloader="I" className="letters-loading first">
                        I
                    </span>
                    <span data-text-preloader="N" className="letters-loading first">
                        N
                    </span>
                    <span data-text-preloader="B" className="letters-loading first">
                        B
                    </span>
                    <span data-text-preloader="O" className="letters-loading first">
                        O
                    </span>
                    <span data-text-preloader="L" className="letters-loading">
                        L
                    </span>
                    <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
                    <span data-text-preloader="B" className="letters-loading">
                        B
                    </span>
                </div>
                <p className="text-center">Memuat</p>
            </div>
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
