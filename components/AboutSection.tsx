import Image from "next/image";
const AboutSection = () => {
  return (
    <div
      className="h-screen w-full px-4 sm:px-6 md:px-8 lg:px-96 py-18 overflow-hidden select-none md:px-96"
      id="about-me"
    >
      <div className="h-full flex flex-col lg:flex-row items-end justify-between py-4 gap-8">
        {/* left Text */}
        <div className="flex flex-col w-full lg:w-5/12 justify-between h-auto lg:h-8/12">
          <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl">
            Hey!
          </h1>
          <p className="text-xl w-[95%] lg:w-10/12 mt-20  font-bold">
            I’m Rahul Chouhan, focused on building intelligent systems for the
            next generation of work.
          </p>
        </div>
        {/* Center Image*/}
        <div className="hidden lg:flex flex-col h-auto lg:h-full w-full lg:w-1/2 justify-end items-center">
          <div className="relative w-40 h-48 sm:w-52 sm:h-64 md:w-9/12 md:h-7/12 overflow-hidden rounded-2xl shadow-2xl">
            <Image src="/pfp.jpg" alt="Profile" fill className="object-cover" />
          </div>
        </div>
        {/* Right Text*/}
        <div className="flex flex-col gap-10 w-full lg:w-5/12">
          <p className="text-lg tracking-tight">
            I’m a software engineer and product builder focused on creating
            intelligent, scalable, and user-centric digital experiences. I enjoy
            building systems that combine AI, productivity, and modern web
            technologies to solve real-world problems.
          </p>
          <p>
            Over the years, I’ve worked on products across productivity,
            automation, and modern web platforms, building fast, scalable, and
            thoughtfully designed experiences that help users work smarter and
            launch faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
