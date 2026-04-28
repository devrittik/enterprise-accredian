import OpenEnquiryButton from "./OpenEnquiryButton";
import { MessageSquare } from "lucide-react";

export default function FloatingCTA() {
    return (

        <div className="fixed bottom-6 right-6 z-50 group">
            <div className="absolute inset-0 rounded-full bg-blue-600 blur-xl opacity-60 scale-125"></div>

            <OpenEnquiryButton
                className="relative z-20 grid h-16 w-16 place-items-center rounded-full bg-blue-600 text-white shadow-2xl ring-4 ring-white transition duration-300 hover:scale-110 hover:bg-blue-700"
            >
                <MessageSquare size={28} />
            </OpenEnquiryButton>

            <span className="pointer-events-none absolute bottom-full right-0 z-30 mb-3 min-w-max whitespace-nowrap rounded-xl bg-slate-900 px-3 py-2 text-sm text-white opacity-0 shadow-lg transition duration-200 group-hover:opacity-100">
                Need Help?
            </span>
        </div>
    );
}