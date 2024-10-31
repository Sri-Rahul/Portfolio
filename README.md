# Sri Rahul Portfolio Website

## Overview

Welcome to the **Sri Rahul Portfolio Website**! This project showcases my skills, projects, and experiences as a developer. Built with **Next.js** **TypeScript** and **eldoraui** the portfolio features smooth animations, responsive design, and interactive components to provide an engaging user experience.

## Features

- **Responsive Design:** Optimized for both desktop and mobile devices
- **Interactive Animations:** Enhanced with Blobity for dynamic visual effects
- **Sectioned Layout:** Includes Home, About, Work, Tools, Contact, and Footer sections
- **SEO Optimized:** Proper metadata and viewport settings for better search engine visibility
- **Custom Hooks:** Utilizes custom React hooks for efficient state management and event handling
- **ESLint Configuration:** Enforced code quality and consistency with a comprehensive ESLint setup

## Technologies Used

### Frontend
- [Next.js](https://nextjs.org/) - React framework for server-side rendering and generating static websites
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript for static type checking
- [Blobity](https://github.com/blobity/blobity) - Lightweight library for creating interactive blob animations
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development

### Tools
- [Visual Studio Code](https://code.visualstudio.com/) - Source-code editor
- [ESLint](https://eslint.org/) - Linting utility for identifying and reporting on patterns in JavaScript
- [Prettier](https://prettier.io/) - Code formatter for consistent styling
- [usehooks-ts](https://usehooks-ts.com/) - Collection of reusable React hooks with TypeScript support

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-template-main.git
   cd portfolio-template-main
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=https://api.example.com
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Usage

Customize the portfolio to showcase your own projects and information:

1. **Update Metadata**
   ```typescript
   // app/page.tsx
   export const metadata: Metadata = {
       title: 'Your Name',
       description: 'Your Professional Description',
       metadataBase: new URL("https://www.yourwebsite.com/"),
       // ...other metadata
   };
   ```

2. **Add Projects**
   - Edit the `Work` section in `app/sections/Work.tsx` to include your projects

3. **Customize Styles**
   - Modify Tailwind CSS classes directly in the JSX to change component appearance

4. **Deploy**
   - Deploy your portfolio using platforms like Vercel or Netlify

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add some feature"`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## Contact

- **GitHub:** @Sri-Rahul
- **LinkedIn:** [My LinkedIn Profile](https://www.linkedin.com/in/sri-rahul-n/)
- **Website:** https://www.yourwebsite.com

Feel free to reach out for collaborations, feedback, or inquiries!
