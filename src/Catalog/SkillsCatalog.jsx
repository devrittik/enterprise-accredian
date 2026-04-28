"use client";

import { useState } from "react";
import catalog from "@/data/catalogData";
import CatalogItem from "./CatalogItem";

export default function SkillsCatalog() {
    const [active, setActive] = useState(0);

    return (
        <section id="expertises" className="px-4 py-12 sm:py-20">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-5xl">
                        Our <span className="text-blue-600">Domain Expertise</span>{" "}
                    </h2>

                    <p className="text-slate-600 bg-blue-50 p-3 rounded-2xl sm:text-lg">
                        Specialized programs designed to fuel innovation, build future-ready talent and
                        accelerate digital transformation.
                    </p>
                </div>

                {/* Tabs */}
                <div className="mt-10">
                    {/* Mobile Accordion */}
                    <div className="mt-8 space-y-3 sm:hidden">
                        {catalog.map((item, index) => (
                            <div
                                key={item.id}
                                className="rounded-2xl border border-slate-200 bg-white"
                            >
                                <button
                                    onClick={() => setActive(index)}
                                    className="flex w-full items-center justify-between px-4 py-4 text-left"
                                >
                                    <span className="font-semibold text-slate-900">
                                        {item.title}
                                    </span>

                                    <span className="text-xl text-blue-600">
                                        {active === index ? "−" : "+"}
                                    </span>
                                </button>

                                {active === index && (
                                    <div className="border-t border-slate-200 p-4">
                                        <CatalogItem item={item} mobile />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Horizontal */}
                    <div className="hidden sm:block overflow-x-auto">
                        <div className="flex min-w-max gap-3 border-b border-slate-200 pb-3">
                            {catalog.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActive(index)}
                                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${active === index
                                            ? "bg-blue-600 text-white"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                        }`}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>

                        {/* Active Content */}
                        <CatalogItem item={catalog[active]} />
                    </div>
                </div>
            </div>
        </section>
    );
}