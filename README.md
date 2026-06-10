# Emerald Living Website

Static GitHub Pages landing website for Emerald Living.

## Project structure
- `index.html` - Homepage
- `privacy.html` - Privacy Policy
- `terms.html` - Terms of Use
- `health-disclaimer.html` - Health Disclaimer
- `support.html` - Support & FAQ
- `404.html` - Page not found
- `assets/styles.css` - Main stylesheet
- `assets/script.js` - Minimal vanilla JavaScript (navigation, language switching)
- `CNAME` - Custom domain configuration

## Local preview
**Option 1:** Open `index.html` directly in your browser.
**Option 2:** Run a local server:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## Deployment
1. Push changes to `main`.
2. Go to repository **Settings**.
3. Go to **Pages**.
4. Source: **Deploy from a branch**.
5. Branch: **main**.
6. Folder: **/root**.
7. Save.
8. Custom domain: `www.myemeraldliving.com`.
9. Enable **Enforce HTTPS** after certificate is issued.

## Cloudflare DNS instructions

**For www:**
- Type: `CNAME`
- Name: `www`
- Target: `james-fu9.github.io`
- Proxy status: DNS only
- TTL: Auto

**For apex/root:**
- Type: `A`
- Name: `@`
- Values:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Proxy status: DNS only
- TTL: Auto

**Important:** Do not change or delete existing Cloudflare Email Routing MX/TXT records because `support@myemeraldliving.com` and `contact@myemeraldliving.com` depend on them.
