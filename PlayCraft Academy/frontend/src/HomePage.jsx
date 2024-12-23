import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./assets/home-image.png";
import Jane from "./assets/testimonials-images/jane.jpg";
import Chris from "./assets/testimonials-images/chris.jpg";
import Leslie from "./assets/testimonials-images/Leslie.jpg";
import Mike from "./assets/testimonials-images/mike.jpg";

const testimonials = [
  {
    id: 1,
    text: "PlayCraftAcademy courses have been a fantastic resource for me. I've learned so much from the cooking classes. I would recommend them to anyone interested in expanding their culinary skills. 🥘",
    author: "Jane Steiner",
    title: "Food Blogger",
    imageUrl: Jane,
  },
  {
    id: 2,
    text: "The music courses at PlayCraftAcademy have been a game-changer for me. The way they explain complex topics in a simple way is amazing. Thanks for the great content!",
    author: "Chris Ambrose",
    title: "Music Enthusiast",
    imageUrl: Chris,
  },
  {
    id: 3,
    text: "I've just completed a chess course and it has greatly improved my game. The instructors at PlayCraftAcademy are top-notch!",
    author: "Leslie Winn",
    title: "Chess Champion",
    imageUrl: Leslie,
  },
  {
    id: 4,
    text: "An invaluable resource for learning about music instruments.",
    author: "Mike Winn",
    title: "Music Teacher",
    imageUrl: Mike,
  },
];
const MainPage = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
          
          {/* Welcome Page */}
          <div className="flex flex-col justify-center items-center bg-style py-48 px-10"> 
            <div className="text-center">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-300/50 hover:ring-gray-300/70">
                  Announcing our list of our free resources.{" "}
                  <Link to="/blogs" className="font-semibold text-green-300">
                    <span aria-hidden="true" className="absolute inset-0 " />
                    Read Blogs. <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <h1 className="text-3xl text-gray-100 font-extrabold sm:text-6xl">
                Welcome to,
                <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  PlayCraft Academy{" "}
                </span>
                !
              </h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-200">
              We’re thrilled to unveil our very first FREE resource <br/>
              "Unlocking Your Creative Potential: A Beginner's Guide to Chess, Cooking, Music, and Drawing!"
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full rounded-full border text-white hover:text-black border-green-300  px-12 py-3 text-sm font-medium hover:bg-green-300 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="/blogs"
                >
                  Read Blogs
                </Link>

                <Link
                  className="block w-full rounded-full border border-green-300 px-12 py-3 text-sm font-medium text-white hover:text-black hover:bg-green-300 focus:outline-none focus:ring sm:w-auto"
                  href="/courses"
                >
                  Buy Courses
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center rounded-xl shadow-md shadow-green-300 max-w-5xl mx-auto mt-24">
              <Link to="/Courses">
                <img
                  src={backgroundImage}
                  alt=""
                  className="h-auto max-w-full rounded-xl"
                />
              </Link>
            </div>
          </div>

          {/* What is PlayCraftAcademy */}

          <div className="my-24 max-w-5xl mx-auto px-10">
            <div className="mx-auto py-12">
              <div className="text-center">
                <div className="text-sm font-bold tracking-wider text-green-300 uppercase">
                  Get to know us
                </div>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-6xl py-4">
                  What is{" "}
                  <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    PlayCraft Academy{" "}
                  </span>
                  ?
                </p>
                <p className="mt-4 max-w-2xl text-lg text-gray-200 lg:mx-auto">
                PlayCraftAcademy is your gateway to unlocking your creative potential through engaging courses in chess, cooking, music, and drawing. Join us to explore, learn, and excel in the arts!
                </p>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative bg-[#001313] shadow-sm shadow-green-300 md:px-8 rounded-2xl md:py-8 hover:shadow-green-300 transform transition-transform duration-300 hover:scale-105 p-4 text-xl">
                    1. PlayCraftAcademy is a platform for learning 
                  </div>

                  <div className="relative bg-[#001313] shadow-sm shadow-green-300 md:px-8 rounded-2xl md:py-8 hover:shadow-green-300 transform transition-transform duration-300 hover:scale-105 p-4 text-xl">
                    2. Our courses are designed to help you learn new skills and
                    advance your career. We offer both free and paid courses.
                  </div>

                  <div className="relative bg-[#001313] shadow-sm shadow-green-300 md:px-8 rounded-2xl md:py-8 hover:shadow-green-300 transform transition-transform duration-300 hover:scale-105 p-4 text-xl">
                    3. PlayCraftAcademy has a diverse team of instructors and content creators who are experts in their respective fields—such as cooking, music, and chess.
                  </div>

                  <div className="relative bg-[#001313] shadow-sm shadow-green-300 md:px-8 rounded-2xl md:py-8 hover:shadow-green-300 transform transition-transform duration-300 hover:scale-105 p-4 text-xl">
                    4. Our goal is to provide you with the knowledge and skills
                    you need to succeed in your respective field.
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="my-5 max-w-5xl mx-auto px-10">
            <div className="text-center">
              <div className="text-sm font-bold tracking-wider text-green-300 py-4 uppercase">
                Testimonials
              </div>
              <h2 className="py-4 text-3xl font-bold leading-snug tracking-tight text-gray-200 lg:leading-tight lg:text-4xl">
                Here's what our Student have to say..
              </h2>
              <p className="py-4 text-lg leading-normal lg:text-xl xl:text-xl text-gray-300">
                Here are some testimonials from our students who have taken our
                various courses. We are proud to have helped them achieve
                their goals.
              </p>
            </div>
            <div className="mx-auto my-10">
              <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                  >
                    <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-[#001313] shadow-sm shadow-green-300 md:px-8 rounded-2xl md:py-8 hover:shadow-green-300 transform transition-transform duration-300 hover:scale-105">
                      <p className="text-xl leading-normal dark:text-gray-300">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center mt-8 space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                          <img
                            alt="Avatar"
                            src={testimonial.imageUrl}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <div className="text-lg font-medium text-gray-200">
                            {testimonial.author}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400">
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default MainPage;