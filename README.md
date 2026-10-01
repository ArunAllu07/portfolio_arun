# Arun Kethavath — Portfolio

Personal portfolio for my work in data analytics, machine learning, and applied AI. I am an undergraduate at IIT Kharagpur, studying Metallurgical and Materials Engineering with a micro-specialization in Artificial Intelligence and Applications.

## Portfolio website

The website is configured to publish to GitHub Pages at **[arunallu07.github.io/portfolio_arun](https://arunallu07.github.io/portfolio_arun/)**. The link will show the site after GitHub Pages is enabled and the first deployment completes.

### Enable the first deployment

1. Open this repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, set the source to **GitHub Actions**.
3. Push the project to the `main` branch, or run **Deploy portfolio to GitHub Pages** from the **Actions** tab.
4. Wait for the workflow to finish successfully, then open the portfolio link above.

Future pushes to `main` automatically rebuild and publish the site. The deployment workflow lives in `.github/workflows/deploy-pages.yml`.

## What you’ll find

- An introduction, background, and education
- Data and machine learning skills
- Internship experience and entrepreneurship work
- Selected analytics, machine learning, and software projects
- Contact and social links

## Run locally

Install [Node.js](https://nodejs.org/) and npm, then run these commands from the project directory:

```sh
npm install
npm run dev
```

Open the local URL printed in your terminal (usually `http://localhost:8080`). This preview is only available on your computer.

To create a production build locally:

```sh
npm run build
```

The generated files are placed in `dist/`.

## Built with

- React and TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
