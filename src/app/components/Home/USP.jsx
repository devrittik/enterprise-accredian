"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
    Lightbulb,
    MessageSquareText,
    RefreshCw,
    Cpu,
    MoveDiagonal2,
    Target,
    Package,
} from "lucide-react";

const items = [
    {
        title: "Tailored Solutions",
        desc: "Programs customized to your organization's goals and challenges.",
        icon: Lightbulb,
        color: "#19B5FE",
    },
    {
        title: "Expert Guidance",
        desc: "Learn from industry leaders with real-world success.",
        icon: MessageSquareText,
        color: "#2A84F2",
    },
    {
        title: "Innovative Framework",
        desc: "Proprietary methods for impactful, application-driven results.",
        icon: RefreshCw,
        color: "#2563EB",
    },
    {
        title: "Advanced Technology",
        desc: "State-of-the-art LMS for seamless learning experiences.",
        icon: Cpu,
        color: "#0F6AE8",
    },
    {
        title: "Diverse Offerings",
        desc: "Courses across industries, skill levels, and emerging fields.",
        icon: MoveDiagonal2,
        color: "#1F66C2",
    },
    {
        title: "Proven Impact",
        desc: "Trusted by leading organizations for measurable ROI.",
        icon: Target,
        color: "#114E96",
    },
    {
        title: "Flexible Delivery",
        desc: "Online and offline options tailored to your needs.",
        icon: Package,
        color: "#2B6CB0",
    },
];

export default function USP() {
    const [active, setActive] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const total = items.length;
    const step = 360 / total;

    return (
        <section id="usp" className="px-4 py-14 sm:py-20">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-5xl">
                        Why Choose <span className="text-blue-600">Accredian</span>
                    </h2>
                    <p className="mt-3 text-slate-600 sm:text-lg">
                        Enterprise learning solutions built for measurable growth
                    </p>
                </div>

                {/* Pie Chart < lg */}
                {mounted && (
                    <div className="mt-10 lg:hidden">
                    <div className="relative mx-auto h-80 w-80 max-w-full sm:h-96 sm:w-96">
                        {/* wheel */}
                        <div
                            className="absolute inset-0 rounded-full shadow-xl"
                            style={{
                                background: `conic-gradient(
          #19B5FE 0deg 51deg,
          #2A84F2 51deg 102deg,
          #2563EB 102deg 153deg,
          #0F6AE8 153deg 204deg,
          #1F66C2 204deg 255deg,
          #114E96 255deg 306deg,
          #2B6CB0 306deg 360deg
        )`,
                            }}
                        />

                        {/* icons inside slices */}
                        {items.map((item, index) => {
                            const Icon = item.icon;
                            const angle = index * step + step / 2 - 90;
                            const radius = 118;

                            const x = Math.cos((angle * Math.PI) / 180) * radius;
                            const y = Math.sin((angle * Math.PI) / 180) * radius;

                            return (
                                <button
                                    key={item.title}
                                    onClick={() => setActive(index)}
                                    className={`absolute left-1/2 top-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-white shadow-md transition-all duration-300 ${active === index
                                            ? "scale-110 bg-black"
                                            : "bg-blue-600/90"
                                        }`}
                                    style={{
                                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                    }}
                                >
                                    <Icon size={18} />
                                </button>
                            );
                        })}

                        {/* center */}
                        <div className="absolute left-1/2 top-1/2 z-30 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-center shadow-xl">
                            <span className="text-2xl font-bold text-slate-900">
                                    <Image
                                        src="/logo/favicon.ico"
                                        alt="logo"
                                        width={80}
                                        height={80}
                                        className="h-20 w-20 object-contain"
                                    />
                            </span>
                        </div>
                    </div>

                    {/* details card */}
                    <div className="mx-auto mt-8 max-w-xl rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900">
                            {items[active].title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            {items[active].desc}
                        </p>

                        {/* dots */}
                        <div className="mt-5 flex items-center gap-2">
                            {items.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`h-2.5 rounded-full transition-all ${active === i
                                            ? "w-8 bg-blue-600"
                                            : "w-2.5 bg-slate-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                )}

                {/* Desktop Infographic */}
                <div className="relative mt-20 hidden lg:block">
                    {/* connector */}
                    <svg
                        className="absolute left-0 top-1/2 h-24 w-full -translate-y-1/2"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,60 C100,10 200,110 300,60 C400,10 500,110 600,60 C700,10 800,110 900,60 C1000,10 1100,110 1200,60"
                            fill="none"
                            stroke="#bfdbfe"
                            strokeWidth="3"
                            strokeDasharray="6 8"
                        />
                    </svg>

                    <div className="grid grid-cols-7 gap-6">
                        {items.map((item, index) => {
                            const Icon = item.icon;
                            const top = index % 2 === 0;

                            return (
                                <div
                                    key={item.title}
                                    className="group relative flex min-h-[500px] flex-col items-center"
                                >
                                    {/* TOP BLOCK */}
                                    {top ? (
                                        <>
                                            <div className="flex h-[170px] flex-col justify-end text-center">
                                                <div className="rounded-2xl px-3 py-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-blue-50 group-hover:shadow-md">
                                                    <h3 className="text-xl font-bold text-slate-900">
                                                        {item.title}
                                                    </h3>

                                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-4 h-16 w-px bg-blue-300 transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-[0_0_14px_rgba(37,99,235,0.55)]" />
                                        </>
                                    ) : (
                                        <div className="h-[220px]" />
                                    )}

                                    {/* CENTER NODE */}
                                    <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-4 border-blue-200 bg-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500 group-hover:shadow-[0_0_28px_rgba(37,99,235,0.35)]">
                                        <div className="flex h-22 w-22 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 group-hover:bg-blue-700">
                                            <Icon size={34} />
                                        </div>
                                    </div>

                                    {/* BOTTOM BLOCK */}
                                    {!top ? (
                                        <>
                                            <div className="mt-4 h-16 w-px bg-blue-300 transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-[0_0_14px_rgba(37,99,235,0.55)]" />

                                            <div className="mt-4 flex h-[170px] flex-col justify-start text-center">
                                                <div className="rounded-2xl px-3 py-2 transition-all duration-300 group-hover:translate-y-1 group-hover:bg-blue-50 group-hover:shadow-md">
                                                    <h3 className="text-xl font-bold text-slate-900">
                                                        {item.title}
                                                    </h3>

                                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="h-[220px]" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}