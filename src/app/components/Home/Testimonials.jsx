import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
    {
        company: "ADP",
        logo: "/other/client-logos/adp.svg",
        quote:
            "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with dedication, service, and expertise throughout the process.",
    },
    {
        company: "Zimpeer",
        logo: "/other/client-logos/zimpeer.svg",
        quote:
            "Accredian played a valuable role in strengthening our learning-first vision. Their structured approach, responsive support, and commitment to quality helped us create meaningful outcomes with confidence and speed.",
    },
    {
        company: "Bayer",
        logo: "/other/client-logos/bayer.svg",
        quote:
            "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded with reliable support and quality execution.",
    },
    {
        company: "Reliance",
        logo: "/other/client-logos/rel.svg",
        quote:
            "Choosing Accredian for employee learning & development was a valuable decision. The impact of the programs was immense and their support team was always available.",
    },
];

const looped = [...testimonials, ...testimonials];

function TestimonialCard({ item }) {
    return (
        <div className="mx-3 w-[340px] shrink-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:w-[380px]">
            <div className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                    
                    <Image
                        src={item.logo}
                        alt={item.company}
                        width={160}
                        height={48}
                        className="h-12 w-auto object-contain"
                        loading="lazy"
                    />

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Quote size={18} />
                    </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                    "{item.quote}"
                </p>

                <div className="mt-5 font-semibold text-slate-900">
                    {item.company}
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="px-4 py-14 sm:py-20 overflow-hidden"
        >
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-5xl">
                        Testimonials from{" "}
                        <span className="text-blue-600">
                            Our Partners
                        </span>
                    </h2>

                    <p className="mt-3 text-slate-600 sm:text-lg">
                        What Our Clients Are Saying
                    </p>
                </div>

                <div className="relative mt-12">

                    <div className="testimonial-marquee flex w-max">
                        {looped.map((item, index) => (
                            <TestimonialCard
                                key={index}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}