import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchEvents } from '../utils/contentfulClient';

const HomeEvents = () => {
    const [events, setEvents] = useState([]);
    const bgClasses = ['bg-one', 'bg-four', 'bg-two', 'bg-three'];

    useEffect(() => {
        const getEvents = async () => {
            const fetchedEvents = await fetchEvents();
            setEvents(fetchedEvents.slice(0, 4));
        };
        getEvents();
    }, []);

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
                        {events.length > 0 ? (
                            events.map((event, index) => (
                                <div key={event.id} className="col-lg-6">
                                    <div className={`event-wrapper ${index % 2 === 0 ? '' : 'two'}`}>
                                        <div className={`wrapper-inner ${bgClasses[index % 4]}`}>
                                            <div className="content">
                                                <Link to={`/events`}>
                                                    <h4 className="title">{event.title}</h4>
                                                    <ul className="meta-wrapper">
                                                        <li><i className="fa-regular fa-calendar-days"></i>{event.date}</li>
                                                    </ul>
                                                </Link>
                                            </div>
                                            <div className="shape-icon"><img src="assets/images/events/event-blink.svg" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Belum ada Acara untuk saat ini.</p>
                        )}
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
