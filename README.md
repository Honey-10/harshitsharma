# My Portfolio — Harshit Sharma

My personal portfolio website. Built it from scratch using Next.js, Tailwind, and Framer Motion. Nothing fancy copied — just spent time making it look clean and feel smooth.

Live at → **[harshitsharma.vercel.app](https://harshitsharma.vercel.app)**

---

## Tech used

- **Next.js 14** — went with this over CRA, much better for SEO and performance
- **Tailwind CSS** — utility classes everywhere, no separate CSS files mess
- **Framer Motion** — all the scroll animations and transitions
- **Lucide React** — icons, lightweight and consistent
- **Google Fonts** — Syne for headings, DM Sans for body text

---

## Run it locally

git clone https://github.com/Honey-10/harshitsharma.git
cd harshitsharma
npm install
npm run dev

That's it. Opens on localhost:3000.

---

## Folder structure

harshitsharma/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── SectionHeading.jsx
├── pages/
│   ├── _app.js
│   └── index.js
├── styles/
│   └── globals.css
└── public/
    └── resume.pdf

Pretty standard Next.js structure, nothing complicated.

---

## Deploying

I deployed this on Vercel — just connect your GitHub repo and it works out of the box. Zero config needed for Next.js.

npm install -g vercel
vercel --prod

Or just push to GitHub and import on vercel.com. Both work fine.

---

## If you want to fork this

Go ahead, it's open. Just change the content obviously —
- Your name, email, GitHub, LinkedIn in Hero.jsx and Contact.jsx
- Your projects in Projects.jsx
- Drop your resume.pdf in the /public folder
- Meta tags in pages/index.js

---

## Why I built it this way

Tried to keep it dark, minimal, and fast. No unnecessary libraries, no bloat. Animations are subtle — just enough to feel alive without being distracting. Glassmorphism cards because they look good with the dark theme.

Fonts took the longest to finalize honestly. Syne + DM Sans combo just works.

---

*Made by Harshit Sharma — MERN Stack Developer*