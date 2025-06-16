import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-vercel-gray-800 bg-vercel-white dark:bg-vercel-black sticky top-0 z-50 transition-colors duration-200 backdrop-blur-md dark:bg-vercel-black/95">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-vercel-white transition-colors duration-200">Joe Pool</h1>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-vercel-gray-400 dark:hover:text-vercel-white transition-colors duration-200">About</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 dark:text-vercel-gray-400 dark:hover:text-vercel-white transition-colors duration-200">Skills</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 dark:text-vercel-gray-400 dark:hover:text-vercel-white transition-colors duration-200">Experience</a>
              <a href="#education" className="text-gray-600 hover:text-gray-900 dark:text-vercel-gray-400 dark:hover:text-vercel-white transition-colors duration-200">Education</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 dark:text-vercel-gray-400 dark:hover:text-vercel-white transition-colors duration-200">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-vercel-gray-400 dark:hover:text-vercel-white transition-colors duration-200">Let&apos;s Work Together</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}