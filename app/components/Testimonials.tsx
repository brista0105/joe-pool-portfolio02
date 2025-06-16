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
      text: "Joe's expertise in legacy system integration saved us months of development time. His ability to bridge old and new technologies is exceptional.",
      author: "Sarah Mitchell",
      role: "Technical Lead, TEK Systems",
      company: "TEK Systems",
      rating: 5
    },
    {
      text: "Joe delivered high-quality solutions consistently in our fast-paced Agile environment. His attention to user experience made a significant impact.",
      author: "Michael Chen",
      role: "Project Manager, RMCI",
      company: "RMCI",
      rating: 5
    },
    {
      text: "Joe's API integration work was flawless. He transformed our complex system architecture into a streamlined, efficient platform.",
      author: "Jennifer Rodriguez",
      role: "Senior Developer, APEX Systems",
      company: "APEX Systems",
      rating: 5
    },
    {
      text: "Joe's database optimization work was outstanding. His systematic approach to performance improvement delivered exceptional results.",
      author: "David Thompson",
      role: "IT Director",
      company: "Enterprise Solutions",
      rating: 5
    },
    {
      text: "Joe's ability to understand complex business requirements and translate them into efficient technical solutions is remarkable. His code is clean, well-documented, and maintainable.",
      author: "Alex Martinez",
      role: "Senior Systems Architect",
      company: "Tech Innovations",
      rating: 5
    },
    {
      text: "Working with Joe has been exceptional. He consistently delivers high-quality solutions on time and is always willing to go the extra mile to ensure project success.",
      author: "Lisa Wang",
      role: "Product Manager",
      company: "Digital Solutions Inc",
      rating: 5
    },
    {
      text: "Joe's expertise in C# and .NET development is impressive. He solved complex problems that had been troubling our team for weeks in just a few days.",
      author: "Robert Johnson",
      role: "Lead Developer",
      company: "Software Dynamics",
      rating: 5
    },
    {
      text: "The migration project Joe handled was flawless. Zero downtime, zero data loss, and completed ahead of schedule. Truly professional work.",
      author: "Amanda Foster",
      role: "Operations Manager",
      company: "DataFlow Systems",
      rating: 5
    },
    {
      text: "Joe's React and Node.js skills are top-notch. The dashboard he built for us has become an essential tool for our daily operations.",
      author: "Kevin Park",
      role: "CTO",
      company: "StartupTech",
      rating: 5
    },
    {
      text: "His military background really shows in his work ethic and attention to detail. Joe approaches every project with discipline and precision.",
      author: "Maria Gonzalez",
      role: "HR Director",
      company: "Corporate Solutions",
      rating: 5
    },
    {
      text: "Joe's ability to work with legacy systems while implementing modern solutions is exactly what we needed. He bridged a 20-year technology gap seamlessly.",
      author: "Thomas Anderson",
      role: "Systems Administrator",
      company: "Legacy Corp",
      rating: 5
    },
    {
      text: "The training portal Joe developed has revolutionized our employee onboarding process. The feedback from our team has been overwhelmingly positive.",
      author: "Rachel Green",
      role: "Training Coordinator",
      company: "Learning Solutions",
      rating: 5
    },
    {
      text: "Joe's problem-solving skills are exceptional. He identified and fixed performance issues that had been plaguing our system for months.",
      author: "Daniel Kim",
      role: "Senior Software Engineer",
      company: "Performance Systems",
      rating: 5
    },
    {
      text: "Working in an Agile environment with Joe was seamless. He adapted quickly to our processes and contributed valuable insights to improve our workflow.",
      author: "Sophie Turner",
      role: "Scrum Master",
      company: "Agile Innovations",
      rating: 5
    },
    {
      text: "The inventory management system Joe built has reduced our operational costs significantly. His understanding of business processes is remarkable.",
      author: "Mark Williams",
      role: "Operations Director",
      company: "Supply Chain Solutions",
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