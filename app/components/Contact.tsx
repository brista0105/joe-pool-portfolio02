export default function Contact() {
  return (
    <section id="contact" className="section bg-vercel-white dark:bg-vercel-black transition-colors duration-200">
      <div className="container">
        <h2 className="section-title">Ready to Automate Your Business?</h2>
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-vercel-white transition-colors duration-200">Start Your Automation Journey</h3>
            <p className="text-gray-600 dark:text-vercel-gray-400 mb-6 leading-relaxed transition-colors duration-200">
              Ready to eliminate manual work and scale your operations? I specialize in building 
              automation solutions that save time, reduce errors, and drive growth.<br />
              Let&apos;s discuss how automation can transform your business processes.
            </p>
            <div className="card bg-vercel-gray-50 dark:bg-vercel-gray-900 border-gray-200 dark:border-vercel-gray-800">
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-vercel-white transition-colors duration-200">Automation Services</h4>
              <ul className="space-y-2 text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">
                <li>• Workflow Automation (Make.com, N8N, Power Automate)</li>
                <li>• API Integration & Custom Connector Development</li>
                <li>• Business Process Optimization & AI Integration</li>
                <li>• Data Pipeline & ETL Automation</li>
                <li>• $70/hr - Available for Projects of All Sizes</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-vercel-gray-700">
                <p className="text-sm text-gray-500 dark:text-vercel-gray-500 transition-colors duration-200">
                  <strong>Free Consultation:</strong> 30-minute discovery call to identify automation opportunities in your business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}