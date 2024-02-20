"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Produits() {

  return (
    <main className="container mx-auto">
      <div className="min-h-screen relative">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-300 to-green-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] test"></div>
        </div>
        <div className="min-h-screen h-full grid md:grid-cols-5 grid-cols-1 gap-6 md:relative md:top-0">
          <div className="text-left px-5 col-span-2 flex items-center lg:mt-0 mt-10">
            <div>
              <h1 className="text-2xl md:text-4xl font-semibold"><span className="text-green-500">SmartConnect</span></h1>
              <p className="text-sm lg:text-lg indent-10 mt-4 text-justify">
                Un projet logiciel axé sur la connectivité intelligente, SmartConnect vise à simplifier et à optimiser l&apos;intégration des systèmes au sein des entreprises. Cette plateforme offre des solutions de connectivité robustes pour favoriser une communication fluide entre différentes applications, améliorant ainsi l&apos;efficacité opérationnelle.
              </p>
              <div className="text-sm space-x-4 mt-5">
                <button className="bg-green-500 px-6 py-2 rounded-lg text-white hover:bg-green-600">Essayez 7 jours gratuit</button>
              </div>
            </div>
          </div>
          <div className='grid md:grid-cols-2 gap-7 col-span-3 px-4 items-center'>
            <div>
              <div className="p-4 rounded-lg relative bg-white/60 dark:bg-gray-900/40 shadow border border-green-500">
                <h1 className="text-green-500 text-3xl mt-4 font-mono font-bold text-center mb-5">Premium</h1>
                <p className="text-sm text-justify indent-10 my-5 2xl:my-10">
                Choisissez notre offre Premium pour une expérience logicielle enrichie, dotée de fonctionnalités avancées. Cette option apporte une valeur exceptionnelle aux utilisateurs exigeants en quête de performances optimales. Explorez les avantages du niveau Premium et profitez d&apos;une utilisation haut de gamme de nos logiciels.
                </p>
                <h2 className="text-5xl lg:text-7xl font-bold justify-center flex items-center">9.99 <small className="text-2xl ml-2">$</small></h2>
                <button className="bg-green-500 py-2 rounded-lg text-white hover:bg-green-600 w-full mt-5">Achetez Maintenant</button>

              </div>
            </div>
            <div>
              <div className=" p-4 rounded-lg relative bg-white/60 dark:bg-gray-900/40 shadow border border-green-500">
                <h1 className="text-4xl font-mono font-bold text-center my-5 text-green-500">Entreprise</h1>
                <p className="text-sm text-justify indent-10 my-5 2xl:my-14">
                  Pour répondre aux besoins complexes des grandes organisations, notre offre Entreprise propose une solution complète avec des fonctionnalités personnalisées, une assistance dédiée et une évolutivité maximale. Contactez-nous pour discuter de vos exigences spécifiques et découvrez comment notre solution Entreprise peut contribuer au succès de votre organisation.
                </p>
                <h2 className="text-4xl text-center font-bold justify-center flex items-center my-4">Tarification personnalisée</h2>
                <button className="border border-green-500 hover:bg-green-500 dark:hover:bg-green-500 hover:text-white dark:hover:text-green-white py-2 rounded-lg text-green-500  w-full mt-12 ">Commandez Maintenant</button>

              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-300 to-green-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] test" ></div>
        </div>
      </div>
    </main>
  );
}
