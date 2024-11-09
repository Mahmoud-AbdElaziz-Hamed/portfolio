import Link from "next/link";
import Image from "next/image";
import ScrollIndicator from "./ScrollIndecator";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl text-gray-600 md:text-6xl font-bold mb-4">
              Hi, I&apos;m Mahmoud Abd Elaziz
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Software Engineer specializing in web development
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Contact Me
              </Link>
              <Link
                href="/projects"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Add your profile image here */}
            <div className="relative w-full aspect-square rounded-full overflow-hidden">
              <Image
                src="/profile.jpeg" // Add your profile image to public folder
                alt="Mahmoud Abd Elaziz"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
}
