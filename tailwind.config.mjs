export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1D4ED8',
                primaryDark: '#1E40AF',
                accent: '#0EA5E9',
                success: '#16A34A',
                text: '#0F172A',
                muted: '#64748B',
                border: '#E2E8F0',
                surface: '#F8FAFC',
                white: '#FFFFFF',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
            boxShadow: {
                soft: '0 10px 30px rgba(2, 6, 23, 0.08)',
                card: '0 8px 24px rgba(15, 23, 42, 0.06)',
            },
            borderRadius: {
                xl2: '1rem',
                xl3: '1.25rem',
            },
            maxWidth: {
                container: '1200px',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-6px)' },
                },
                fadeUp: {
                    '0%': { opacity: 0, transform: 'translateY(12px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
            },
            animation: {
                float: 'float 3s ease-in-out infinite',
                fadeUp: 'fadeUp 0.5s ease-out forwards',
            },
            backgroundImage: {
                hero: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 55%, #E0F2FE 100%)',
            },
        },
    },
    plugins: [],
};