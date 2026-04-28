import {
    Search,
    ClipboardList,
    MonitorPlay,
    ChevronRight,
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Skill Gap Analysis",
        desc: "Assess team capabilities, identify learning priorities, and map growth opportunities aligned with business goals.",
        icon: Search,
    },
    {
        number: "02",
        title: "Customized Training Plan",
        desc: "Build a tailored roadmap with the right programs, mentors, and measurable outcomes for every team.",
        icon: ClipboardList,
    },
    {
        number: "03",
        title: "Flexible Program Delivery",
        desc: "Launch scalable learning experiences through live cohorts, self-paced modules, workshops, and blended formats.",
        icon: MonitorPlay,
    },
];

function DeliverableCard({ step, last }) {
    const Icon = step.icon;

    return (
        <div className="relative flex-1">
            {/* Desktop connector */}
            {!last && (
                <div className="absolute left-[78%] top-1/2 hidden h-[2px] w-[44%] -translate-y-1/2 bg-gradient-to-r from-blue-300 to-blue-500 lg:block" />
            )}

            <div className="group relative cursor-pointer touch-manipulation rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out active:scale-95 active:border-blue-200 active:bg-blue-50/40 active:shadow-lg lg:hover:-translate-y-2 lg:hover:shadow-xl">
                {/* Step badge */}
                <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-200 bg-white text-sm font-bold text-blue-600 shadow-sm">
                    {step.number}
                </div>

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-900">
                    <Icon size={28} />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {step.desc}
                </p>

                {/* Bottom line */}
                <div className="mt-5 h-1 w-16 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-24" />
            </div>
        </div>
    );
}

export default function Deliverables() {
    return (
        <section id="deliverables" className="px-4 py-14 sm:py-20">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-5xl">
                        How We <span className="text-blue-600">Deliver Results</span>
                    </h2>

                    <p className="mt-3 text-slate-600 sm:text-lg">
                        A structured three-step approach to scalable skill development
                    </p>
                </div>

                {/* Mobile / Tablet */}
                <div className="mt-12 grid gap-5 lg:hidden">
                    {steps.map((step, index) => (
                        <div key={step.number}>
                            <DeliverableCard
                                step={step}
                                last={index === steps.length - 1}
                            />

                            {index !== steps.length - 1 && (
                                <div className="flex items-center justify-center py-2">
                                    <ChevronRight className="rotate-90 text-blue-500" size={20} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Desktop Flow */}
                <div className="mt-16 hidden items-center gap-6 lg:flex">
                    {steps.map((step, index) => (
                        <DeliverableCard
                            key={step.number}
                            step={step}
                            last={index === steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
