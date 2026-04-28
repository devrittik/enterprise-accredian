import {
    Zap,
    TrendingUp,
    Users,
    Star,
    Briefcase,
} from "lucide-react";

const stats = [
    {
        value: "32%",
        label: "Faster onboarding",
        desc: "for enterprise hiring teams through structured role-readiness programs and guided project-based learning.",
        icon: Zap,
        color: "from-blue-600 to-cyan-500",
    },
    {
        value: "41%",
        label: "Higher team productivity",
        desc: "after targeted upskilling journeys focused on automation, analytics, and modern digital workflows.",
        icon: TrendingUp,
        color: "from-indigo-600 to-blue-500",
    },
    {
        value: "2.4x",
        label: "Leadership pipeline growth",
        desc: "through mentorship tracks, manager enablement programs, and internal mobility pathways.",
        icon: Users,
        color: "from-violet-600 to-blue-500",
    },
    {
        value: "4.6/5",
        label: "Average learner rating",
        desc: "across cohort-based programs delivered with expert mentors, hands-on labs, and measurable outcomes.",
        icon: Star,
        color: "from-sky-600 to-blue-500",
    },
    {
        value: "1800+",
        label: "Career transitions enabled",
        desc: "through industry-aligned programs helping professionals move into high-growth technology roles.",
        icon: Briefcase,
        color: "from-blue-700 to-indigo-600",
    },
];

export default function Impact() {
    return (
        <section id="impact" className="px-4 py-12 sm:py-20">
            <div className="mx-auto max-w-7xl">

                {/* Top */}
                <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 sm:text-6xl">
                            Real <span className="text-blue-600">Impact</span>, Delivered
                        </h2>

                        <p className="mt-4 max-w-2xl text-lg text-slate-600">
                            Measurable business outcomes powered by practical learning and
                            workforce transformation.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-blue-50 p-6 text-lg leading-8 text-slate-700">
                        Trusted by ambitious teams to close skill gaps, accelerate growth,
                        and build future-ready capabilities at scale.
                    </div>
                </div>

                {/* Cards */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {stats.map((item, i) => (
                        <div
                            key={i}
                            className="group flex h-full min-h-[320px] cursor-pointer touch-manipulation flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out active:scale-95 active:border-blue-200 active:bg-blue-50/40 active:shadow-lg lg:hover:-translate-y-1 lg:hover:shadow-lg"
                        >
                            {/* Top Row */}
                            <div className="flex items-start justify-between">
                                <span
                                    className={`rounded-2xl bg-gradient-to-r ${item.color} px-5 py-3 text-3xl font-bold text-white`}
                                >
                                    {item.value}
                                </span>

                                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-50 transition-[transform,background-color,color] duration-200 ease-out group-active:scale-95 group-active:bg-blue-100 lg:group-hover:scale-105 lg:group-hover:bg-blue-600">
                                    <item.icon className="h-7 w-7 text-blue-600 lg:group-hover:text-white" />
                                </div>
                            </div>

                            {/* Center Content */}
                            <div className="mt-8 flex-1">
                                <h3 className="text-2xl font-semibold text-slate-900">
                                    {item.label}
                                </h3>

                                <p className="mt-4 text-lg leading-8 text-slate-600">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
