
import React, { useState } from 'react';

const steps = [
    {
        title: 'Layanan Tematik 1',
        content: 'Deskripsi singkat tentang layanan tematik 1.',
        image: 'assets/images/about/about-05.jpg',
        link: 'https://forms.gle/example1',
    },
    {
        title: 'Layanan Tematik 2',
        content: 'Deskripsi singkat tentang layanan tematik 2.',
        image: 'assets/images/about/about-04.png',
        link: 'https://forms.gle/example2',
    },
    {
        title: 'Layanan Tematik 3',
        content: 'Deskripsi singkat tentang layanan tematik 3.',
        image: 'assets/images/about/about-05.jpg',
        link: 'https://forms.gle/example3',
    },
];

const VerticalStepper = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepClick = (index) => {
        if (activeStep !== index) {
            setActiveStep(index);
        }
    };

    return (
        <section className="rts-vertical-stepper rts-section-gap">
            <div className="container">
                <div className="row">
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
                                <img src={steps[activeStep].image} alt={steps[activeStep].title} />
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
