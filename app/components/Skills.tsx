export default function Skills() {
  const skills = {
    strong: ['Make.com (Integromat)', 'Microsoft Power Automate', 'N8N', 'Python Scripting', 'API Integration', 'Webhook Development', 'GoHighLevel', 'Zapier'],
    medium: ['Beautiful Soup', 'Node.js', 'REST APIs', 'OAuth Flows', 'Data Transformation', 'Google Workspace APIs', 'WooCommerce Integration', 'Slack APIs'],
    exposure: ['OpenAI API', 'Machine Learning', 'RPA Tools', 'Custom Connectors', 'Database Automation', 'Email Marketing APIs']
  };

  return (
    <section id="skills" className="section bg-vercel-white dark:bg-vercel-black transition-colors duration-200">
      <div className="container">
        <h2 className="section-title">Automation & AI Technologies</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-vercel-white transition-colors duration-200">Core Automation Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {skills.strong.map((skill) => (
                <span key={skill} className="badge bg-vercel-black dark:bg-vercel-white text-vercel-white dark:text-vercel-black transition-colors duration-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-vercel-white transition-colors duration-200">Integration & Scripting</h3>
            <div className="flex flex-wrap gap-2">
              {skills.medium.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-vercel-white transition-colors duration-200">AI & Advanced Automation</h3>
            <div className="flex flex-wrap gap-2">
              {skills.exposure.map((skill) => (
                <span key={skill} className="badge border border-gray-300 dark:border-vercel-gray-700 bg-transparent">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}