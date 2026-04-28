"use client";

import { openEnquiryModal } from "./GlobalEnquiryModal";

export default function OpenEnquiryButton({
    text,
    children,
    className = "",
}) {
    return (
        <button
            type="button"
            onClick={openEnquiryModal}
            className={className}
        >
            {children || text}
        </button>
    );
}
