# ProAdmins Website

Complete static website rebuild for ProAdmins.io.

## What is included

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
* Open Graph social metadata
* sitemap.xml
* robots.txt
* Favicon and social image
* Redirects from several old ProAdmins URLs
* Original supplied ProAdmins logo variants

## Technical approach

This is a plain static website with HTML, CSS and JavaScript. There is no WordPress, framework, build process, package manager or node_modules folder.

It is intentionally simple for GitHub and Vercel.

## GitHub and Vercel

Put every file and folder in this package at the root of the GitHub repository.

The repository root should look like this:

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

Connect the repository to Vercel. Vercel can serve this project directly as a static site. No build command is required.

Do not point ProAdmins.io to the new Vercel deployment until the preview deployment has been reviewed and the existing email DNS records have been confirmed.

## Contact form setup still required before production

The form design, validation, success state and error state are built. The external form endpoint is intentionally not connected yet because the ProAdmins Formspree endpoint has not been created or supplied.

After a Formspree form is created, open:

`contact/index.html`

Find:

```
data-endpoint=""
```

Replace it with the full Formspree endpoint, for example:

```
data-endpoint="https://formspree.io/f/yourformid"
```

Do not use the example endpoint literally.

Until an endpoint is connected, submitting the preview form displays a clear message directing visitors to contact@proadmins.io or (631) 877-1393.

## Google Analytics

GA4 is not installed yet. Add it only after the Measurement ID is confirmed.

## Google Search Console

The sitemap is ready at:

`https://proadmins.io/sitemap.xml`

Submit it after the new production deployment is live and the Search Console property is verified.

## Brand files

The supplied ProAdmins PNG files are preserved in `assets/` with clearer names:

* `proadmins-logo-dark.png`
* `proadmins-logo-light-teal.png`
* `proadmins-logo-light.png`

Core brand colors used in the build:

* Navy: `#1e293b`
* Deep navy: `#0f172a`
* Teal: `#2dd4bf`

## Important production checks

Before replacing the current website:

1. Review the Vercel preview on desktop, tablet and mobile.
2. Connect and test Formspree.
3. Confirm the ProAdmins business email provider and preserve every email DNS record.
4. Confirm Google Analytics if desired.
5. Confirm Search Console and submit the sitemap after launch.
6. Only then change the website DNS records to Vercel.
