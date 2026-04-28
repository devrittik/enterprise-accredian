"use client";

import { useState, useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import OpenEnquiryButton from "./OpenEnquiryButton";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [mobileAcc, setMobileAcc] = useState(false);
    const menuRef = useRef(null);

    const topics = [
        { label: "Home", href: "/" },
        { label: "Our Stats", href: "#stats" },
        { label: "Our Mission", href: "#mission" },
        { label: "Satisfied Clients", href: "#clients" },
        { label: "Our Expertises", href: "#expertises" },
        { label: "Why Us?", href: "#usp" },
        { label: "Proven Framework", href: "#cat" },
        { label: "Impacts made", href: "#impact" },
        { label: "What we provide?", href: "#deliverables" },
        { label: "See Testimonials", href: "#testimonials" },
        { label: "Read FAQs", href: "#faq" },
        { label: "Contact Us", href: "#cta" },
    ];

    useEffect(() => {
        const closeAll = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        const esc = (e) => {
            if (e.key === "Escape") {
                setOpen(false);
                setMobileAcc(false);
            }
        };

        document.addEventListener("mousedown", closeAll);
        document.addEventListener("keydown", esc);

        return () => {
            document.removeEventListener("mousedown", closeAll);
            document.removeEventListener("keydown", esc);
        };
    }, []);

    return (
        <>
            <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">

                {/* Top Strip */}
                <div className="w-full bg-blue-600/10 border-b border-blue-100">
                    <div className="mx-auto flex max-w-7xl items-center gap-4 justify-between md:justify-center px-4 py-3">
                        <p className="flex items-center gap-2 text-xs font-medium text-slate-800 md:text-sm lg:text-base">
                            Drive business growth with tailored enterprise learning solutions
                        </p>

                        <button
                            onClick={() => window.open("https://rittikchakraborty.vercel.app/", "_blank", "noopener,noreferrer")}
                            className="text-xs font-semibold capitalize text-blue-600 transition hover:scale-105 hover:bg-blue-600 hover:text-white p-2 rounded radius-2 md:text-sm">
                            Contact Expert
                        </button>
                    </div>
                </div>

                {/* Navbar */}
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
                    {/* Logo */}
                    <a href="/">
                        <img src="/logo/logo.webp" className="h-9" alt="Logo" />
                    </a>

                    {/* Desktop */}
                    <div ref={menuRef} className="hidden items-center gap-3 md:flex">
                        <div className="relative">
                            <button
                                onClick={() => setOpen(!open)}
                                className="flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:border"
                            >
                                Take A Tour
                                <Plus
                                    size={16}
                                    className={`transition ${open ? "rotate-45" : ""}`}
                                />
                            </button>

                            {open && (
                                <div className="absolute right-0 mt-3 w-[720px] rounded-3xl border bg-white p-5 shadow-2xl">
                                    <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                                        Take a tour of our site
                                    </p>

                                    {/* MULTI COLUMN GRID */}
                                    <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                                        {topics.map((item) => (
                                            <a
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <OpenEnquiryButton
                            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-blue-500"
                        >
                            Get Started
                        </OpenEnquiryButton>
                    </div>

                    {/* Mobile */}
                    <button
                        onClick={() => setMobileAcc(!mobileAcc)}
                        className="grid h-10 w-10 place-items-center rounded-xl border md:hidden"
                    >
                        <Plus
                            size={18}
                            className={`transition ${mobileAcc ? "rotate-45" : ""}`}
                        />
                    </button>
                </nav>

                {/* Mobile Menu */}
                {mobileAcc && (
                    <div className="border-t bg-white px-4 py-4 md:hidden">
                        <div className="grid grid-cols-1 gap-1">
                            {topics.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileAcc(false)}
                                    className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <OpenEnquiryButton
                            className="mt-4 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
                        >
                            Get Started
                        </OpenEnquiryButton>
                    </div>
                )}
            </header>
        </>
    );
}
