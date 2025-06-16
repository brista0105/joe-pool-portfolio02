'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Joe's Make.com automation workflows transformed our e-commerce operations. We went from 40 hours of manual work per week to complete automation with zero errors.",
      author: "Sarah Mitchell",
      role: "Operations Director, E-commerce Co",
      company: "E-commerce Solutions",
      rating: 5
    },
    {
      text: "The Power Automate solutions Joe built for our HR department are incredible. Employee onboarding that used to take 2 weeks now happens in 2 days, completely automated.",
      author: "Michael Chen",
      role: "HR Director, Tech Corp",
      company: "TechCorp Industries",
      rating: 5
    },
    {
      text: "Joe's N8N integrations connected all our business tools seamlessly. Our CRM, email marketing, and project management systems now work as one unified platform.",
      author: "Jennifer Rodriguez",
      role: "CTO, Digital Agency",
      company: "Digital Innovations",
      rating: 5
    },
    {
      text: "The GoHighLevel automation Joe set up for our sales team increased our conversion rates by 40%. His lead nurturing workflows are pure genius.",
      author: "David Thompson",
      role: "Sales Director, SaaS Company",
      company: "SaaS Innovations",
      rating: 5
    },
    {
      text: "Joe's Python scripting and Beautiful Soup automation saved us 30 hours per week on data collection and social media management. ROI was immediate.",
      author: "Alex Martinez",
      role: "Marketing Manager, Startup",
      company: "Growth Startup",
      rating: 5
    },
    {
      text: "The automation workflows Joe built using Zapier and custom APIs eliminated 90% of our manual data entry. Our team can now focus on strategic work instead of repetitive tasks.",
      author: "Lisa Wang",
      role: "Operations Manager, Consulting Firm",
      company: "Business Consulting Group",
      rating: 5
    },
    {
      text: "Joe's webhook development and API integration expertise is unmatched. He connected our entire tech stack flawlessly, creating real-time data synchronization across 10+ platforms.",
      author: "Robert Johnson",
      role: "Technical Director, Enterprise",
      company: "Enterprise Solutions",
      rating: 5
    },
    {
      text: "Joe's automation solutions for our customer support reduced response times by 70% and automated 60% of our tickets. Customer satisfaction scores improved dramatically.",
      author: "Amanda Foster",
      role: "Customer Success Director",
      company: "Support Solutions Inc",
      rating: 5
    },
    {
      text: "The financial reporting automation Joe created using multiple API integrations saves us 20 hours monthly and eliminated all manual errors in our reports.",
      author: "Kevin Park",
      role: "CFO, Manufacturing Co",
      company: "Manufacturing Solutions",
      rating: 5
    },
    {
      text: "Joe's inventory automation using Google Sheets and Apps Script transformed our retail operations. We reduced stockouts by 50% and saved 25 hours weekly.",
      author: "Maria Gonzalez",
      role: "Store Manager, Retail Chain",
      company: "Retail Dynamics",
      rating: 5
    },
    {
      text: "The lead generation automation Joe built using web scraping and CRM integration generates 500+ qualified leads monthly. Our sales pipeline has never been stronger.",
      author: "Thomas Anderson",
      role: "VP Sales, B2B Company",
      company: "B2B Solutions",
      rating: 5
    },
    {
      text: "Joe's email marketing automation and customer journey mapping increased our conversion rates by 35%. His understanding of automation psychology is impressive.",
      author: "Rachel Green",
      role: "Marketing Director, E-commerce",
      company: "Online Retail Co",
      rating: 5
    },
    {
      text: "The multi-platform integration Joe created using N8N connects our entire business ecosystem. Real-time data sync across 15+ tools with 99.9% uptime.",
      author: "Daniel Kim",
      role: "IT Manager, Tech Company",
      company: "Tech Innovations",
      rating: 5
    },
    {
      text: "Joe's process automation consulting transformed our entire business model. His strategic approach to automation delivered $200K in annual savings.",
      author: "Sophie Turner",
      role: "COO, Service Company",
      company: "Professional Services",
      rating: 5
    },
    {
      text: "Joe's AI-powered automation workflows using OpenAI API integration revolutionized our content creation process. We now produce 10x more content with better quality.",
      author: "Mark Williams",
      role: "Content Director, Media Co",
      company: "Digital Media Group",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-vercel-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="section bg-vercel-gray-50 dark:bg-vercel-gray-950 transition-colors duration-200">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="text-gray-600 dark:text-vercel-gray-400 max-w-2xl mx-auto transition-colors duration-200">
            Here&apos;s what colleagues and clients have to say about working with me
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="card bg-vercel-white dark:bg-vercel-gray-900 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 dark:bg-vercel-gray-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-colors duration-200">
                      <span className="text-gray-600 dark:text-vercel-gray-400 font-semibold text-sm transition-colors duration-200">
                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-vercel-white text-sm transition-colors duration-200">{testimonial.author}</div>
                      <div className="text-xs text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">{testimonial.role}</div>
                      <div className="text-xs text-gray-500 dark:text-vercel-gray-500 transition-colors duration-200">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <blockquote className="text-gray-700 dark:text-vercel-gray-400 text-sm leading-relaxed flex-1 italic transition-colors duration-200">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-vercel-white dark:bg-vercel-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-vercel-gray-700 transition-colors duration-200">
            <svg className="w-5 h-5 text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-vercel-white dark:bg-vercel-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-vercel-gray-700 transition-colors duration-200">
            <svg className="w-5 h-5 text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="card bg-vercel-white dark:bg-vercel-gray-900">
            <div className="text-2xl font-bold text-gray-900 dark:text-vercel-white mb-1 transition-colors duration-200">15+</div>
            <div className="text-sm text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">Happy Clients</div>
          </div>
          <div className="card bg-vercel-white dark:bg-vercel-gray-900">
            <div className="text-2xl font-bold text-gray-900 dark:text-vercel-white mb-1 transition-colors duration-200">50+</div>
            <div className="text-sm text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">Projects Completed</div>
          </div>
          <div className="card bg-vercel-white dark:bg-vercel-gray-900">
            <div className="text-2xl font-bold text-gray-900 dark:text-vercel-white mb-1 transition-colors duration-200">5.0</div>
            <div className="text-sm text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">Average Rating</div>
          </div>
          <div className="card bg-vercel-white dark:bg-vercel-gray-900">
            <div className="text-2xl font-bold text-gray-900 dark:text-vercel-white mb-1 transition-colors duration-200">100%</div>
            <div className="text-sm text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}