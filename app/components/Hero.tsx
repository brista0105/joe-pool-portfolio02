import Image from 'next/image';

export default function Hero() {
  return (
    <section className="section bg-vercel-white dark:bg-vercel-black transition-colors duration-200">
      <div className="container text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 dark:border-vercel-gray-800 shadow-lg">
            <Image 
              src="/Joe-Pool.jpg" 
              alt="Joe Pool - Senior Software Developer"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-vercel-white mb-4 transition-colors duration-200">
          Joe Pool
        </h1>
        <p className="text-xl text-gray-600 dark:text-vercel-gray-400 mb-8 transition-colors duration-200">
          Automation & AI Expert
        </p>
        <p className="text-lg text-gray-500 dark:text-vercel-gray-500 max-w-2xl mx-auto mb-8 transition-colors duration-200">
          Specializing in business process automation, AI integration, and workflow optimization using 
          Power Automate, N8N, Make.com, and custom scripting solutions - $70/hr
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-vercel-black dark:bg-vercel-white text-vercel-white dark:text-vercel-black px-6 py-3 rounded-lg hover:bg-vercel-gray-800 dark:hover:bg-vercel-gray-200 transition-colors duration-200"
          >
            Start Your Automation Project
          </a>
          <a 
            href="#experience" 
            className="border border-gray-300 dark:border-vercel-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-vercel-gray-900 transition-colors duration-200 text-gray-900 dark:text-vercel-white"
          >
            View Automation Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}