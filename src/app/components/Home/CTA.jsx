import { CheckCircle2, Sparkles } from "lucide-react";
import LeadForm from "../forms/Leadform";

export default function CTA() {

    return (
        <section id="cta" className="px-4 py-14 sm:py-20">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 shadow-2xl">
                <div className="relative grid gap-10 px-6 py-8 sm:px-8 md:px-10 lg:grid-cols-2 lg:items-center lg:px-14 lg:py-14">
                    {/* Background effects */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
                        <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500 blur-3xl" />
                    </div>

                    {/* Left Content */}
                    <div className="relative z-10 text-white">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                            <Sparkles size={16} />
                            Enterprise Learning Solutions
                        </div>

                        <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
                            Ready To Upskill Your Team With
                            <span className="block text-blue-300">AI & Digital Skills?</span>
                        </h2>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-lg">
                            Build customized learning journeys for employees, managers, and
                            future leaders with measurable business outcomes.
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {[
                                "Custom Learning Paths",
                                "Expert Mentors",
                                "Hands-on Projects",
                                "ROI Focused Programs",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2 text-sm text-slate-100"
                                >
                                    <CheckCircle2 size={16} className="text-blue-300" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* compact reusable form */}
                    <div className="relative z-10">
                        <LeadForm
                            variant="compact"
                            buttonText="Book Free Consultation"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}