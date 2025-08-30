## 🚀 CURRENT STATUS (AUGUST 29, 2025)

### Summary
Previous session delivered UI unification (homepage surface panels, countdown readability), removal of unused visual elements, Day 2 selection logic fix, and Google Sheets robustness improvements. NEW this session: Mobile hamburger navigation menu implemented with accessible toggle + animated panel; foundation laid for full navigation consistency pass. Remaining blocker for RSVP persistence is still a configuration mismatch: sheet tab spelled `RSPV_Responses` while code expects `RSVP_Responses` (overrideable via `RSVP_RESPONSES_SHEET_NAME`).

### Newly Completed (This Session)
1. Homepage sections below hero converted to glass/surface styling
2. Removed photo credits section & hero fallback image usage
3. Replaced section background images with gradients (lighter, consistent contrast)
4. Countdown timer text switched to white for accessibility
5. Day 2 activity selection logic fixed (now uses immutable original party size)
6. Google Sheets integration hardening:
  - Environment validation + private key normalization
  - Structured `[RSVP→Sheets]` logging with timing
  - Sheet name sanitizing, quoting, retry on parse errors
  - Added `/api/sheets/meta` endpoint to list sheet tab titles
  - Added optional `RSVP_RESPONSES_SHEET_NAME` env override
7. Identified root cause of append failures: tab name typo (`RSPV_Responses`)
8. (Aug 29) Mobile hamburger menu now functional (accessible toggle, focus states, auto-close on navigation & resize)
9. (Aug 29) Guest decline RSVP option added at check-in (toggle with sheet column `Declined RSVP`)

### Immediate Next Actions
1. Rename sheet tab to `RSVP_Responses` OR set env `RSVP_RESPONSES_SHEET_NAME=RSPV_Responses` and redeploy
2. Submit test RSVP; expect log `[RSVP→Sheets] Success appended ...`
3. After confirmation, commit & deploy; optionally begin admin/report view planning

### Risks / Notes
- No additional code changes needed for basic persistence; remaining issue is configuration only.
- Consider future enhancement: user-facing toast on submission failure with retry.

---

## 🚀 NEXT SESSION PRIORITIES (READY TO START)

### **IMMEDIATE HIGH-PRIORITY FIXES - AUGUST 25, 2025 (UPDATED – ACCESSIBLE UI OVERHAUL APPROVED)**

#### 🎨 **1. Accessible UI Overhaul & Readability (CRITICAL UX)**
- **Status**: APPROVED PLAN – Begin Phase 0 (tokens + component scaffolding)
- **Core Problems**: Floating white text over inconsistent images; insufficient structured surfaces; mixed button placement; dark text still unreadable on some pages (e.g. Our Story, main page content area)
- **Scope (Pages)**: `/` (below-hero content), `/guest-check-in`, `/adventure/day-1..5`, `/adventure/complete`, `/our-story`, `/info` (forthcoming), any legacy RSVP-related forms
- **Components To Introduce**: `HeroHeader`, `FormLayout`, `FieldGroup`, `ProgressSteps`, `StickyActionBar`
- **Styling System Updates**: Tailwind design tokens for new palette (lilac, blush, sunset, prairie blue, bloom yellow, sage, wildflower white, ink); glass surface tiers (surface-1, surface-2); soft chromatic gradient scrims; action button variants (primary, secondary, subtle)
- **Accessibility Enhancements**: Contrast guard fallback (escalate overlay if < required ratio), focus management (H1 focus on step change), sticky mobile action bar with consistent nav labels, larger tappable targets
- **Form Cohesion Goals**: Unified spacing scale (4/8/16), consistent FieldGroup cards, bottom sticky actions on mobile, progress indicator across entire RSVP journey
- **Deliverables Phase 0–1**:
  1. Tailwind token extension + utilities (colors, gradients, surfaces)
  2. `HeroHeader` (variants: image-full, framed, split) applied to Day 2 as pilot
  3. Replace Our Story dark body text with accessible surface + white/ink contrast per rules
  4. Normalize homepage below-hero sections onto surface panels (no raw text on imagery)
  5. Adventure Complete page: new hero + positive rating banner placeholder
  6. Define positive rating list & deterministic selection approach
- **Validation**: Automated contrast ratio check script for hero headings + manual large-text (200%) / dark-mode illusions test (even though site theme fixed)
- **Exit Criteria for Overhaul Epic**: All listed pages use new components; zero contrast violations (axe / manual); consistent progress & action placement; roadmap sections updated.

