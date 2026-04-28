import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Lead from "@/models/Lead";
import { sendBrevoMail } from "@/lib/brevo";
import { leadSchema } from "@/lib/validation";

export async function POST(req) {
    try {
        const body = await req.json();
        const parsedLead = leadSchema.safeParse(body);

        if (!parsedLead.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: parsedLead.error.issues[0]?.message || "Invalid lead data",
                },
                { status: 400 }
            );
        }

        const leadData = parsedLead.data;
        const { name, email, phone, company, phoneCode } = leadData;

        const dbPromise = connectDB().then(() => Lead.create(leadData));

        const ownerMailPromise = sendBrevoMail({
            to: process.env.OWNER_EMAIL,
            subject: "New Lead Received",
            html: `
        <h2>New Lead</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phoneCode} ${phone}</p>
        <p>Company: ${company}</p>
        ${leadData.domain ? `<p>Domain: ${leadData.domain}</p>` : ""}
        ${leadData.teamSize ? `<p>Team Size: ${leadData.teamSize}</p>` : ""}
        ${leadData.deliveryMode ? `<p>Delivery Mode: ${leadData.deliveryMode}</p>` : ""}
        ${leadData.location ? `<p>Location: ${leadData.location}</p>` : ""}
        <p>Source: ${leadData.source}</p>
      `,
        });

        const [dbResult, ownerMailResult] = await Promise.allSettled([
            dbPromise,
            ownerMailPromise,
        ]);

        const dbSaved = dbResult.status === "fulfilled";
        const ownerMailSent = ownerMailResult.status === "fulfilled";

        if (!dbSaved) {
            console.error("Lead DB save failed", dbResult.reason);
        }

        if (!ownerMailSent) {
            console.error("Owner email failed", ownerMailResult.reason);
        }

        if (dbSaved || ownerMailSent) {
            await sendBrevoMail({
                to: email,
                subject: "Thanks for contacting us",
                html: `
          <p>Hi ${name},</p>
          <p>Thanks for your enquiry. Our team will contact you soon.</p>
        `,
            }).catch(() => { });

            return NextResponse.json({
                success: true,
                message: "Lead submitted",
            });
        }

        return NextResponse.json(
            { success: false, message: "Submission failed" },
            { status: 500 }
        );
    } catch (error) {
        console.error("Lead submission failed", error);
        return NextResponse.json(
            { success: false, message: "Server error" },
            { status: 500 }
        );
    }
}
