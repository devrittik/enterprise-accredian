import mongoose, { Schema, models, model } from "mongoose";

const LeadSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, lowercase: true },
        phoneCode: { type: String, default: "+91" },
        phone: { type: String, required: true, trim: true },
        company: { type: String, required: true, trim: true },
        domain: { type: String, default: null },
        teamSize: { type: String, default: null },
        deliveryMode: { type: String, default: null },
        location: { type: String, default: null },
        source: {
            type: String,
            enum: ["compact", "detailed"],
            default: "compact",
        },
    },
    { timestamps: true }
);

const Lead = models.Lead || model("Lead", LeadSchema);
export default Lead;