# MusicNextJS 🎵

MusicNextJS is a modern, visually appealing, and feature-rich music school website built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and other cutting-edge technologies. It provides a platform for showcasing music courses, instructors, testimonials, webinars, and more.

## Features 🚀

- **Hero Section**: A captivating introduction to the music school.
- **Featured Courses**: Highlighted courses with detailed descriptions.
- **Why Choose Us**: A sticky scroll section explaining the benefits of the music school.
- **Testimonials**: Infinite moving cards showcasing student feedback.
- **Upcoming Webinars**: A hover-effect card section for featured webinars.
- **Instructors**: A wavy background section introducing the instructors with animated tooltips.
- **Contact Us**: A form to reach out to the music school.
- **Responsive Design**: Fully responsive and optimized for all devices.
- **Dark Mode**: Supports light and dark themes.

## Tech Stack 🛠️

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Animations**: [Motion](https://motion.dev)
- **Utility Functions**: [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- **Noise Generation**: [simplex-noise](https://github.com/jwagner/simplex-noise)

## Project Structure 📂

```
musicnextjs/
├── public/                # Static assets (images, icons, etc.)
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── components/    # Reusable UI components
│   │   ├── data/          # JSON data for courses
│   │   ├── utils/         # Utility functions
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
├── .gitignore             # Git ignore file
├── package.json           # Project dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Getting Started 🏁

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or higher)
- [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/musicnextjs.git
   cd musicnextjs
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Scripts 📜

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint to check for code quality issues.

## Deployment 🚀

The project can be deployed on platforms like [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com). Follow the respective platform's documentation for deployment instructions.

## Contributing 🤝

Contributions are welcome! Feel free to open issues or submit pull requests.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙌

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Motion](https://motion.dev)
- [Unsplash](https://unsplash.com) for placeholder images

---

Made with ❤️ by preshi.
