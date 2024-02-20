"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import BlogSlide from "./components/BlogSlide";
import Temoignage from "./components/Temoignage";

export default function Home() {

  return (
    <main className="">
      <div className="h-[70vh] md:h-screen overflow-hidden 2xl:container 2xl:mx-auto">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-300 to-green-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] test"></div>
        </div>
        <div className="items-center h-full max-h-[80vh] grid md:grid-cols-2 grid-cols-1 gap-4 md:relative top-0">
          <div className="text-left px-5">
            <h2 className="text-lg">Innovez, Optimisez, excellez</h2>
            <h1 className="text-2xl md:text-4xl font-semibold">Découvrez  <span className="text-green-500">TekOp</span>, la startup redéfinissant les normes de l&apos;optimisation technologique avec expertise et engagement exceptionnels.</h1>
            <div className="text-sm space-x-4 mt-5 md:space-y-0 space-y-4">
              <button className="bg-green-500 px-6 py-2 rounded-lg text-white hover:bg-green-600">Demander un devis</button>
              <button className="border border-green-500 px-6 py-2 rounded-lg text-green-500 hover:bg-green-500 hover:text-white">Nos services  </button>
            </div>
          </div>
          <div className='hidden md:flex justify-end w-full'>
            <img src="images/home.png" className="max-h-[550px] w-auto rounded-l-lg" alt="hero" />
          </div>
        </div>
        <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-green-300 to-green-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] test" ></div>
        </div>
      </div>
      <section className="container mx-auto md:mt-32 mb-5">
        <div className="grid md:grid-cols-2 gap-3 my-12">
          <div className="p-8">
            <video width="100%" height="auto" preload="true" className="rounded-md rotate-6" autoPlay playsInline loop muted>
              <source src="/videos/about.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex items-center md:px-0 px-5">
            <div>
              <div className="flex mb-5">
                <span className="flex text-xs items-center border border-green-500 rounded-full py-1 px-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" className="mr-1 text-green-500" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 14.475l1.9 1.15q.275.175.55-.012t.2-.513l-.5-2.175l1.7-1.475q.25-.225.15-.537t-.45-.338l-2.225-.175l-.875-2.05q-.125-.3-.45-.3t-.45.3l-.875 2.05l-2.225.175q-.35.025-.45.338t.15.537l1.7 1.475l-.5 2.175q-.075.325.2.513t.55.012zM8.65 20H6q-.825 0-1.412-.587T4 18v-2.65L2.075 13.4q-.275-.3-.425-.662T1.5 12q0-.375.15-.737t.425-.663L4 8.65V6q0-.825.588-1.412T6 4h2.65l1.95-1.925q.3-.275.663-.425T12 1.5q.375 0 .738.15t.662.425L15.35 4H18q.825 0 1.413.588T20 6v2.65l1.925 1.95q.275.3.425.663t.15.737q0 .375-.15.738t-.425.662L20 15.35V18q0 .825-.587 1.413T18 20h-2.65l-1.95 1.925q-.3.275-.662.425T12 22.5q-.375 0-.737-.15t-.663-.425zm.85-2l2.5 2.5l2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5L9.5 6H6v3.5L3.5 12L6 14.5V18zm2.5-6" /></svg>
                  A propos de nous</span>
              </div>
              <h1 className="text-xl md:text-3xl font-semibold"><span className="text-green-500">TekOp</span> : Catalyseurs d&apos;Innovation au Service de Vos Aspirations</h1>
              <p className="my-4 text-sm lg:text-lg text-gray-600 dark:text-white text-justify indent-10">
                TekOp incarne l&apos;innovation au cœur de la République Démocratique du Congo. Avec passion et engagement envers la satisfaction client, nous sommes des partenaires stratégiques pour concrétiser les aspirations de nos clients. Notre vision transcendantale fait de TekOp un catalyseur d&apos;innovation prêt à redéfinir les normes de l&apos;industrie technologique, laissant un impact positif durable sur les communautés que nous touchons.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-bold text-sm md:text-md text-center  items-center">
                <div>
                  <div className="flex justify-center text-green-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0a5.35 5.35 0 0 0-5.5 5.18c0 3.23 2.59 3.23 2.59 5.17v3.06A2.77 2.77 0 0 0 8 16a2.78 2.78 0 0 0 2.92-2.59v-3.06c0-1.94 2.59-1.94 2.59-5.17A5.35 5.35 0 0 0 8 0m0 14.75a1.54 1.54 0 0 1-1.65-1.34V12.2h3.31v1.21A1.55 1.55 0 0 1 8 14.75m3.1-7.16a3.75 3.75 0 0 0-1.43 2.76V11H6.34v-.6a3.75 3.75 0 0 0-1.43-2.81a2.87 2.87 0 0 1-1.16-2.41A4.1 4.1 0 0 1 8 1.25a4.1 4.1 0 0 1 4.25 3.93a2.87 2.87 0 0 1-1.16 2.41z" /><path fill="currentColor" d="M8 2.66a3 3 0 0 0-2.13.85a2.33 2.33 0 0 0-.73 1.69a.62.62 0 0 0 .62.63a.63.63 0 0 0 .63-.63a1.1 1.1 0 0 1 .36-.8A1.74 1.74 0 0 1 8 3.91a.63.63 0 1 0 0-1.25" /></svg>
                  </div>
                  Passion pour l&apos;Innovation
                </div>
                <div className="border-y md:border-y-0 md:border-x border-gray-200 py-2">
                  <div className="flex justify-center text-green-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100"><path fill="currentColor" fill-rule="evenodd" d="M83.117 0c-6.88 0-12.698 4.735-14.379 11.092l-1.851-.86a2.5 2.5 0 0 0-2.108 0L34.166 24.453L3.553 10.233A2.5 2.5 0 0 0 0 12.5v70.287a2.5 2.5 0 0 0 1.447 2.268l31.666 14.709a2.5 2.5 0 0 0 2.108 0l30.613-14.22l30.613 14.22c1.657.769 3.553-.44 3.553-2.266V27.211a2.5 2.5 0 0 0-1.447-2.268l-3.23-1.502l1.011-1.722c.23-.417.413-.861.57-1.315A14.645 14.645 0 0 0 98 14.842C98 6.685 91.298 0 83.117 0m0 6.953c4.405 0 7.908 3.496 7.908 7.889c0 4.392-3.503 7.885-7.908 7.885s-7.908-3.493-7.908-7.885c0-4.393 3.503-7.889 7.908-7.889m-16.166 8.822l1.377.641a14.726 14.726 0 0 0 2.625 6.938l10.348 17.89c1.45 1.894 2.414 1.534 3.619-.1l7.857-13.373L95 28.805V93.58L67.322 80.723l-.226-39.676c.408.088.815.173 1.224.27l.92-3.891a63.862 63.862 0 0 0-2.168-.473zm-2.998.354l.115 20.336a33.73 33.73 0 0 0-3.113-.281l-.148 3.996c1.088.04 2.185.158 3.285.318l.23 40.234l-28.676 13.323l-.369-64.604zM5 16.418l27.275 12.67l.371 64.947L5 81.191zm51.543 20.039c-1.377.247-2.786.688-4.098 1.451a9.932 9.932 0 0 0-3.732 3.82l3.502 1.932a6.003 6.003 0 0 1 2.226-2.289l.006-.004l.006-.004c.807-.47 1.768-.786 2.797-.97zm16.666 2.031l-1.133 3.834c2.503.74 4.982 1.59 7.447 2.51l1.399-3.748c-2.532-.944-5.1-1.824-7.713-2.596m-26.002 7.596l-.03.158l-.003.014c-.499 2.831-.446 5.617-.334 8.265l3.996-.17c-.109-2.569-.132-5.055.277-7.388l.024-.125zm3.867 12.21l-3.99.27c.18 2.669.372 5.285.365 7.85l4 .01c.008-2.77-.195-5.478-.375-8.13m-3.824 11.89c-.11.953-.274 1.88-.514 2.77l-.002.005l-.002.008c-.35 1.335-.939 2.571-1.761 3.539l3.047 2.59c1.288-1.515 2.105-3.298 2.58-5.102l.002-.006c.3-1.116.495-2.24.623-3.35zm-33.768 3.898l-1.796 3.574c2.48 1.247 5.045 2.278 7.628 3.17l1.305-3.781c-2.455-.847-4.852-1.815-7.137-2.963m10.836 4.113l-1.064 3.856c2.646.731 5.366 1.312 8.146 1.625l.446-3.975c-2.521-.283-5.035-.817-7.528-1.506m18.141.282c-1.992 1.02-4.397 1.397-6.87 1.427l.05 4c2.834-.034 5.864-.444 8.642-1.867z" color="currentColor" /></svg>
                  </div>
                  Ambition Locale, Impact Global
                </div>
                <div>
                  <div className="flex justify-center text-green-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M18 3H6.834a3 3 0 1 0 0 2H18a3 3 0 0 1 0 6h-3.168a3 3 0 0 0-5.639 0H6a5 5 0 0 0 0 10h6v3l4-4l-4-4v3H6a3 3 0 0 1 0-6h3.203a3 3 0 0 0 5.629 0H18a5 5 0 0 0 0-10M4 5a1 1 0 1 1 1-1a1 1 0 0 1-1 1m8 8a1 1 0 1 1 1-1a1 1 0 0 1-1 1" /><path fill="currentColor" d="M20 17a3 3 0 1 0 3 3a3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1" /></svg>
                  </div>
                  Valeurs Guidant l&apos;Action
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-12 px-4 md:px-8 dark:bg-gray-900 overflow-auto">
          <div className="flex mb-5">
            <span className="flex text-xs items-center border border-green-500 rounded-full py-1 px-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" className="mr-1 text-green-500" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 14.475l1.9 1.15q.275.175.55-.012t.2-.513l-.5-2.175l1.7-1.475q.25-.225.15-.537t-.45-.338l-2.225-.175l-.875-2.05q-.125-.3-.45-.3t-.45.3l-.875 2.05l-2.225.175q-.35.025-.45.338t.15.537l1.7 1.475l-.5 2.175q-.075.325.2.513t.55.012zM8.65 20H6q-.825 0-1.412-.587T4 18v-2.65L2.075 13.4q-.275-.3-.425-.662T1.5 12q0-.375.15-.737t.425-.663L4 8.65V6q0-.825.588-1.412T6 4h2.65l1.95-1.925q.3-.275.663-.425T12 1.5q.375 0 .738.15t.662.425L15.35 4H18q.825 0 1.413.588T20 6v2.65l1.925 1.95q.275.3.425.663t.15.737q0 .375-.15.738t-.425.662L20 15.35V18q0 .825-.587 1.413T18 20h-2.65l-1.95 1.925q-.3.275-.662.425T12 22.5q-.375 0-.737-.15t-.663-.425zm.85-2l2.5 2.5l2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5L9.5 6H6v3.5L3.5 12L6 14.5V18zm2.5-6" /></svg>
              Nos services</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 my-5">
            <h1 className="text-xl md:text-3xl font-semibold">Explorez l&apos;excellence avec <span className="text-green-500">Nos Services</span> pour des solutions sur mesure et de qualité.</h1>
            <p className="text-md md:text-lg text-gray-600 dark:text-white text-justify indent-10 hidden md:flex">
              Bienvenue dans le monde des possibilités infinies de TekOp. Notre gamme de services diversifiée repose sur quatre piliers essentiels, chaque service étant conçu pour répondre à vos besoins spécifiques avec créativité et expertise inégalées.
            </p>
            <div className="relative p-3 rounded-md shadow-md bg-white shadow-gray-100 dark:shadow-gray-950 dark:bg-gray-950 hover:bg-green-50 h-full  lg:min-h-[400px] min-h-[500px]">
              <div className="inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl " aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[14rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-300 to-green-600 opacity-30"></div>
              </div>
              <div className="items-center absolute top-0 h-full flex">
                <div>
                  <div className="flex justify-center">
                    <span className="border border-green-500 p-5 rounded-full text-green-500 hover:bg-green-500 hover:text-white duration-300 hover:scale-125">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M9.75 20.85c1.78-.7 1.39-2.63.49-3.85c-.89-1.25-2.12-2.11-3.36-2.94A9.817 9.817 0 0 1 4.54 12c-.28-.33-.85-.94-.27-1.06c.59-.12 1.61.46 2.13.68c.91.38 1.81.82 2.65 1.34l1.01-1.7C8.5 10.23 6.5 9.32 4.64 9.05c-1.06-.16-2.18.06-2.54 1.21c-.32.99.19 1.99.77 2.77c1.37 1.83 3.5 2.71 5.09 4.29c.34.33.75.72.95 1.18c.21.44.16.47-.31.47c-1.24 0-2.79-.97-3.8-1.61l-1.01 1.7c1.53.94 4.09 2.41 5.96 1.79m9.21-13.52L13.29 13H11v-2.29l5.67-5.68zm3.4-.78c-.01.3-.32.61-.64.92L19.2 10l-.87-.87l2.6-2.59l-.59-.59l-.67.67l-2.29-2.29l2.15-2.15c.24-.24.63-.24.86 0l1.43 1.43c.24.22.24.62 0 .86c-.21.21-.41.41-.41.61c-.02.2.18.42.38.59c.29.3.58.58.57.88" /></svg>
                    </span>
                  </div>
                  <h1 className="my-2 text-lg md:text-xl text-center text-green-500 font-semibold"> Infographie Captivante</h1>
                  <p className="lg:text-lg text-sm text-gray-600 dark:text-white text-justify indent-10 px-3">
                    Transformez vos idées en visuels percutants avec notre service d&apos;infographie captivante. Notre équipe talentueuse excelle dans la création d&apos;images visuellement impressionnantes, simplifiant efficacement des messages complexes de manière mémorable. Que ce soit pour des présentations professionnelles, des rapports percutants ou des contenus web engageants, notre service d&apos;infographie donne vie à vos idées de manière époustouflante.
                  </p>
                </div>
              </div>
              <div className="inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[14rem] -translate-x-1/2 bg-gradient-to-tr from-green-300 to-green-600 opacity-30 " ></div>
              </div>
            </div>
            <div className="relative p-3 rounded-md shadow-md bg-white shadow-gray-100 dark:shadow-gray-950 dark:bg-gray-950 hover:bg-green-50 h-full  md:min-h-[400px] min-h-[500px]">
              <div className="inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl " aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[14rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-300 to-green-600 opacity-30"></div>
              </div>
              <div className="items-center absolute top-0 h-full flex">
                <div>
                  <div className="flex justify-center my-2">
                    <span className="border border-green-500 p-5 rounded-full text-green-500 hover:bg-green-500 hover:text-white duration-300 hover:scale-125">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M14 18.315A7.037 7.037 0 0 1 11.263 16H3V4h18v2.264a7.046 7.046 0 0 1 2 2.15V4a2.006 2.006 0 0 0-2-2H3a2.006 2.006 0 0 0-2 2v12a2.006 2.006 0 0 0 2 2h7v2H8v2h8v-2h-2Z" /><path fill="currentColor" d="M17 6a6 6 0 1 0 6 6a5.998 5.998 0 0 0-6-6m0 10a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4" /><circle cx="17" cy="12" r="1" fill="currentColor" /></svg>
                    </span>
                  </div>
                  <h1 className="my-2 text-lg md:text-xl text-center text-green-500 font-semibold">  Création de Logiciels sur Mesure </h1>
                  <p className="lg:text-lg text-sm text-gray-600 dark:text-white text-justify indent-10 px-3">
                  Nous comprenons que chaque entreprise a des besoins uniques. C&apos;est pourquoi notre service de création de logiciels sur mesure est spécialement conçu pour répondre à vos exigences spécifiques. Du cahier des charges initial à la phase de développement, notre équipe collabore étroitement avec vous pour créer des solutions logicielles puissantes, intuitives et parfaitement adaptées à vos objectifs.
                  </p>
                </div>
              </div>
              <div className="inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[14rem] -translate-x-1/2 bg-gradient-to-tr from-green-300 to-green-600 opacity-30 " ></div>
              </div>
            </div>
            <div className="relative p-3 rounded-md shadow-md bg-white shadow-gray-100 dark:shadow-gray-950 dark:bg-gray-950 hover:bg-green-50 h-full  md:min-h-[400px] min-h-[500px]">
              <div className="inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl " aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[14rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-300 to-green-600 opacity-30"></div>
              </div>
              <div className="items-center absolute top-0 h-full flex">
                <div>
                  <div className="flex justify-center my-2">
                    <span className="border border-green-500 p-5 rounded-full text-green-500 hover:bg-green-500 hover:text-white duration-300 hover:scale-125">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 32 32"><path fill="currentColor" d="M28 12h-8V4h8Zm-6-2h4V6h-4Z" /><path fill="currentColor" d="M17 15V9H9v14h14v-8Zm-6-4h4v4h-4Zm4 10h-4v-4h4Zm6 0h-4v-4h4Z" /><path fill="currentColor" d="M26 28H6a2.002 2.002 0 0 1-2-2V6a2.002 2.002 0 0 1 2-2h10v2H6v20h20V16h2v10a2.002 2.002 0 0 1-2 2" /></svg>
                    </span>
                  </div>
                  <h1 className="my-2 text-lg md:text-xl text-center text-green-500 font-semibold">  Commercialisation de Logiciels en Abonnement </h1>
                  <p className="lg:text-lg text-sm text-gray-600 dark:text-white text-justify indent-10 px-3">
                    Embarquez dans l&apos;avenir numérique avec notre service de développement et de commercialisation de logiciels en abonnement. Nous concevons des solutions logicielles innovantes, flexibles et accessibles, évoluant avec vos besoins. De la conception initiale à la commercialisation stratégique, nous sommes votre partenaire de confiance pour assurer le succès continu de vos logiciels.
                  </p>
                </div>
              </div>
              <div className="inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[14rem] -translate-x-1/2 bg-gradient-to-tr from-green-300 to-green-600 opacity-30 " ></div>
              </div>
            </div>
            <div className="relative p-3 rounded-md shadow-md bg-white shadow-gray-100 dark:shadow-gray-950 dark:bg-gray-950 hover:bg-green-50 h-full  md:min-h-[400px] min-h-[500px]">
              <div className="inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl " aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[14rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-300 to-green-600 opacity-30"></div>
              </div>
              <div className="items-center absolute top-0 h-full flex">
                <div>
                  <div className="flex justify-center my-2">
                    <span className="border border-green-500 p-5 rounded-full text-green-500 hover:bg-green-500 hover:text-white duration-300 hover:scale-125">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="m10.87 21.51l.645.382zm.259-.438l-.646-.382zm-2.258 0l.646-.382zm.26.438l-.646.382zM1.25 12.8a.75.75 0 0 0 1.5 0zm1.747 4.044a.75.75 0 0 0-1.385.574zm3.292 2.741l.024-.75zm-1.82-.29l-.287.693zm13.226-2.164l.693.287zm-3.984 2.454l-.024-.75zm1.82-.29l.287.693zM3.91 6.59l-.392-.639zM2.59 7.91l-.64-.392zm5.326 11.912l-.381.646zm6.932-12.908a.75.75 0 1 0 .304-1.47zm3.707 1.934a.75.75 0 1 0-1.469.304zm-7.04 13.044l.26-.438l-1.292-.764l-.26.438zm-3.29-.438l.26.438l1.291-.764l-.26-.438zm1.999-.326a.25.25 0 0 1-.224.122a.25.25 0 0 1-.224-.122l-1.29.764c.676 1.144 2.352 1.144 3.029 0zM8.8 6.75h2.4v-1.5H8.8zm8.45 6.05v.8h1.5v-.8zM6.313 18.835c-.792-.025-1.223-.094-1.557-.232l-.574 1.385c.597.248 1.255.32 2.083.347zm-4.701-1.417a4.75 4.75 0 0 0 2.57 2.57l.574-1.385a3.25 3.25 0 0 1-1.759-1.76zM17.25 13.6c0 .942 0 1.611-.036 2.138c-.036.52-.103.845-.211 1.106l1.385.574c.197-.474.281-.982.322-1.578c.04-.59.04-1.318.04-2.24zm-3.515 6.735c.828-.027 1.486-.1 2.083-.347l-.574-1.385c-.335.138-.765.207-1.557.232zm3.268-3.491a3.25 3.25 0 0 1-1.76 1.759l.575 1.385a4.75 4.75 0 0 0 2.57-2.57zM8.8 5.25c-1.295 0-2.319 0-3.137.077c-.83.079-1.526.244-2.145.623l.784 1.279c.343-.21.783-.34 1.503-.409c.73-.07 1.671-.07 2.995-.07zM2.75 12.8c0-1.324 0-2.264.07-2.995c.069-.72.199-1.16.409-1.503L1.95 7.518c-.38.619-.544 1.315-.623 2.145c-.078.818-.077 1.842-.077 3.137zm.768-6.85A4.75 4.75 0 0 0 1.95 7.518l1.279.784a3.25 3.25 0 0 1 1.073-1.073zm5.999 14.74c-.201-.34-.377-.638-.548-.874a2.23 2.23 0 0 0-.67-.64l-.764 1.292c.046.027.11.077.22.23c.12.165.256.393.47.756zm-3.252-.355c.446.014.73.024.947.05c.204.025.281.058.323.083l.763-1.291c-.29-.171-.594-.243-.905-.28c-.298-.037-.661-.048-1.08-.062zm5.51 1.119c.214-.363.35-.591.47-.756c.11-.153.174-.203.22-.23l-.763-1.291a2.23 2.23 0 0 0-.67.64c-.172.235-.348.534-.549.873zm1.912-2.619c-.419.014-.782.025-1.08.061c-.31.038-.616.11-.905.28l.763 1.292c.042-.025.119-.058.323-.083c.216-.026.501-.036.947-.05zM11.2 6.75c1.798 0 2.873.004 3.648.164l.304-1.47c-.963-.198-2.227-.194-3.952-.194zm7.55 6.05c0-1.725.004-2.989-.195-3.952l-1.469.304c.16.775.164 1.85.164 3.648z" /><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7.033 6c.052-.992.183-1.661.52-2.21A3.75 3.75 0 0 1 8.79 2.554C9.692 2 10.92 2 13.375 2h2.25c1.528 0 2.58 0 3.375.133m-1 12.602c.748-.025 1.253-.091 1.685-.27a3.75 3.75 0 0 0 2.03-2.03c.285-.689.285-1.563.285-3.31v-.75c0-1.528 0-2.58-.133-3.375" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.51 13h.008M10 13h.009m3.482 0h.009" /></g></svg>
                    </span>
                  </div>
                  <h1 className="my-2 text-lg md:text-xl text-center text-green-500 font-semibold">  Gestion de Communauté sur les Réseaux Sociaux </h1>
                  <p className="lg:text-lg text-sm text-gray-600 dark:text-white text-justify indent-10 px-3">
                    Animez votre présence en ligne avec notre service de gestion de communauté sur les réseaux sociaux. Notre équipe de community managers dédiés collabore avec votre marque pour créer et animer une communauté engagée. De la planification de contenu à l&apos;interaction avec les abonnés, nous renforçons votre présence sociale et favorisons des connexions significatives avec votre audience.
                  </p>
                </div>
              </div>
              <div className="inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[14rem] -translate-x-1/2 bg-gradient-to-tr from-green-300 to-green-600 opacity-30 " ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-3 my-12">
          <div className="flex items-center md:px-0 px-5">
            <div>
              <div>
                <div className="flex mb-5">
                  <span className="flex text-xs items-center border border-green-500 rounded-full py-1 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" className="mr-1 text-green-500" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 14.475l1.9 1.15q.275.175.55-.012t.2-.513l-.5-2.175l1.7-1.475q.25-.225.15-.537t-.45-.338l-2.225-.175l-.875-2.05q-.125-.3-.45-.3t-.45.3l-.875 2.05l-2.225.175q-.35.025-.45.338t.15.537l1.7 1.475l-.5 2.175q-.075.325.2.513t.55.012zM8.65 20H6q-.825 0-1.412-.587T4 18v-2.65L2.075 13.4q-.275-.3-.425-.662T1.5 12q0-.375.15-.737t.425-.663L4 8.65V6q0-.825.588-1.412T6 4h2.65l1.95-1.925q.3-.275.663-.425T12 1.5q.375 0 .738.15t.662.425L15.35 4H18q.825 0 1.413.588T20 6v2.65l1.925 1.95q.275.3.425.663t.15.737q0 .375-.15.738t-.425.662L20 15.35V18q0 .825-.587 1.413T18 20h-2.65l-1.95 1.925q-.3.275-.662.425T12 22.5q-.375 0-.737-.15t-.663-.425zm.85-2l2.5 2.5l2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5L9.5 6H6v3.5L3.5 12L6 14.5V18zm2.5-6" /></svg>
                    Nos Particularités</span>
                </div>
                <h1 className="text-xl md:text-3xl font-semibold">Votre Partenaire Dynamique pour <span className="text-green-500">l&apos;Innovation</span> et <span className="text-green-500">la Créativité</span> Technologique </h1>
                <p className="my-4 text-md md:text-lg text-gray-600 dark:text-white text-justify indent-10  hidden md:flex">
                  La satisfaction client est notre priorité absolue. Nos services personnalisés sont conçus pour dépasser les attentes, avec une équipe dédiée prête à écouter, collaborer et adapter nos solutions pour garantir une expérience exceptionnelle à chaque client.
                </p>
                <ul className="grid grid-cols-2 gap-5 text-xs md:text-sm items-center mt-4">
                  <li className="flex items-center px-3 border-y  py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 text-green-500" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M29 26a2.97 2.97 0 0 0-1.855.66L25 25.423v-1.606a3 3 0 1 0-2 0v1.606l-2.145 1.239A2.97 2.97 0 0 0 19 26a3.02 3.02 0 1 0 2.925 2.353L24 27.155l2.075 1.198A2.998 2.998 0 1 0 29 26m-10 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m5-10a1 1 0 1 1-1 1a1 1 0 0 1 1-1m5 10a1 1 0 1 1 1-1a1 1 0 0 1-1 1" /><circle cx="7" cy="20" r="2" fill="currentColor" /><path fill="currentColor" d="M14 20a4 4 0 1 1 4-4a4.012 4.012 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2" /><circle cx="21" cy="12" r="2" fill="currentColor" /><path fill="currentColor" d="M13.02 28.272L3 22.426V9.574l11-6.416l11.496 6.706l1.008-1.728l-12-7a1 1 0 0 0-1.008 0l-12 7A1 1 0 0 0 1 9v14a1 1 0 0 0 .496.864L12.013 30Z" /></svg>
                    Personnalisation à Chaque Étape</li>
                  <li className="flex items-center px-3 border-y  py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 text-green-500" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307c.123-.763.144-.812.631-1.412c.151-.186.711-.688 1.832-1.692A7.481 7.481 0 0 0 19.5 9.5a7.47 7.47 0 0 0-.427-2.5M14.5 19.5c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75m0 0c0-.713 0-1.07-.038-1.307c-.123-.763-.144-.812-.631-1.412c-.151-.186-.712-.688-1.832-1.692A7.5 7.5 0 0 1 15.744 3" /><path stroke-linejoin="round" d="m12.786 8.5l-2.143 3h3l-2.143 3" /></g></svg>
                    Passion pour l&apos;Innovation</li>
                  <li className="flex items-center px-3 border-y  py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 text-green-500" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 9a1 1 0 0 0 1-1V5a1 1 0 0 1 1-1h3a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v3a1 1 0 0 0 1 1m5 11H5a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h3a1 1 0 0 0 0-2m9-7a1 1 0 0 0 0-2h-1.14A4 4 0 0 0 13 8.14V7a1 1 0 0 0-2 0v1.14A4 4 0 0 0 8.14 11H7a1 1 0 0 0 0 2h1.14A4 4 0 0 0 11 15.86V17a1 1 0 0 0 2 0v-1.14A4 4 0 0 0 15.86 13Zm-5 1a2 2 0 1 1 2-2a2 2 0 0 1-2 2m9 1a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1M19 2h-3a1 1 0 0 0 0 2h3a1 1 0 0 1 1 1v3a1 1 0 0 0 2 0V5a3 3 0 0 0-3-3" /></svg>
                    Mission Orientée Résultats</li>
                  <li className="flex items-center px-3 border-y  py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 text-green-500" width="24" height="24" viewBox="0 0 28 28"><path fill="currentColor" d="M17.254 11a2.25 2.25 0 0 1 2.25 2.25v6.249a5.501 5.501 0 0 1-11.002 0V13.25a2.25 2.25 0 0 1 2.25-2.25zm0 1.5h-6.502a.75.75 0 0 0-.75.75v6.249a4.001 4.001 0 0 0 8.002 0V13.25a.75.75 0 0 0-.75-.75M4.25 11h4.156a3.243 3.243 0 0 0-.817 1.5H4.25a.75.75 0 0 0-.75.75v5.249a3.001 3.001 0 0 0 4.238 2.735c.133.49.324.956.564 1.392A4.501 4.501 0 0 1 2 18.499V13.25A2.25 2.25 0 0 1 4.25 11m19.5 0A2.25 2.25 0 0 1 26 13.25v5.25a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.214-.406.387-.837.511-1.289A3 3 0 0 0 24.5 18.5v-5.25a.75.75 0 0 0-.749-.75h-3.333A3.242 3.242 0 0 0 19.6 11zM14 3a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m8.003 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6M5.997 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6M14 4.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8.003 1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-16.006 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" /></svg>
                    Collaboration Étroite</li>
                  <li className="flex items-center px-3 border-y  py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 text-green-500" width="24" height="24" viewBox="0 0 32 32"><circle cx="23" cy="24" r="2" fill="currentColor" /><path fill="currentColor" d="M30.777 23.479A8.64 8.64 0 0 0 23 18a8.64 8.64 0 0 0-7.777 5.479L15 24l.223.522A8.64 8.64 0 0 0 23 30a8.64 8.64 0 0 0 7.777-5.478L31 24zM23 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m-10.601-7.2A6 6 0 1 1 22 16h-2a4 4 0 1 0-6.4 3.2z" /><path fill="currentColor" d="m29.305 11.044l-2.36-4.088a1.998 1.998 0 0 0-2.374-.895l-2.434.824a11.042 11.042 0 0 0-1.312-.758l-.504-2.52A2 2 0 0 0 18.36 2h-4.72a2 2 0 0 0-1.961 1.608l-.504 2.519a10.967 10.967 0 0 0-1.327.753l-2.42-.819a1.998 1.998 0 0 0-2.372.895l-2.36 4.088a2 2 0 0 0 .411 2.502l1.931 1.697C5.021 15.495 5 15.745 5 16c0 .258.01.513.028.766l-1.92 1.688a2 2 0 0 0-.413 2.502l2.36 4.088a1.998 1.998 0 0 0 2.374.895l2.434-.824a10.974 10.974 0 0 0 1.312.759l.503 2.518A2 2 0 0 0 13.64 30H15v-2h-1.36l-.71-3.55a9.095 9.095 0 0 1-2.695-1.572l-3.447 1.166l-2.36-4.088l2.725-2.395a8.926 8.926 0 0 1-.007-3.128l-2.718-2.39l2.36-4.087l3.427 1.16A9.03 9.03 0 0 1 12.93 7.55L13.64 4h4.72l.71 3.55a9.098 9.098 0 0 1 2.695 1.572l3.447-1.166l2.36 4.088l-2.798 2.452L26.092 16l2.8-2.454a2 2 0 0 0 .413-2.502" /></svg>
                    Transparence et Confiance</li>

                  <li className="flex items-center px-3 border-y  py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 text-green-500" width="24" height="24" viewBox="0 0 48 48"><g fill="currentColor"><path d="M20.404 22.202a1.8 1.8 0 1 0 0-3.601a1.8 1.8 0 0 0 0 3.601" /><path fill-rule="evenodd" d="M11.41 30.008V42h17.112v-6.512h4.293c.268 0 .524-.053.757-.148l-2.38-1.852h-4.67V40H13.409V29.202l-.56-.581C11.209 26.916 8 22.931 8 17.975c0-1.63.615-4.126 2.466-6.19c1.633-1.821 4.373-3.465 8.937-3.743v7.05a5.4 5.4 0 1 0 4.058 9.76l14.07 10.923a2.25 2.25 0 1 0 1.183-1.614L24.88 23.42a5.402 5.402 0 0 0-3.477-8.329V8.006c2.543.047 4.305.388 5.638.888c1.412.53 2.459 1.28 3.514 2.257l.142.132c1.034.958 1.342 1.244 1.517 1.71l4.233 11.27h-3.632v2.888l2 1.555v-2.443h1.632a1.998 1.998 0 0 0 1.873-2.701l-4.234-11.273c-.349-.93-1.024-1.55-1.874-2.33a83.35 83.35 0 0 1-.297-.274C29.55 7.492 26.859 6 20.798 6C9.006 6 6 13.875 6 17.975c0 5.767 3.683 10.241 5.41 12.033m8.993-6.207a3.4 3.4 0 1 0 .001-6.802a3.4 3.4 0 0 0 0 6.802" clip-rule="evenodd" /></g></svg>
                    Relation Client Prioritaire </li>
                </ul>
                <div className="flex mt-8 justify-center">
                  <button className="bg-green-500 px-6 animate-bounce  py-2 rounded-full text-white hover:bg-green-600">Demander un devis</button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex items-center justify-center p-12 hidden">
            <img src="images/satis.svg" className="h-full w-auto" alt="hero" />
          </div>
        </div>
        <div className="my-12">
          <div className=" md:px-0 px-5">
            <div className="flex mb-5">
              <span className="flex text-xs items-center border border-green-500 rounded-full py-1 px-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" className="mr-1 text-green-500" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 14.475l1.9 1.15q.275.175.55-.012t.2-.513l-.5-2.175l1.7-1.475q.25-.225.15-.537t-.45-.338l-2.225-.175l-.875-2.05q-.125-.3-.45-.3t-.45.3l-.875 2.05l-2.225.175q-.35.025-.45.338t.15.537l1.7 1.475l-.5 2.175q-.075.325.2.513t.55.012zM8.65 20H6q-.825 0-1.412-.587T4 18v-2.65L2.075 13.4q-.275-.3-.425-.662T1.5 12q0-.375.15-.737t.425-.663L4 8.65V6q0-.825.588-1.412T6 4h2.65l1.95-1.925q.3-.275.663-.425T12 1.5q.375 0 .738.15t.662.425L15.35 4H18q.825 0 1.413.588T20 6v2.65l1.925 1.95q.275.3.425.663t.15.737q0 .375-.15.738t-.425.662L20 15.35V18q0 .825-.587 1.413T18 20h-2.65l-1.95 1.925q-.3.275-.662.425T12 22.5q-.375 0-.737-.15t-.663-.425zm.85-2l2.5 2.5l2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5L9.5 6H6v3.5L3.5 12L6 14.5V18zm2.5-6" /></svg>
                Notre équipe</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 my-5">
              <h1 className="text-xl md:text-3xl font-semibold">Ensemble, transcender les défis et atteindre l&apos;excellence : <span className="text-green-500">Notre équipe</span>, une synergie de talents dédiée à la réussite collective.</h1>
              <p className="text-md md:text-lg text-gray-600 dark:text-white text-justify indent-10  hidden md:flex">
                Notre équipe incarne véritablement le cœur battant de notre entreprise, pulsant de vitalité et d&apos;engagement. Permettez-nous de vous présenter brièvement quelques-uns de nos membres clés, véritables piliers de notre succès. Chacun d&apos;entre eux apporte une expertise unique, forgée par des années d&apos;expérience, et un enthousiasme inébranlable qui nourrit notre mission commune.
              </p>
            </div>
            <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 grid ">
              <div className="bg-center rounded-md overflow-hidden bg-[url('/images/team/geedoo-kanda.jpeg')] bg-cover w-full h-80">
                <div className=" bg-gradient-to-b from-black/0 to-black/95 hover:from-black/0 hover:to-green-950 transition duration-300 ease-in-out transform w-full h-full justify-center flex items-end pb-1">
                  <div className="text-white">
                    <h2 className="text-center font-semibold text-md md:text-xl">Geedoo Kanda</h2>
                    <h3 className="text-center text-xs">Developpeur</h3>
                    <div className="mt-1 justify-center flex items-center space-x-1 flex-wrap">
                      <a href="https://github.com/Geedoo-Kanda" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.81 43.81 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.81 43.81 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.72 41.72 0 0 1 7 22.52Z" /></svg>
                      </a>
                      <a href="www.linkedin.com/in/geedoo-kanda" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" /><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" fill="currentColor" /></svg>
                      </a>
                      <a href="https://www.instagram.com/geedoo_kanda?igsh=MXc3eXptZ3JwNW96dQ==" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89" clip-rule="evenodd" /></svg>
                      </a>
                      <a href="https://x.com/geedoo_k?t=EXi38yxEZIB1ApKSK6rayQ&s=09" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
                      </a>
                      <a href="https://www.facebook.com/geedoo.kanda?mibextid=2JQ9oc" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-center rounded-md overflow-hidden bg-[url('/images/team/geedoo-kanda.jpeg')] bg-cover w-full h-80">
                <div className=" bg-gradient-to-b from-black/0 to-black/95 hover:from-black/0 hover:to-green-950 transition duration-300 ease-in-out transform w-full h-full justify-center flex items-end pb-1">
                  <div className="text-white">
                    <h2 className="text-center font-semibold text-md md:text-xl">Geedoo Kanda</h2>
                    <h3 className="text-center text-xs">Developpeur</h3>
                    <div className="mt-1 justify-center flex items-center space-x-1 flex-wrap">
                      <a href="https://github.com/Geedoo-Kanda" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.81 43.81 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.81 43.81 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.72 41.72 0 0 1 7 22.52Z" /></svg>
                      </a>
                      <a href="www.linkedin.com/in/geedoo-kanda" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" /><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" fill="currentColor" /></svg>
                      </a>
                      <a href="https://www.instagram.com/geedoo_kanda?igsh=MXc3eXptZ3JwNW96dQ==" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89" clip-rule="evenodd" /></svg>
                      </a>
                      <a href="https://x.com/geedoo_k?t=EXi38yxEZIB1ApKSK6rayQ&s=09" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
                      </a>
                      <a href="https://www.facebook.com/geedoo.kanda?mibextid=2JQ9oc" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-center rounded-md overflow-hidden bg-[url('/images/team/geedoo-kanda.jpeg')] bg-cover w-full h-80">
                <div className=" bg-gradient-to-b from-black/0 to-black/95 hover:from-black/0 hover:to-green-950 transition duration-300 ease-in-out transform w-full h-full justify-center flex items-end pb-1">
                  <div className="text-white">
                    <h2 className="text-center font-semibold text-md md:text-xl">Geedoo Kanda</h2>
                    <h3 className="text-center text-xs">Developpeur</h3>
                    <div className="mt-1 justify-center flex items-center space-x-1 flex-wrap">
                      <a href="https://github.com/Geedoo-Kanda" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.81 43.81 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.81 43.81 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.72 41.72 0 0 1 7 22.52Z" /></svg>
                      </a>
                      <a href="www.linkedin.com/in/geedoo-kanda" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" /><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" fill="currentColor" /></svg>
                      </a>
                      <a href="https://www.instagram.com/geedoo_kanda?igsh=MXc3eXptZ3JwNW96dQ==" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89" clip-rule="evenodd" /></svg>
                      </a>
                      <a href="https://x.com/geedoo_k?t=EXi38yxEZIB1ApKSK6rayQ&s=09" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
                      </a>
                      <a href="https://www.facebook.com/geedoo.kanda?mibextid=2JQ9oc" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-center rounded-md overflow-hidden bg-[url('/images/team/geedoo-kanda.jpeg')] bg-cover w-full h-80">
                <div className=" bg-gradient-to-b from-black/0 to-black/95 hover:from-black/0 hover:to-green-950 transition duration-300 ease-in-out transform w-full h-full justify-center flex items-end pb-1">
                  <div className="text-white">
                    <h2 className="text-center font-semibold text-md md:text-xl">Geedoo Kanda</h2>
                    <h3 className="text-center text-xs">Developpeur</h3>
                    <div className="mt-1 justify-center flex items-center space-x-1 flex-wrap">
                      <a href="https://github.com/Geedoo-Kanda" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.81 43.81 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.81 43.81 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.72 41.72 0 0 1 7 22.52Z" /></svg>
                      </a>
                      <a href="www.linkedin.com/in/geedoo-kanda" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" /><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" fill="currentColor" /></svg>
                      </a>
                      <a href="https://www.instagram.com/geedoo_kanda?igsh=MXc3eXptZ3JwNW96dQ==" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89" clip-rule="evenodd" /></svg>
                      </a>
                      <a href="https://x.com/geedoo_k?t=EXi38yxEZIB1ApKSK6rayQ&s=09" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
                      </a>
                      <a href="https://www.facebook.com/geedoo.kanda?mibextid=2JQ9oc" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-center rounded-md overflow-hidden bg-[url('/images/team/geedoo-kanda.jpeg')] bg-cover w-full h-80">
                <div className=" bg-gradient-to-b from-black/0 to-black/95 hover:from-black/0 hover:to-green-950 transition duration-300 ease-in-out transform w-full h-full justify-center flex items-end pb-1">
                  <div className="text-white">
                    <h2 className="text-center font-semibold text-md md:text-xl">Geedoo Kanda</h2>
                    <h3 className="text-center text-xs">Developpeur</h3>
                    <div className="mt-1 justify-center flex items-center space-x-1 flex-wrap">
                      <a href="https://github.com/Geedoo-Kanda" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.81 43.81 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.81 43.81 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.72 41.72 0 0 1 7 22.52Z" /></svg>
                      </a>
                      <a href="www.linkedin.com/in/geedoo-kanda" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" /><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" fill="currentColor" /></svg>
                      </a>
                      <a href="https://www.instagram.com/geedoo_kanda?igsh=MXc3eXptZ3JwNW96dQ==" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89" clip-rule="evenodd" /></svg>
                      </a>
                      <a href="https://x.com/geedoo_k?t=EXi38yxEZIB1ApKSK6rayQ&s=09" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
                      </a>
                      <a href="https://www.facebook.com/geedoo.kanda?mibextid=2JQ9oc" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-center rounded-md overflow-hidden bg-[url('/images/team/geedoo-kanda.jpeg')] bg-cover w-full h-80">
                <div className=" bg-gradient-to-b from-black/0 to-black/95 hover:from-black/0 hover:to-green-950 transition duration-300 ease-in-out transform w-full h-full justify-center flex items-end pb-1">
                  <div className="text-white">
                    <h2 className="text-center font-semibold text-md md:text-xl">Geedoo Kanda</h2>
                    <h3 className="text-center text-xs">Developpeur</h3>
                    <div className="mt-1 justify-center flex items-center space-x-1 flex-wrap">
                      <a href="https://github.com/Geedoo-Kanda" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.81 43.81 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.81 43.81 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.72 41.72 0 0 1 7 22.52Z" /></svg>
                      </a>
                      <a href="www.linkedin.com/in/geedoo-kanda" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" /><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" fill="currentColor" /></svg>
                      </a>
                      <a href="https://www.instagram.com/geedoo_kanda?igsh=MXc3eXptZ3JwNW96dQ==" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89" clip-rule="evenodd" /></svg>
                      </a>
                      <a href="https://x.com/geedoo_k?t=EXi38yxEZIB1ApKSK6rayQ&s=09" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
                      </a>
                      <a href="https://www.facebook.com/geedoo.kanda?mibextid=2JQ9oc" className="p-2 rounded-full text-green-500 bg-green-50 dark:bg-gray-950 dark:hover:bg-green-500 hover:text-white hover:bg-green-500 shadow-2xl shadow-black/15" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <BlogSlide />

      </section>
      <Temoignage />
    </main>
  );
}
