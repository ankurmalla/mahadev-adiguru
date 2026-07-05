# Deployment

## Deploy now on Cloudflare Pages
1. Zip only the `site` folder contents or upload the provided `mahadev-adiguru-platform.zip` and choose the site root if using Git.
2. Cloudflare Pages → Create project → Direct Upload.
3. Upload the `site` folder ZIP.
4. Add custom domains:
   - mahadevadiguru.com
   - www.mahadevadiguru.com
5. SSL/TLS → Overview → Full.
6. Edge Certificates → enable Always Use HTTPS and Automatic HTTPS Rewrites.

## Best CMS path
- Start: static `data/content.js` for immediate launch.
- Free editor: Decap CMS with GitHub repo.
- Growth stage: Strapi or Directus with PostgreSQL and media storage.
