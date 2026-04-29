# Generative AI for Web Development

![Generative AI for Web Development book cover](public/book-cover.webp)

This repository contains the website for *Generative AI for Web Development:
Building Web Applications Powered by OpenAI APIs and Next.js* by Tom Auger and
Emma Saroyan.

The site provides a short overview of the book, links to the published edition,
links to the companion source-code repository, and maintains corrections and
feedback information for readers.

## About the Book

*Generative AI for Web Development* is a practical guide to building web
applications powered by generative AI. It introduces tools and techniques such
as ChatGPT, image generation, OpenAI APIs, and Next.js through real application
examples.

The companion code repository includes examples such as:

- Magic Carpets Website
- Content Generator
- Story Generator
- Language Learning App
- Interactive Blog

Book page:
[Springer](https://link.springer.com/book/10.1007/979-8-8688-0885-2)

Companion code:
[Apress/Generative-AI-for-Web-Development](https://github.com/Apress/Generative-AI-for-Web-Development)

Blog:
[Generative AI for Web Development on Substack](https://genaiforwebdev.substack.com/)

## Project

This is a small static Next.js site using the App Router. It includes:

- A book landing page
- A corrections page
- Static SEO metadata
- Sitemap and robots output
- RSS route
- Static Open Graph image
- Tailwind CSS
- GitHub Pages deployment through GitHub Actions

The site is configured as a static export so it can be hosted on GitHub Pages.

## Deployment

This project deploys to GitHub Pages with the workflow in
`.github/workflows/pages.yml`.

To enable deployment:

1. Go to the repository on GitHub.
2. Open **Settings > Pages**.
3. Set **Build and deployment > Source** to **GitHub Actions**.
4. Push to `main`.

The current default deployment URL is:

```text
https://genaiforwebdev.com/
```

If you configure a custom domain, update the site URL in
`.github/workflows/pages.yml` and `app/sitemap.ts`.

## Corrections

Corrections and reader feedback are tracked on the site. To report an issue,
contact:

```text
genaiforwebdev [at] tomauger [dot] am
```
