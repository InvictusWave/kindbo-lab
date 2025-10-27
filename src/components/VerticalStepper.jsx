
import React, { useState } from 'react';
import { steps } from '../data/thematicServices';

const VerticalStepper = ({ id }) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepClick = (index) => {
        if (activeStep !== index) {
            setActiveStep(index);
        }
    };

    return (
        <section id={id} className="rts-vertical-stepper rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center ">
                            <p className="pre-title justify-content-center"><img src="assets/images/banner/title-img.svg" alt="" />Layanan</p>
                            <h2 className="section-title">Layanan Tematik</h2>
                            <p className="desc">Kami menawarkan berbagai layanan tematik yang dirancang untuk merangsang kreativitas, <br /> pengetahuan, dan keterampilan anak-anak melalui pendekatan yang menyenangkan dan edukatif.</p>
                        </div>
                    </div>
                </div>
                <div className="row g-5 pt-4">
                    <div className="col-lg-4 d-none d-lg-block">
                        <div className="stepper-wrapper">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`stepper-item ${index === activeStep ? 'active' : ''}`}
                                    onClick={() => setActiveStep(index)}
                                >
                                    <div className="step-counter">{index + 1}</div>
                                    <div className="step-name">{step.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-8 d-none d-lg-block">
                        <div className="stepper-content">
                            <div className="stepper-pane">
                                <img src={steps[activeStep].image} alt={steps[activeStep].title} className={"rounded-3"} />
                                <h2>{steps[activeStep].title}</h2>
                                <p>{steps[activeStep].content}</p>
                                <a href={steps[activeStep].link} className="rts-btn btn-primary border-radius fw-bolder" target="_blank" rel="noopener noreferrer">
                                    Daftar Sekarang
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-lg-none">
                        <div className="accordion-wrapper">
                            {steps.map((step, index) => (
                                <div key={index} className="accordion-item">
                                    <div
                                        className={`accordion-header ${index === activeStep ? 'active' : ''}`}
                                        onClick={() => handleStepClick(index)}
                                    >
                                        {step.title}
                                    </div>
                                    {index === activeStep && (
                                        <div className="accordion-content">
                                            <img src={step.image} alt={step.title} />
                                            <p>{step.content}</p>
                                            <a href={step.link} className="rts-btn btn-primary border-radius fw-bolder" target="_blank" rel="noopener noreferrer">
                                                Daftar Sekarang
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VerticalStepper;
