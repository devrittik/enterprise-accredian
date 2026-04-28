const stats = [
    { value: "10K+", label: "Professionals Trained" },
    { value: "200+", label: "Sessions Delivered" },
    { value: "4.6/5", label: "Average Rating" },
    { value: "5K+", label: "Active Learners" },
];

export default function Metrics() {
    return (
        <section
            id="stats"
            className="w-full px-4 py-12 sm:py-20"
        >
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Our <span className="text-blue-600">Track Record</span>
                    </h2>
                    <p className="mt-3 text-sm text-slate-600 sm:text-base">
                        Trusted outcomes delivered at scale.
                    </p>
                </div>

                {/* Desktop */}
                <div className="mt-10 hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid sm:grid-cols-4">
                    {stats.map((item, index) => (
                        <div
                            key={item.value}
                            className={`flex flex-col items-center px-6 py-8 text-center ${index !== stats.length - 1 ? "border-r border-slate-200" : ""
                                }`}
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-blue-700">
                                {item.value}
                            </div>

                            <p className="mt-4 text-base font-semibold text-slate-800">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile */}
                <div className="mt-8 space-y-4 sm:hidden">
                    {stats.map((item, index) => (
                        <div
                            key={item.value}
                            className={`flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm ${index !== stats.length - 1 ? "" : ""
                                }`}
                        >
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                                {item.value}
                            </div>

                            <p className="text-sm font-semibold leading-snug text-slate-800">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}