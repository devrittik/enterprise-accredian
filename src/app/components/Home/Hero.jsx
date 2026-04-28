"use client";

import { useEffect, useState } from "react";
import { openEnquiryModal } from "../common/GlobalEnquiryModal";

const slides = [
    {
        title: "Upskill",
        desc: "Build future-ready capabilities for every business need.",
        video: "/videos/Hero1.mp4",
    },
    {
        title: "Empower",
        desc: "Shape leadership with fast, focused interventions.",
        video: "/videos/Hero2.mp4",
    },
    {
        title: "Grow",
        desc: "Align talent with opportunities and grow faster.",
        video: "/videos/Hero3.mp4",
    },
];

export default function HeroSlider() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % slides.length);
        }, 3500);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <section
                id="hero"
                className="relative h-screen w-full overflow-hidden bg-black text-white"
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${
                            active === index ? "z-10 opacity-100" : "z-0 opacity-0"
                        }`}
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="h-full w-full object-cover"
                        >
                            <source
                                src={slide.video.replace(".mp4", ".webm")}
                                type="video/webm"
                            />
                            <source
                                src={slide.video}
                                type="video/mp4"
                            />
                        </video>

                        <div className="absolute inset-0 bg-black/45" />

                        <div className="absolute inset-0 flex items-center">
                            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                                <h1 className="text-6xl font-bold uppercase md:text-8xl lg:text-[10rem]">
                                    {slide.title}
                                </h1>

                                <p className="mt-4 max-w-x italic text-lg text-white/90 md:text-xl">
                                    {slide.desc}
                                </p>

                                <button
                                    type="button"
                                    onClick={openEnquiryModal}
                                    className="mt-8 rounded-full bg-gray-100 px-6 py-3 font-semibold text-black transition hover:bg-blue-600 hover:text-white"
                                >
                                    Talk to us ⟶
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setActive(i)}
                            className={`h-2 rounded-full transition-all ${
                                active === i ? "w-8 bg-white" : "w-2 bg-white/50"
                            }`}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
