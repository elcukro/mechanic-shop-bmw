# Auto Service Pro - Mechanic Shop Template

A Next.js template for an automotive service shop specializing in injector regeneration, DPF filter cleaning, turbo repairs, engine work, and general car maintenance.

## Features

- Modern, responsive design built with Tailwind CSS
- TypeScript for type safety
- Mobile-friendly navigation with hamburger menu
- Service showcase pages with detailed descriptions
- About us page with team profiles
- Contact form with validation
- FAQ section

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd mechanic-shop-template
   ```

3. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # App router pages
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   ├── services/   # Services page
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   │   ├── layout/     # Layout components (Header, Footer)
│   │   └── ui/         # UI components
│   ├── lib/            # Utility functions
│   └── styles/         # Global styles
├── .eslintrc.json      # ESLint configuration
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Customization

### Colors

You can customize the color scheme by modifying the `tailwind.config.js` file. The default colors are:

- Primary: `#0F172A` (Dark blue)
- Secondary: `#3B82F6` (Blue)
- Accent: `#F97316` (Orange)

### Images

Replace the placeholder images with your own images by:
1. Adding your images to the `public/images` directory
2. Update the Image components in the various pages

### Content

Update the content in the following files:

- `src/app/page.tsx` - Home page content
- `src/app/services/page.tsx` - Services information
- `src/app/about/page.tsx` - About us information
- `src/app/contact/page.tsx` - Contact information and form
- `src/components/layout/Footer.tsx` - Business hours and contact details

## Deployment

You can deploy this template to any platform that supports Next.js, such as Vercel, Netlify, or AWS.

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## License

This template is open source and available under the MIT License.

## Acknowledgments

- Next.js Team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for hosting and deployment