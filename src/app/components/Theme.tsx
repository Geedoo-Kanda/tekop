"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Theme() {
    const DefaultTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(
        DefaultTheme ? DefaultTheme : "dark"
    );
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-schema: dark)");

    function onWindowMatch() {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add("dark");
        } else {
            element.classList.add("ligth");
        }
    }

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark')
                localStorage.setItem("theme", "dark");
                onWindowMatch()
                break;
            case 'light':
                element.classList.remove('dark')
                localStorage.setItem("theme", "light");
                onWindowMatch()
                break;
            default:
                null;
        }
    }, [element, theme])
    const options = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362q.15.225.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75" /></svg>,
            name: 'dark'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11 3V2q0-.425.288-.712T12 1q.425 0 .713.288T13 2v1q0 .425-.288.713T12 4q-.425 0-.712-.288T11 3m0 19v-1q0-.425.288-.712T12 20q.425 0 .713.288T13 21v1q0 .425-.288.713T12 23q-.425 0-.712-.288T11 22m11-9h-1q-.425 0-.712-.288T20 12q0-.425.288-.712T21 11h1q.425 0 .713.288T23 12q0 .425-.288.713T22 13M3 13H2q-.425 0-.712-.288T1 12q0-.425.288-.712T2 11h1q.425 0 .713.288T4 12q0 .425-.288.713T3 13m16.75-7.325l-.35.35q-.275.275-.687.275T18 6q-.275-.275-.288-.687t.263-.713l.375-.375q.275-.3.7-.3t.725.3q.3.3.288.725t-.313.725M6.025 19.4l-.375.375q-.275.3-.7.3t-.725-.3q-.3-.3-.288-.725t.313-.725l.35-.35q.275-.275.688-.275T6 18q.275.275.288.688t-.263.712m12.3.35l-.35-.35q-.275-.275-.275-.687T18 18q.275-.275.688-.287t.712.262l.375.375q.3.275.3.7t-.3.725q-.3.3-.725.288t-.725-.313M4.6 6.025l-.375-.375q-.3-.275-.3-.7t.3-.725q.3-.3.725-.288t.725.313l.35.35q.275.275.275.688T6 6q-.275.275-.687.288T4.6 6.025M12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18m0-2q1.675 0 2.838-1.162T16 12q0-1.675-1.162-2.838T12 8q-1.675 0-2.838 1.163T8 12q0 1.675 1.163 2.838T12 16m0-4" /></svg>,
            name: 'light'
        },
    ]

    return (
        <div className="flex justify-end mt-2">
            {
                options?.map((opt, index) => (
                    <div onClick={() => setTheme(opt.name)} className={`${theme === opt.name ? 'text-green-500' : 'text-gray-700 dark:text-white'} bg-gray-200 dark:bg-gray-700 rounded-md p-2 cursor-pointer mr-2`} key={index}>
                        {opt.icon}
                    </div>
                ))
            }

        </div>

    );
}
