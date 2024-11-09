import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Messenger Web App",
      description:
        "A real-time messaging application built with React and Socket.io, featuring instant messaging, user authentication, and message history.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      imageUrl: "",
      githubUrl: "https://github.com/Mahmoud-AbdElaziz-Hamed/messenger-webapp",
      //   liveUrl: "https://messenger-webapp.vercel.app"
    },
    {
      title: "Electronix-Store",
      description:
        "A modern e-commerce platform designed with React and Tailwind CSS, offering a smooth shopping experience with real-time updates, secure payment integration, and comprehensive product filtering options. Users can browse products, manage their carts, and track orders seamlessly.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe API",
      ],
      imageUrl: "/Electronix-store.png",
      githubUrl: "https://github.com/eslamsobhy/ecommerce-front-end",
      liveUrl: "https://electronix-front-end.vercel.app/",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      {" "}
      {/* Added bg-gray-50 here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-black font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" // Added hover effect
            >
              <div className="relative h-48">
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl text-gray-800 font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    GitHub
                  </Link>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