#### 🧪 **Overhaul Phases (Summary)**
- **Phase 0 (Setup)**: Tokens, utilities, base component stubs
- **Phase 1 (Hero Replacement)**: Implement `HeroHeader` across all target pages
- **Phase 2 (Form Layout Refactor)**: Introduce `FormLayout`, `FieldGroup`, `StickyActionBar` into RSVP flow & guest check-in
- **Phase 3 (Progress & Interaction)**: Add `ProgressSteps`, unify navigation logic, seed positive rating
- **Phase 4 (Contrast Guard + Polishing)**: Dynamic overlay escalation, motion/data preference fallbacks, finalize completion page
- **Phase 5 (Accessibility QA)**: Axe scan, keyboard traversal audit, high zoom, color-blind simulation, final contrast report

#### 🔍 **Immediate Page-Specific Styling Corrections (Folded Into Phases)**
- `/our-story`: Dark unreadable text → wrap content in surface-1 panels + enforce white headings / ink body on solid backgrounds for contrast
- `/` (homepage): Sections below hero to adopt surface panels (avoid raw floating text) and consistent heading hierarchy
- `/adventure/complete`: Add new hero + positive rating + card-based summaries with consistent surfaces
- RSVP Flow Pages (guest check-in + days 1–5): Replace current floating headers with `HeroHeader` + restructure forms under `FormLayout`
- `/info`: Build directly with new components (no legacy styling) ensuring quick adoption of system

#### ✅ **Definition of Done (UI Overhaul)**
- All specified pages use standardized hero & form components
- No heading or paragraph text placed directly over un-scrimmed image
- Minimum contrast 4.5:1 body / 3:1 large text verified and logged
- Mobile sticky action bar present on all multi-step forms
- Progress indicator accurate & accessible (list semantics) across steps
- Positive rating generator integrated on completion page
- Roadmap updated & OVERHAUL epic marked complete upon QA pass

#### 🧭 **2. Navigation & Mobile Issues (CRITICAL)**
- **Status Update (Aug 29)**: Hamburger menu functionality delivered (toggle, animation, accessibility). NEXT: Replace legacy inline nav markup on `/venue`, `/schedule`, `/rsvp` redirect page with shared component.
- **Remaining Issue**: Not all pages use consistent Navigation component
- **Files**: All pages, `src/components/Navigation.tsx`
- **Next Fix**: Ensure every page uses the same nav component
- **Test**: Verify mobile navigation works across all pages

#### 💾 **3. RSVP State Persistence (HIGH PRIORITY)**
- **Issue**: User selections don't pre-populate when navigating away/back to RSVP pages
- **Files**: All adventure day pages, localStorage management
- **Fix**: Implement proper state persistence and restoration
- **Test**: Navigate away from RSVP flow and return to verify data persists

#### 🎬 **4. Hero Video Mobile & Loading Issues**
- **Issue**: Video placeholder image not appealing, mobile video performance poor
- **Files**: `src/components/OptimizedHeroVideo.tsx`, main page
- **Fix**: Replace placeholder with black/fade effect, suggest mobile alternatives
- **Options**: Consider static image overlay, poster frame, or disable video on mobile

#### 🎯 **5. Form Button Consistency & Visibility**
- **Issue**: Day 2 buttons outside main form div, hard to see (clear on clear)
- **Files**: All adventure day pages, especially day-2
- **Fix**: Move buttons inside glass window div like day-1, add borders/hover effects
- **Test**: Ensure all days have same button placement and visibility

#### 📝 **6. Content Updates**
- **Issue**: "Sound bath" should be "sound bowls" throughout site
- **Issue**: Our Story page text not white/readable
- **Issue**: Experience rating should always be positive/exciting
- **Files**: All pages mentioning sound bath, Our Story page, complete page
- **Fix**: Update terminology, fix text colors, add positive rating generator

#### 🪟 **7. Info Page Styling**
- **Issue**: Info page doesn't match application styles (needs glass window effect)
- **Files**: `src/app/info/page.tsx`
- **Fix**: Apply consistent frosted glass styling to match other pages

### **SYSTEMATIC APPROACH PLAN**

