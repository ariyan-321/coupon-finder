import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function AboutDev() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function
      once: true, // Animation runs only once
    });
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8" data-aos="fade-up">
          <h1 className="text-5xl font-bold text-primary mb-4">About Me</h1>
          <div className="avatar" data-aos="zoom-in">
            <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="/images/ariyan.jpg" alt="" />
            </div>
          </div>
        </header>

        <section className="card bg-base-100 shadow-xl mb-6 p-6" data-aos="fade-up">
          <h2 className="card-title text-2xl font-semibold mb-2">Hi, I'm Ariyan!</h2>
          <p className="text-gray-600">
            I'm 17 years old and currently studying Year 9 at SOS Hermann Gmeiner College. I have a passion for coding
            and specialize in frontend development. I know HTML, CSS, JavaScript, Tailwind, React, and Firebase.
            Currently, I'm exploring backend development with Node.js and MongoDB.
          </p>
        </section>

        <section className="card bg-base-100 shadow-xl mb-6 p-6" data-aos="fade-up">
          <h2 className="card-title text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Firebase",
              "Node.js",
              "MongoDB",
              "Python",
            ].map((skill, index) => (
              <div
                key={index}
                className="badge badge-primary badge-lg p-4 font-medium"
                data-aos="flip-up" // Add animation to individual skill items
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="card bg-base-100 shadow-xl p-6" data-aos="fade-up">
          <h2 className="card-title text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Project 1", description: "Description of project 1" },
              { name: "Project 2", description: "Description of project 2" },
              { name: "Project 3", description: "Description of project 3" },
            ].map((project, index) => (
              <div
                key={index}
                className="card bg-gray-100 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                data-aos="zoom-in" // Animation for the project cards
              >
                <div className="card-body">
                  <h3 className="card-title text-xl font-semibold text-gray-700">
                    {project.name}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutDev;
