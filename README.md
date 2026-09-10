<a name="readme-top"></a>

# Bhargav S — 3D Portfolio (React, Three.js, TypeScript)

> Backend-focused 3D portfolio by [Bhargav S](https://github.com/BhargavvS). Built with React, Three.js and TypeScript.

## :rocket: Live Projects

| Project | Live Demo | Source Code |
| ------- | --------- | ----------- |
| StreamHouse (VideoTape) | https://frontend-teal-beta-68.vercel.app/ | https://github.com/BhargavvS/VideoTape |
| LearningStack | https://learning-stack-eight.vercel.app/ | https://github.com/BhargavvS/learningStack |
| Email Job Scheduler | https://email-scheduler-nine-sigma.vercel.app | https://github.com/BhargavvS/email_scheduler |

## :bust_in_silhouette: Follow Me

- GitHub: https://github.com/BhargavvS
- LinkedIn: https://www.linkedin.com/in/bhargavs30/
- Email: bhargavbharu447@gmail.com

![Modern 3D Portfolio using React, Three.js and Typescript](![alt text](image.png) "Modern 3D Portfolio using React, Three.js and Typescript")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/BhargavvS "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/BhargavvS/3d-portfolio?icon=github&color=black&scale=1.01)](https://github.com/BhargavvS/3d-portfolio/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/BhargavvS/3d-portfolio/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/BhargavvS/3d-portfolio?icon=github&color=black&scale=1.01)](https://github.com/BhargavvS/3d-portfolio/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/BhargavvS/3d-portfolio?icon=github&color=black&scale=1.01)](https://github.com/BhargavvS/3d-portfolio/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/BhargavvS/3d-portfolio?icon=github&color=black&scale=1.01)](https://github.com/BhargavvS/3d-portfolio/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/BhargavvS/3d-portfolio?icon=github&color=black&scale=1.01)](https://github.com/BhargavvS/3d-portfolio/pulls "GitHub pull requests")
[![Netlify status](https://api.netlify.com/api/v1/badges/5c77ba92-e2f5-468e-99f1-3543906a90cb/deploy-status)](https://github.com/BhargavvS/3d-portfolio "Netlify status")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Netlify](#page_with_curl-deploy-on-netlify)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

<!--- FOLDER_STRUCTURE_START --->
```bash
3d-portfolio/
  |- netlify/
    |-- functions/
  |- public/
  |- src/
    |-- assets/
    |-- components/
      |--- canvas/
      |--- about.tsx
      |--- banner.tsx
      |--- contact.tsx
      |--- experience.tsx
      |--- feedbacks.tsx
      |--- footer.tsx
      |--- hero.tsx
      |--- index.ts
      |--- loader.tsx
      |--- navbar.tsx
      |--- tech.tsx
      |--- works.tsx
    |-- constants/
      |--- index.ts
    |-- hoc/
      |--- index.ts
      |--- section-wrapper.tsx
    |-- hooks/
      |--- use-in-view.ts
      |--- use-limited-webgl.ts
      |--- use-typewriter.ts
    |-- lib/
      |--- contact.ts
    |-- utils/
      |--- lib.ts
      |--- motion.ts
    |-- app.tsx
    |-- env.d.ts
    |-- index.css
    |-- main.tsx
    |-- styles.ts
  |- .env.example
  |- .env/.env.local
  |- .gitignore
  |- image-1.png
  |- image-2.png
  |- image.png
  |- index.html
  |- netlify.toml
  |- package-lock.json
  |- package.json
  |- pnpm-lock.yaml
  |- pnpm-workspace.yaml
  |- tsconfig.json
  |- vite.config.ts
```
<!--- FOLDER_STRUCTURE_END --->

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in **root** directory.
4. Contents of `.env`:

```env
# resend
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
RESEND_FROM_EMAIL="Your Name <me@example.com>"
CONTACT_TO_EMAIL="contact@example.com"
CONTACT_SITE_URL="https://example.com"
RESEND_TEMPLATE_CONTACT_USER="contact-thank-you"
RESEND_TEMPLATE_CONTACT_ADMIN="contact-admin"

# google recaptcha v3
VITE_RECAPTCHA_SITE_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
RECAPTCHA_SECRET_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
RECAPTCHA_MIN_SCORE="0.5"
```

5. Create an account at [Resend](https://resend.com "Resend") and [add + verify a sending domain](https://resend.com/domains "Resend domains").

6. Create an API key at [Resend API Keys](https://resend.com/api-keys "Resend API keys") with **Sending access**. Copy it to `RESEND_API_KEY`.

7. Set `RESEND_FROM_EMAIL` to an address on that verified domain. Set `CONTACT_TO_EMAIL` to the inbox that should receive new contact notifications. Set `CONTACT_SITE_URL` to your site's public URL (no trailing slash).

8. In [Resend Templates](https://resend.com/templates "Resend templates"), create **two** templates and **Publish** each.

   **Template 1 — thank you to the user**
   - Name: `contact-thank-you`
   - Variables: `USER_NAME`, `USER_MESSAGE`, `SITE_URL`

   **Template 2 — new message to admin**
   - Name: `contact-admin`
   - Variables: `USER_NAME`, `USER_EMAIL`, `USER_MESSAGE`, `SITE_URL`

   Copy each template's alias into `RESEND_TEMPLATE_CONTACT_USER` and `RESEND_TEMPLATE_CONTACT_ADMIN`.

9. Create a [Google reCAPTCHA v3](https://www.google.com/recaptcha/admin/create "Google reCAPTCHA") project. Choose **Score based (v3)**, add your production domain(s) **and** `localhost`, then copy the **Site key** to `VITE_RECAPTCHA_SITE_KEY` and the **Secret key** to `RECAPTCHA_SECRET_KEY`.

10. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `pnpm install --legacy-peer-deps`.

11. Now the app is fully configured 👍 and you can start it with `npm run dev` or `pnpm dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

### :raising_hand: Need Help?

If you run into issues during installation or setup:

- **GitHub Discussions** — [Open a Q&A discussion](https://github.com/BhargavvS/3d-portfolio/discussions/new?category=q-a) for setup and troubleshooting help.
- **Email** — [bhargavbharu447@gmail.com](mailto:bhargavbharu447@gmail.com)
- **Discord** — `@BhargavvS`

## :camera: Screenshots:

![Showcase your skills](![alt text](image-1.png) "Showcase your skills")

![Showcase your projects](![alt text](image-2.png)"Showcase your projects")


![Functional Contact form](/.github/images/img4.png "Functional Contact form")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Vite JS](https://skillicons.dev/icons?i=vite "Vite JS")](https://vitejs.dev/ "Vite JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Netlify](https://skillicons.dev/icons?i=netlify "Netlify")](https://netlify.app/ "Netlify")

## :wrench: Stats

[![Stats for 3D Portfolio](/.github/images/stats.svg "Stats for 3D Portfolio")](https://pagespeed.web.dev/analysis?url=https://github.com/BhargavvS/3d-portfolio "Stats for 3D Portfolio")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in 3D Portfolio.

<!--- DEPENDENCIES_START --->
- [@netlify/functions](https://www.npmjs.com/package/@netlify/functions): ^6.0.0
- [@netlify/vite-plugin](https://www.npmjs.com/package/@netlify/vite-plugin): ^3.0.1
- [@react-three/drei](https://www.npmjs.com/package/@react-three/drei): ^10.7.8
- [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber): ^9.7.0
- [@rolldown/binding-win32-x64-msvc](https://www.npmjs.com/package/@rolldown/binding-win32-x64-msvc): ^1.2.7
- [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite): ^4.3.3
- [@types/node](https://www.npmjs.com/package/@types/node): ^26.4.0
- [@types/react](https://www.npmjs.com/package/@types/react): ^19.2.18
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^19.2.5
- [@types/react-vertical-timeline-component](https://www.npmjs.com/package/@types/react-vertical-timeline-component): ^3.3.6
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react): ^6.1.1
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.1
- [framer-motion](https://www.npmjs.com/package/framer-motion): ^12.43.0
- [hls.js](https://www.npmjs.com/package/hls.js): 1.5.17
- [maath](https://www.npmjs.com/package/maath): ^0.10.8
- [react](https://www.npmjs.com/package/react): ^19.2.8
- [react-dom](https://www.npmjs.com/package/react-dom): ^19.2.8
- [react-google-recaptcha-v3](https://www.npmjs.com/package/react-google-recaptcha-v3): ^1.11.0
- [react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt): ^1.7.341
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): ^7.18.3
- [react-vertical-timeline-component](https://www.npmjs.com/package/react-vertical-timeline-component): ^4.0.0
- [resend](https://www.npmjs.com/package/resend): ^6.25.0
- [sonner](https://www.npmjs.com/package/sonner): ^2.0.8
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^3.6.0
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^4.3.3
- [three](https://www.npmjs.com/package/three): ^0.185.1
- [three-stdlib](https://www.npmjs.com/package/three-stdlib): ^2.36.1
- [typescript](https://www.npmjs.com/package/typescript): ~5.9.3
- [vite](https://www.npmjs.com/package/vite): ^8.2.1

<!--- DEPENDENCIES_END --->

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://buymeacoffee.com/bhargavs "Buy me a Coffee")

## :rocket: Follow Me

- GitHub: [BhargavvS](https://github.com/BhargavvS)
- LinkedIn: [bhargavs30](https://www.linkedin.com/in/bhargavs30/)
- Email: [bhargavbharu447@gmail.com](mailto:bhargavbharu447@gmail.com)

## :books: Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `pnpm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## :page_with_curl: Deploy on Netlify

The easiest way to deploy your Vite.js app is to use the [Netlify Platform](https://netlify.app).

Check out [Vite.js deployment documentation](https://vitejs.dev/guide/static-deploy) for more details.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.


<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
