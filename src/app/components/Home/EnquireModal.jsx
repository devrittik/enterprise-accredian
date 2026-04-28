"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import LeadForm from "../forms/Leadform";

export default function EnquireModal({ open, onClose }) {

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeyDown);

        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/60 px-4 py-6 backdrop-blur-sm"
            onClick={onClose} // click outside close
        >
            <div
                className="mx-auto flex max-h-[92vh] w-full max-w-5xl rounded-[1.75rem] bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()} // prevent inside click close
            >
                {/* Left Media */}
                <div className="relative hidden w-1/2 overflow-hidden rounded-l-[1.75rem] lg:block">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                    >
                        <source src="/videos/cta.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <h3 className="text-3xl font-bold">
                            Build Future-Ready Teams
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-200">
                            Explore custom learning solutions designed for enterprise growth.
                        </p>
                    </div>
                </div>

                {/* Right Form */}
                <div className="relative w-full overflow-y-auto rounded-[1.75rem] bg-white p-4 sm:p-6 lg:w-1/2 lg:rounded-l-none lg:rounded-r-[1.75rem]">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                        <X size={20} />
                    </button>

                    <LeadForm
                        variant="detailed"
                        title="Enquire Now"
                        subtitle="Tell us about your requirements"
                        buttonText="Submit Enquiry"
                        className="border-0 p-2 shadow-none sm:p-4"
                    />
                </div>
            </div>
        </div>
    );
}
