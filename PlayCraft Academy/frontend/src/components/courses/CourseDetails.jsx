import React from "react";
import { useParams } from "react-router-dom";

const courseDetailsData = {
  1: {
    course_name: "PlayCraftAcademy: Start Your Acoustic Guitar Journey",
    syllabus: "Learn the basics of acoustic guitar, including tuning, chords, and strumming techniques.",
    instructor_bio: "Alex Rivera is a professional guitarist with over 15 years of experience teaching beginners.",
    prerequisites: "Your passion for music and an acoustic guitar to start your journey."
  },
  2: {
    course_name: "PlayCraftAcademy: Master Advanced Guitar Techniques",
    syllabus: "Dive into advanced techniques like fingerstyle, barre chords, and lead guitar soloing.",
    instructor_bio: "Sophia Carter is a seasoned guitarist known for her expertise in complex techniques.",
    prerequisites: "Basic knowledge of guitar playing and enthusiasm to level up your skills."
  },
  3: {
    course_name: "PlayCraftAcademy: Piano Basics for Beginners",
    syllabus: "Understand the fundamentals of piano, learn scales, chords, and simple melodies.",
    instructor_bio: "Liam Johnson, a pianist with 10+ years of experience, makes learning fun and easy.",
    prerequisites: "Access to a piano or keyboard and a passion to learn."
  },
  4: {
    course_name: "PlayCraftAcademy: Refine Your Advanced Piano Skills",
    syllabus: "Enhance your skills with advanced techniques, improvisation, and expressive playing.",
    instructor_bio: "Emily Davis, a piano virtuoso, specializes in teaching advanced players to refine their craft.",
    prerequisites: "Intermediate piano skills and a piano or keyboard."
  },
  5: {
    course_name: "PlayCraftAcademy: Master Authentic Pasta Cooking",
    syllabus: "Learn to make pasta from scratch and cook authentic Italian sauces and dishes.",
    instructor_bio: "Chef Marco Rossi, an Italian culinary expert, shares his secret family recipes.",
    prerequisites: "Basic kitchen tools, ingredients, and a love for Italian cuisine."
  },
  6: {
    course_name: "PlayCraftAcademy: Mastering the Art of Khichdi",
    syllabus: "Explore diverse variations of Khichdi and learn the perfect cooking techniques.",
    instructor_bio: "Chef Aditi Verma, a culinary artist, brings Indian comfort food to life with flair.",
    prerequisites: "A kitchen setup and an interest in traditional Indian dishes."
  },
  7: {
    course_name: "PlayCraftAcademy: Potato Lovers’ Culinary Course",
    syllabus: "Discover creative recipes for making the most out of potatoes, from snacks to main courses.",
    instructor_bio: "Chef Henry Brown, a versatile chef, celebrates the humble potato with delicious innovations.",
    prerequisites: "A love for potatoes and access to a basic kitchen."
  },
  8: {
    course_name: "PlayCraftAcademy: Master Chess Opening Strategies",
    syllabus: "Learn key opening strategies to dominate the early stages of your chess games.",
    instructor_bio: "Grandmaster Sergey Ivanov specializes in opening theories and tactics.",
    prerequisites: "A chessboard and basic understanding of the rules of chess."
  },
  9: {
    course_name: "PlayCraftAcademy: Mastering the Queen's Gambit",
    syllabus: "Deep dive into the Queen's Gambit, explore tactics, and learn how to use it effectively.",
    instructor_bio: "Chess prodigy Anna Petrova is renowned for her strategic mastery of the Queen's Gambit.",
    prerequisites: "Intermediate chess skills and a desire to improve your game strategy."
  }
};


const CourseDetails = () => {
  const { id } = useParams();
  const courseDetails = courseDetailsData[id];

  if (!courseDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-36">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto flex items-center justify-center rounded-lg">
      <div className="mt-36 w-full bg-style  bg-[#001313] p-8 shadow-md shadow-green-300/35 rounded-lg">
        <h2 className="text-3xl text-gray-100 font-bold mb-6 text-center">
          {courseDetails.course_name}
        </h2>
        <div className="mb-8">
          <h3 className="text-2xl text-gray-200 font-semibold mb-4">What will be Covered?</h3>
          <p className="text-gray-300 leading-relaxed">
            {courseDetails.syllabus}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl text-gray-200 font-semibold mb-4">
            Who is the Instructor?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {courseDetails.instructor_bio}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl text-gray-200 font-semibold mb-4">
            What are the Prerequisites?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {courseDetails.prerequisites}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;