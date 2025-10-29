import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Classes from './components/Classes';
import Categories from './components/Categories';
import Team from './components/Team';
import VerticalStepper from './components/VerticalStepper';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import LoginModal from './components/LoginModal';
import Sidebar from './components/Sidebar';
import EventsPage from './components/EventsPage';
import HomeEvents from './components/HomeEvents';
import EmptyState from './components/EmptyState';

function App() {
    const location = useLocation();

    useEffect(() => {
        const scrollToHash = () => {
            if (location.hash) {
                const id = location.hash.slice(1);
                const elem = document.getElementById(id);
                if (elem) {
                    const headerOffset = document.querySelector('.header-one').offsetHeight;
                    const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                } else {
                    // If element not found, retry after a short delay
                    requestAnimationFrame(scrollToHash);
                }
            } else {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }
        };

        scrollToHash();
    }, [location]);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <Banner id="beranda" />
                        <About id="tentang-kami" />
                        <Classes id="kelas" />
                        {/*<Categories />*/}
                        {/*<Team />*/}
                        <VerticalStepper id="layanan-tematik" />
                        <HomeEvents />
                        <Testimonials />
                    </>
                } />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/empty-state" element={<EmptyState />} />
            </Routes>
            <div id="kontak"></div>
            <Footer />
            <Preloader />
            <BackToTop />
            <LoginModal />
            <Sidebar />
        </>
    );
}

export default App;