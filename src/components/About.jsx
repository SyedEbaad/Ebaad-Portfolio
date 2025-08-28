import React from "react";

export default function About() {
  return (
    <div>
      <div className="min-w-screen pt-10">
        <div className="lg:flex-row flex flex-col-reverse justify-end items-center max-w-7xl mx-auto px-8 h-96 lg:justify-around h-auto mt-10">
          <div className="pt-4 max-w md:w-1/2">
            <h1 className="text-center text-5xl font-bold bg-gradient-to-r from-[#43cea2] to-[#185a9d] bg-clip-text text-transparent leading-[1.5]">
              Hi, I'm Ebaad Syed
            </h1>
            <p className="text-center text-xl text-gray-600 mx-auto leading-relaxed pt-4">
              I am a Fresher in Frontend Development . I have recently completed
              my graduation in the stream of Computer Science. I can apply my
              Programming Skills, Problem-solving abilities, and Passion for
              technology to contribute effectively to innovative projects and
              advance in the field of software development
            </p>
          </div>
          <div className="relative flex justify-center w-96">
            <div className=" absolute inset-0 bg-gradient-to-r from-[#43cea2] to-[#185a9d] rounded-full blur-lg opacity-20"></div>
            <img
              src="ebaad profile.png"
              alt="Profile"
              className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-4 border-4 border-white w-48 h-48 text-center"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="bg-white p-8 rounded shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Professional Journey
          </h2>
          <div className="space-y-6 text-left max-w-4xl mx-auto">
            <p className="text-lg text-gray-600">
              As a recent Computer Science graduate, my academic journey has
              been driven by a strong passion for solving real-world problems
              through technology. Throughout my coursework and projects, I
              developed a solid foundation in programming, data structures,
              algorithms, web development, and databases.
            </p>
            <p className="text-lg text-gray-600">
              While I may be new to the professional world, I’ve consistently
              sought out opportunities to build practical skills — from
              developing personal projects and participating in coding
              competitions, to contributing to open-source communities and
              collaborating on team assignments that simulated real-world
              software development workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
