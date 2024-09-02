import React, { useEffect } from "react";
import "../css/Home.css";
import featuredCoursesImage from '../assets/download.jpg';
import howItWorksImage from '../assets/download1.jpg';
import testimonialsImage from '../assets/download2.jpg';
import communityImage from '../assets/images.jpg';
import contactUsImage from '../assets/download3.jpg';
import aboutUsImage from '../assets/images.jpg';

const Home = () => {
  useEffect(() => {
    document.title = "Home || LearnHub";
  }, []);

  return (
    <div className="home-container">
      <h3>Welcome to LearnHub</h3>
      <h5>Unlock Your Potential with Online Courses from World-Class Institutions</h5>
      <p>
        At LearnHub, we believe in the power of education to transform lives.
        Whether you want to advance your career, learn a new skill, or pursue a
        passion, our diverse range of online courses are designed to help you
        achieve your goals.
      </p>
      <hr />
      <h5>Featured Courses</h5>
      <img src={featuredCoursesImage} alt="Featured Courses" className="home-image"/>
      <p>
        <b>Core Java Programming:</b> Learn the fundamentals of Java programming, from basic syntax to object-oriented programming concepts.<br />
        <b>ReactJS Development:</b> Master the art of building dynamic and responsive web applications using ReactJS.<br />
        <b>Angular Essentials:</b> Dive into Angular and learn to build scalable and robust single-page applications.<br />
        <b>Prompt Engineering:</b> Explore the techniques of creating effective prompts for AI models to generate accurate and relevant responses.<br />
        <b>C++ Programming:</b> Understand the core concepts of C++ programming and develop efficient and high-performance applications.<br />
        <b>Advanced Java:</b> Take your Java skills to the next level with advanced topics and real-world applications.<br />
        <b>Python for Beginners:</b> Start your programming journey with Python, one of the most versatile and in-demand languages.<br />
        <b>Artificial Intelligence (AI):</b> Discover the world of AI and learn about machine learning algorithms, neural networks, and more.<br />
        <b>Machine Learning (ML):</b> Gain hands-on experience with machine learning techniques and tools to build predictive models.<br />
        <b>Spring Framework:</b> Learn to develop robust and scalable applications with the powerful Spring Framework.<br />
        <b>HTML, CSS, and JavaScript:</b> Build the foundation for web development with essential HTML, CSS, and JavaScript skills.<br />
        <b>Node.js Development:</b> Master server-side JavaScript with Node.js and create efficient and scalable back-end solutions.
      </p>
      <hr />
      <h5>How It Works</h5>
      <img src={howItWorksImage} alt="How It Works" className="home-image"/>
      <p>
        <b>Browse Courses:</b> Explore our extensive catalog of courses across various fields and disciplines.<br />
        <b>Enroll:</b> Sign up for the courses that interest you and get instant access to the learning materials.<br />
        <b>Learn:</b> Engage with interactive lessons, complete assignments, and participate in discussions.<br />
        <b>Get Certified:</b> Upon completion, receive a certificate to recognize your achievement.
      </p>
      <hr />
      <h5>What Our Students Say</h5>
      <img src={testimonialsImage} alt="Testimonials" className="home-image"/>
      <p>
        "LearnHub has been a game-changer for me. The flexibility to learn at my own pace and the support from the instructors have been incredible."
        — Sarah M., Data Science Graduate<br /><br />
        "The digital marketing course helped me land a new job! The practical skills and hands-on projects were exactly what I needed."
        — John D., Digital Marketer
      </p>
      <hr />
      <h5>Join Our Community</h5>
      <img src={communityImage} alt="Community" className="home-image"/>
      <p>
        Stay updated with the latest courses, news, and events. Subscribe to our newsletter and follow us on social media.<br />
        <b>Facebook:</b> LearnHubFB<br />
        <b>Twitter:</b> @LearnHub<br />
        <b>Instagram:</b> @LearnHub<br />
        <b>LinkedIn:</b> LearnHub
      </p>
      <hr />
      <h5>Contact Us</h5>
      <img src={contactUsImage} alt="Contact Us" className="home-image"/>
      <p>
        Have questions? We're here to help! Reach out to our support team at <a href="mailto:FardinKhan@learnhub.com">FardinKhan@learnhub.com</a> or call us at 7038478679.
      </p>
      <hr />
      <h5>About Us</h5>
      <img src={aboutUsImage} alt="About Us" className="home-image"/>
      <p>
        LearnHub is dedicated to providing high-quality online education to learners around the world. Our mission is to make learning accessible, engaging, and effective for everyone.
      </p>
    </div>
  );
};

export default Home;