**Phase 1: Critical UX/Design (Priority 1)**
1. Fix frosted glass contrast and readability issues
2. Fix mobile hamburger menu and navigation consistency
3. Improve hero video loading and mobile experience

**Phase 2: Form & State Management (Priority 2)**  
4. Fix button placement and visibility on all adventure pages
5. Implement RSVP state persistence across navigation
6. Update experience ratings to always be positive

**Phase 3: Content & Styling Polish (Priority 3)**
7. Update "sound bath" to "sound bowls" terminology
8. Fix Our Story page text readability
9. Apply glass window styling to Info page

**COMMIT STRATEGY**: After each completed phase, commit changes with descriptive messages and check back for direction.

---

## 🚀 PREVIOUSLY COMPLETED (CURRENT SESSION - AUGUST 25, 2025)

### ✅ **Fixed Google Sheets Submission Structure**
- **Fixed**: Updated Google Sheets submission to use proper column structure (A-V, 22 columns)
- **Fixed**: Resolved range parsing error by updating from A:S to A:V
- **Added**: Helper functions for sheet header initialization
- **Added**: `/api/init-sheet` endpoint for easy sheet setup
- **Test**: Form submissions now properly structured for Google Sheets

### ✅ **Fixed Adventure Complete Page Z-Index**
- **Fixed**: Added `relative z-10` wrapper to prevent background overlay issues
- **Fixed**: Updated all text colors to consistent white for better contrast
- **Test**: Complete page now displays properly without visual glitches

---

## � PREVIOUS SESSION PRIORITIES (COMPLETED)

### **IMMEDIATE HIGH-PRIORITY FIXES**

#### �🐛 **1. Fix Adventure Complete Page (Critical)** ✅ COMPLETED
- **File**: `src/app/adventure/complete/page.tsx` 
- **Issue**: Missing `relative z-10` wrapper causing visual flashing and z-index problems
- **Fix**: Add `relative z-10` class to main content wrapper (around line 111)
- **Compare**: Look at other adventure pages (day-1, day-2, etc.) for proper structure
- **Test**: Complete the adventure flow to verify fix

#### 🔧 **2. Google Sheets RSVP Submission (STRUCTURE FIXED / CONFIG BLOCKER)**
- **Structural Status**: Range & column mapping implemented (A:V)
- **Current Blocker**: Sheet tab misnamed `RSPV_Responses` causing parse errors
- **Resolution Needed**: Rename tab or set `RSVP_RESPONSES_SHEET_NAME=RSPV_Responses`
- **Verification Step**: After fix submit RSVP; expect `[RSVP→Sheets] Success` in logs
- **Files**: `src/app/api/rsvp/route.ts`, `src/lib/google-sheets.ts`, `/api/sheets/meta`

#### 🎨 **3. Complete Adventure Page Color Consistency** ✅ COMPLETED
- **File**: `src/app/adventure/complete/page.tsx`
- **Issue**: Still uses `text-cream-100`, `text-cream-200`, `text-sage-300` instead of white text
- **Fix**: Update all text colors to use white for consistency with other pages
- **Pattern**: Follow the same white text approach used in other adventure pages

### **NEXT DEVELOPMENT PHASE**
- Content integration from `angie_info_3.md`
- Create `/info` page for logistics and travel information
- Update `/our-story` with final content and photos

---

## 🚀 CURRENT SPRINT: Integrating New Content & Features (August 22, 2025)

Based on the latest information from `angie_info_3.md`, we are initiating a new phase of development to fully align the website with the couple's vision.

### **Phase 1: Content & Information Architecture**
1.  **Create General Info Page**: Build a new `/info` page to house all logistical details (What to Wear, Travel, Hotels, Local Activities).
2.  **Update Our Story**: Replace placeholder content on `/our-story` with the official story and photo.
3.  **Revamp Homepage**: Update homepage content to introduce the "Wedding Week" schedule and theme.
4.  **Update Navigation**: Add a link to the new `/info` page in the main navigation.

### **Phase 2: RSVP Flow Enhancement**
1.  **Refactor Adventure Forms**: Update adventure day forms to allow guests to RSVP for specific, optional, paid activities.
2.  **Update Google Sheets Logic**: Enhance the backend to capture detailed activity selections in the Google Sheet.

### **Phase 3: Design System Update**
1.  **Implement New Palette & Fonts**: Update Tailwind CSS config and global styles to match the "earthy, romantic, and timeless" design specification.

---

