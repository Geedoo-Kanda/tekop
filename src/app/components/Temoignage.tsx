import React from "react";
import Slider from "react-slick";


export default function Temoignage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        slidesToScroll: 1,
    };
    return (
        <div className="bg-gray-50 py-12 mt-20 rounded-xl px-8 dark:bg-gray-900 md:container mx-auto">
            <div className="flex mb-5 px-4">
                <span className="flex text-xs items-center border border-green-500 rounded-full py-1 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" className="mr-1 text-green-500" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 14.475l1.9 1.15q.275.175.55-.012t.2-.513l-.5-2.175l1.7-1.475q.25-.225.15-.537t-.45-.338l-2.225-.175l-.875-2.05q-.125-.3-.45-.3t-.45.3l-.875 2.05l-2.225.175q-.35.025-.45.338t.15.537l1.7 1.475l-.5 2.175q-.075.325.2.513t.55.012zM8.65 20H6q-.825 0-1.412-.587T4 18v-2.65L2.075 13.4q-.275-.3-.425-.662T1.5 12q0-.375.15-.737t.425-.663L4 8.65V6q0-.825.588-1.412T6 4h2.65l1.95-1.925q.3-.275.663-.425T12 1.5q.375 0 .738.15t.662.425L15.35 4H18q.825 0 1.413.588T20 6v2.65l1.925 1.95q.275.3.425.663t.15.737q0 .375-.15.738t-.425.662L20 15.35V18q0 .825-.587 1.413T18 20h-2.65l-1.95 1.925q-.3.275-.662.425T12 22.5q-.375 0-.737-.15t-.663-.425zm.85-2l2.5 2.5l2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5L9.5 6H6v3.5L3.5 12L6 14.5V18zm2.5-6" /></svg>
                    Les Temoignages</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 my-5 px-4">
                <h1 className="text-xl md:text-3xl font-semibold">Découvrez <span className="text-green-500">les témoignages élogieux</span> de nos clients satisfaits, partageant leur expérience exceptionnelle et les raisons pour lesquelles ils ont choisi notre service.</h1>
                <p className="text-md md:text-lg text-gray-600 dark:text-white text-justify indent-10  hidden md:flex">
                    Explorez les récits captivants de nos clients comblés, qui partagent avec enthousiasme leur expérience exceptionnelle avec notre service. Ces témoignages sincères reflètent la satisfaction de ceux qui ont choisi notre entreprise, mettant en lumière la qualité de nos produits/services et l&apos;engagement inébranlable envers l&apos;excellence qui définit notre marque. Plongez dans ces histoires inspirantes et découvrez pourquoi choisir [nom de votre entreprise] est synonyme de satisfaction garantie.
                </p>
            </div>
            <Slider className="" {...settings}>
                <div className="md:px-4">
                    <div className="md:grid md:grid-cols-2">
                        <div className='bg-green-50 dark:bg-green-900/15 rounded-l-xl p-3 relative overflow-hidden h-full flex items-center'>
                            <div className="text-center">
                                <p className='flex text-green-300 justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                </p>
                                <p className='my-3 text-xs md:text-sm text-gray-700 dark:text-white md:min-h-20 flex items-center '>
                                    Geedoo Kanda assure une expérience utilisateur d&apos;excellence, offrant un accompagnement optimal. Le design, à la fois épuré et attrayant, contribue à une interface visuelle captivante pour les utilisateurs, renforçant ainsi la qualité globale de l&apos;expérience utilisateur.
                                </p>
                                <p className='flex text-green-300 justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                </p>
                                <p className='text-center font-semibold text-sm md:text-md text-gray-800 dark:text-white mt-5'>Kalombo franck</p>
                                <small className='text-xs italic text-gray-500 dark:text-white'>Ingénieur informaticien • Dévéloppeur</small>
                            </div>
                        </div>
                        <div className="hidden md:flex">
                            <img src="/images/blog/1.jpg" alt="" className="rounded-r-xl" />
                        </div>
                    </div>
                </div>
                <div className="md:px-4 px-2">
                    <div className="grid md:grid-cols-2">
                        <div className='bg-green-50 dark:bg-green-900/15 rounded-l-xl p-3 relative overflow-hidden h-full flex items-center'>

                            <div className="text-center">
                                <p className='flex text-green-300 justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                </p>
                                <p className='my-3 text-xs md:text-sm text-gray-700 dark:text-white md:min-h-20 flex items-center '>
                                    Geedoo Kanda assure une expérience utilisateur d&apos;excellence, offrant un accompagnement optimal. Le design, à la fois épuré et attrayant, contribue à une interface visuelle captivante pour les utilisateurs, renforçant ainsi la qualité globale de l&apos;expérience utilisateur.
                                </p>
                                <p className='flex text-green-300 justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                </p>
                                <p className='text-center font-semibold text-sm md:text-md text-gray-800 dark:text-white mt-5'>Kalombo franck</p>
                                <small className='text-xs italic text-gray-500 dark:text-white'>Ingénieur informaticien • Dévéloppeur</small>
                            </div>

                        </div>
                        <div className="hidden md:flex">
                            <img src="/images/blog/2.jpg" alt="" className="rounded-r-xl" />
                        </div>
                    </div>
                </div>
                <div className="md:px-4 px-2">
                    <div className="grid md:grid-cols-2">
                        <div className='bg-green-50 dark:bg-green-900/15 rounded-l-xl p-3 relative overflow-hidden h-full flex items-center'>

                            <div className="text-center">
                                <p className='flex text-green-300 justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                </p>
                                <p className='my-3 text-xs md:text-sm text-gray-700 dark:text-white md:min-h-20 flex items-center '>
                                    Geedoo Kanda assure une expérience utilisateur d&apos;excellence, offrant un accompagnement optimal. Le design, à la fois épuré et attrayant, contribue à une interface visuelle captivante pour les utilisateurs, renforçant ainsi la qualité globale de l&apos;expérience utilisateur.
                                </p>
                                <p className='flex text-green-300 justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                </p>
                                <p className='text-center font-semibold text-sm md:text-md text-gray-800 dark:text-white mt-5'>Kalombo franck</p>
                                <small className='text-xs italic text-gray-500 dark:text-white'>Ingénieur informaticien • Dévéloppeur</small>
                            </div>

                        </div>
                        <div className="hidden md:flex">
                            <img src="/images/blog/3.jpg" alt="" className="rounded-r-xl" />
                        </div>
                    </div>
                </div>
                <div className="md:px-4 px-2">
                    <div className="grid md:grid-cols-2">
                        <div className='bg-green-50 dark:bg-green-900/15 rounded-l-xl p-3 relative overflow-hidden h-full flex items-center'>

                            <div className="text-center">
                                <p className='flex text-green-300 justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                </p>
                                <p className='my-3 text-xs md:text-sm text-gray-700 dark:text-white md:min-h-20 flex items-center '>
                                    Geedoo Kanda assure une expérience utilisateur d&apos;excellence, offrant un accompagnement optimal. Le design, à la fois épuré et attrayant, contribue à une interface visuelle captivante pour les utilisateurs, renforçant ainsi la qualité globale de l&apos;expérience utilisateur.
                                </p>
                                <p className='flex text-green-300 justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                </p>
                                <p className='text-center font-semibold text-sm md:text-md text-gray-800 dark:text-white mt-5'>Kalombo franck</p>
                                <small className='text-xs italic text-gray-500 dark:text-white'>Ingénieur informaticien • Dévéloppeur</small>
                            </div>

                        </div>
                        <div className="hidden md:flex">
                            <img src="/images/blog/4.jpg" alt="" className="rounded-r-xl" />
                        </div>
                    </div>
                </div>
                <div className="md:px-4 px-2">
                    <div className="grid md:grid-cols-2">
                        <div className='bg-green-50 dark:bg-green-900/15 rounded-l-xl p-3 relative overflow-hidden h-full flex items-center'>

                            <div className="text-center">
                                <p className='flex text-green-300 justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                </p>
                                <p className='my-3 text-xs md:text-sm text-gray-700 dark:text-white md:min-h-20 flex items-center '>
                                    Geedoo Kanda assure une expérience utilisateur d&apos;excellence, offrant un accompagnement optimal. Le design, à la fois épuré et attrayant, contribue à une interface visuelle captivante pour les utilisateurs, renforçant ainsi la qualité globale de l&apos;expérience utilisateur.
                                </p>
                                <p className='flex text-green-300 justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5" /></svg>
                                </p>
                                <p className='text-center font-semibold text-sm md:text-md text-gray-800 dark:text-white mt-5'>Kalombo franck</p>
                                <small className='text-xs italic text-gray-500 dark:text-white'>Ingénieur informaticien • Dévéloppeur</small>
                            </div>

                        </div>
                        <div className="hidden md:flex">
                            <img src="/images/blog/5.jpg" alt="" className="rounded-r-xl" />
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
}
