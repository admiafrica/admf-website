# Google Tag Manager Implementation

To add Google Tag Manager (GTM) to the ADMF website, insert the following snippet into the <head> of your layout file (e.g., src/app/layout.tsx):

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-55C88XP');</script>
<!-- End Google Tag Manager -->

For Next.js, use the <Head> component to ensure the script is placed in the document head.

Additionally, add the following noscript snippet immediately after the opening <body> tag in your layout file:

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-55C88XP"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

# ADMF Website Redesign Report

**Date:** 5 March 2026
**Branch:** dev
**Status:** Complete, ready for review and deployment

---

## Executive Summary

The ADMF Foundation website homepage was restructured to transform it from an information-heavy data dump into a focused, persuasive single-page experience. The redesign reduces content density by ~40%, fixes critical UX issues, improves accessibility, and reorders sections to follow a proven nonprofit conversion funnel.

---

## Problems Identified

### 1. Data Dump Layout
The homepage displayed every piece of organizational data at once: 9 programme cards, 6 dense "Lessons Learned" paragraphs with jargon and acronyms, multiple report download links, and repetitive content. It read like an annual report converted to a webpage rather than a persuasive landing page.

### 2. Partner Logos Were Invisible
The partner logos section used a CSS filter (`brightness-0 invert`) that made nearly all logos invisible against the dark green background. Only one logo (Australian High Commission) was visible. The grid layout also created uneven rows with gaps due to mixed column spans.

### 3. Misleading Call-to-Action
The primary CTA buttons across the site said "Donate Now" / "Donate", but scrolled to a partnership inquiry section with an email link. There was no actual donation flow, creating a bait-and-switch that undermines visitor trust.

### 4. Poor Section Flow
The original section order placed dense Impact Reports and Lessons Learned between the emotional content (Success Stories) and the call-to-action, killing momentum right when the page should be building toward the ask.

### 5. Accessibility Gaps
No visible focus indicators for keyboard navigation (WCAG 2.4.7 failure). All images bypassed Next.js optimization, hurting page load performance.

### 6. Visual Monotony
Every section followed the same pattern: centered heading, then a grid of cards. No variation in layout, no visual breaks, and adjacent sections shared the same background color, making them blur together.

---

## Changes Made

### Homepage Structure (page.tsx)

| Before | After |
|--------|-------|
| Hero > Stats > Programs > Stories > **Reports** > Team > Partners > CTA | Hero > Stats > Programs > Stories > **Partners > CTA** > Team > Reports |

**Rationale:** Social proof (partner logos) now leads directly into the call-to-action while trust is highest. Dense reports content moved to near-footer for already-convinced visitors.

### Programmes Section
- **Before:** 9 identical text-only cards in a 3-column grid
- **After:** 6 featured programmes with category icons, inline stats, in a responsive 3-column grid. Remaining 3 programmes listed as a subtle "Plus:" line underneath
- **Impact:** ~33% less content, more visual interest, easier to scan

### Partner Logos Section
- **Before:** Dark green background, CSS filter making logos invisible, grid with uneven rows
- **After:** White background, logos displayed in original colours on light grey cards, flexbox layout that centers the last row naturally
- **Impact:** All 17 partner logos are now clearly visible and professional-looking

### Impact Reports Section
- **Before:** 6 report download cards + 2 evaluation cards + 6 dense "Lessons Learned" paragraphs (the heaviest section on the page)
- **After:** Brief teaser with one heading, one paragraph, and a single "View Impact Reports" button linking to a dedicated /impact page
- **Impact:** Removed the single largest source of content overload from the homepage

### Dedicated Impact/Reports Page (/impact)
- **Before:** Student stories page with fabricated testimonials and metrics
- **After:** Clean reports download page with annual reports and programme evaluations as clickable cards with descriptions

### Call-to-Action Fixes
- All "Donate Now" / "Donate" labels changed to **"Get Involved"** across hero, header (desktop + mobile), and impact page
- CTA button text changed from raw email address (`partnerships@africadigitalmedia.org`) to **"Start a Conversation"**
- Added **secondary hero CTA** ("See Our Impact") for visitors not ready to commit
- Removed duplicate CTA buttons pointing to the same destination on the impact page

### Success Stories
- Removed fake quotation marks from third-person summaries that were presented as testimonials
- Content now presented honestly as narrative summaries rather than fabricated quotes

### Visual Rhythm
- Fixed two adjacent `bg-warm` sections (Team + Reports) that blurred together by changing Reports to `bg-white`
- Balanced PartnerWithUs section padding using the shared `section-padding` class
- Simplified stats label from "Students Trained (4,000 certified)" to "Students Trained"

### Accessibility
- Added **focus-visible styles** globally for buttons, links, and interactive elements (teal outline ring)
- This fixes WCAG 2.1 AA compliance for criterion 2.4.7 (Focus Visible)

### Performance
- Removed `unoptimized` prop from all Image components on the homepage (hero, stories, partners, team)
- Images will now benefit from Next.js automatic optimization: responsive srcset, WebP/AVIF conversion, and proper lazy loading
- Fixed hero primary CTA to use Next.js `<Link>` for client-side routing instead of raw `<a>` tag

### Navigation
- Removed "Reports" from header nav (no longer a homepage section worth navigating to)
- Header intersection observer now only tracks sections that exist in the nav

---

## Files Changed (12 files, net -153 lines)

| File | Change |
|------|--------|
| `src/app/page.tsx` | Reordered sections, updated CTAs, simplified stats |
| `src/app/globals.css` | Added focus-visible accessibility styles |
| `src/app/impact/page.tsx` | Complete rewrite as reports download page |
| `src/components/Header.tsx` | "Donate" to "Get Involved", removed Reports nav item |
| `src/components/HeroSection.tsx` | Fixed Link consistency, removed unoptimized |
| `src/components/ProgramsGrid.tsx` | 9 cards to 6 featured with icons |
| `src/components/ImpactReports.tsx` | Simplified to brief teaser section |
| `src/components/PartnerLogos.tsx` | White cards, flexbox layout, visible logos |
| `src/components/PartnerWithUs.tsx` | Balanced padding, "Start a Conversation" button |
| `src/components/SuccessStories.tsx` | Removed fake quotes, honest summaries |
| `src/components/TeamSection.tsx` | Larger team photos, removed unoptimized |
| `src/app/layout.tsx` | Minor update |

---

## Remaining Recommendations

These items were identified but not addressed in this sprint:

1. **Real testimonials** -- Source actual first-person quotes from named graduates to replace the current narrative summaries in Success Stories
2. **Social media links** -- Add LinkedIn, Twitter/X, Instagram to the footer for social proof
3. **Mobile menu animation** -- Add slide transition and body scroll lock when the mobile menu is open
4. **Skip navigation link** -- Add a hidden "Skip to content" link for screen reader users
5. **Donation infrastructure** -- If/when a donation flow is set up, update the "Get Involved" CTA to link directly to it

---

## How to Review

1. Run `npm run dev` and visit `http://localhost:3000`
2. Scroll through the homepage -- note the reduced content, visible partner logos, and clearer flow
3. Visit `http://localhost:3000/impact` for the dedicated reports page
4. Tab through the page with keyboard to verify focus indicators
5. Test on mobile viewport to verify responsive layouts
