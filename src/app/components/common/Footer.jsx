"use client";

import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaXTwitter,
    FaYoutube,
    FaGithub,
} from "react-icons/fa6";
import OpenEnquiryButton from "./OpenEnquiryButton";

export default function Footer() {
    const socials = [
        { icon : FaFacebookF, url: "https://facebook.com/accredianlearn"},
        { icon : FaLinkedinIn, url: "https://www.linkedin.com/company/accredianedu/"},
        { icon: FaGithub, url: "https://github.com/devrittik/enterprise-accredian" },
        { icon: FaXTwitter, url: "https://twitter.com/accredianedu"},
        { icon : FaInstagram, url: "https://www.instagram.com/accredian_edu"},
        { icon : FaYoutube, url: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA"},
        
    ];

    return (
        <>
        <footer className="mt-20 border-t border-slate-700 bg-gray-800 text-white">
            <div className="mx-auto max-w-7xl px-4 py-14">

                {/* Top Row */}
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

                    {/* Brand Left */}
                    <div className="max-w-md">
                        <img
                            src="/logo/logo.webp"
                            alt="Accredian"
                            className="h-10 w-auto brightness-0 invert"
                        />

                        <p className="mt-4 text-sm leading-6 text-slate-300">
                            Enterprise learning solutions built for measurable growth,
                            workforce transformation, and future-ready teams.
                        </p>

                        <div className="mt-5 flex gap-3">
                            {socials.map((icon, i) => (
                                <a
                                    key={i}
                                    href={icon.url}
                                    target="_blank"
                                    className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                                >
                                    <icon.icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA Right */}
                    <div className="shrink-0">

                            <OpenEnquiryButton className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-500" text="Enquire Now" />

                        <p className="mt-2 text-sm text-slate-400">
                            Speak with our advisor
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-10 border-t border-black-800" />

                {/* Bottom Grid */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="mt-4 space-y-3 text-slate-300">
                                {[
                                { text: "About", url: "https://accredian.com/About"}, 
                                { text: "Why Accredian", url: "https://accredian.com/whyaccredian"}, 
                                { text: "Blog", url: "https://blog.accredian.com/"}, 
                                { text: "Contact", url: "https://accredian.com/contact-us"}, 
                                ].map((item) => (
                                <li key={item.text}>
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        className="transition hover:pl-2 hover:text-blue-400"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold">Resources</h3>
                        <ul className="mt-4 space-y-3 text-slate-300">
                            {[
                                    { text: "Privacy Policy", url: "https://accredian.com/terms/privacy" },
                                    { text: "Terms of service", url: "https://accredian.com/terms" },
                                    { text: "Careers", url: "https://accredian.com/Career" },
                                    { text: "Success Stories", url: "https://accredian.com/Successstories" },
                            ].map((item) => (
                                <li key={item.text}>
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        className="transition hover:pl-2 hover:text-blue-400"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold">Contact Us</h3>

                        <p className="mt-4 text-slate-300">
                            Email:
                            <a
                                href="mailto:enterprise@accredian.com"
                                className="ml-2 font-bold text-blue-400 hover:text-blue-300"
                            >
                                enterprise@accredian.com
                            </a>
                        </p>

                        <div>
                                <h4 className="my-2 text-md font-bold text-white-600">
                                Visit Us
                            </h4>
                            <div className="relative overflow-hidden rounded-2xl border shadow-sm">
                                <div className="absolute left-3 top-3 z-10 rounded-md bg-blue-300 px-3 py-2 text-sm font-semibold border-2 text-black shadow">
                                    Accredian HQ
                                </div>
                                
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.369134314852!2d77.07944747528387!3d28.498539775738127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d194054adb4d9%3A0xa9745757ae4394df!2s4th%20Floor%2C%20250%2C%20Phase%20IV%2C%20Udyog%20Vihar%2C%20Sector%2018%2C%20Gurugram%2C%20Haryana%20122015!5e0!3m2!1sen!2sin!4v1777368070541!5m2!1sen!2sin"
                                    width="100%"
                                    height="220"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Accredian Location"
                                    className="w-full"
                                />
                            </div>
                            <p className="mt-3 italic text-sm text-slate-300">
                                4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Accredian. All rights reserved.
                    </p>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                        >
                            ↑ Back to Top
                        </button>
                </div>
            </div>
        </footer>
        </>
    );
}