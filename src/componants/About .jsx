import aimg from '../assets/about.png';

export default function About() {
  return (
    <section id='about' className="text-white py-20 px-4 bg">
      <h1 className="text-3xl font-bold text-center mb-10">About Me</h1>

      <div className="flex flex-col md:flex-row justify-center max-w-5xl mx-auto gap-6">

        <img
          className="ab-l hidden md:block md:h-96 rounded custom-shadow object-cover"
          src={aimg}
          alt="About Saravana"
        />

        <div className="ab-r text-sm md:text-base md:w-1/2 h-auto md:h-96 w-full border-l-4 border-l-blue-500 border-b-4 border-b-purple-500 p-6 text-justify bg-gray-800 rounded-r-lg shadow-lg">
          <p className="mb-4">
            Hi, I'm <strong>Saravana Kumar</strong>, a passionate Full-Stack Developer with a solid foundation in both front-end and back-end technologies.
          </p>
          <p className="mb-4">
            I specialize in building responsive, high-performance web applications that deliver seamless user experiences.
          </p>
          <p className="mb-4">
            I hold a Bachelor's degree in Computer Applications (BCA) and am currently pursuing an MSc in Computer Science.
          </p>
          <p>
            Whether it's crafting intuitive UIs with React or building robust APIs with Node.js, I love solving problems and bringing ideas to life through code.
          </p>
        </div>
      </div>
    </section>
  );
}
