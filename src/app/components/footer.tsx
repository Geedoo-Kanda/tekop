"use client"

import Link from 'next/link';
import Theme from './Theme';

const Footer: React.FC = () => {

    return (
        <div className="mt-20 bg-gray-100 py-12 px-4 dark:bg-gray-900">
            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4">
                <div className="col-span-2 grid gap-4 grid-cols-2 md:grid-cols-3">
                    <div>
                        <h2 className="text-xl font-semibold mb-7 dark:text-white">Nos coordonnées</h2>
                        <div className="flex mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="text-green-500 mr-3" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3" /></svg>
                            +243 972 062 655
                        </div>
                        <div className="flex mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="text-green-500 mr-3" viewBox="0 0 16 16"><path fill="currentColor" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2l7-4.2V4a1 1 0 0 0-1-1zm13 2.383l-4.708 2.825L15 11.105zm-.034 6.876l-5.64-3.471L8 9.583l-1.326-.795l-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" /></svg>
                            contact@gmail.com
                        </div>
                        <div className="flex mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="text-green-500 mr-3" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" /></svg>
                            Kinshasa, République Démocratique du Congo
                        </div>
                    </div>
                    <ul className='text-gray-700'>
                        <h2 className="text-xl font-semibold mb-7 dark:text-white">Liens</h2>
                        <Link href="/" className="text-gray-700 dark:text-white hover:text-green-500 dark:hover:text-green-500 mt-3 flex" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-3 text-green-500" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z" /><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z" /></svg> Accueil
                        </Link>
                        <Link href="produits" className="text-gray-700 dark:text-white hover:text-green-500 dark:hover:text-green-500 mt-3 flex" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-3 text-green-500" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z" /><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z" /></svg> Produits
                        </Link>
                        <Link href="blog" className="text-gray-700 dark:text-white hover:text-green-500 dark:hover:text-green-500 mt-3 flex" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-3 text-green-500" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z" /><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z" /></svg> Blog
                        </Link>

                    </ul>

                    <ul className='text-gray-700 col-span-2 md:col-span-1 mt-8 md:mt-0'>
                        <h2 className="text-xl font-semibold mb-7 dark:text-white">Nos derniers articles</h2>
                        <Link href="accueil" className="text-gray-700 dark:text-white hover:text-green-500 dark:hover:text-green-500 mt-3 flex" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-3 text-green-500" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z" /><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z" /></svg>Informatique Médicale
                        </Link>
                        <Link href="apropos" className="text-gray-700 dark:text-white hover:text-green-500 dark:hover:text-green-500 mt-3 flex" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-3 text-green-500" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z" /><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z" /></svg>
                            Révolutionnant les Soins de Santé
                        </Link>
                        <Link href="competances" className="text-gray-700 dark:text-white hover:text-green-500 dark:hover:text-green-500 mt-3 flex" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-3 text-green-500" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z" /><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z" /></svg>Informatique  les Soins de Santé
                        </Link>
                        <Link href="contact" className="text-gray-700 dark:text-white hover:text-green-500 dark:hover:text-green-500 mt-3 flex" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-3 text-green-500" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z" /><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z" /></svg>Informatique Révolutionnant les Soins de Santé
                        </Link>
                    </ul>
                    <div className="justify-center flex items-center space-x-1 md:space-x-3 col-span-full">
                        <a href="https://github.com/Geedoo-Kanda" className="p-3 rounded-full text-green-500 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"><path fill="currentColor" d="M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.81 43.81 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.81 43.81 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.72 41.72 0 0 1 7 22.52Z" /></svg>
                        </a>
                        <a href="www.linkedin.com/in/geedoo-kanda" className="p-3 rounded-full text-green-500 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" /><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" fill="currentColor" /></svg>
                        </a>
                        <a href="https://www.instagram.com/geedoo_kanda?igsh=MXc3eXptZ3JwNW96dQ==" className="p-3 rounded-full text-green-500 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89" clip-rule="evenodd" /></svg>
                        </a>
                        <a href="https://x.com/geedoo_k?t=EXi38yxEZIB1ApKSK6rayQ&s=09" className="p-3 rounded-full text-green-500 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
                        </a>
                        <a href="https://www.facebook.com/geedoo.kanda?mibextid=2JQ9oc" className="p-3 rounded-full text-green-500 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" /></svg>
                        </a>
                    </div>
                </div>
                <div className="py-4 px-4 w-full bg-gray-200 dark:bg-green-900/15 rounded-lg">
                    <div className="flex mb-5">
                        <span className="flex text-xs items-center border border-green-500 rounded-full py-1 px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" className="mr-1 text-green-500" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 14.475l1.9 1.15q.275.175.55-.012t.2-.513l-.5-2.175l1.7-1.475q.25-.225.15-.537t-.45-.338l-2.225-.175l-.875-2.05q-.125-.3-.45-.3t-.45.3l-.875 2.05l-2.225.175q-.35.025-.45.338t.15.537l1.7 1.475l-.5 2.175q-.075.325.2.513t.55.012zM8.65 20H6q-.825 0-1.412-.587T4 18v-2.65L2.075 13.4q-.275-.3-.425-.662T1.5 12q0-.375.15-.737t.425-.663L4 8.65V6q0-.825.588-1.412T6 4h2.65l1.95-1.925q.3-.275.663-.425T12 1.5q.375 0 .738.15t.662.425L15.35 4H18q.825 0 1.413.588T20 6v2.65l1.925 1.95q.275.3.425.663t.15.737q0 .375-.15.738t-.425.662L20 15.35V18q0 .825-.587 1.413T18 20h-2.65l-1.95 1.925q-.3.275-.662.425T12 22.5q-.375 0-.737-.15t-.663-.425zm.85-2l2.5 2.5l2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5L9.5 6H6v3.5L3.5 12L6 14.5V18zm2.5-6" /></svg>
                            Nous contacter</span>
                    </div>
                    <input type="email" name="" id="" className="w-full border rounded-md py-1 px-2 dark:bg-gray-950 dark:border-gray-800 dark:text-white" placeholder="Votre adresse mail" />
                    <input type="text" name="" id="" className="w-full border rounded-md py-1 px-2 mt-2  dark:bg-gray-950 dark:border-gray-800 dark:text-white" placeholder="Objet" />
                    <textarea name="" id="" className="w-full border rounded-md py-1 px-2 mt-2  dark:bg-gray-950 dark:border-gray-800 dark:text-white" rows={3} placeholder="Votre message"></textarea>
                    <button className="py-2 text-md text-white bg-green-500 rounded-md text-center w-full font-semibold">Envoyer</button>
                </div>

            </div>
        </div>
    );
};

export default Footer;
