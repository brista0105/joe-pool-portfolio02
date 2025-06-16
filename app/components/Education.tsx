export default function Education() {
  return (
    <section id="education" className="section bg-vercel-white dark:bg-vercel-black transition-colors duration-200">
      <div className="container">
        <h2 className="section-title">Certifications & Training</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-vercel-white transition-colors duration-200">Automation Certifications</h3>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900 dark:text-vercel-white transition-colors duration-200">Microsoft Power Platform Certified</h4>
              <p className="text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">Power Automate & Power Apps Expert</p>
              <p className="text-sm text-gray-500 dark:text-vercel-gray-500 transition-colors duration-200">Advanced workflow automation and app development</p>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-vercel-white transition-colors duration-200">Platform Expertise</h3>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900 dark:text-vercel-white transition-colors duration-200">Make.com & N8N Specialist</h4>
              <p className="text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">Advanced Integration Expert</p>
              <p className="text-sm text-gray-500 dark:text-vercel-gray-500 transition-colors duration-200">Complex workflow design and API integration</p>
            </div>
          </div>
        </div>

        <div className="mt-8 card">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-vercel-white transition-colors duration-200">Technical Skills & Training</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">
              <li>• Python Automation & Scripting</li>
              <li>• API Development & Integration</li>
              <li>• Webhook Architecture & Design</li>
              <li>• OAuth & Authentication Flows</li>
            </ul>
            <ul className="space-y-2 text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">
              <li>• AI & Machine Learning Integration</li>
              <li>• Data Transformation & ETL</li>
              <li>• Business Process Analysis</li>
              <li>• RPA Tools & Methodologies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}