## 🎉 MAJOR MILESTONE: COMPREHENSIVE WEBSITE IMPROVEMENTS COMPLETE! 🎉

**Date Completed: August 11, 2025**

### ✅ FULLY IMPLEMENTED FEATURES

#### 🔗 Domain & Infrastructure (Complete)
- ✅ angelaandjeff2026.com domain fully connected to Vercel
- ✅ Automatic GitHub deployment pipeline functional
- ✅ Production build verified and error-free

#### 🎨 Complete Design System Overhaul (Complete) 
- ✅ **Elegant Wedding Color Palette**: Replaced rainbow theme with sophisticated sage green, cream, dusty rose, and warm gray
- ✅ **CSS Custom Properties**: Comprehensive color system with `--sage-[100-900]`, `--cream-[100-300]`, `--dusty-rose-[100-900]`, `--warm-gray-[100-900]`
- ✅ **WCAG 2.1 AA Compliance**: All text meets accessibility contrast requirements with dark backgrounds and light text
- ✅ **Mobile-First Responsive**: All pages optimized for mobile, tablet, and desktop

#### 📱 Adventure Invitation Experience Architecture (Complete)
- ✅ **Complete UX Transformation**: Changed from traditional wedding site to interactive adventure invitation experience
- ✅ **Guest Authentication System**: Comprehensive guest-list.ts with Guest interface and authentication functions  
- ✅ **Progressive Form Flow**: Complete 5-day adventure planning experience with state persistence
- ✅ **Landing Page Redesign**: Homepage transformed to "You're Invited to an Epic Montana Adventure!" experience

#### 🗂️ Complete Guest Data Collection System (Complete)
- ✅ **Guest Check-in** (`/guest-check-in`): Two-step verification with name lookup and party details collection
- ✅ **Day 1 - Arrival** (`/adventure/day-1`): Transportation, accommodation needs, arrival planning
- ✅ **Day 2 - Wedding** (`/adventure/day-2`): Ceremony preferences, reception activities, photography requests  
- ✅ **Day 3 - Adventure** (`/adventure/day-3`): Recovery planning, outdoor activities, hiking levels
- ✅ **Day 4 - Memories** (`/adventure/day-4`): Memory-making activities, connection preferences, experience feedback
- ✅ **Day 5 - Departure** (`/adventure/day-5`): Final wishes, testimonials, future connection planning
- ✅ **Completion Hub** (`/adventure/complete`): Summary dashboard, data download, next steps

#### 🔧 Technical Infrastructure (Complete)
- ✅ **TypeScript Integration**: Comprehensive type safety with Guest and GuestData interfaces
- ✅ **State Management**: localStorage-based persistence across adventure flow  
- ✅ **Error Handling**: Navigation guards, data validation, proper TypeScript types
- ✅ **Performance**: Optimized video loading with progressive enhancement and SVG fallbacks

#### 🎨 Latest Design Improvements (Complete - August 23, 2025)
- ✅ **Frosted Glass Styling Consistency**: Updated Day 1 and Day 5 adventure forms to use consistent frosted glass styling
- ✅ **Eliminated Purple Theme Elements**: Replaced purple/indigo backgrounds with elegant frosted glass design matching guest check-in and info pages
- ✅ **Enhanced Visual Hierarchy**: Applied consistent white text on frosted backgrounds with proper transparency and backdrop blur effects
- ✅ **Improved Button Styling**: Updated all action buttons to use sage green theme with hover effects and smooth transitions
- ✅ **Accessibility Maintained**: Ensured all text contrast meets WCAG standards with frosted glass backgrounds
- ✅ **Fixed RSVP Button Styling**: Updated homepage "RSVP Now" button to use dark text for proper contrast on light background
- ✅ **Added Day 1 Background Image**: Replaced SVG backgrounds with optimized Montana landscape image
- ✅ **Image Optimization System**: Implemented comprehensive Next.js image optimization with responsive sizing
- ✅ **Responsive Image Loading**: Added proper `sizes` attributes and priority loading for all background images
- ✅ **Performance Enhancement**: Configured Next.js for WebP/AVIF format conversion and multiple device sizes
- ✅ **Removed Package Lock Conflict**: Fixed lockfile warning by removing duplicate package-lock.json file
- ✅ **Navigation Text Color Fix**: Fixed all adventure pages (Days 1-5 and complete) to use white navigation text instead of cream colors
- ✅ **Consistent White Navigation**: All pages now have crisp white navigation text for optimal visibility and consistency
- ✅ **Complete Adventure Page Styling**: Updated all adventure days and complete page to match the frosted glass design system

