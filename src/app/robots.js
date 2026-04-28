export default function robots() {
    const baseUrl = "https://enterprise-accredian.vercel.app/";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}