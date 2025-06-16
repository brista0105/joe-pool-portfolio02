export default function Education() {
  return (
    <section id="education" className="section bg-vercel-white dark:bg-vercel-black transition-colors duration-200">
      <div className="container">
        <h2 className="section-title">Education & Training</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-vercel-white transition-colors duration-200">Formal Education</h3>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900 dark:text-vercel-white transition-colors duration-200">Bachelor of Science in Physics</h4>
              <p className="text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">University of Texas at Arlington</p>
              <p className="text-sm text-gray-500 dark:text-vercel-gray-500 transition-colors duration-200">Strong analytical and problem-solving foundation</p>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-vercel-white transition-colors duration-200">Military Service</h3>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900 dark:text-vercel-white transition-colors duration-200">United States Marine Corps</h4>
              <p className="text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">Honorable Discharge</p>
              <p className="text-sm text-gray-500 dark:text-vercel-gray-500 transition-colors duration-200">Leadership, discipline, and problem-solving skills</p>
            </div>
          </div>
        </div>

        <div className="mt-8 card">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-vercel-white transition-colors duration-200">Continuing Education & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">
              <li>• Cisco CCNA Training</li>
              <li>• Oracle Database Fundamentals</li>
            </ul>
            <ul className="space-y-2 text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">
              <li>• VB.NET Advanced Programming</li>
              <li>• Microsoft Access Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}