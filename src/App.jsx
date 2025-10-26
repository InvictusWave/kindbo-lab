import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <Banner />
                        <About />
                        <Classes />
                        {/*<Categories />*/}
                        {/*<Team />*/}
                        <VerticalStepper />
                        <HomeEvents />
                        <Testimonials />
                    </>
                } />
                <Route path="/events" element={<EventsPage />} />
            </Routes>
            <Footer />
            <Preloader />
            <BackToTop />
            <LoginModal />
            <Sidebar />
        </>
    );
}

export default App;