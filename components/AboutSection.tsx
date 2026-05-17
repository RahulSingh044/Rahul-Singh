import Image from "next/image";
const AboutSection = () => {
  return (
    <div
      className="h-screen w-full px-96 py-18 overflow-hidden select-none"
      id="about-me"
    >
      <div className="h-full flex items-end justify-between py-4">
        {/* left Text */}
        <div className="flex flex-col w-5/12 justify-between h-8/12">
          <h1 className="font-extrabold text-7xl">Hey!</h1>
          <p className="text-xl w-10/12 font-bold">
            I’m Rahul Chouhan, focused on building intelligent systems for the
            next generation of work.
          </p>
        </div>
        {/* Center Image*/}
        <div className="flex flex-col h-full w-1/2 justify-end items-center">
          <div className="relative w-40 h-48 md:w-9/12 md:h-7/12 overflow-hidden rounded-2xl shadow-2xl">
            <Image src="/pfp.jpg" alt="Profile" fill className="object-cover" />
          </div>
        </div>
        {/* Right Text*/}
        <div className="flex flex-col gap-10 w-5/12">
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
