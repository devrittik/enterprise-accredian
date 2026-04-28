import Image from "next/image";

export default function CatalogItem({ item, mobile = false }) {
    return (
        <div className={`grid gap-6 ${mobile ? "" : "mt-8 rounded-3xl border p-6 shadow-sm"
            } lg:grid-cols-2`}>
            {/* Left */}
            <div>
                <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                    {item.desc}
                </p>

                <h4 className="mt-8 text-lg font-bold text-slate-900">
                    Skills
                </h4>

                <div className="mt-4 grid grid-cols-2 gap-3">
                    {item.skills.map((skill) => (
                        <div
                            key={skill}
                            className="rounded-xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                        >
                            ✓ {skill}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right */}
            <div className="rounded-2xl bg-slate-100 p-4 flex items-center justify-center">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={220}
                    className="w-full max-w-[100px] md:max-w-[200px] lg:max-w-[300px] h-auto"
                    loading="lazy"
                />
            </div>
        </div>
    );
}