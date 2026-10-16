# Sethu Subramanian: Cybersecurity Portfolio

A static portfolio site (HTML, CSS, vanilla JS). No build step, no dependencies besides the Inter font from Google Fonts.

```text
sethu-cybersecurity-portfolio/
├── index.html
├── 404.html
├── README.md
└── assets/
    ├── css/style.css
    ├── js/script.js
    ├── images/        (add profile.jpg here)
    └── files/         (add resume.pdf here)
```

## 1. Create the GitHub repository
1. Sign in at github.com as `sethus0077-glitch`.
2. Click **+ → New repository**.
3. Name it (e.g. `sethu-cybersecurity-portfolio`), set it to **Public**, and click **Create repository**.

## 2. Upload the files
1. In the new repository, click **uploading an existing file**.
2. Drag in `index.html`, `404.html`, `README.md` and the whole `assets` folder (keep the folder structure).
3. Click **Commit changes**.

## 3. Enable GitHub Pages
1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.

## 4. Choose branch and folder
Select branch **main** and folder **/ (root)**, then click **Save**.

## 5. Find your website URL
After a minute or two, the **Pages** settings screen shows "Your site is live at…". For a project repository it will be:
`https://sethus0077-glitch.github.io/sethu-cybersecurity-portfolio/`

**If you use a different repository name**, edit the `<base href>` in `404.html` to `/YOUR-REPO-NAME/`.

## 6. Replace the profile image
1. Save a square photo (about 400×400 px) as `assets/images/profile.jpg`.
2. In `index.html`, find the `PROFILE PHOTO` comment and replace the `<div class="avatar">…</div>` with the `<img>` tag shown in that comment.

## 7. Add your resume
1. Save your PDF as `assets/files/resume.pdf`.
2. The Download Resume button appears automatically on the hosted site. To show it permanently (even offline), delete the word `hidden` from the `#resume-btn` link in `index.html`.

## 8. Add projects, certifications and update links
- **Connect the existing project:** in the Online Car Parking System card, set the "View Source Code" `href` to `https://github.com/sethus0077-glitch/YOUR-REPO-NAME` and delete `hidden`. Do the same for "Live Demo" only if a live site exists.
- **Add a project:** copy the whole `<article class="project-card">` block inside `.projects__grid` and edit the text, tags and links.
- **Technology tags:** `JavaScript` and `MySQL` are commented out; uncomment them only if the project really uses them.
- **Education:** uncomment the college/period lines in the Education section once confirmed.
- **Certifications and experience:** follow the commented templates in those sections and remove the empty-state box.
- **Social links:** search for `github.com/sethus0077-glitch`, `linkedin.com/in/` and `mailto:` in `index.html`.
- **Colors and spacing:** edit the variables at the top of `assets/css/style.css`.
