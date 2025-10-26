import React from 'react';
import { Link } from 'react-router-dom';
import { events } from '../data/eventsData';

const HomeEvents = () => {
    const displayedEvents = events.slice(0, 4);
    const bgClasses = ['bg-one', 'bg-four', 'bg-two', 'bg-three'];

    return (
        <section className="rts-event-area">
            <div className="container">
                <div className="section-title-area text-center">
                    <p className="pre-title justify-content-center"><img src="assets/images/banner/title-img.svg" alt="" />Acara</p>
                    <h2 className="section-title">Acara Mendatang</h2>
                    <p className="desc">Kami sangat senang mengumumkan acara kami yang akan datang, <br /> Hari Penjelajah sebuah perayaan pengetahuan</p>
                </div>
                <div className="section-inner">
                    <div className="row g-5">
                        {displayedEvents.map((event, index) => (
                            <div key={event.id} className="col-lg-6">
                                <div className={`event-wrapper ${index % 2 === 0 ? '' : 'two'}`}>
                                    <div className={`wrapper-inner ${bgClasses[index % 4]}`}>
                                        <div className="content">
                                            <Link to={`/events/${event.id}`}>
                                                <h4 className="title">{event.title}</h4>
                                                <ul className="meta-wrapper">
                                                    <li><i className="fa-light fa-location-dot"></i>{event.location}</li>
                                                    <li><i className="fa-regular fa-calendar-days"></i>{new Date(event.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}</li>
                                                </ul>
                                            </Link>
                                        </div>
                                        <div className="shape-icon"><img src="assets/images/events/event-blink.svg" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="about-btn-area">
                    <Link to="/events" className="rts-btn btn-primary border-radius">Lihat Semua Acara <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
        </section>
    );
};

export default HomeEvents;
