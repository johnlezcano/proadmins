# ProAdmins Website

Complete static rebuild for ProAdmins.io.

## Included

* Responsive homepage
* Hire Talent page
* Roles We Recruit page with role search
* How It Works page
* Tell Us Who You Need page
* Responsive mobile navigation
* Placement fee calculator
* Custom 404 page
* SEO titles and meta descriptions
* Canonical tags
* Open Graph metadata
* sitemap.xml
* robots.txt
* Favicons and social image
* Redirects from several old ProAdmins URLs
* Supplied ProAdmins logo variants
* Capital Generations parent brand logo and relationship
* Photorealistic AI generated recruiting and remote work imagery
* Sitewide WhatsApp contact button for +1 631 877 1393

## Current business model shown on the website

* Direct hire recruiting
* 20% of annual salary placement fee
* 50% due when the search starts
* 50% due when the candidate starts work
* 30 Day Replacement Guarantee
* Typical first qualified candidates within one week
* Typical shortlist of two or three finalists
* Primary talent focus on Latin America

The pricing calculator starts at a $12,000 annual salary example. A nearby note explains that ProAdmins often suggests around $12,000 per year as a starting point for many administrative roles in Latin America, while the hiring company decides the final compensation.

## Technical approach

This is a plain static website using HTML, CSS and JavaScript. There is no WordPress, framework, package manager, build process or node_modules folder.

It is intentionally simple for GitHub and Vercel.

## GitHub and Vercel

Put every file and folder in this package at the root of the GitHub repository.

The repository root should contain:

```
404.html
README.md
index.html
robots.txt
sitemap.xml
vercel.json
assets/
contact/
hire-talent/
how-it-works/
roles/
```

Connect the repository to Vercel. No build command is required.

Do not point ProAdmins.io to the new Vercel deployment until the preview has been reviewed and all existing email DNS records have been confirmed.

## Contact form

The lead form is connected to the existing Capital Generations Formspree endpoint at `https://formspree.io/f/xjybazzn`. Client-side validation plus success and error states are enabled.

After deployment, submit one live test request and confirm it arrives through Formspree.

## Google Analytics

GA4 is not installed yet. Add it after the Measurement ID is confirmed.

## Google Search Console

The sitemap is ready at:

`https://proadmins.io/sitemap.xml`

Submit it after the new production deployment is live and the Search Console property is verified.

## Brand direction

Core colors in this version:

* ProAdmins navy: `#10253f`
* ProAdmins blue: `#0b66c3`
* ProAdmins teal: `#2dd4bf`
* Light blue: `#e8f3ff`

The build uses more of the original blue brand direction while keeping teal as the main accent.

ProAdmins remains the primary brand. Capital Generations appears as the parent brand in a subtle relationship treatment.

## Production checks

1. Review the Vercel preview on desktop, tablet and mobile.
2. Test the live ProAdmins form submission after deployment.
3. Confirm the ProAdmins business email provider and preserve every email DNS record.
4. Add Google Analytics if desired.
5. Verify Search Console and submit the sitemap after launch.
6. Only then change website DNS records to Vercel.


## WhatsApp

A small floating WhatsApp button appears sitewide and opens a chat to +1 631 877 1393 with a short prefilled hiring message. The contact page and footer also include WhatsApp access.


## v4 imagery update

This package keeps the approved ProAdmins logo, existing ProAdmins color system, layout, pricing, WhatsApp contact, and Capital Generations relationship. The homepage now uses three illustrative candidate profile cards. Every other photography slot uses a different image asset, and no site photo is reused in more than one placement.


## Approved image set
This build uses the 11 user supplied website images in `assets/photos/`. Each photograph is used once only. No AI generated placeholder photography is included in the site.


## v5.2 footer brand update

The footer now uses `assets/capital-generations-logo-white.png`, a transparent white Capital Generations logo designed for the dark navy footer. The existing blue Capital Generations logo remains available for light backgrounds.


## v5.3 update

- Connected the ProAdmins hiring form to the existing Formspree endpoint `https://formspree.io/f/xjybazzn`.
- Centered the Email, Phone, WhatsApp, Location, and LinkedIn icons within their contact-page icon boxes.
- No other site content, imagery, branding, pricing, or layout changes were made in this update.

## v5.4 updates
- Fixed the mobile navigation overlay so the open menu stays above page content and fills the usable viewport.
- Fixed the homepage candidate shortlist on mobile so all profile details remain visible.
- Added the footer line: "Built by humans, with some help from AI."
