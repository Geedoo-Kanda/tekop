"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Theme from './Theme';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition < 200) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div>
            <nav className={`bg-gray-50 dark:bg-gray-900 w-[90%] ml-[5%] shadow-md rounded-md py-3 border border-green-500/40 px-4 fixed z-50 ${showNavbar ? '' : 'hidden'}`}>
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="font-bold text-xl text-green-500">TekOp</div>
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-500 focus:outline-none focus:text-gray-700"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>
                        <ul className='md:flex text-sm hidden space-x-4 text-gray-700 items-center'>

                            <Link href="/" className="text-gray-700 dark:text-white dark:hover:text-green-500 hover:text-green-500 nav-link cursor-pointer" >
                                Accueil
                            </Link>
                            <Link href="produits" className="text-gray-700 dark:text-white dark:hover:text-green-500 hover:text-green-500 nav-link cursor-pointer" >
                                Produits
                            </Link>
                            <Link href="blog" className="text-gray-700 dark:text-white dark:hover:text-green-500 hover:text-green-500 nav-link cursor-pointer" >
                                Blog
                            </Link>
                           
                            <Link href="" className=" nav-link cursor-pointer text-white bg-green-500 py-2 px-3 rounded-lg flex" >
                                Demander un devis
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className={`bg-black/30 fixed h-screen w-screen z-50 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} top-0 transition-opacity duration-300 ease-in-out`}>
                <div className={`fixed bg-white dark:bg-gray-900 h-screen w-[80%] top-0 right-0 pt-8 px-4 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='flex justify-end items-end -mt-4'>
                        <svg onClick={() => setIsMenuOpen(!isMenuOpen)} xmlns="http://www.w3.org/2000/svg" className='text-gray-700 dark:text-white dark:hover:text-green-500 hover:text-green-500' width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 18L18 6m0 12L6 6" /></svg>
                    </div>
                    <ul className='grid grid-cols-1 text-center gap-4 mt-8 text-gray-700'>

                        <Link href="/" className="text-gray-700 dark:text-white hover:text-green-500 nav-link cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            Accueil
                        </Link>
                        <Link href="produits" className="text-gray-700 dark:text-white hover:text-green-500 nav-link cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            Produits
                        </Link>
                        <Link href="blog" className="text-gray-700 dark:text-white hover:text-green-500 nav-link cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            Blog
                        </Link>
                       
                        <div className='flex justify-center'>
                            <Link href="" className="text-white bg-green-500 py-2 px-4 rounded-lg flex" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                Demandez un devis
                            </Link>
                        </div>
                    </ul>
                    <div className='absolute h-full bottom-0'>
                        <Theme />
                    </div>
                </div>
            </div>
            <button
                id="scrollToTopBtn"
                onClick={scrollToTop}
                className="text-white fixed bottom-5 right-5 hover:bg-green-600 bg-green-500 p-3 rounded-full z-40 animate-bounce shadow-md border nav-link cursor-pointer"
                style={{ display: showNavbar ? 'block' : 'none' }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m11 7.825l-4.9 4.9q-.3.3-.7.288t-.7-.313q-.275-.3-.288-.7t.288-.7l6.6-6.6q.15-.15.325-.212T12 4.425q.2 0 .375.063t.325.212l6.6 6.6q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3L13 7.825V19q0 .425-.288.713T12 20q-.425 0-.712-.288T11 19z" /></svg>
            </button>
        </div>
    );
};

export default Navbar;
