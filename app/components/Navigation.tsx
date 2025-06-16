export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-gray-800">
            Joe Pool
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="nav-link text-gray-600 hover:text-blue-600">About</a>
            <a href="#skills" className="nav-link text-gray-600 hover:text-blue-600">Skills</a>
            <a href="#experience" className="nav-link text-gray-600 hover:text-blue-600">Experience</a>
            <a href="#education" className="nav-link text-gray-600 hover:text-blue-600">Education</a>
            <a href="#contact" className="nav-link text-gray-600 hover:text-blue-600">Contact</a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}