#### 🎨 Latest Enhancements (Complete - August 11, 2025)
- ✅ **Navigation Consistency**: Updated `/our-story` page to match current design system with dark theme and streamlined navigation
- ✅ **Countdown Timer**: Added real-time countdown to wedding date on homepage hero section with elegant styling
- ✅ **Enhanced Our Story Page**: Restructured `/our-story` with proper sections for couple bios, how we met, proposal story, and Montana connection
- ✅ **Date Correction Fix**: Corrected all adventure dates from incorrect July 2025 dates to proper August 19-23, 2026 schedule across all pages
- ✅ **Day 1 Content Enhancement**: Improved arrival day messaging to emphasize guest-controlled travel and highlight the evening sound bath experience
- ✅ **Yoga RSVP Form Redesign**: Simplified form to focus specifically on yoga attendance with guilt-free opt-out option
- ✅ **Adventure Schedule Realignment**: Fixed day/activity mapping to match source of truth from angie_info.md
- ✅ **Montana River Background**: Added beautiful Montana river image as background for rafting day (Day 2)
- ✅ **Departure Day Simplification**: Removed unnecessary headcount form from Day 5, replaced with farewell message

#### 📊 Google Sheets Integration (Updated - August 26, 2025)
- ✅ **Dynamic Guest Authentication**: Guest check-in loads guest list from Sheets
- ⚠️ **Automatic RSVP Submission**: Blocked only by tab name typo (`RSPV_Responses`) – code path otherwise ready
- ✅ **Comprehensive Data Collection (Frontend)**: All day data assembled for submission
- ✅ **Management via Sheets**: Guest list manageable in spreadsheet
- ✅ **API Hardening**: Env validation, private key normalization, structured logging, retry logic
- ✅ **Metadata Endpoint**: `/api/sheets/meta` lists tab titles for troubleshooting
- ✅ **Override Support**: `RSVP_RESPONSES_SHEET_NAME` env enables non-standard tab names
- 🔍 **Root Cause Identified**: Spelling mismatch of responses tab
- ⏱️ **Next Step**: Correct tab or set override then re-test append

#### 🔧 Infrastructure Fixes (Complete - August 13, 2025)
- ✅ **Google Sheets Production Fix**: Resolved missing `GOOGLE_CLIENT_EMAIL` and `GOOGLE_CLIENT_ID` environment variables
- ✅ **Vercel CLI Setup**: Configured Vercel CLI for environment variable management
- ✅ **Environment Variable Audit**: Added `/api/debug` endpoint for troubleshooting environment configurations
- ✅ **Production Deployment**: Successfully deployed all fixes and confirmed Google Sheets integration working in production

#### 🛡️ Guest Validation & Security (Complete - August 13, 2025)
- ✅ **Guest Party Size Limits**: Enforced RSVP limits based on original party size from check-in
- ✅ **Adventure Day Constraints**: Updated Days 2, 3, and 4 to respect original guest count limits
- ✅ **Form Validation**: Added real-time validation to prevent exceeding registered party size
- ✅ **User Experience**: Added clear messaging showing original party size and current limits
- ✅ **Data Integrity**: Prevented guests from inflating party sizes beyond their initial registration

### 📊 DATA COLLECTION CAPABILITIES

The adventure experience now collects comprehensive planning data through Google Sheets integration:
- **Guest Authentication**: Pre-approved guest list verification from Google Sheets `Guest_List` tab
- **Party Composition**: Adult/child counts, ages for activity planning  
- **Day-by-Day Preferences**: Attendance, activity choices, energy levels
- **Logistics**: Transportation needs, accommodation requirements, departure timing
- **Personal Preferences**: Dietary restrictions, accessibility needs, social preferences
- **Experience Feedback**: Ratings, testimonials, gratitude expressions, future connection preferences
- **Automatic Data Submission**: All responses automatically saved to Google Sheets `RSVP_Responses` tab when adventure is completed

### 🎯 WHAT THIS ACCOMPLISHES

