import React, {useState} from 'react';
import {events} from '../data/eventsData';
import {Link} from 'react-router-dom';

const EventsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [displayMode, setDisplayMode] = useState('grid'); // 'grid' or 'list'
    const [sortCriteria, setSortCriteria] = useState('default'); // e.g., 'default', 'title-asc', 'title-desc', 'category-asc', 'category-desc'
    const eventsPerPage = 8;

    // Apply sorting before pagination
    const sortedEvents = [...events].sort((a, b) => {
        if (sortCriteria === 'title-asc') {
            return a.title.localeCompare(b.title);
        } else if (sortCriteria === 'title-desc') {
            return b.title.localeCompare(a.title);
        } else if (sortCriteria === 'category-asc') {
            return a.category.localeCompare(b.category);
        } else if (sortCriteria === 'category-desc') {
            return b.category.localeCompare(a.category);
        }
        return 0;
    });

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = sortedEvents.slice(indexOfFirstEvent, indexOfLastEvent);

    const totalPages = Math.ceil(sortedEvents.length / eventsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleDisplayModeChange = (mode) => {
        setDisplayMode(mode);
    };

    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
        setCurrentPage(1); // Reset to first page on sort change
    };

    const bgClasses = ['bg-one', 'bg-four', 'bg-two', 'bg-three'];

    return (
        <>
            <div className="pt--100 pb--70 rts-breadcrumb-area">

            </div>

            <div className="rts-course-default-area rts-section-gap rts-shape-move">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="filter-small-top-full">
                                <div className="left-filter">
                                    <span>Urutkan berdasarkan</span>
                                    <select name="sort" value={sortCriteria} onChange={handleSortChange}>
                                        <option value="default">Default</option>
                                        <option value="title-asc">Judul (A-Z)</option>
                                        <option value="title-desc">Judul (Z-A)</option>
                                        <option value="category-asc">Kategori (A-Z)</option>
                                        <option value="category-desc">Kategori (Z-A)</option>
                                    </select>
                                </div>
                                <div className="right-filter">
                                    <span>Menampilkan {indexOfFirstEvent + 1}-{indexOfLastEvent > sortedEvents.length ? sortedEvents.length : indexOfLastEvent} dari {sortedEvents.length} hasil</span>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${displayMode === 'grid' ? 'active' : ''}`} onClick={() => handleDisplayModeChange('grid')} id="home-tab" data-bs-toggle="tab"
                                                    data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                                    aria-selected={displayMode === 'grid'}>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M1.75 0.5H5.5C5.83152 0.5 6.14946 0.631696 6.38388 0.866116C6.6183 1.10054 6.75 1.41848 6.75 1.75V5.5C6.75 5.83152 6.6183 6.14946 6.38388 6.38388C6.14946 6.6183 5.83152 6.75 5.5 6.75H1.75C1.41848 6.75 1.10054 6.6183 0.866116 6.38388C0.631696 6.14946 0.5 5.83152 0.5 5.5V1.75C0.5 1.41848 0.631696 1.10054 0.866116 0.866116C1.10054 0.631696 1.41848 0.5 1.75 0.5ZM1.75 5.5H5.5V1.75H1.75V5.5ZM10.5 0.5H14.25C14.5815 0.5 14.8995 0.631696 15.1339 0.866116C15.3683 1.10054 15.5 1.41848 15.5 1.75V5.5C15.5 5.83152 15.3683 6.14946 15.1339 6.38388C14.8995 6.6183 14.5815 6.75 14.25 6.75H10.5C10.1685 6.75 9.85054 6.6183 9.61612 6.38388C9.3817 6.14946 9.25 5.83152 9.25 5.5V1.75C9.25 1.41848 9.3817 1.10054 9.61612 0.866116C9.85054 0.631696 10.1685 0.5 10.5 0.5ZM10.5 5.5H14.25V1.75H10.5V5.5ZM5.5 9.25H1.75C1.41848 9.25 1.10054 9.3817 0.866116 9.61612C0.631696 9.85054 0.5 10.1685 0.5 10.5V14.25C0.5 14.5815 0.631696 14.8995 0.866116 15.1339C1.10054 15.3683 1.41848 15.5 1.75 15.5H5.5C5.83152 15.5 6.14946 15.3683 6.38388 15.1339C6.6183 14.8995 6.75 14.5815 6.75 14.25V10.5C6.75 10.1685 6.6183 9.85054 6.38388 9.61612C6.14946 9.3817 5.83152 9.25 5.5 9.25ZM5.5 14.25H1.75V10.5H5.5V14.25ZM10.5 9.25H14.25C14.5815 9.25 14.8995 9.3817 15.1339 9.61612C15.3683 9.85054 15.5 10.1685 15.5 10.5V14.25C15.5 14.5815 15.3683 14.8995 15.1339 15.1339C14.8995 15.3683 14.5815 15.5 14.25 15.5H10.5C10.1685 15.5 9.85054 15.3683 9.61612 15.1339C9.3817 14.8995 9.25 14.5815 9.25 14.25V10.5C9.25 10.1685 9.3817 9.85054 9.61612 9.61612C9.85054 9.3817 10.1685 9.25 10.5 9.25ZM10.5 14.25H14.25V10.5H10.5V14.25Z"
                                                          fill="#262626"/>
                                                </svg>
                                                <span>Grid</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${displayMode === 'list' ? 'active' : ''}`} onClick={() => handleDisplayModeChange('list')} id="profile-tab" data-bs-toggle="tab"
                                                    data-bs-target="#profile" type="button" role="tab"
                                                    aria-controls="profile" aria-selected={displayMode === 'list'}>
                                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M5.25 6.75H1.5C1.1686 6.74962 0.850875 6.6178 0.616537 6.38346C0.382199 6.14913 0.25038 5.8314 0.25 5.5V1.75C0.25038 1.4186 0.382199 1.10087 0.616537 0.866537C0.850875 0.632199 1.1686 0.50038 1.5 0.5H5.25C5.5814 0.50038 5.89913 0.632199 6.13346 0.866537C6.3678 1.10087 6.49962 1.4186 6.5 1.75V5.5C6.49962 5.8314 6.3678 6.14913 6.13346 6.38346C5.89913 6.6178 5.5814 6.74962 5.25 6.75ZM1.5 1.75V5.5H5.25075L5.25 1.75H1.5ZM9 3H17.75V4.25H9V3ZM9 11.75H17.75V13H9V11.75ZM1.5 15.5H5.25C5.5814 15.4996 5.89913 15.3678 6.13346 15.1335C6.3678 14.8991 6.49962 14.5814 6.5 14.25V10.5C6.49962 10.1686 6.3678 9.85087 6.13346 9.61654C5.89913 9.3822 5.5814 9.25038 5.25 9.25H1.5C1.1686 9.25038 0.850875 9.3822 0.616537 9.61654C0.382199 9.85087 0.25038 10.1686 0.25 10.5V14.25C0.25038 14.5814 0.382199 14.8991 0.616537 15.1335C0.850875 15.3678 1.1686 15.4996 1.5 15.5ZM1.5 14.25V10.5H5.25L5.25075 14.25H1.5Z"
                                                          fill="#110C2D"/>
                                                </svg>
                                                <span>Daftar</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div className={`tab-pane fade ${displayMode === 'grid' ? 'show active' : ''}`} id="home" role="tabpanel"
                                     aria-labelledby="home-tab">
                                    <div className="row g-5 mt--30">
                                        {currentEvents.map((event, index) => (
                                            <div key={event.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-category="transition">
                                                {/* rts single course */}
                                                <div className="course-wrapper-style-2 inner">
                                                    <div className={`wrapper-inner ${bgClasses[index % bgClasses.length]}`}>
                                                        <div className="image">
                                                            <Link to={`/event-details/${event.id}`}><img
                                                                src={event.image} alt={event.title}/></Link>
                                                        </div>
                                                        <div className="content">
                                                            <ul className="meta-wrapper">
                                                                <li className="wrapper-list">
                                                                    <div className="icon">
                                                                        <img src="assets/images/icon/13.svg" alt=""/>
                                                                    </div>
                                                                    <p className="desc">{event.duration}</p>
                                                                </li>
                                                                <li className="wrapper-list">
                                                                    <div className="icon">
                                                                        <img src="assets/images/icon/14.svg" alt=""/>
                                                                    </div>
                                                                    <p className="desc">{event.date}</p>
                                                                </li>
                                                            </ul>
                                                            <h4 className="title">{event.title}</h4>
                                                            <div className="bottom-wrapper">
                                                            {/*    ini nanti button redirect ke url*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* rts single course end */}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={`tab-pane fade ${displayMode === 'list' ? 'show active' : ''}`} id="profile" role="tabpanel"
                                     aria-labelledby="profile-tab">
                                    <div className="row g-5 mt--30">
                                        {currentEvents.map((event, index) => (
                                            <div key={event.id} className="col-lg-12">
                                                {/* rts single course */}
                                                <div className="course-wrapper-style-2 course-list-style inner">
                                                    <div className={`wrapper-inner ${bgClasses[index % bgClasses.length]}`}>
                                                        <div className="image">
                                                            <Link to={`/event-details/${event.id}`}><img
                                                                src={event.image} alt={event.title}/></Link>
                                                        </div>
                                                        <div className="content">
                                                            <ul className="meta-wrapper">
                                                                <li className="wrapper-list">
                                                                    <div className="icon">
                                                                        <img src="assets/images/icon/13.svg" alt=""/>
                                                                    </div>
                                                                    <p className="desc">{event.duration}</p>
                                                                </li>
                                                                <li className="wrapper-list">
                                                                    <div className="icon">
                                                                        <img src="assets/images/icon/14.svg" alt=""/>
                                                                    </div>
                                                                    <p className="desc">{event.date}</p>
                                                                </li>
                                                            </ul>
                                                            <h5 className="title">{event.title}</h5>
                                                            <div className="bottom-wrapper">
                                                            {/*   button nanti*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* rts single course end */}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt--30">
                    <div className="col-lg-12">
                        <div className="rts-pagination-area-2">
                            <ul>
                                <li className="button">
                                    <div className="inner"><a href="#" onClick={(e) => e.preventDefault()}><i className="fa-solid fa-chevron-left"></i></a>
                                    </div>
                                </li>
                                {[...Array(totalPages).keys()].map(number => (
                                    <li key={number + 1} className={currentPage === number + 1 ? 'active' : ''}>
                                        <a onClick={(e) => {
                                            e.preventDefault();
                                            paginate(number + 1);
                                        }} href="#">
                                            {number + 1}
                                        </a>
                                    </li>
                                ))}
                                <li className="button">
                                    <div className="inner"><a href="#" onClick={(e) => e.preventDefault()}><i className="fa-solid fa-chevron-right"></i></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventsPage;
