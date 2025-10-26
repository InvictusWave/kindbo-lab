import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Classes from './components/Classes';
import Categories from './components/Categories';
import Team from './components/Team';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import LoginModal from './components/LoginModal';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <>
            <Header />
            <Banner />
            <About />
            <Classes />
            <Categories />
            <Team />
            <Events />
            <Testimonials />
            <Footer />
            <Preloader />
            <BackToTop />
            <LoginModal />
            <Sidebar />
        </>
    );
}

export default App;