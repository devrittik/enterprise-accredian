import {
    Lightbulb,
    Briefcase,
    Wrench,
} from "lucide-react";

const steps = [
    {
        title: "Concept",
        desc: "Foundational knowledge for deep subject understanding.",
        icon: Lightbulb,
    },
    {
        title: "Application",
        desc: "Practical implementation through real-world scenarios.",
        icon: Briefcase,
    },
    {
        title: "Tools",
        desc: "Resources and techniques for effective skill mastery.",
        icon: Wrench,
    },
];

function CatCard({ item, last }) {
    const Icon = item.icon;

    return (
        <div className="relative flex-1">
            {/* connector desktop */}
            {!last && (
                <div className="absolute left-[72%] top-1/2 hidden h-1 w-[60%] -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 lg:block" />
            )}

            <div className="group relative cursor-pointer touch-manipulation rounded-[2rem] border-2 border-blue-500 bg-white p-8 text-center shadow-sm transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out active:scale-95 active:border-blue-400 active:bg-blue-50/40 active:shadow-lg lg:hover:-translate-y-2 lg:hover:shadow-2xl lg:hover:border-blue-600">
                {/* icon badge */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {item.desc}
                </p>

                {/* glow */}
                <div className="pointer-events-none absolute inset-x-8 bottom-0 h-10 rounded-full bg-blue-500/10 blur-xl opacity-0 transition group-hover:opacity-100" />
            </div>
        </div>
    );
}

export default function CAT() {
    return (
        <section id="cat" className="px-4 py-14 sm:py-20">
            <div className="mx-auto max-w-7xl">
                {/* heading */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-5xl">
                        The <span className="text-blue-600">C.A.T.</span> Framework
                    </h2>

                    <p className="mt-3 text-slate-600 sm:text-lg">
                        Our Proven Approach to{" "}
                        <span className="text-blue-600 font-semibold">
                            Learning Excellence
                        </span>
                    </p>
                </div>

                {/* mobile stack */}
                <div className="mt-12 space-y-4 lg:hidden">
                    {steps.map((item, index) => {
                        const Icon = item.icon;
                        const last = index === steps.length - 1;

                        return (
                            <div key={item.title} className="relative">
                                <button
                                    className="group w-full cursor-pointer touch-manipulation rounded-[1.75rem] border-2 border-blue-500 bg-white p-6 text-center shadow-sm transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out active:scale-95 active:border-blue-400 active:bg-blue-50/40 active:shadow-lg lg:hover:-translate-y-1 lg:hover:shadow-xl lg:hover:border-blue-600"
                                >
                                    {/* icon */}
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                                        <Icon size={26} />
                                    </div>

                                    <h3 className="mt-5 text-2xl font-bold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        {item.desc}
                                    </p>
                                </button>

                                {/* divider / connector */}
                                {!last && (
                                    <div className="flex flex-col items-center py-3">
                                        <div className="h-6 w-px bg-blue-300" />
                                        <div className="h-3 w-3 rounded-full bg-blue-500" />
                                        <div className="h-6 w-px bg-blue-300" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* desktop flow */}
                <div className="mt-16 hidden items-center gap-6 lg:flex">
                    {steps.map((item, index) => (
                        <CatCard
                            key={item.title}
                            item={item}
                            last={index === steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
