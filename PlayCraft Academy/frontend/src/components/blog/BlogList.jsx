import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogFiles = [
      {
        id: "beginner-acoustic-guitar-lesson",
        title: "PlayCraftAcademy: Start Your Acoustic Guitar Journey",
        description: "Begin your musical adventure with PlayCraftAcademy! Learn basic chords, strumming patterns, and your first melody to start playing acoustic guitar today.",
        tags: ["Acoustic Guitar", "Beginner Lessons"]
      },
      {
        id: "advanced-guitar-techniques",
        title: "PlayCraftAcademy: Master Advanced Guitar Techniques",
        description: "Take your skills to the next level with advanced techniques like fingerpicking, tapping, and alternate picking, brought to you by PlayCraftAcademy.",
        tags: ["Advanced Guitar", "Fingerpicking", "Tapping"]
      },
      {
        id: "piano-basics-beginners",
        title: "PlayCraftAcademy: Piano Basics for Beginners",
        description: "Learn fundamental piano techniques, scales, and your first song with PlayCraftAcademy’s beginner-friendly course.",
        tags: ["Beginner Piano", "Scales"]
      },
      {
        id: "advanced-piano-course",
        title: "PlayCraftAcademy: Refine Your Advanced Piano Skills",
        description: "Elevate your piano playing with lessons on arpeggios, advanced compositions, and performance skills from PlayCraftAcademy.",
        tags: ["Advanced Piano"]
      },
      {
        id: "authentic-pasta-cooking",
        title: "PlayCraftAcademy: Master Authentic Pasta Cooking",
        description: "Discover traditional pasta-making techniques, from fresh dough preparation to classic sauces, with PlayCraftAcademy.",
        tags: ["Pasta Cooking", "Authentic Recipes"]
      },
      {
        id: "mastering-the-art-of-khichdi",
        title: "PlayCraftAcademy: Mastering the Art of Khichdi",
        description: "Learn how to cook perfect khichdi variations, blending spices and textures for this comforting Indian dish, with PlayCraftAcademy.",
        tags: ["Khichdi Cooking", "Indian Cuisine"]
      },
      {
        id: "potato-lovers-culinary-course",
        title: "PlayCraftAcademy: Potato Lovers’ Culinary Course",
        description: "Explore the versatility of potatoes with recipes for creamy mash, crispy fries, and innovative dishes in this PlayCraftAcademy course.",
        tags: ["Potato Recipes", "Culinary Creativity"]
      },
      {
        id: "chess-opening-strategies",
        title: "PlayCraftAcademy: Master Chess Opening Strategies",
        description: "Learn the principles behind strong chess openings, from classical openings to modern strategies, in this PlayCraftAcademy series.",
        tags: ["Chess Openings", "Chess Strategies", "Game Theory"]
      },
      {
        id: "mastering-queens-gambit",
        title: "PlayCraftAcademy: Mastering the Queen's Gambit",
        description: "Dive deep into the Queen’s Gambit, exploring its variations and strategies to dominate your chess games with PlayCraftAcademy.",
        tags: ["Queen's Gambit", "Chess Variations"]
      }
    ];
    setBlogs(blogFiles);
  }, []);

  return (
    <div className="blog-list container mx-auto p-4">
      <div className="py-36">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-200">Our Blogs</h1>
        <p className="mt-6 text-gray-300 text-center">
          Read our latest blogs and learn new skills in just a few seconds.
        </p>
        <ul className="space-y-8 mt-12">
          {blogs.map((blog) => ( 
            <li key={blog.id} className="bg-[#001313] p-8 rounded-lg shadow-sm shadow-green-300 md:px-8 md:py-8 hover:shadow-green-300">
              <div className="flex justify-between items-center ">
                <Link to={`/blog/${blog.id}`} className="text-gray-100 hover:text-green-400 text-lg">
                  {blog.title}
                </Link>
                <div className="text-gray-400 text-sm">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="ml-2 bg-gray-300 text-black p-2 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 mt-4">{blog.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogList;