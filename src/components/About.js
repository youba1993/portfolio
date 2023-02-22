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
                    A dedicated full stack web developer and software engineer based in Sacramento, CA. 
                    I hold a degree in mathematics and computer science, and recently completed a rigorous coding bootcamp where I gained hands-on experience with cutting-edge technologies such as Ruby on Rails and React.
                    I'm passionate about building great websites and apps that deliver real value to users. Whether I'm working on the front end or the back end, I always strive to create efficient, reliable, and user-friendly software. I love to stay up-to-date with the latest trends and best practices in the industry, 
                    and I'm constantly learning new skills and exploring new technologies to stay ahead of the curve.
                    In addition to my technical expertise, I also bring strong communication, collaboration, and leadership skills to every project. Whether working with clients, colleagues, or stakeholders, I pride myself on my ability to listen, learn, and adapt to meet the needs of the team.
                    If you're looking for a talented and dedicated full stack web developer, I'd love to chat!
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

