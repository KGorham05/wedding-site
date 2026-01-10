# Copilot Instructions - Angela & Jeff Wedding Site

## Quick Start

**Always start by reading `PROJECT_ROADMAP.md`** - it contains current status, pending tasks, and technical architecture.

**Content sources:** Check `angie_info*.md` files for event details and stakeholder requirements.

---

## Project Overview

Wedding website for Angela & Jeff's Montana wedding week (August 19-23, 2026). Features an interactive "adventure RSVP" flow where guests plan their participation across 5 days of activities.

**Live URL:** www.angelaandjeff2026.com  
**Stack:** Next.js 15, TypeScript, Tailwind CSS 4, Google Sheets API

---

## Code Style Guide

### React Components
- All components in TypeScript
- Use `export const ComponentName = () => {}` syntax
- PascalCase for component names
- Prefer Server Components; add `'use client'` only when needed for interactivity
- Keep components under 200 lines; extract logic to custom hooks

### File Organization
```
/src/app/           # Pages (file-based routing)
/src/app/api/       # API routes
/src/components/    # Reusable components with barrel exports
/src/lib/           # Utilities and types
```

### TypeScript
- Define explicit types for props
- Use path aliases: `@/components`, `@/lib`
- Strict mode enabled

### Styling
- **Tailwind CSS exclusively** - no separate CSS files
- Mobile-first: design for mobile, enhance with `sm:`, `md:`, `lg:`, `xl:`
- Use Next.js `Image` component for optimized images
- **Avoid emojis** - keep the design elegant and professional; use icons or typography instead

### Accessibility (Critical)
- WCAG AA contrast minimum (4.5:1 normal text, 3:1 large text)
- Use text shadows/overlays for text over images
- Test readability on various devices

---

## Development Workflow

### Commit Strategy
Break work into logical chunks. After completing each chunk:
1. Verify build passes: `yarn build`
2. Test locally
3. Suggest commit message using conventional format:
   - `feat(scope): description`
   - `fix(scope): description`
   - `docs(scope): description`
4. Prompt user to commit before next task

### Roadmap Maintenance
After completing work, update `PROJECT_ROADMAP.md`:
- Move completed items from Pending to Completed
- Add new issues discovered
- Update technical details if architecture changed

---

## Key Integration: Google Sheets

### Guest Authentication
Guests check in by name → verified against `Guest_List` sheet → creates localStorage session

### RSVP Submission
Adventure data collected across 5 days → submitted to `RSVP_Responses` sheet on completion

### Column Structure (24 columns, A-X)
See `PROJECT_ROADMAP.md` for full column mapping. Key types in `/src/lib/guest-list.ts`:
- `Guest` - guest record from sheet
- `GuestData` - full RSVP session data

---

## Problem-Solving Approach

1. **Investigate first** - Read relevant files before making changes
2. **Verify assumptions** - Check actual code, don't assume from memory
3. **Make incremental changes** - Small, testable modifications
4. **Test thoroughly** - Build must pass, test in browser
5. **Document changes** - Update roadmap after completing work

---

## Common Tasks

### Adding a New Page
1. Create `/src/app/[page-name]/page.tsx`
2. Add to Navigation component if needed
3. Follow existing page patterns for layout consistency

### Updating Navigation
Edit `/src/components/Navigation.tsx` - supports `variant="light"` and `variant="overlay"`

### Modifying RSVP Data Collection
1. Update `GuestData` interface in `/src/lib/guest-list.ts`
2. Update `submitRSVPToSheets()` in `/src/lib/google-sheets.ts`
3. Update Google Sheet columns to match
4. Update `getSheetHeaders()` for documentation

---

## Environment Setup

Local development requires `.env.local` with Google credentials. See `.env.example` for required variables.

Production environment variables are configured in Vercel dashboard.
