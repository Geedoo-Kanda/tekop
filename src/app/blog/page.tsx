"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blog() {

  return (
    <main className="">
      <div className="min-h-screen relative">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-300 to-green-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] test"></div>
        </div>
        <div className=" h-full md:relative top-0">
          <div className="h-[50vh] flex items-center justify-center px-4">
            <div className="w-full max-w-[600px]">
              <div className="w-full">
                <h1 className="text-2xl text-center mb-5 md:text-4xl font-semibold">Explorez notre blog</h1>

                <input type="search" name="" id="" className="border rounded-lg w-full px-4 py-2 text-sm" placeholder="Recherche..." />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4 px-4">
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
            <Link href={"/blog/titre-article"}>
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
          </div>
        </div>
        <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-300 to-green-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] test" ></div>
        </div>
      </div>
    </main>
  );
}
