import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section bg-vercel-gray-50 dark:bg-vercel-gray-950 transition-colors duration-200">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 md:order-2">
            <p className="text-gray-600 dark:text-vercel-gray-400 leading-relaxed transition-colors duration-200">
              I&apos;m a dedicated Senior Software Developer with a diverse background spanning both legacy and modern technologies. 
              My journey began with Visual Studio C# Windows Forms development and has evolved to encompass cutting-edge web technologies.
            </p>
            <p className="text-gray-600 dark:text-vercel-gray-400 leading-relaxed transition-colors duration-200">
              With extensive experience in ASP.NET Core, MVC architecture, and database management, I bring a unique perspective 
              that bridges traditional enterprise development with modern web solutions.
            </p>
            <p className="text-gray-600 dark:text-vercel-gray-400 leading-relaxed transition-colors duration-200">
              My military background in the United States Marine Corps instilled in me the discipline, attention to detail, 
              and problem-solving skills that I apply to every project I undertake.
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
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-vercel-white transition-colors duration-200">Quick Facts</h3>
              <ul className="space-y-2 text-gray-600 dark:text-vercel-gray-400 transition-colors duration-200">
                <li>• US Marine Corps Veteran</li>
                <li>• B.S. in Physics, UT Arlington</li>
                <li>• Full-Stack Development Experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}