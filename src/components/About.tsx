export default function About() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "Angular",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs"],
    },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    {
      category: "Tools",
      items: ["Git"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl text-black font-semibold mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-600 mb-6">
              Software Engineer with expertise in full-stack web development,
              specializing in building scalable applications using modern
              technologies. Experienced in developing and deploying web
              applications with a focus on clean code and best practices.
            </p>

            <h3 className="text-2xl text-black font-semibold mb-4">
              Education
            </h3>
            <div className="mb-4">
              <h4 className="font-medium text-black">
                Full Stack Web Development Using MEARN
              </h4>
              <p className="text-gray-600">
                4-Months Intensive Diploma Information Technology Institute
                (ITI)
              </p>
              <p className="text-gray-500">April 2023 – July 2023</p>
            </div>
            <div className="mb-4">
              <h4 className="font-medium text-black">
                Software Development Fundamentals
              </h4>
              <p className="text-gray-600">
                4-Months Intensive Diploma Information Technology Institute
                (ITI)
              </p>
              <p className="text-gray-500">Dec 2022 – March 2023</p>
            </div>
            <div className="mb-4">
              <h4 className="font-medium text-black">
                Bachelor of Civil Engineering
              </h4>
              <p className="text-gray-600">Faculty of Engineering</p>
              <p className="text-gray-500">Dec 2022 – March 2023</p>
            </div>
          </div>
          {/* Close the first column */}
          <div>
            <h3 className="text-2xl text-black font-semibold mb-6">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="font-medium mb-2 text-black">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-gray-600">
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Close the second column */}
        </div>
        {/* Close the grid container */}
      </div>
    </section>
  );
}
