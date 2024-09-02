import React, { useEffect } from "react";
import '../css/AboutUs.css'; // Make sure to create and style this CSS file

const AboutUs = () => {
    useEffect(() => {
        document.title = "About Us || LearnHub";
      }, []);
  return (
    <div className="about-us">
      <div className="container">
        <h2>About Us</h2>
        <p>
          Welcome to LearnHub! Our mission is to provide the most efficient code snippets and programming resources to help upcoming programmers. At LearnHub, we focus on simplicity and clarity in coding, ensuring that our users can build up strong concepts in various programming languages including C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL, and Algorithms.
        </p>
        <p>
          Our team is dedicated to helping you become a better programmer by offering well-structured tutorials, example codes, and best practices. Whether you are a beginner or an experienced developer, LearnHub has something for you. We believe that code should be simple and easy to understand, and we strive to deliver that through our content.
        </p>
        <p>
          Join us in our journey to make coding accessible and enjoyable for everyone. Happy coding!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
