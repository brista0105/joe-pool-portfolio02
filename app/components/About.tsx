import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section bg-vercel-gray-50 dark:bg-vercel-gray-950 transition-colors duration-200">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 md:order-2">
            <p className="text-gray-600 dark:text-vercel-gray-400 leading-relaxed transition-colors duration-200">
              I&apos;m an Automation & AI Expert with over 10 years of experience helping businesses streamline operations, 
              reduce manual workload, and build scalable workflows. I specialize in low-code and code-based automation platforms.
            </p>
            <p className="text-gray-600 dark:text-vercel-gray-400 leading-relaxed transition-colors duration-200">
              I&apos;ve built hundreds of automations that integrate platforms like Google Workspace, WooCommerce, Slack, CRMs, 
              email marketing tools, and proprietary databases using Make.com, N8N, Power Automate, and custom solutions.
            </p>
            <p className="text-gray-600 dark:text-vercel-gray-400 leading-relaxed transition-colors duration-200">
              My work includes building logic-heavy workflows, webhooks, data transformation pipelines, scheduled jobs, 
              custom connectors, and real-time notification systems that save businesses thousands of hours annually.
            </p>
          </div>
          <div className="md:order-1">
            <div className="mb-6">
              <div className="w-48 h-48 mx-auto md:mx-0 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/Joe-Pool.jpg" 
                  alt="Joe Pool - Professional Photo"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-vercel-white transition-colors duration-200">Automation Expertise</h3>
              <ul className="space-y-2 text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">
                <li>• 10+ Years Automation Experience</li>
                <li>• 500+ Workflows Built</li>
                <li>• Multi-Platform Integration Expert</li>
                <li>• $70/hr Professional Rate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}