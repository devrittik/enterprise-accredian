"use client";

import { useState } from "react";
import {
    ChevronDown,
    ChevronRight,
} from "lucide-react";
import Image from "next/image";
import faqData from "@/data/faqData";

function FAQItem({
    item,
    isOpen,
    onClick,
}) {
    return (
        <div className="border-b border-slate-200 pb-5">
            <button
                onClick={onClick}
                className="flex w-full items-start justify-between gap-4 text-left"
            >
                <h3 className="flex-1 text-lg font-semibold text-slate-900 sm:text-xl">
                    {item.question}
                </h3>

                <ChevronDown
                    size={22}
                    className={`mt-1 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                />
            </button>

            <div
                className={`grid transition-all duration-300 ${isOpen
                        ? "grid-rows-[1fr] pt-4"
                        : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="text-sm leading-7 text-slate-600 sm:text-base">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function FAQSection({
    title = "Still Curious? ",
    title2 = "Read More",
    tabs = faqData,
}) {
    const [activeTab, setActiveTab] = useState(0);
    const [openIndex, setOpenIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    const currentTab = tabs[activeTab];

    const visibleItems =
        currentTab?.items?.slice(0, visibleCount) || [];

    const hasMore =
        currentTab?.items?.length > visibleCount;

    const changeTab = (index) => {
        setActiveTab(index);
        setOpenIndex(0);
        setVisibleCount(3);
    };

    return (
        <section id="faq" className="px-4 py-14 sm:py-20">
            <div className="mx-auto max-w-7xl">
                {/* Title */}
                <h2 className="text-3xl font-bold text-slate-900 sm:text-5xl">
                    {title} <span className="text-blue-600">{title2}</span>
                </h2>

                {/* Tabs */}
                <div className="mt-8 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.label}
                            onClick={() => changeTab(index)}
                            className={`shrink-0 rounded-xl border px-4 py-2 text-sm font-medium transition sm:text-base ${activeTab === index
                                    ? "border-blue-600 bg-blue-50 text-blue-600"
                                    : "border-slate-300 text-slate-600 hover:border-blue-400 hover:text-blue-600"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_480px] lg:items-start">
                    {/* Left */}
                    <div className="space-y-6">
                        {visibleItems.map((item, index) => (
                            <FAQItem
                                key={index}
                                item={item}
                                isOpen={openIndex === index}
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? -1 : index
                                    )
                                }
                            />
                        ))}

                        {hasMore && (
                            <button
                                onClick={() =>
                                    setVisibleCount((prev) => prev + 3)
                                }
                                className="inline-flex items-center gap-2 rounded-xl border border-blue-600 px-5 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
                            >
                                View More
                                <ChevronRight size={18} />
                            </button>
                        )}
                    </div>

                    {/* Right Image */}
                    <div className="hidden lg:block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                        <Image
                            src="/other/faq.webp"
                            alt="FAQ"
                            width={800}
                            height={320}
                            className="h-[320px] w-full object-cover rounded-3xl"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}