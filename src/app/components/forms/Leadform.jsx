"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
    EMAIL_REGEX,
    PHONE_REGEX,
    emailSchema,
    leadSchema,
    phoneSchema,
} from "@/lib/validation";

export default function LeadForm({
    variant = "compact", // compact | detailed
    title = "Speak To Our Expert",
    subtitle = "Get a tailored learning roadmap for your team",
    buttonText = "Submit",
    className = "",
}) {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const isDetailed = variant === "detailed";

    const validateField = (name, value) => {
        if (name === "email") {
            const result = emailSchema.safeParse(value);
            return result.success ? "" : result.error.issues[0]?.message;
        }

        if (name === "phone") {
            const result = phoneSchema.safeParse(value);
            return result.success ? "" : result.error.issues[0]?.message;
        }

        return "";
    };

    const handleFieldChange = (e) => {
        const { name, value } = e.target;

        if (!name || (name !== "email" && name !== "phone")) {
            return;
        }

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            phoneCode: formData.get("phoneCode"),
            phone: formData.get("phone"),
            company: formData.get("company"),
            domain: formData.get("domain") || null,
            teamSize: formData.get("teamSize") || null,
            deliveryMode: formData.get("deliveryMode") || null,
            location: formData.get("location") || null,
            source: isDetailed ? "detailed" : "compact",
        };

        const parsedLead = leadSchema.safeParse(payload);

        if (!parsedLead.success) {
            const nextErrors = {};

            parsedLead.error.issues.forEach((issue) => {
                const fieldName = issue.path[0];

                if (
                    (fieldName === "email" || fieldName === "phone") &&
                    !nextErrors[fieldName]
                ) {
                    nextErrors[fieldName] = issue.message;
                }
            });

            setErrors(nextErrors);
            return;
        }

        try {
            setLoading(true);
            setErrors({});

            const res = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (data.success) {
                setSubmitted(true);
                e.target.reset();

                setTimeout(() => setSubmitted(false), 2200);
            } else {
                alert("Submission failed");
            }
        } catch (err) {
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500";

    const selectClass =
        "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500";

    const phoneCodeClass =
        "rounded-l-xl border-r border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:bg-white";

    const getInputClass = (fieldName) =>
        `${inputClass} ${errors[fieldName] ? "border-red-500 focus:border-red-500" : ""}`;

    return (
        <form
            onSubmit={handleSubmit}
            className={`rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-8 ${className}`}
        >
            <h3 className="text-center text-2xl font-bold text-slate-900">
                {title}
            </h3>

            <p className="mt-2 text-center text-sm text-slate-500">
                {subtitle}
            </p>

            <div className="mt-6 space-y-4">
                {/* Required core fields */}
                <input
                    type="text"
                    placeholder="Full Name*"
                    name="name"
                    required
                    className={inputClass}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Work Email*"
                    required
                    pattern={EMAIL_REGEX.source}
                    title="Enter a valid email address"
                    onChange={handleFieldChange}
                    onBlur={handleFieldChange}
                    className={getInputClass("email")}
                />
                {errors.email && (
                    <p className="-mt-2 text-sm text-red-600">{errors.email}</p>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex rounded-xl border border-slate-200 overflow-hidden">
                        <select
                            name="phoneCode"
                            defaultValue="+91"
                            className={phoneCodeClass}
                        >
                            <option>+91</option>
                            <option>+1</option>
                            <option>+44</option>
                            <option>+971</option>
                        </select>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            inputMode="numeric"
                            pattern={PHONE_REGEX.source}
                            title="Enter a valid mobile number with 7 to 15 digits"
                            onChange={handleFieldChange}
                            onBlur={handleFieldChange}
                            className="w-full bg-white px-3 py-3 text-sm text-slate-900 outline-none"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Company*"
                        name="company"
                        required
                        className={inputClass}
                    />
                </div>
                {errors.phone && (
                    <p className="-mt-2 text-sm text-red-600">{errors.phone}</p>
                )}

                {/* Extra fields only for modal / detailed */}
                {isDetailed && (
                    <>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <select name="domain" className={selectClass}>
                                <option value="">Select Domain</option>
                                <option>Product Management</option>
                                <option>CFO</option>
                                <option>Data Science</option>
                                <option>Artificial Intelligence</option>
                                <option>Human Resource</option>
                                <option>Strategy & Leadership</option>
                                <option>General Management</option>
                                <option>Digital Transformation</option>
                                <option>Business Management</option>
                                <option>Finance</option>
                                <option>Project Management</option>
                                <option>Senior Management</option>
                            </select>

                            <select name="teamSize" className={selectClass}>
                                <option value="">Team Size</option>
                                <option>1 - 10</option>
                                <option>11 - 50</option>
                                <option>51 - 200</option>
                                <option>200+</option>
                            </select>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <select name="deliveryMode" className={selectClass}>
                                <option value="">Mode of Delivery</option>
                                <option>Online</option>
                                <option>Offline</option>
                                <option>Hybrid</option>
                            </select>

                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                className={inputClass}
                            />
                        </div>
                    </>
                )}

                <label className="flex items-start gap-3 text-sm text-slate-500">
                    <input
                        type="checkbox"
                        required
                        className="mt-1 accent-blue-600"
                    />
                    <span>
                        I agree to be contacted regarding enterprise learning
                        solutions.
                    </span>
                </label>

                <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.99]"
                >
                    {loading ? "Submitting..." : submitted ? "Request Sent" : buttonText}
                    {!submitted && <ArrowRight size={18} />}
                </button>
            </div>
        </form>
    );
}
