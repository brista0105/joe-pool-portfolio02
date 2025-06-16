import Image from 'next/image';

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "TEK Systems",
      period: "Nov 2022 – Present",
      location: "Remote Contract Position",
      description: "Developing and maintaining enterprise applications using ASP.NET MVC, C#, and SQL Server. Working with IBM DB2 databases and legacy systems integration.",
      technologies: ["ASP.NET MVC", "C#", "SQL Server", "IBM DB2", "T-SQL", "Visual Studio"],
      projects: [
        {
          name: "Enterprise Data Migration System",
          description: "Built a comprehensive data migration tool to transfer legacy data from IBM DB2 to SQL Server, processing over 2 million records with data validation and error handling.",
          achievements: ["Reduced migration time by 60%", "Zero data loss during migration", "Automated validation reporting"],
          image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Customer Management Portal",
          description: "Developed a web-based customer management system using ASP.NET MVC with role-based authentication and real-time reporting capabilities.",
          achievements: ["Improved customer data access by 40%", "Implemented secure user authentication", "Created automated report generation"],
          image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Legacy System Integration",
          description: "Integrated multiple legacy systems with modern web applications using custom APIs and data transformation services.",
          achievements: ["Connected 5 disparate systems", "Reduced manual data entry by 80%", "Improved data consistency across platforms"],
          image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      testimonial: {
        text: "Joe's expertise in legacy system integration saved us months of development time. His ability to bridge old and new technologies is exceptional.",
        author: "Sarah Mitchell",
        role: "Technical Lead, TEK Systems"
      }
    },
    {
      title: "Software Developer",
      company: "RMCI",
      period: "Mar 2023 - Jul 2024",
      location: "Remote Contract Position",
      description: "Developed modern web applications using .NET Core Razor pages in an Agile/SCRUM environment. Focused on responsive design and user experience optimization.",
      technologies: [".NET Core", "Razor Pages", "Agile", "SCRUM", "HTML", "CSS", "JavaScript"],
      projects: [
        {
          name: "Project Management Dashboard",
          description: "Created a comprehensive project tracking dashboard using .NET Core Razor Pages with real-time updates and interactive charts.",
          achievements: ["Increased project visibility by 90%", "Reduced status meeting time by 50%", "Implemented real-time notifications"],
          image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Employee Training Portal",
          description: "Built an online training platform with course management, progress tracking, and certification generation capabilities.",
          achievements: ["Streamlined training process for 500+ employees", "Automated certificate generation", "Integrated with HR systems"],
          image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Inventory Management System",
          description: "Developed a responsive inventory tracking system with barcode scanning integration and automated reorder alerts.",
          achievements: ["Reduced inventory discrepancies by 75%", "Automated reorder process", "Mobile-responsive design"],
          image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      testimonial: {
        text: "Joe delivered high-quality solutions consistently in our fast-paced Agile environment. His attention to user experience made a significant impact.",
        author: "Michael Chen",
        role: "Project Manager, RMCI"
      }
    },
    {
      title: "Integration Engineer",
      company: "APEX Systems",
      period: "Dec 2021 – Sep 2022",
      location: "Remote Contract Position",
      description: "Built modern web applications using React.js and Node.js. Implemented API integrations and worked in fast-paced Agile development cycles.",
      technologies: ["React.js", "Node.js", "JavaScript", "API Integration", "Agile", "Git"],
      projects: [
        {
          name: "Multi-Platform API Gateway",
          description: "Designed and implemented a centralized API gateway using Node.js to integrate multiple third-party services and internal systems.",
          achievements: ["Consolidated 12 different APIs", "Improved response time by 35%", "Implemented comprehensive error handling"],
          image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Real-time Analytics Dashboard",
          description: "Built a React-based analytics dashboard with live data visualization and customizable reporting features.",
          achievements: ["Real-time data processing", "Interactive data visualization", "Customizable report generation"],
          image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "E-commerce Integration Platform",
          description: "Developed integration solutions connecting e-commerce platforms with inventory and shipping systems using REST APIs.",
          achievements: ["Automated order processing", "Reduced manual errors by 90%", "Integrated with 5 major platforms"],
          image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      testimonial: {
        text: "Joe's API integration work was flawless. He transformed our complex system architecture into a streamlined, efficient platform.",
        author: "Jennifer Rodriguez",
        role: "Senior Developer, APEX Systems"
      }
    },
    {
      title: "Software Developer",
      company: "Various Companies",
      period: "2018 - 2021",
      location: "Multiple Remote Positions",
      description: "Extensive experience in software development, debugging, and web technologies. Worked on various projects involving database management, web development, and system integration.",
      technologies: ["C#", "ASP.NET", "SQL", "Visual Studio", "Web Development", "Database Management"],
      projects: [
        {
          name: "Financial Reporting System",
          description: "Developed a comprehensive financial reporting application using C# Windows Forms with SQL Server backend for automated report generation.",
          achievements: ["Automated monthly reporting process", "Reduced report generation time from days to hours", "Improved data accuracy"],
          image: "https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Document Management System",
          description: "Built a web-based document management system with version control, search capabilities, and user permissions using ASP.NET.",
          achievements: ["Organized 10,000+ documents", "Implemented full-text search", "Role-based access control"],
          image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Database Optimization Project",
          description: "Optimized legacy database systems by redesigning schemas, creating indexes, and implementing stored procedures for better performance.",
          achievements: ["Improved query performance by 70%", "Reduced database size by 30%", "Eliminated data redundancy"],
          image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      testimonial: {
        text: "Joe's database optimization work was outstanding. His systematic approach to performance improvement delivered exceptional results.",
        author: "David Thompson",
        role: "IT Director"
      }
    }
  ];

  return (
    <section id="experience" className="section bg-vercel-gray-50 dark:bg-vercel-gray-950 transition-colors duration-200">
      <div className="container">
        <h2 className="section-title">Employment History & Project Portfolio</h2>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-lg text-gray-700 dark:text-vercel-gray-400 font-medium transition-colors duration-200">{exp.company}</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-vercel-gray-500 mt-2 md:mt-0 md:text-right transition-colors duration-200">
                  <div className="font-medium">{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-vercel-gray-400 mb-6 leading-relaxed transition-colors duration-200">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {exp.projects && (
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-vercel-white mb-6 transition-colors duration-200">Featured Projects</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exp.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="bg-vercel-white dark:bg-vercel-gray-900 border border-gray-200 dark:border-vercel-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200">
                        <div className="aspect-video bg-gray-100 dark:bg-vercel-gray-800">
                          <Image 
                            src={project.image} 
                            alt={project.name}
                            width={400}
                            height={225}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h5 className="font-semibold text-gray-800 dark:text-vercel-white mb-2 transition-colors duration-200">{project.name}</h5>
                          <p className="text-gray-600 dark:text-vercel-gray-400 mb-3 text-sm leading-relaxed transition-colors duration-200">{project.description}</p>
                          <div className="space-y-1">
                            {project.achievements.map((achievement, achievementIndex) => (
                              <div key={achievementIndex} className="flex items-center text-xs text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">
                                <div className="w-1 h-1 bg-vercel-gray-600 dark:bg-vercel-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {exp.testimonial && (
                <div className="bg-vercel-gray-50 dark:bg-vercel-gray-900 border-l-4 border-vercel-gray-400 dark:border-vercel-gray-600 p-6 rounded-r-lg transition-colors duration-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <svg className="w-8 h-8 text-vercel-gray-500 dark:text-vercel-gray-400 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <blockquote className="text-gray-700 dark:text-vercel-gray-400 italic mb-3 transition-colors duration-200">
                        &ldquo;{exp.testimonial.text}&rdquo;
                      </blockquote>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900 dark:text-vercel-white transition-colors duration-200">{exp.testimonial.author}</div>
                        <div className="text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">{exp.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 card bg-vercel-gray-50 dark:bg-vercel-gray-900 border-gray-200 dark:border-vercel-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-vercel-white mb-4 transition-colors duration-200">Technical Accomplishments Summary</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 dark:text-vercel-gray-300 mb-3 transition-colors duration-200">Database & Performance</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">
                <li>• Migrated 2M+ records with zero data loss</li>
                <li>• Improved query performance by up to 70%</li>
                <li>• Integrated 5+ disparate legacy systems</li>
                <li>• Reduced database size by 30% through optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-vercel-gray-300 mb-3 transition-colors duration-200">Process Automation & Efficiency</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">
                <li>• Reduced manual data entry by 80%</li>
                <li>• Automated reporting processes saving days of work</li>
                <li>• Decreased inventory discrepancies by 75%</li>
                <li>• Improved customer response time by 50%</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-vercel-white mb-6 transition-colors duration-200">What Colleagues Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-vercel-white dark:bg-vercel-gray-900">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 dark:bg-vercel-gray-700 rounded-full flex items-center justify-center mr-4 transition-colors duration-200">
                  <span className="text-gray-600 dark:text-vercel-gray-400 font-semibold transition-colors duration-200">AM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-vercel-white transition-colors duration-200">Alex Martinez</div>
                  <div className="text-sm text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">Senior Systems Architect</div>
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-vercel-gray-400 italic transition-colors duration-200">
                &ldquo;Joe&apos;s ability to understand complex business requirements and translate them into efficient technical solutions is remarkable. His code is clean, well-documented, and maintainable.&rdquo;
              </blockquote>
            </div>
            
            <div className="card bg-vercel-white dark:bg-vercel-gray-900">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 dark:bg-vercel-gray-700 rounded-full flex items-center justify-center mr-4 transition-colors duration-200">
                  <span className="text-gray-600 dark:text-vercel-gray-400 font-semibold transition-colors duration-200">LW</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-vercel-white transition-colors duration-200">Lisa Wang</div>
                  <div className="text-sm text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">Product Manager</div>
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-vercel-gray-400 italic transition-colors duration-200">
                &ldquo;Working with Joe has been exceptional. He consistently delivers high-quality solutions on time and is always willing to go the extra mile to ensure project success.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}