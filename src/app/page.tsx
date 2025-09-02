import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center py-4">
            <div className="flex space-x-8">
              <a
                href="#about"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Profile Picture and Name */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQHLiN4ajSRCqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719782507632?e=2147483647&v=beta&t=Nrx5iAlbdkW6G5TPvSeU638QwzSAZCP6o0M8vNTaphc"
                alt="Erin Fitzpatric"
                width={160}
                height={160}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-slate-700 shadow-xl"
              />
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  Erin Fitzpatric
                </h2>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
                  Senior Software Engineer
                </p>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Full Stack
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Building innovative web applications with modern technologies.
              Passionate about creating scalable, user-focused solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#projects"
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto space-y-4">
              <p>
                I&apos;m a Senior Software Engineer passionate about building
                scalable, user-centric web applications. My expertise spans
                full-stack development with modern JavaScript frameworks, cloud
                technologies, and efficient architectures that drive both
                business growth and great user experiences.
              </p>
              <p>
                I bring experience from fast-paced startups like Abre in ed tech
                and Pantomath in data observability, along with enterprise-scale
                perspective from my time at Travelers, a Fortune 500 company. My
                background also includes a prior career as a high school band
                director, where I honed mentorship and leadership skills that
                now help me guide teams effectively and foster collaborative,
                high-performing development environments.
              </p>
              <p>
                Outside of engineering, you will usually find me playing jazz
                trumpet or unwinding with video games.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Experience Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Years of Experience */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">5+</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Years Experience
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Building scalable web applications
              </p>
            </div>

            {/* Current Role */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Senior Engineer
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Full-stack development leader
              </p>
            </div>

            {/* Specialization */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Modern Stack
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, AWS,
                Vercel, GitHub Copilot
              </p>
              <div className="flex flex-wrap gap-2 justify-center text-sm">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                  Frontend
                </span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
                  Backend
                </span>
                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded">
                  Cloud
                </span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">
                  AI Tools
                </span>
              </div>
            </div>
          </div>

          {/* Resume Download */}
          <div className="text-center">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Want to know more about my professional journey?
            </p>
            <a
              href="/Erin_Fitzpatric_Resume.pdf"
              download
              className="inline-flex items-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download My Resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Recipe App Project */}
            <div className="bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Recipe Management App
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  A full-stack web application for managing and organizing
                  recipes with user authentication and dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                    React
                  </span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-sm">
                    Database
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://recipe.erinfitzpatric.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    View Live Demo →
                  </a>
                  <a
                    href="https://github.com/erin-fitzpatric/next-my-home-recipe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300"
                    title="View on GitHub"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
                <div className="mt-4">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/CZDh8CLZTDM"
                    title="Recipe App Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* AOM.gg Project */}
            <div className="bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  AOM.gg
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Age of Empires community platform featuring leaderboards,
                  player statistics, and match tracking for competitive players.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-sm">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">
                    Gaming API
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://www.aom.gg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    View Live Site →
                  </a>
                  <a
                    href="https://github.com/erin-fitzpatric/next-aom-gg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300"
                    title="View on GitHub"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and
              collaborations. Let&apos;s connect and discuss how we can work
              together.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="mailto:efitzpatric@gmail.com"
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/efitzpatric/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/erin-fitzpatric"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Erin Fitzpatric. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
