# Emerald Living Website

Static GitHub Pages landing website for Emerald Living.

## Local preview

### Option 1
Open `index.html` directly in your browser.

### Option 2
Run a simple local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push files to GitHub.
2. Go to repository **Settings**.
3. Go to **Pages**.
4. Set source to **Deploy from a branch**.
5. Select branch: `main`.
6. Select folder: `/root`.
7. Save.
8. Add custom domain: `www.myemeraldliving.com`.
9. After DNS checks finish, enable **Enforce HTTPS**.

## Cloudflare DNS setup

Add this DNS record in Cloudflare:

- Type: `CNAME`
- Name: `www`
- Target: `YOUR-GITHUB-USERNAME.github.io`
- Proxy status: `DNS only`
- TTL: `Auto`

Notes:

- Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.
- The root domain `myemeraldliving.com` can later be redirected to `https://www.myemeraldliving.com` using Cloudflare redirect rules.
- Do not change existing Cloudflare Email Routing MX/TXT records.
- Do not delete Cloudflare Email Routing records because `support@myemeraldliving.com` and `contact@myemeraldliving.com` rely on them.