1. **Transforms RSVP Experience**: From static form to engaging adventure planning journey
2. **Comprehensive Data Collection**: Detailed guest preferences for perfect event planning
3. **Excitement Building**: Progressive revelation of adventure details builds anticipation  
4. **Personalized Planning**: Guest responses enable customized experience for each party
5. **Memory Creation**: Focus on relationships and shared experiences from day one

**Status: Adventure Invitation Experience is PRODUCTION READY! 🚀**

### **User Flow**
1. **Landing** (`/`) - "You're Invited to Epic Montana Adventure!"
2. **Guest Check-in** (`/guest-check-in`) - Name verification + party details  
3. **Adventure Builder** (`/adventure/day-[1-5]`) - Progressive day-by-day experience
4. **Completion Hub** (`/adventure/complete`) - RSVP summary + planning info

### **Data Collection Goals**
- Guest authentication from approved list
- Party composition (adults, kids, ages)  
- Day-by-day attendance with participant counts
- Activity preferences and requirements
- Dietary restrictions and accommodations
- Travel and logistics planning

### **Current Legacy Pages** (to be redesigned or integrated)
- `/schedule` → Integrated into the new adventure flow and upcoming `/info` page.
- `/rsvp` → Replaced by `/guest-check-in` and the adventure builder.
- `/venue` → Content will be part of the new `/info` page.
- `/our-story` → To be updated with new content.

### 🔄 **PENDING IMPROVEMENTS**

#### 🎨 New Content & Feature Integration (In Progress)
-   **New Page (`/info`)**: Create a comprehensive general information page.
-   **Content Update (`/our-story`)**: Integrate the final "Our Story" text and photo.
-   **Homepage Update**: Revise content to reflect the full week's schedule.
-   **RSVP Enhancement**: Update forms to allow selection of specific, costed adventures.
-   **Design System Update**: Implement the new color palette (lilac, wildflower pink, etc.) and typography.

#### 🎨 UI/UX Overhaul for Adventure Forms (In Progress)
-   **Redesign Form Containers**: Replace solid white backgrounds with a semi-transparent "frosted glass" effect for a more modern and integrated look.
-   **Enhance Text Readability**: Ensure all header text over background images is white with a text shadow for accessibility and visual pop.
-   **Standardize Buttons & Links**: Create a consistent, accessible style for all buttons and navigation links.
-   **Ensure Color Consistency**: Remove inconsistent colors on the final pages and align all forms with the website's primary color palette.
-   **Improve User Flow**: Redirect users to the `/info` page upon successful completion of the adventure RSVP.

#### 🔧 Technical Debt (Pending)
- ❌ **Formik Implementation**: Replace useState with actual Formik forms (dependencies installed)
- ❌ **Form Validation UI**: Replace alert() with proper form validation UI components
- ❌ **Error Handling**: Implement consistent error messaging across all forms
- ✅ **Type Safety**: Enhanced TypeScript interfaces for independent adult/children tracking
- ❌ **Google Sheets Updates**: Update submission columns for new maxAdults/maxChildren data structure

### **Pending Features**
Pages & Content

/registry – Registry info (URLs, display preferences) (optional)

Functionality

RSVP Form Enhancements:
- Update adventure event RSVPs to collect participant names and quantities for each activity
- Replace yes/no buttons with detailed forms (names + guest counts per adventure)
- Ensure proper data collection for activity planning and logistics

Google Sheets API integration for RSVP form submissions
Email confirmation to guests after RSVP

Styling & UX

