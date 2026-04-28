import OpenEnquiryButton from "../common/OpenEnquiryButton";
import Image from "next/image";

export default function Mission() {

    return (
        <section id="mission" className="px-4 py-12 sm:py-20">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">

                {/* LEFT CONTENT */}
                <div className="order-1">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/logo/logo.webp"
                            alt="Accredian"
                            width={160}
                            height={40}
                            className="h-10 w-auto"
                            priority
                        />

                        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                            AI Learning Engine
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
                        Personalized Coaching That Builds
                        <span className="text-blue-600"> Real Business Impact</span>
                    </h2>

                    {/* Mobile Video */}
                    <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:hidden">
                        <div className="aspect-video">
                            <iframe
                                className="h-full w-full"
                                src="https://www.youtube.com/embed/nHvX3SRIk40?si=JMPhcsZHnf9MRiy2"
                                title="Learning Platform Demo"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="mt-6 space-y-4 text-base leading-7 text-slate-600 sm:text-lg">
                        <p>
                            Help your teams practice high-stakes business scenarios in a safe,
                            scalable learning environment.
                        </p>

                        <p>
                            From leadership decisions to sales conversations and stakeholder
                            management, learners receive instant feedback, measurable insights,
                            and repeatable practice.
                        </p>

                        <p>
                            Identify capability gaps faster and transform learning into
                            performance outcomes across your organization.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-3">

                        <OpenEnquiryButton className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-blue-500" text = "Book a Demo" />

                        <a
                            href="#impact"
                            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:scale-105 ">
                            See Impacts
                        </a>
                    </div>
                </div>

                {/* RIGHT VIDEO (desktop) */}
                <div className="order-2 hidden lg:block">
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                        <div className="aspect-video">
                            <iframe
                                className="h-full w-full"
                                src="https://www.youtube.com/embed/nHvX3SRIk40?si=JMPhcsZHnf9MRiy2"
                                title="Learning Platform Demo"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}