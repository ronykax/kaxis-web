"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
    const [running, setRunning] = useState(false);
    const [settings, showSettings] = useState(false);

    return (
        <div className="w-full h-screen bg-red-500 flex justify-center items-center relative">
            <div
                className="absolute inset-0"
                onClick={() => console.log("clicked!!!")}
            ></div>

            <div className="absolute top-0 left-0 p-6 z-10">
                <button
                    className="cursor-pointer"
                    onClick={() => showSettings(true)}
                >
                    <Menu size={28} />
                </button>
            </div>

            <span className="text-8xl md:text-9xl font-bold [text-shadow:-4px_4px_black]">
                05:00
            </span>

            <span className="opacity-50 absolute bottom-0 pb-6 font-medium">
                click anywhere on the screen to
                {running ? "stop" : "start"}
            </span>

            {settings && (
                <div className="absolute inset-0 z-20 bg-black/25 backdrop-blur-sm px-6 flex items-center">
                    {/* <div className="absolute inset-0 max-w-lg mx-auto my-auto"> */}
                    <div className="bg-black/75 rounded-2xl mx-auto p-6 flex flex-col gap-6 h-fit my-auto max-w-lg w-full drop-shadow-xl">
                        <div className="flex justify-between items-start">
                            <span className="text-2xl font-bold">
                                settings lol
                            </span>

                            <button
                                className="cursor-pointer"
                                onClick={() => showSettings(false)}
                            >
                                <X size={28} />
                            </button>
                        </div>
                        <label htmlFor="" className="grid gap-1">
                            <span className="font-bold opacity-75">
                                minutes
                            </span>
                            <input
                                type="number"
                                className="px-4 py-2 bg-white w-full rounded-md text-black"
                            />
                        </label>

                        <label htmlFor="" className="grid gap-1">
                            <span className="font-bold opacity-75">
                                notifications every
                            </span>
                            <input
                                type="number"
                                className="px-4 py-2 bg-white w-full rounded-md text-black"
                            />
                        </label>

                        <label htmlFor="" className="grid gap-1">
                            <span className="font-bold opacity-75">loop</span>
                            <input
                                type="number"
                                className="px-4 py-2 bg-white w-full rounded-md text-black"
                            />
                        </label>
                    </div>
                    {/* </div> */}
                </div>
            )}
        </div>
    );
}