Mobile-first responsive layout (COMPLETED)
Elegant typography (serif/sans-serif per couple's preference) (COMPLETED)
Wedding color palette (COMPLETED - sage green, cream, dusty rose, warm gray)
Smooth scroll for internal links
Optimized images (Next.js Image component)

Enhancements

Photo gallery (engagement, venue, couple)
Password-protect sensitive info (optional)
FAQs section

Known Issues

### 🐛 **PRIORITY BUG: Adventure Complete Page Layout Issues**
- **Issue**: The `/adventure/complete` page has visual flashing and z-index problems
- **Symptoms**: Page flashes when loading, content may appear behind background
- **Root Cause**: Missing `relative z-10` wrapper for main content area (line 111 in complete/page.tsx)
- **Impact**: Affects user experience when completing the adventure flow
- **Fix Required**: Add `relative z-10` class to main content wrapper, similar to other adventure pages
- **Files**: `src/app/adventure/complete/page.tsx`

### 🔧 **Google Sheets Integration Issues (CRITICAL - DATA NOT BEING SAVED)**
- **Issue**: RSVP submission completely failing - no user data is being saved to Google Sheets
- **Error**: "Unable to parse range: RSVP_Responses!A:S"
- **Current State**: Users can complete entire adventure flow but all their responses are lost
- **Impact**: Wedding planning data collection is completely broken
- **Investigation Needed**: Check Google Sheets API range configuration and sheet structure
- **Files**: `src/app/api/rsvp/route.ts`, Google Sheets setup
- **Priority**: MUST FIX BEFORE GOING LIVE - Essential for collecting guest preferences

Technical Architecture
Framework: Next.js 14, App Router
Styling: Tailwind CSS
Language: TypeScript
Form State Management: Formik with Yup validation
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
GOOGLE_PRIVATE_KEY   # Ensure correct newline handling; code normalizes \n
GOOGLE_CLIENT_EMAIL
GOOGLE_CLIENT_ID
RSVP_RESPONSES_SHEET_ID   # Spreadsheet ID for RSVP responses tab
GUEST_LIST_SHEET_ID        # Spreadsheet ID for guest list (can match above)
RSVP_RESPONSES_SHEET_NAME  # Optional override if tab name differs (e.g. RSPV_Responses)
Session Checklist
npm run dev → start dev server

Push to main → triggers Vercel deployment

Test RSVP form locally before pushing (especially after env changes)

Reference angie_info_3.md for up-to-date event/couple info

Use /api/sheets/meta to verify sheet tab titles if append fails

Completed Features
(Update this section after each milestone)

[2025-08-08] Repo initialized, Next.js scaffold, Tailwind configured, deployed to Vercel
[2025-08-11] Navigation consistency fixed - Updated /our-story page to match current design system
[2025-08-11] Countdown timer added - Real-time countdown to wedding date on homepage hero section  
[2025-08-11] Our Story page enhanced - Added structured sections for couple bios, story content, and Montana theme
[2025-08-11] Date correction fix - Fixed all adventure dates from incorrect July dates to proper August 19-23, 2026 schedule
[2025-08-11] Day 1 content improved - Enhanced arrival day messaging and sound bath event details per user feedback
[2025-08-11] Yoga form redesigned - Simplified RSVP form for specific yoga event with inclusive opt-out messaging
[2025-08-23] **Adventure Design System Complete** - Completed frosted glass styling across all adventure pages (Days 1-5)
[2025-08-23] **Navigation Text Color Fix** - Fixed all adventure page navigation to use consistent white text
[2025-08-23] **Image Optimization System** - Implemented comprehensive Next.js image optimization with responsive sizing
[2025-08-23] **Complete Page Bug Identification** - Identified and documented z-index/layout issues on adventure complete page

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

# Wedding Website – Project Roadmap

## Phase 1: Setup & Structure
- Initialize Next.js project with Tailwind CSS and shadcn components
- Configure Git repository and connect to Vercel
- Create page structure:
  - Home
  - Story
  - Wedding Party
  - RSVP
  - Travel & Accommodations
  - Registry
  - Contact

---

## Phase 2: Content Integration
- Insert placeholder copy and images based on Cousin Meeting Prep document
- Ensure all pages are navigable and responsive

---

## Phase 3: Styling & Design
**Prompting Guidance for AI Tools**
- Always provide **hex codes** for target colors
- Specify **contrast ratio goals** (WCAG AA or AAA)
- State **exact element types** to be updated (e.g., `buttons`, `headings`, `background sections`)
- Limit each AI request to **one visual goal per run** (e.g., "Fix button hover colors for better accessibility" instead of "Improve colors and layout")
- Request **before/after examples** in output
- Avoid vague terms like “make it pop” — instead use descriptive design terms (“increase saturation by 15%,” “switch background to #F9FAFB”)

---

## Phase 4: Media Replacement
- Replace placeholders with finalized photos and videos
- Optimize images for web performance (under 300KB, next-gen formats where possible)

---

## Phase 5: Accessibility & QA
- Verify text/background contrast with a color contrast checker
- Test across devices (mobile, tablet, desktop)
- Validate all forms work correctly

---

## Phase 6: Deployment
- Connect custom domain on Vercel
- Final review with cousin
- Launch live site

---

## Phase 7: Post-Launch
- Monitor visitor interactions (if analytics added)
- Make small tweaks based on feedback
