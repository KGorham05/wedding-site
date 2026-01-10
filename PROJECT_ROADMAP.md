# Angela & Jeff Wedding Website - Project Roadmap

## Current Status (January 9, 2026)

**Site URL:** [www.angelaandjeff2026.com](https://www.angelaandjeff2026.com)  
**Wedding Date:** August 19-23, 2026  
**Venue:** Sanctuary at Crow Hollow Ranch, Livingston, MT  
**RSVP Deadline:** March 1, 2026

### Latest Updates
- [2026-01-09] Added `/registry` page with Honeyfund link
- [2026-01-09] Added `/accommodations` page with hotels, vacation rentals, room block info
- [2026-01-09] Updated Navigation with Registry and Accommodations links
- [2026-01-09] Fixed Google Sheets column header mismatch - added "Children Names" (col J) and "Declined RSVP" (col X)
- [2026-01-09] Streamlined PROJECT_ROADMAP.md and copilot-instructions.md
- [2025-11-10] Last RSVP submission recorded (site is actively being used by guests)
- [2025-09-11] Toast notification system implemented for form validation UX
- [2025-09-05] Video source issue - Vimeo video unavailable, using static background image

---

## Styling Exploration (Parked)

**Branch:** `styling/romantic-wilderness-exploration`

This branch contains an incomplete styling refactor inspired by Lovable.app's "Romantic Wilderness" template. The work is functional but was paused before completion.

### What Was Done
- Updated `tailwind.config.ts` with new colors: `botanical-gold`, `romantic-cream`, `sage-soft/medium/deep`
- Updated `globals.css` with utility classes: `.romantic-card`, `.btn-romantic-primary/secondary`, `.decorative-divider`, `.label-elegant`
- Rewrote homepage (`page.tsx`) with cream/sage/gold palette and elegant typography
- Updated `CountdownTimer.tsx` to match new palette
- Updated `Navigation.tsx` light variant for new colors
- Converted `/registry` and `/accommodations` pages to new design

### What Needs Finishing (If Continuing)
1. **Add more nature imagery** - Currently only one small image on homepage. Want larger hero images, more Montana nature photos integrated throughout
2. **Update remaining pages** - `/our-story`, `/info`, `/guest-check-in`, all `/adventure/*` pages
3. **Explore other Lovable styles** - The preview had 4 different wedding templates; consider mixing elements from others (not just Romantic Wilderness)
4. **Lovable preview reference:** Screenshots saved in conversation - cream backgrounds, soft sage sections, gold/bronze accents, decorative vertical dividers

### To Resume
```bash
git checkout styling/romantic-wilderness-exploration
yarn dev
```

### To Discard
```bash
git branch -D styling/romantic-wilderness-exploration
```

---

## Pending Tasks

### High Priority (Angela's Latest Requests - angie-4.md)
- [x] ~~**Create `/registry` page** - Honeyfund link with messaging~~
- [x] ~~**Create `/accommodations` page** - Hotels, vacation rentals, room block info~~
- [x] ~~**Update Navigation** - Add Registry and Accommodations tabs~~

### Medium Priority (Design & Content)
- [ ] **Update color palette** - New design spec: lilac, wildflower pink, sunset orange, sage green
- [ ] **Update typography** - Mirage Medium Serif for headings
- [ ] **Move countdown timer** - Position under week schedule instead of top
- [ ] **Update `/our-story`** - Add official story content and photo from angie_info_3.md
- [ ] **Add Instagram hashtag** - #angelaandjeff2026

### Lower Priority (Technical Debt)
- [ ] Replace useState with Formik forms (dependencies already installed)
- [ ] Find new hero video source (Vimeo 903803526 no longer available)
- [ ] Update `GOOGLE_SHEETS_TEMPLATE.md` to match actual column structure

---

## Completed Features

### Core Functionality
- ✅ Full adventure RSVP flow (5-day progressive experience)
- ✅ Guest authentication from Google Sheets guest list
- ✅ Automatic RSVP submission to Google Sheets
- ✅ Party size validation and constraints
- ✅ Toast notification system for form feedback
- ✅ Countdown timer to wedding date

### Pages
- ✅ Homepage (`/`) - Hero, schedule, adventure intro
- ✅ Guest Check-in (`/guest-check-in`) - Name verification + party details
- ✅ Adventure Days (`/adventure/day-1` through `day-5`) - Progressive RSVP flow
- ✅ Completion Hub (`/adventure/complete`) - Summary + data submission
- ✅ Our Story (`/our-story`) - Couple bio and story
- ✅ Info (`/info`) - General information page
- ✅ Registry (`/registry`) - Honeyfund link
- ✅ Accommodations (`/accommodations`) - Hotels, rentals, room block
- ✅ RSVP (`/rsvp`) - Redirects to guest-check-in

### Infrastructure
- ✅ Domain connected: angelaandjeff2026.com → Vercel
- ✅ GitHub auto-deployment pipeline
- ✅ Google Sheets API integration (service account auth)
- ✅ Environment variables configured in Vercel
- ✅ Mobile-first responsive design
- ✅ WCAG AA accessible color scheme

---

## Technical Architecture

| Component | Technology |
|-----------|------------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS 4 |
| Language | TypeScript |
| Forms | useState (Formik installed but not implemented) |
| Hosting | Vercel |
| Data | Google Sheets API |
| Auth | Service Account |

### Key Directories
```
/src/app/           # Pages and API routes
/src/components/    # Reusable UI components
/src/lib/           # Google Sheets helpers, guest list types
/public/            # Static images
```

### API Routes
| Route | Purpose |
|-------|---------|
| `/api/rsvp` | Submit RSVP data to Google Sheets |
| `/api/guests` | Fetch guest list for authentication |
| `/api/debug` | Environment variable troubleshooting |
| `/api/init-sheet` | Initialize sheet headers |
| `/api/sheets/meta` | List sheet titles |

### Google Sheets Structure

**Guest_List tab** (columns A-G):
`ID | First Name | Last Name | Email | Category | Notes | Is Admin`

**RSVP_Responses tab** (columns A-X):
`Timestamp | Guest ID | First Name | Last Name | Email | Total Guests | Adults | Children | Children Ages | Children Names | Dietary Restrictions | Special Requests | Day 1 Attendees | Day 2 Whitewater Rafting | Day 2 Scenic Float | Day 2 Horseback Riding | Day 2 Hat Making | Day 3 Adults | Day 3 Children | Day 4 Adults | Day 4 Children | Day 5 Departure Time | Completed At | Declined RSVP`

### Environment Variables (Vercel)
```
GOOGLE_PROJECT_ID
GOOGLE_PRIVATE_KEY_ID
GOOGLE_PRIVATE_KEY
GOOGLE_CLIENT_EMAIL
GOOGLE_CLIENT_ID
GUEST_LIST_SHEET_ID
RSVP_RESPONSES_SHEET_ID
RSVP_RESPONSES_SHEET_NAME
```

---

## Session Checklist

### Before Starting
- [ ] Read this roadmap
- [ ] Check `angie_info*.md` files for latest requirements
- [ ] Run `yarn dev` to start local server

### Before Committing
- [ ] Run `yarn build` to verify no build errors
- [ ] Test changes locally
- [ ] Update this roadmap with completed work

### Deployment
- Push to `main` branch triggers automatic Vercel deployment
- Production URL: https://www.angelaandjeff2026.com

---

## Content Sources

| File | Contains |
|------|----------|
| `angie_info.md` | Original event details, schedule |
| `angie_info_2.md` | Additional requirements |
| `angie_info_3.md` | Design specs, our story content, detailed schedule |
| `angie-4.md` | Latest: Registry + Accommodations content |
