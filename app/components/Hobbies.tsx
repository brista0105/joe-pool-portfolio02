export default function Hobbies() {
  const hobbies = [
    { title: "AI Research", description: "Exploring new AI tools and integration possibilities" },
    { title: "Automation Trends", description: "Staying current with emerging automation platforms" },
    { title: "Process Optimization", description: "Finding efficiency improvements in daily workflows" },
    { title: "Tech Communities", description: "Active in automation and AI professional groups" },
    { title: "Continuous Learning", description: "Always exploring new tools and methodologies" }
  ];

  return (
    <section id="interests" className="section bg-vercel-gray-50 dark:bg-vercel-gray-950 transition-colors duration-200">
      <div className="container">
        <h2 className="section-title">Professional Interests</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby) => (
            <div key={hobby.title} className="card">
              <h3 className="font-medium mb-2 text-gray-900 dark:text-vercel-white transition-colors duration-200">{hobby.title}</h3>
              <p className="text-sm text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">{hobby.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-vercel-gray-400 max-w-2xl mx-auto transition-colors duration-200">
            My passion for automation extends beyond client work. I&apos;m constantly exploring new tools, 
            methodologies, and AI integrations to deliver cutting-edge solutions to my clients.
          </p>
        </div>
      </div>
    </section>
  );
}