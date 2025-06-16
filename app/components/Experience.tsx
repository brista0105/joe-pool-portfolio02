import Image from 'next/image';

export default function Experience() {
  const experiences = [
    {
      title: "Automation & AI Expert",
      company: "Freelance/Upwork",
      period: "2020 – Present",
      location: "Remote Contract Position",
      description: "Building automation solutions for businesses worldwide using Make.com, N8N, Power Automate, and custom scripting. Specializing in workflow optimization, API integrations, and AI-powered automation systems.",
      technologies: ["Make.com", "N8N", "Power Automate", "Python", "API Integration", "GoHighLevel", "Zapier", "Beautiful Soup"],
      projects: [
        {
          name: "E-commerce Order Automation Pipeline",
          description: "Built a comprehensive automation system using Make.com to process WooCommerce orders, update inventory, send customer notifications, and sync with accounting software.",
          achievements: ["Processed 10,000+ orders automatically", "Reduced manual work by 95%", "Zero order processing errors"],
          image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "CRM Lead Nurturing Automation",
          description: "Created intelligent lead nurturing workflows using GoHighLevel and Power Automate with AI-powered lead scoring and personalized email sequences.",
          achievements: ["Increased conversion rates by 40%", "Automated 500+ leads monthly", "Reduced sales cycle by 30%"],
          image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Multi-Platform Data Synchronization",
          description: "Developed N8N workflows to synchronize customer data across Google Workspace, Slack, CRM systems, and email marketing platforms with real-time updates.",
          achievements: ["Connected 8 different platforms", "Eliminated data silos", "Real-time sync with 99.9% uptime"],
          image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      testimonial: {
        text: "Joe's automation expertise transformed our business operations. His Make.com workflows saved us 40 hours per week and eliminated human errors completely.",
        author: "Sarah Mitchell",
        role: "Operations Director, E-commerce Company"
      }
    },
    {
      title: "Process Automation Consultant",
      company: "Various Clients",
      period: "2019 - 2023",
      location: "Remote Contract Position",
      description: "Consulted for small to medium businesses on automation strategy and implementation. Built custom workflows using Power Automate, Zapier, and Python scripting for various industries.",
      technologies: ["Power Automate", "Zapier", "Python", "Beautiful Soup", "Google Apps Script", "Webhook Development"],
      projects: [
        {
          name: "HR Onboarding Automation",
          description: "Built a complete employee onboarding automation using Power Automate that handles document collection, account creation, and training scheduling.",
          achievements: ["Reduced onboarding time from 2 weeks to 2 days", "100% compliance tracking", "Automated 200+ new hires"],
          image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Social Media Content Automation",
          description: "Created Python scripts with Beautiful Soup for content scraping and automated social media posting across multiple platforms with AI-generated captions.",
          achievements: ["Automated 50+ posts weekly", "Increased engagement by 60%", "Saved 20 hours per week"],
          image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Financial Reporting Automation",
          description: "Built Zapier workflows to automatically collect financial data from multiple sources, generate reports, and distribute them to stakeholders.",
          achievements: ["Automated monthly reporting", "Reduced errors by 90%", "Saved 15 hours monthly"],
          image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      testimonial: {
        text: "Joe's automation solutions revolutionized our workflow efficiency. His Power Automate implementations are robust, reliable, and perfectly tailored to our needs.",
        author: "Michael Chen",
        role: "CEO, Digital Marketing Agency"
      }
    },
    {
      title: "API Integration Specialist",
      company: "Tech Startups",
      period: "2018 - 2021",
      location: "Remote Contract Position",
      description: "Specialized in connecting disparate systems through API integrations and webhook development. Built custom connectors and data transformation pipelines for various SaaS platforms.",
      technologies: ["REST APIs", "Webhook Development", "OAuth Flows", "Node.js", "Python", "Custom Connectors"],
      projects: [
        {
          name: "SaaS Platform Integration Hub",
          description: "Built a centralized integration hub using N8N to connect CRM, email marketing, project management, and accounting platforms with real-time data sync.",
          achievements: ["Integrated 15+ SaaS platforms", "Real-time data synchronization", "Reduced manual data entry by 85%"],
          image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Customer Support Automation",
          description: "Developed intelligent customer support workflows using AI chatbots, ticket routing, and automated response systems with sentiment analysis.",
          achievements: ["Reduced response time by 70%", "Automated 60% of support tickets", "Improved customer satisfaction by 45%"],
          image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Marketing Attribution System",
          description: "Created complex attribution tracking using webhooks and API integrations to track customer journey across multiple touchpoints and platforms.",
          achievements: ["Tracked 100,000+ customer interactions", "Improved ROI tracking accuracy", "Automated attribution reporting"],
          image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      testimonial: {
        text: "Joe's API integration expertise is unmatched. He seamlessly connected our entire tech stack, creating a unified system that works flawlessly.",
        author: "Jennifer Rodriguez",
        role: "CTO, SaaS Startup"
      }
    },
    {
      title: "Automation Consultant",
      company: "Small Business Clients",
      period: "2015 - 2019",
      location: "Remote & On-site",
      description: "Helped small businesses identify automation opportunities and implement solutions using various tools and custom scripts. Focused on ROI-driven automation strategies.",
      technologies: ["Excel VBA", "Google Apps Script", "IFTTT", "Basic Python", "Email Automation", "Data Processing"],
      projects: [
        {
          name: "Retail Inventory Automation",
          description: "Built automated inventory management system using Google Sheets, Apps Script, and email notifications for a retail chain with multiple locations.",
          achievements: ["Automated stock level monitoring", "Reduced stockouts by 50%", "Saved 25 hours weekly"],
          image: "https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Client Communication Automation",
          description: "Created automated client communication workflows using email templates, scheduling systems, and follow-up sequences for service-based businesses.",
          achievements: ["Automated 80% of client communications", "Improved response rates by 35%", "Reduced admin time by 60%"],
          image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Lead Generation Automation",
          description: "Developed lead generation and qualification systems using web scraping, email automation, and CRM integration for B2B companies.",
          achievements: ["Generated 500+ qualified leads monthly", "Automated lead scoring", "Increased conversion rates by 25%"],
          image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      testimonial: {
        text: "Joe's automation solutions transformed our small business operations. His practical approach and cost-effective solutions delivered immediate ROI.",
        author: "David Thompson",
        role: "Business Owner, Retail Chain"
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
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-vercel-white transition-colors duration-200">{exp.title}</h3>
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
          <h3 className="text-lg font-semibold text-gray-900 dark:text-vercel-white mb-4 transition-colors duration-200">Automation Impact Summary</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 dark:text-vercel-gray-300 mb-3 transition-colors duration-200">Workflow Optimization</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">
                <li>• Built 500+ automation workflows</li>
                <li>• Saved clients 10,000+ hours annually</li>
                <li>• Integrated 50+ different platforms</li>
                <li>• Achieved 99.9% automation uptime</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-vercel-gray-300 mb-3 transition-colors duration-200">Business Impact & ROI</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">
                <li>• Reduced manual work by up to 95%</li>
                <li>• Improved process efficiency by 70% average</li>
                <li>• Eliminated human errors in automated processes</li>
                <li>• Generated $2M+ in cost savings for clients</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-vercel-white mb-6 transition-colors duration-200">What Clients Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-vercel-white dark:bg-vercel-gray-900">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 dark:bg-vercel-gray-700 rounded-full flex items-center justify-center mr-4 transition-colors duration-200">
                  <span className="text-gray-600 dark:text-vercel-gray-400 font-semibold transition-colors duration-200">RM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-vercel-white transition-colors duration-200">Rachel Martinez</div>
                  <div className="text-sm text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">Operations Manager</div>
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-vercel-gray-400 italic transition-colors duration-200">
                &ldquo;Joe&apos;s automation expertise is remarkable. He transformed our chaotic manual processes into smooth, automated workflows that run flawlessly 24/7.&rdquo;
              </blockquote>
            </div>
            
            <div className="card bg-vercel-white dark:bg-vercel-gray-900">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 dark:bg-vercel-gray-700 rounded-full flex items-center justify-center mr-4 transition-colors duration-200">
                  <span className="text-gray-600 dark:text-vercel-gray-400 font-semibold transition-colors duration-200">TK</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-vercel-white transition-colors duration-200">Tom Kim</div>
                  <div className="text-sm text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">CEO, Tech Startup</div>
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-vercel-gray-400 italic transition-colors duration-200">
                &ldquo;Joe&apos;s Make.com and N8N implementations saved us $50K annually in operational costs. His automation solutions are game-changers for any business.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}