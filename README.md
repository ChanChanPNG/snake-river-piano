# Snake River Piano website

A static, responsive one-page website for Snake River Piano. No build step required. Works with GitHub + Vercel.

## Deploy
1. Create a GitHub repository and upload `index.html`, `styles.css`, `script.js`, and `assets/` if using local images.
2. In Vercel, import the repository. Select Framework Preset: **Other**. Leave build command empty. Deploy.
3. Connect a domain in Vercel > Project > Settings > Domains whenever you are ready. DNS is not needed for the initial preview.

## Connect GoHighLevel
The contact form is currently an **email-app fallback**; it is NOT connected to GHL, and does not store submissions online. Replace the content of the `<div id="ghl-form-container">` in `index.html` with the actual GHL `<iframe>` embed code and include GHL's accompanying script. You can then remove the form JS handler in `script.js` (it won't do anything once its form is removed). Test one real submission and confirm it appears in GHL.

## Images
The original Wix teacher portrait is referenced via an external Wix URL. Because the image source might block remote access or be removed later, upload the original image file when you have it, then change the `src` to a local path like `assets/diana.jpg`. The decorative hero background uses a remote Unsplash photograph with a CSS piano-key fallback.

## Verify before publishing
- Lesson tuition and program details are from the existing Wix site, not independently confirmed as current.
- Confirm instructor portrait loads; if it doesn't, replace with an approved local photo.
- Confirm the studio address and phone number are current.
- Insert the user's GHL form embed code to enable real CRM submissions.
- Testimonials and names are carried over from the existing site; obtain approval if required.

Website credit links to Wayfinder Creative.
