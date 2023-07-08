import "./App.css";
import Header from "./components/Header";
import idea from "./assets/idea.png";
import ktrack from "./assets/ktrack.png";
import research from "./assets/user-research.png";
import testing from "./assets/user-testing.png";
import prototyping from "./assets/product-prototyping.png";
import design from "./assets/visual-design.png";
import thought from "./assets/thought.png";
import skills from "./assets/skills.png";
import SkillAtrribute from "./components/SkillAtrribute";
import SectionTitle from "./components/SectionTitle";
import ProjectCard from "./components/ProjectCard";
import Testimonial from "./components/Testimonial";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import ContactMe from "./components/ContactMe";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-gray-500">
      <Header />
      <div className="w-full min-h-screen h-auto hero bg-contain bg-no-repeat">
        <div className="pl-56 pt-20 w-[55%] space-y-7">
          <h1 className="font-extralight text-6xl">
            Hi! <br />
            I am Joseph John <br />
            A Front-end Developer <br />
          </h1>
          <p className="text-xl">
            I am a passionate and creative front-end developer, dedicated to
            crafting exceptional user experiences through intuitive and visually
            captivating websites.I bring ideas to life and transform them into
            pixel-perfect realities.{" "}
          </p>
          <button className="px-16 py-4 rounded-full bg-blue-600 text-white">
            Hire Me!
          </button>
        </div>
      </div>
      <section className="w-full relative min-h-screen h-auto skills bg-contain bg-no-repeat flex justify-center">
        <img
          src={skills}
          alt=""
          className="absolute right-[55%] top-[-20%] w-full rotate-[50deg]"
        />
        <div className="flex flex-col w-1/2 relative left-56">
          <SectionTitle first="Important" second="attributes of my skills" />
          <div className="grid lg:grid-cols-2 gap-10">
            <SkillAtrribute
              img={research}
              title="User Research"
              iconBg="bg-red-100"
              description="Using qualitative and quantitative methods, I create intuitive digital experiences that meet user needs and business goals."
            />
            <SkillAtrribute
              img={testing}
              title="User Testing"
              iconBg="bg-blue-100"
              description="I gather insights through user interviews, usability tests, and feedback analysis to enhance the user experience and ensure product alignment with user expectations."
            />
            <SkillAtrribute
              img={design}
              title="Visual Design"
              iconBg="bg-yellow-100"
              description="I create visually pleasing interfaces that effectively communicate, integrating functionality with captivating visuals for enhanced user engagement."
            />
            <SkillAtrribute
              img={prototyping}
              title="Product Prototyping"
              iconBg="bg-green-100"
              description="I transform ideas into prototypes, iterating based on user feedback. By incorporating user insights, I create innovative, user-friendly products."
            />
          </div>
        </div>
      </section>
      <section className="w-full px-56 relative min-h-screen h-auto skills bg-contain bg-no-repeat flex justify-center">
        {/* <img
          src={bulb}
          alt=""
          className="w-[65%] absolute right-[70%] top-[27%] rotate-90 fill-blue-600"
        /> */}
        <svg
          className="absolute right-[60%] top-[42%] rotate-[0deg] fill-blue-600"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="750px"
          height="550px"
          viewBox="0 0 50 34.76"
          xml:space="preserve"
          stroke="#2563eb"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="0.06952"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M17.38,34.76c-9.583,0-17.379-7.796-17.379-17.38S7.797,0,17.38,0s17.379,7.796,17.379,17.38S26.963,34.76,17.38,34.76z M17.38,6.495c-6.002,0-10.885,4.882-10.885,10.885s4.883,10.885,10.885,10.885s10.885-4.882,10.885-10.885 S23.382,6.495,17.38,6.495z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <div className="flex flex-col w-full z-[1000]">
          <div className="relative left-36">
            <SectionTitle first="Checkout" second="my projects" />
          </div>
          <div className="w-11/12 space-y-28">
            <ProjectCard
              img={ktrack}
              title="Project Management System"
              link="https://property-management-joeydevs.netlify.app"
              description="A property management system developed with React and Tailwind CSS, providing efficient management of properties and financials through a modern and visually appealing interface."
            />
            <ProjectCard
              className="lg:relative left-44"
              img={ktrack}
              title="Project Management System"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam atque recusandae commodi soluta ipsa maiores ducimus necessitatibus. Sunt ipsum nobis"
            />
            <ProjectCard
              img={ktrack}
              title="Project Management System"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam atque recusandae commodi soluta ipsa maiores ducimus necessitatibus. Sunt ipsum nobis"
            />
          </div>
        </div>
      </section>
      <section className="overflow-hidden w-full px-56 pb-10 relative min-h-screen h-auto skills bg-contain bg-no-repeat flex justify-start">
        <img
          src={idea}
          alt=""
          className="w-[65%] absolute left-[55%] top-[58%] -rotate-12"
        />
        <img
          src={thought}
          alt=""
          className="w-[65%] absolute left-[50%] top-[-30px"
        />

        <div className="flex flex-col">
          <SectionTitle first="What" second="Peaple think about me" />
          <div className="1/2 flex gap-16">
            <Testimonial />
            <Testimonial />
          </div>
          <div className="w-2/3 self-center flex flex-col space-y-7 items-center my-16">
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold text-center mb-4">
                Have any idea or design, or an incomplete team that requires my
                expertise? Hire me and I will realize your ideas and designs
              </p>
              <div className="w-10 border-b-2 border-solid border-gray-600"></div>
            </div>

            <button
              onClick={() => {
                setOpen(!open);
              }}
              className="px-16 py-4 rounded-full bg-blue-600 text-white"
            >
              Contact Me!
            </button>
            <ContactMe open={open} setOpen={setOpen} />
          </div>
          <div className="flex flex-col space-y-5 text-2xl mb-8">
            <a
              href=""
              className="hover:text-blue-600 hover:-translate-y-2 w-fit flex items-center space-x-2 duration-300 ease-in-out"
            >
              <FaInstagram />
              <span className="text-sm">Follow me on Instagram</span>
            </a>
            <a
              href=""
              className="hover:text-blue-600 hover:-translate-y-2 w-fit flex items-center space-x-2 duration-300 ease-in-out"
            >
              <FaFacebook />
              <span className="text-sm">Follow me on Facebook</span>
            </a>
            <a
              href=""
              className="hover:text-blue-600 hover:-translate-y-2 w-fit flex items-center space-x-2 duration-300 ease-in-out"
            >
              <FaLinkedin />
              <span className="text-sm">Follow me on LinkedIn</span>
            </a>
          </div>
          <ul className="flex space-x-8 font-semibold text-lg">
            <li className="hover:text-blue-600 hover:-translate-y-2 duration-300 ease-in-out">
              <a href="">About</a>
            </li>
            <li className="hover:text-blue-600 hover:-translate-y-2 duration-300 ease-in-out">
              <a href="">Projects</a>
            </li>
            <li className="hover:text-blue-600 hover:-translate-y-2 duration-300 ease-in-out">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
