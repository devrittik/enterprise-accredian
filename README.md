# Accredian for Enterprises

A modern **Next.js (App Router)** recreation of the Accredian Enterprise landing page, enhanced with better UX, interactive sections, lead capture workflow, SEO improvements, and production-ready frontend practices.

## 🔗 Live Demo
https://enterprise-accredian.vercel.app/

## 📦 GitHub Repository
https://github.com/devrittik/enterprise-accredian

---

# 📌 Assignment Context

This project was built as part of a **Full Stack Developer Intern Assignment** to recreate the Accredian Enterprise website (partial clone) using Next.js.

Reference:
https://enterprise.accredian.com/

The goal was not only to recreate the UI, but to demonstrate:
- frontend execution quality
- reusable component architecture
- responsiveness
- engineering decisions
- full-stack thinking
- effective AI-assisted development workflow

---

# 🚀 Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwind-css&logoColor=38BDF8)
![JavaScript](https://img.shields.io/badge/JavaScript-111827?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![MongoDB](https://img.shields.io/badge/MongoDB-0F172A?style=for-the-badge&logo=mongodb&logoColor=47A248)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![API Routes](https://img.shields.io/badge/API_Routes-111827?style=for-the-badge&logo=next.js&logoColor=white)
![Brevo SMTP](https://img.shields.io/badge/Brevo_SMTP-0F172A?style=for-the-badge&logo=mailgun&logoColor=white)
![Analytics](https://img.shields.io/badge/Analytics-111827?style=for-the-badge&logo=googleanalytics&logoColor=orange)
![Speed Insights](https://img.shields.io/badge/Speed_Insights-0F172A?style=for-the-badge&logo=lighthouse&logoColor=F44B21)
![Ngrok](https://img.shields.io/badge/Ngrok-111827?style=for-the-badge&logo=ngrok&logoColor=white)

---

# ✨ Key Features

## 🖥️ Core Pages & UI
- Fully responsive landing page
- Clean navigation menu
- Structured footer
- Smooth section navigation
- Mobile-friendly layout

## 🎯 Added Sections
- Mission section with text + embedded YouTube video
- Real Impact section (client/business outcome focused)
- Floating CTA button for quick enquiries

## 🔥 Improved Existing Sections
- Hero section upgraded with slides + background videos
- Partnership logos carousel
- Detailed course catalog with tabs (replaced simple expertise section)
- USP section converted from static SVG to interactive UI
- CAT framework redesigned into interactive experience
- Deliverables section improved visually
- CTA section enhanced with compact lead form
- Sliding testimonials section
- Improved FAQ experience
- Footer enhanced with embedded map + back to top button
- Cleaner header with single dropdown navigation menu
- Lead forms improved for UX and validation

## ✂️ Removed / Simplified
- Repetitive sections like:
  - Who Should Join
  - Segmentation blocks

---

# 📨 Lead Capture Flow (Bonus Full Stack)

Implemented a functional lead workflow:

Frontend Form  
→ API Route  
→ Database Storage  
→ Admin Notification Email  
→ If any success condition passes (DB or Email), user receives confirmation mail  
→ Success feedback shown on UI

### Includes:
- field validation
- compact + detailed forms
- loading states
- success/error states
- reusable form variants

---

# ⚡ Performance & SEO Enhancements

- Next.js App Router structure
- Optimized images with `next/image`
- Video optimization (`webm + mp4 fallback`)
- Dynamic imports for heavier sections
- Metadata configuration
- Canonical URL support
- `sitemap.xml`
- `robots.txt`
- `loading.js`
- `error.js`
- `not-found.js`
- Vercel Analytics
- Vercel Speed Insights

[Open Lighthouse Report ➔](https://enterprise-accredian.vercel.app/reports/lighthouse.html)

---

# 🤖 AI Usage Disclosure

AI tools were intentionally used during development to improve productivity and decision-making.

## Where AI Helped
- Initial project structuring
- Competitor research and feature inspiration
- UI/UX brainstorming
- Finding better stock image/video sources
- Reusable component planning
- Tailwind refinements
- Next.js migration learning (coming from React mindset)
- Debugging and implementation acceleration

## What Was Improved / Decided Manually
- Section additions/removals
- UX redesign decisions
- Business-focused content direction
- Full lead flow logic
- Visual polish and responsiveness
- Performance improvements
- Component composition
- Final architecture choices

AI was used as an assistant — not a replacement for engineering decisions.

---

# 📂 Project Structure

```txt
enterprise-accredian/
├── public/
│   ├── logo/                      # Brand assets and logos
│   ├── other/                     # Images, icons, illustrations
│   ├── videos/                    # Hero/background media assets
│   └── reports/                   # Lighthouse audit reports
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── leads/
│   │   │       └── route.js       # Lead submission API (DB + email flow)
│   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── FloatingCTA.jsx        # Floating enquiry action button
│   │   │   │   ├── GlobalEnquiryModal.jsx # Global modal controller
│   │   │   │   ├── Header.jsx             # Navbar / navigation
│   │   │   │   └── OpenEnquiryButton.jsx  # Reusable button that opens modal
│   │   │   │
│   │   │   ├── forms/
│   │   │   │   └── LeadForm.jsx           # Main reusable lead capture form
│   │   │   │
│   │   │   └── Home/                      # Homepage sections
│   │   │       ├── CAT.jsx
│   │   │       ├── CTA.jsx
│   │   │       ├── Deliverables.jsx
│   │   │       ├── EnquireModal.jsx
│   │   │       ├── FAQ.jsx
│   │   │       ├── Hero.jsx
│   │   │       ├── Impact.jsx
│   │   │       ├── Metrics.jsx
│   │   │       ├── Mission.jsx
│   │   │       ├── Partnerships.jsx
│   │   │       ├── Testimonials.jsx
│   │   │       └── USP.jsx
│   │
│   │   ├── error.js              # Global error boundary UI
│   │   ├── favicon.ico           # Browser tab icon
│   │   ├── globals.css           # Global styles
│   │   ├── layout.js             # Root layout (header, footer, metadata)
│   │   ├── loading.js            # Route loading state UI
│   │   ├── not-found.js          # 404 page
│   │   ├── page.js               # Homepage entry
│   │   ├── robots.js             # robots.txt generator
│   │   └── sitemap.js            # sitemap.xml generator
│   │
│   ├── Catalog/
│   │   ├── CatalogItem.jsx       # Single catalog card
│   │   └── SkillsCatalog.jsx     # Expertise / course catalog section
│   │
│   ├── data/
│   │   ├── catalogData.js        # Catalog content data
│   │   └── faqData.js            # FAQ content data
│   │
│   ├── lib/
│   │   ├── brevo.js              # Email / SMTP utilities
│   │   ├── connectDB.js          # MongoDB connection helper
│   │   └── validation.js         # Form validation schemas
│   │
│   └── models/
│       └── Lead.js               # Lead database schema/model
│
├── .env.local                    # Local environment variables
├── package.json                  # Project dependencies and scripts
├── README.md                     # Project documentation
└── ...
```

# 🛠️ Local Setup

Follow these steps to run the project locally.

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/devrittik/enterprise-accredian.git
cd enterprise-accredian
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Create Environment Variables

Create a file named:

```bash
.env.local
```
Add the following values:

```bash
MONGODB_URI=your_mongodb_connection_string

OWNER_EMAIL=your_admin_email
EMAIL_FROM=your_from_email

EMAIL_HOST=your_smtp_host
EMAIL_PORT=587 (whichever works)
EMAIL_USER=your_smtp_email_user
EMAIL_PASS=your_smtp_email_user
```
> These variables are used for database connection and lead email workflow.

## 4️⃣ Start Development Server

```bash
npm run dev
```

## 5️⃣ Open in Browser

Visit:

```bash
http://localhost:3000
```

---

## 🚀 Production Build

To test production build locally:

```bash
npm run build
npm start
```
Then deploy via Vercel dashboard or Git integration.

# 📌 Notes
- Node.js 18+ recommended
- Use .env.local (do not commit secrets)
- MongoDB + SMTP credentials required for lead form functionality

---

# 🔮 Improvements With More Time
- Deep down in performance and SEO optimization
- CMS-driven content management
- Multi-page architecture
- Advanced animations
- Better analytics dashboard
- Lead management admin panel
- A/B testing for CTAs
- Multi-language support
- Richer accessibility improvements
- Automated testing
- Searchable course catalog
- CRM integrations

---

# 🧠 Approach Taken

Instead of making a strict pixel clone, the project focused on:

- preserving brand theme
- improving user experience
- reducing repetitive content
- adding meaningful interactivity
- demonstrating full-stack capability
- applying production-ready Next.js practices

---

# 👨‍💻 Author

### Rittik Chakraborty

[![GitHub](https://img.shields.io/badge/GitHub-111827?style=for-the-badge&logo=github&logoColor=white)](https://github.com/devrittik)
[![Portfolio](https://img.shields.io/badge/Portfolio-5E2C04?style=for-the-badge&logo=man&logoColor=white)](https://rittikchakraborty.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=inspire&logoColor=white)](https://www.linkedin.com/in/rittik-chakraborty/)


---