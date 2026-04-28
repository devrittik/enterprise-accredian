"use client";

import { useEffect, useState } from "react";
import EnquireModal from "../Home/EnquireModal";

export const OPEN_ENQUIRY_MODAL_EVENT = "open-enquiry-modal";

export function openEnquiryModal() {
    window.dispatchEvent(new Event(OPEN_ENQUIRY_MODAL_EVENT));
}

export default function GlobalEnquiryModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setOpen(true);

        window.addEventListener(OPEN_ENQUIRY_MODAL_EVENT, handleOpen);

        return () => {
            window.removeEventListener(OPEN_ENQUIRY_MODAL_EVENT, handleOpen);
        };
    }, []);

    return <EnquireModal open={open} onClose={() => setOpen(false)} />;
}
