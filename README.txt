AQUA MARINE PURE WATER — WEBSITE SETUP
======================================

FILES
-----
index.html       Main website content and SEO metadata
styles.css       Responsive blue-and-white design
script.js        Mobile menu and WhatsApp order buttons
assets/logo.svg  Simple water-drop logo
robots.txt       Search engine crawling instructions
sitemap.xml      Sitemap for Google Search Console

BEFORE YOU PUBLISH
------------------
1. Open script.js.
   - Replace whatsappNumber with your actual WhatsApp number in international digits-only format.
     Pakistan format example: 923001234567 (example format only).
   - Replace phoneDisplay with your business phone number.
   - Replace businessAddress with your actual address/service area.

2. Open index.html and replace every instance of:
   https://YOUR-DOMAIN.com
   with your real domain (keep https://).

3. Confirm all product sizes and prices.
   Search for [PRICE] in index.html and replace it with real prices.
   Update delivery charges, bottle deposit/refill terms, business hours, and areas served.
   Do not claim certifications, purity test results, or health benefits unless verified.

4. Update Google Maps:
   - Find the iframe in index.html and replace its URL with the embed URL for your exact business location.
   - Replace the map link with the share link for the same location.
   - Use the actual business address/service area in script.js.

5. Open index.html in a browser to preview.
   For a better local preview, open the folder in VS Code and use a local development server
   such as the Live Server extension. No build step is required.

FREE HOSTING OPTION: GITHUB PAGES
---------------------------------
This static website can be hosted free with GitHub Pages.

1. Create/sign in to a GitHub account.
2. Create a new public repository, e.g. aqua-marine-pure-water.
3. Upload index.html, styles.css, script.js, assets/logo.svg, robots.txt, sitemap.xml.
4. In repository Settings > Pages, choose deploy from the main branch and root folder.
5. Save and wait for GitHub Pages to publish the site.
6. GitHub will show the public website URL. Test the site on mobile and desktop.
7. To use your own domain, buy a domain from a registrar and follow GitHub Pages' custom-domain/DNS instructions.
8. If you use a custom domain, update the canonical URL, JSON-LD URL, robots.txt and sitemap.xml.

GOOGLE SEARCH
-------------
1. Open Google Search Console: https://search.google.com/search-console/
2. Add your domain or URL-prefix property and complete verification.
3. Submit https://YOUR-DOMAIN.com/sitemap.xml (after replacing the placeholder).
4. Use URL Inspection to request indexing of your homepage.
5. Keep in mind that indexing and rankings are not guaranteed or instant.

GOOGLE MAPS / BUSINESS PROFILE
------------------------------
- Add your real business location or service area in the Google Business Profile if eligible.
- Follow Google's rules for service-area businesses; do not show a fake address.
- An embedded map alone does not automatically create a Google Business Profile or guarantee Maps ranking.

WHATSAPP
--------
Order buttons open a pre-filled message in WhatsApp after you set a valid number in script.js.
Test every button using your own phone and make sure the correct business account opens.
