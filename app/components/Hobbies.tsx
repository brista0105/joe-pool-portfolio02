export default function Hobbies() {
  const hobbies = [
    { title: "Fitness", description: "Maintaining physical health through regular exercise" },
    { title: "Motorcycles", description: "Passion for riding and mechanical understanding" },
    { title: "Tractors", description: "Interest in agricultural machinery and maintenance" },
    { title: "Outdoor Activities", description: "Hiking, camping, and nature activities" },
    { title: "Computers", description: "Continuous learning about new technologies" }
  ];

  return (
    <section className="section bg-vercel-gray-50 dark:bg-vercel-gray-950 transition-colors duration-200">
      <div className="container">
        <h2 className="section-title">Hobbies & Interests</h2>
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
            My diverse interests reflect a well-rounded approach to life, combining physical activity, 
            mechanical aptitude, and continuous learning that complement my professional skills.
          </p>
        </div>
      </div>
    </section>
  );
}