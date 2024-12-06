# Haian Ibrahim - Portfolio

A modern, responsive portfolio website built with Next.js and TailwindCSS, featuring bilingual support (English/Arabic), smooth animations, and a contact form.

## Features

- 🌐 Bilingual Support (English/Arabic)
- 🎨 Modern UI with Framer Motion animations
- 📱 Fully responsive design
- 🌙 Dark mode support
- 📬 Contact form integration
- ⚡ Optimized performance
- 🎯 SEO friendly

## Technologies Used

- Next.js 14
- TailwindCSS
- Framer Motion
- TypeScript
- Formspree for contact form

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/hki98/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the values in `.env` with your own:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
NEXT_PUBLIC_EMAIL=your_email
NEXT_PUBLIC_LINKEDIN_URL=your_linkedin_url
NEXT_PUBLIC_GITHUB_URL=your_github_url
NEXT_PUBLIC_TELEGRAM=your_telegram
```

4. Run the development server:

```bash
npm run dev
```

## Building for Production

```bash
npm run build
```

The static output will be in the `out` directory, ready to be deployed to any static hosting service.

## Project Structure

```
portfolio/
├── app/                # Next.js app directory
├── components/         # React components
├── contexts/          # React contexts
├── lib/               # Utilities and configurations
├── public/            # Static assets
└── styles/            # Global styles
```

## Contact

- Email: [contact@haian.me](mailto:contact@haian.me)
- LinkedIn: [Haian Ibrahim](https://linkedin.com/in/haian-k-ibrahim)
- GitHub: [hki98](https://github.com/hki98)
- Telegram: [@hki98](https://t.me/hki98)

## License

This project is open source and available under the MIT License.
