export default function Skills() {
  const skills = {
    strong: ['Visual Studio', 'SQL Server Management Studio', 'TFS', 'C#', 'SQL', 'T-SQL', 'ASP.NET', 'HTML'],
    medium: ['JavaScript', 'Visual Basic', 'Git', 'VS Code', 'MySQL', 'Microsoft Access'],
    exposure: ['Angular', 'Node.js', 'React', 'IBM DB2', 'AS400']
  };

  return (
    <section id="skills" className="section bg-vercel-white dark:bg-vercel-black transition-colors duration-200">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-vercel-white transition-colors duration-200">Strong Proficiency</h3>
            <div className="flex flex-wrap gap-2">
              {skills.strong.map((skill) => (
                <span key={skill} className="badge bg-vercel-black dark:bg-vercel-white text-vercel-white dark:text-vercel-black transition-colors duration-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-vercel-white transition-colors duration-200">Medium Proficiency</h3>
            <div className="flex flex-wrap gap-2">
              {skills.medium.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-vercel-white transition-colors duration-200">Exposure & Learning</h3>
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