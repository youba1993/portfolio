import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Youba
                        <br className="hidden lg:inline-block" /> I'm passionate about building great websites and apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm a full stack web developer and software engineer based in Sacramento,CA.
                        I have a degree in mathematics and computer science, just arrived in the USA I applied for a coding bootcamp where I developed my skills by adding Ruby on rails,  React and more that we can find <a href="#skills">here</a>.
                        I love to learn new technologies and flex my creativity to create amazing things.
                    </p>
                    <div className="flex justify-center">
                        <a  href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="Youba IDJIS"
                        src="https://ik.imagekit.io/nvnw6o7ew/youba__L_7yBDW4m.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667501773862"
                    />
                </div>
            </div>
        </section>
    )
}