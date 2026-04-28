export default function sitemap() {
    const baseUrl = "https://enterprise-accredian.vercel.app/";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}