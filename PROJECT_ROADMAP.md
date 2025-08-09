Current Status
Stack Selected: Next.js 14 (App Router) + Tailwind CSS + TypeScript

Deployment: Vercel (connected to GitHub)

Data Storage: RSVP submissions → Google Sheets via API route

Custom Domain: GoDaddy domain (angelaandjeff.com) to be connected via Vercel DNS

Design Direction: Minimal, elegant, mobile-first wedding theme
Couple: Angela & Jeff
Wedding Dates: August 19 - 23, 2026
Venue: Sanctuary at Crow Hollow Ranch, 187 Suce Creek Rd, Livingston, MT 59047
Reception: Same venue
RSVP Deadline: March 1st, 2026
Dress Code: Cocktail Attire
Nearest Airport: Bozeman, MT (45 min drive)
No ride shares, recommend car rental

Work Completed:

Repo created and scaffolded with Next.js + Tailwind

GitHub + Vercel deployment pipeline functional

Placeholder home page deployed on custom domain

[2025-08-08] Initial info gathering from couple completed (see angie_info.md)

[2025-08-08] Homepage v1 completed with navigation, hero section, adventure schedule, and placeholder pages

Work Completed:

Repo created and scaffolded with Next.js + Tailwind

GitHub + Vercel deployment pipeline functional

Homepage with complete design including:
- Fixed navigation with couple's name and menu
- Hero section with wedding date and location
- Adventure schedule overview (Aug 19-23, 2026)
- Our Story preview section
- Event details section
- Footer
- Mobile-responsive design

Placeholder pages created for navigation:
- /our-story (with navigation)
- /schedule (with navigation) 
- /venue (with navigation)
- /rsvp (with navigation)

Pending Features
Pages & Content

/schedule – Week-of events with RSVP buttons, adventure details (rafting, horseback, yoga, Yellowstone tour, BBQ)
/venue – Ceremony & reception details, maps, travel info
/rsvp – RSVP form (names, events attending, dietary needs, plus-one & kids names)
/registry – Registry info (URLs, display preferences)
/our-story – Couple's story, bios, photos

Functionality

Google Sheets API integration for RSVP form submissions
Email confirmation to guests after RSVP
Event filtering (RSVP to multiple events)

Styling & UX

Mobile-first responsive layout
Elegant typography (serif/sans-serif per couple's preference)
Wedding color palette (to be finalized)
Smooth scroll for internal links
Optimized images (Next.js Image component)

Enhancements

Countdown timer to wedding date
Photo gallery (engagement, venue, couple)
Password-protect sensitive info (optional)
FAQs section

Known Issues
None yet — base scaffold is stable.

Technical Architecture
Framework: Next.js 14, App Router
Styling: Tailwind CSS
Language: TypeScript
Hosting: Vercel
Data Handling: Google Sheets API (Service Account authentication)
Routing: File-based routing under src/app
Key Directories:

/src/app/        # Pages, layouts, API routes
/src/components/ # Reusable UI components
/src/lib/        # Google Sheets integration helpers
/public/         # Static assets (photos, SVGs)
/angie_info.md   # Source of couple/event info
Environment Variables (Vercel):

GOOGLE_TYPE
GOOGLE_PROJECT_ID
GOOGLE_PRIVATE_KEY_ID
GOOGLE_PRIVATE_KEY
GOOGLE_CLIENT_EMAIL
GOOGLE_CLIENT_ID
SHEET_ID
Session Checklist
npm run dev → start dev server

Push to main → triggers Vercel deployment

Test RSVP form locally before pushing

Run npm run lint before commit

Reference angie_info.md for up-to-date event/couple info

Completed Features
(Update this section after each milestone)

[2025-08-08] Repo initialized, Next.js scaffold, Tailwind configured, deployed to Vercel

Next Steps
Build /schedule page with placeholder events

Implement RSVP form with local console logging (before Google Sheets integration)

Set up Google Service Account + connect to Sheets API

Deploy and test end-to-end RSVP submission

# Wedding Website Wireframes

Below are ASCII/text-based wireframes for the main pages of the site.

---

## 1. Homepage (`/`) Include the schedule of adventures 

--------------------------------------------------
| LOGO / COUPLE'S NAME                           |
|------------------------------------------------|
| [Navigation: Home | Our Story | RSVP | Venue]  |
|------------------------------------------------|
| HERO IMAGE (full-width wedding photo)          |
| - Overlay text: "We're Getting Married!"       |
| - Date & Location                              |
| - [RSVP Button]                                |
|------------------------------------------------|
| SECTION: Schedule of Adventures                |
| Blurb
| Link to advutures sign up and Schedule 
|------------------------------------------------|
| SECTION: Our Story (short excerpt)             |
| [Read More Button → /our-story]                |
|------------------------------------------------|
| SECTION: Event Details (Venue & Time)          |
| - Ceremony info                                |
| - Reception info                               |
| [View Details Button → /venue]                 |
|------------------------------------------------|
| FOOTER:                                        |
| - Social Media Links                           |
| - Copyright                                    |
--------------------------------------------------

---

## 2. RSVP (`/rsvp`) to the wedding

--------------------------------------------------
| LOGO / COUPLE'S NAME                           |
|------------------------------------------------|
| HEADER: RSVP                                   |
|------------------------------------------------|
| FORM FIELDS:                                   |
| - Full Name                                    |
| - Email                                        |
| - Will you attend? (Yes/No)                    |
| - Number of guests                             |
| - Dietary restrictions                         |
| - Song request (optional)                      |
| [Submit Button]                                |
|------------------------------------------------|
| AFTER SUBMIT: Thank you message                |
|------------------------------------------------|
| FOOTER                                         |
--------------------------------------------------

---

## 3. Travel & Accomidations (`/venue`)

--------------------------------------------------
| LOGO / COUPLE'S NAME                           |
|------------------------------------------------|
| HERO IMAGE (venue photo)                       |
|------------------------------------------------|
| SECTION: Ceremony                              |
| - Address                                      |
| - Time                                         |
| - Map embed                                    |
|------------------------------------------------|
| SECTION: Reception                             |
| - Address                                      |
| - Time                                         |
| - Map embed                                    |
|------------------------------------------------|
| SECTION: Travel & Accommodation                |
| - Hotel info                                   |
| - Transportation                               |
|------------------------------------------------|
| FOOTER                                         |
--------------------------------------------------

---

## 5. Gift Registry (`/registry`) (Optional)

--------------------------------------------------
| LOGO / COUPLE'S NAME                           |
|------------------------------------------------|
| HEADER: Gift Registry                          |
|------------------------------------------------|
| LINKS TO REGISTRIES:                           |
| - Amazon                                       |
| - Target                                       |
| - Other                                        |
|------------------------------------------------|
| FOOTER                                         |
--------------------------------------------------

## 6. Adventures Page 