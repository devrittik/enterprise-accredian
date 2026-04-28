import Image from "next/image";
const logos = [
    "/other/client-logos/rel.svg",
    "/other/client-logos/zimpeer.svg",
    "/other/client-logos/hcl.svg",
    "/other/client-logos/ibm.svg",
    "/other/client-logos/crif.svg",
    "/other/client-logos/adp.svg",
    "/other/client-logos/bayer.svg",
];

export default function Partnerships() {
    const loopLogos = [...logos, ...logos];

    return (
        <section id="clients" className="px-4 py-12 sm:py-20">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-5xl">
                        Our Proven <span className="text-blue-600">Partnerships</span>
                    </h2>

                    <p className="mt-3 text-sm text-slate-600 sm:text-base">
                        Successful collaborations with industry leaders
                    </p>
                </div>

                <div className="relative mt-10 overflow-hidden">
                    {/* fade edges */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

                    <div className="flex w-max gap-6 marquee">
                        {loopLogos.map((logo, i) => (
                            <div
                                key={i}
                                className="flex h-20 w-28 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 shadow-sm sm:h-24 sm:w-36"
                            >
                                <Image
                                    src={logo}
                                    alt="client logo"
                                    width={160}
                                    height={48}
                                    className="max-h-10 w-auto object-contain sm:max-h-12"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}