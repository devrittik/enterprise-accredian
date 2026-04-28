"use client";

export default function Error({
    error,
    reset,
}) {
    return (
        <div className="grid min-h-[60vh] place-items-center px-4">
            <div className="max-w-md rounded-3xl border border-red-200 bg-white p-8 text-center shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900">
                    Something went wrong
                </h2>

                <p className="mt-3 text-sm text-slate-500">
                    We hit an unexpected issue. Please try again.
                </p>

                <button
                    onClick={() => reset()}
                    className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}