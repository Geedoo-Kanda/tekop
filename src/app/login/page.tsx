"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Login() {

  return (
    <main className="flex items-center justify-center h-[50vh]">
      <div className="py-4 px-4 bg-gray-200 dark:bg-green-900/15 rounded-lg max-w-[400px]">
        <div className="flex mb-8">
          <span className="flex text-xs items-center border border-green-500 rounded-full py-1 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" className="mr-1 text-green-500" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 14.475l1.9 1.15q.275.175.55-.012t.2-.513l-.5-2.175l1.7-1.475q.25-.225.15-.537t-.45-.338l-2.225-.175l-.875-2.05q-.125-.3-.45-.3t-.45.3l-.875 2.05l-2.225.175q-.35.025-.45.338t.15.537l1.7 1.475l-.5 2.175q-.075.325.2.513t.55.012zM8.65 20H6q-.825 0-1.412-.587T4 18v-2.65L2.075 13.4q-.275-.3-.425-.662T1.5 12q0-.375.15-.737t.425-.663L4 8.65V6q0-.825.588-1.412T6 4h2.65l1.95-1.925q.3-.275.663-.425T12 1.5q.375 0 .738.15t.662.425L15.35 4H18q.825 0 1.413.588T20 6v2.65l1.925 1.95q.275.3.425.663t.15.737q0 .375-.15.738t-.425.662L20 15.35V18q0 .825-.587 1.413T18 20h-2.65l-1.95 1.925q-.3.275-.662.425T12 22.5q-.375 0-.737-.15t-.663-.425zm.85-2l2.5 2.5l2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5L9.5 6H6v3.5L3.5 12L6 14.5V18zm2.5-6" /></svg>
            Connexion</span>
        </div>
        <input type="email" name="" id="" className="w-full border rounded-md py-1 px-2 dark:bg-gray-950 dark:border-gray-800 dark:text-white" placeholder="Email" />
        <input type="password" name="" id="" className="w-full border rounded-md py-1 px-2 mt-3  dark:bg-gray-950 dark:border-gray-800 dark:text-white" placeholder="Mot de passe" />

        <button className="py-2 text-md text-white bg-green-500 rounded-md text-center w-full font-semibold mt-8">Connexion</button>
      </div>
    </main>
  );
}
