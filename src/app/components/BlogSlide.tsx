import Link from "next/link";
import React from "react";
import Slider from "react-slick";


export default function BlogSlide() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        centerMode: true,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    };
    return (
        <>
            <div className="flex mb-5 mt-20 px-4">
                <span className="flex text-xs items-center border border-green-500 rounded-full py-1 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" className="mr-1 text-green-500" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 14.475l1.9 1.15q.275.175.55-.012t.2-.513l-.5-2.175l1.7-1.475q.25-.225.15-.537t-.45-.338l-2.225-.175l-.875-2.05q-.125-.3-.45-.3t-.45.3l-.875 2.05l-2.225.175q-.35.025-.45.338t.15.537l1.7 1.475l-.5 2.175q-.075.325.2.513t.55.012zM8.65 20H6q-.825 0-1.412-.587T4 18v-2.65L2.075 13.4q-.275-.3-.425-.662T1.5 12q0-.375.15-.737t.425-.663L4 8.65V6q0-.825.588-1.412T6 4h2.65l1.95-1.925q.3-.275.663-.425T12 1.5q.375 0 .738.15t.662.425L15.35 4H18q.825 0 1.413.588T20 6v2.65l1.925 1.95q.275.3.425.663t.15.737q0 .375-.15.738t-.425.662L20 15.35V18q0 .825-.587 1.413T18 20h-2.65l-1.95 1.925q-.3.275-.662.425T12 22.5q-.375 0-.737-.15t-.663-.425zm.85-2l2.5 2.5l2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5L9.5 6H6v3.5L3.5 12L6 14.5V18zm2.5-6" /></svg>
                    Notre Blog</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 my-5 px-4">
                <h1 className="text-xl md:text-3xl font-semibold">Explorez notre <span className="text-green-500">blog</span> et découvrez comment réinventer et révolutionner votre expérience numérique.</h1>
                <p className="text-md md:text-lg text-gray-600 dark:text-white text-justify indent-10  hidden md:flex">
                    Explorez les dernières avancées, suivez les tendances qui émergent et découvrez des histoires captivantes qui non seulement façonnent l&apos;avenir de l&apos;industrie du logiciel, mais également enrichissent votre compréhension et expérience numérique. Rejoignez-nous dans cette aventure passionnante, où l&apos;innovation et la technologie convergent pour créer un paysage dynamique et inspirant.
                </p>
            </div>
            <Slider className="" {...settings}>
                <Link href={"/blog/titre-article"} className="px-4">
                    <div className="bg-[url('/images/blog/1.jpg')] bg-cover w-full bg-center h-60 overflow-hidden rounded-xl">
                        <div className=" bg-gradient-to-b from-black/0 to-black/95 w-full h-full flex items-end p-4">
                            <div className="text-white">
                                <h1 className="text-xl font-semibold ">Informatique Médicale : Révolutionnant les Soins de Santé</h1>
                                <div className="flex space-x-5 items-center text-xs mt-2">
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-green-500" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-1.875 0-3.512-.712t-2.85-1.925q-1.213-1.213-1.925-2.85T3 13q0-1.875.713-3.512t1.924-2.85q1.213-1.213 2.85-1.925T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.712 3.513t-1.925 2.85q-1.213 1.212-2.85 1.925T12 22m2.8-4.8l1.4-1.4l-3.2-3.2V8h-2v5.4zM5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75zM12 20q2.925 0 4.963-2.037T19 13q0-2.925-2.037-4.962T12 6Q9.075 6 7.038 8.038T5 13q0 2.925 2.038 4.963T12 20" /></svg>
                                        <span>le 27 janvier 2024</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-red-500" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412q-.975 1.313-2.625 2.963T13.45 19.7z" /></svg>
                                        <span>13</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/blog/titre-article"} className="px-4">
                    <div className="bg-[url('/images/blog/2.jpg')] bg-cover w-full bg-center h-60 overflow-hidden rounded-xl">
                        <div className=" bg-gradient-to-b from-black/0 to-black/95 w-full h-full flex items-end p-4">
                            <div className="text-white">
                                <h1 className="text-xl font-semibold ">Informatique Médicale : Révolutionnant les Soins de Santé</h1>
                                <div className="flex space-x-5 items-center text-xs mt-2">
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-green-500" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-1.875 0-3.512-.712t-2.85-1.925q-1.213-1.213-1.925-2.85T3 13q0-1.875.713-3.512t1.924-2.85q1.213-1.213 2.85-1.925T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.712 3.513t-1.925 2.85q-1.213 1.212-2.85 1.925T12 22m2.8-4.8l1.4-1.4l-3.2-3.2V8h-2v5.4zM5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75zM12 20q2.925 0 4.963-2.037T19 13q0-2.925-2.037-4.962T12 6Q9.075 6 7.038 8.038T5 13q0 2.925 2.038 4.963T12 20" /></svg>
                                        <span>le 27 janvier 2024</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-red-500" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412q-.975 1.313-2.625 2.963T13.45 19.7z" /></svg>
                                        <span>13</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/blog/titre-article"} className="px-4">
                    <div className="bg-[url('/images/blog/3.jpg')] bg-cover w-full bg-center h-60 overflow-hidden rounded-xl">
                        <div className=" bg-gradient-to-b from-black/0 to-black/95 w-full h-full flex items-end p-4">
                            <div className="text-white">
                                <h1 className="text-xl font-semibold ">Informatique Médicale : Révolutionnant les Soins de Santé</h1>
                                <div className="flex space-x-5 items-center text-xs mt-2">
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-green-500" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-1.875 0-3.512-.712t-2.85-1.925q-1.213-1.213-1.925-2.85T3 13q0-1.875.713-3.512t1.924-2.85q1.213-1.213 2.85-1.925T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.712 3.513t-1.925 2.85q-1.213 1.212-2.85 1.925T12 22m2.8-4.8l1.4-1.4l-3.2-3.2V8h-2v5.4zM5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75zM12 20q2.925 0 4.963-2.037T19 13q0-2.925-2.037-4.962T12 6Q9.075 6 7.038 8.038T5 13q0 2.925 2.038 4.963T12 20" /></svg>
                                        <span>le 27 janvier 2024</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-red-500" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412q-.975 1.313-2.625 2.963T13.45 19.7z" /></svg>
                                        <span>13</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/blog/titre-article"} className="px-4">
                    <div className="bg-[url('/images/blog/4.jpg')] bg-cover w-full bg-center h-60 overflow-hidden rounded-xl">
                        <div className=" bg-gradient-to-b from-black/0 to-black/95 w-full h-full flex items-end p-4">
                            <div className="text-white">
                                <h1 className="text-xl font-semibold ">Informatique Médicale : Révolutionnant les Soins de Santé</h1>
                                <div className="flex space-x-5 items-center text-xs mt-2">
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-green-500" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-1.875 0-3.512-.712t-2.85-1.925q-1.213-1.213-1.925-2.85T3 13q0-1.875.713-3.512t1.924-2.85q1.213-1.213 2.85-1.925T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.712 3.513t-1.925 2.85q-1.213 1.212-2.85 1.925T12 22m2.8-4.8l1.4-1.4l-3.2-3.2V8h-2v5.4zM5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75zM12 20q2.925 0 4.963-2.037T19 13q0-2.925-2.037-4.962T12 6Q9.075 6 7.038 8.038T5 13q0 2.925 2.038 4.963T12 20" /></svg>
                                        <span>le 27 janvier 2024</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-red-500" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412q-.975 1.313-2.625 2.963T13.45 19.7z" /></svg>
                                        <span>13</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/blog/titre-article"} className="px-4">
                    <div className="bg-[url('/images/blog/5.jpg')] bg-cover w-full bg-center h-60 overflow-hidden rounded-xl">
                        <div className=" bg-gradient-to-b from-black/0 to-black/95 w-full h-full flex items-end p-4">
                            <div className="text-white">
                                <h1 className="text-xl font-semibold ">Informatique Médicale : Révolutionnant les Soins de Santé</h1>
                                <div className="flex space-x-5 items-center text-xs mt-2">
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-green-500" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-1.875 0-3.512-.712t-2.85-1.925q-1.213-1.213-1.925-2.85T3 13q0-1.875.713-3.512t1.924-2.85q1.213-1.213 2.85-1.925T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.712 3.513t-1.925 2.85q-1.213 1.212-2.85 1.925T12 22m2.8-4.8l1.4-1.4l-3.2-3.2V8h-2v5.4zM5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75zM12 20q2.925 0 4.963-2.037T19 13q0-2.925-2.037-4.962T12 6Q9.075 6 7.038 8.038T5 13q0 2.925 2.038 4.963T12 20" /></svg>
                                        <span>le 27 janvier 2024</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-red-500" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412q-.975 1.313-2.625 2.963T13.45 19.7z" /></svg>
                                        <span>13</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </Slider>
        </>
    );
}
