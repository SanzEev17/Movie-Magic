# Movie-Magic

Movie-Magic is a dynamic and responsive web application that provides information about movies, TV shows, and actors and actresses. Built using Next.js 14 and TailwindCSS, Movie-Magic leverages the TMDB (The Movie Database) API to fetch and display a wealth of media data. The site is designed to be fully mobile responsive, ensuring a seamless experience across all devices.

## Features

- **Detailed Media Information**: Browse detailed information about movies, TV shows, and actors and actresses.
- **Search Functionality**: Easily search for your favorite movies, TV shows, or actors and actresses.
- **Responsive**: Enjoy a fully responsive design that works beautifully on all screen sizes.
- **Categories**: Discover media content through various categories such as year, genre, popular, and trending.
- **Next.js 14**: Fast, server-side rendered pages with static generation and API routes.
- **Next.js Caching**: Improved performance and speed with optimized caching strategies.
- **TailwindCSS**: Modern, utility-first CSS framework for fast and efficient styling.
- **Framer Motion**: Smooth and dynamic animations to enhance the user experience.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone git@github.com:SanzEev17/Movie-Magic.git
   cd Movie-Magic
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment Variables**:

   Create a `.env.local` file in the root of the project and add your TMDB API key:

   ```env
   TMDB_API_KEY=your_tmdb_api_key
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

### Building for Production

To build the application for production:

```bash
npm run build
npm run start
```

This will compile the application and serve it from the `build` directory.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Thank you for using Movie-Magic! Enjoy exploring movies and TV shows!
