import React from 'react';
import '../css/Footer.css'; // Make sure to create and style this CSS file
import { FaFacebook, FaTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              LearnHub <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help upcoming programmers with the code. LearnHub focuses on providing the most efficient code or snippets as the code wants to be simple. We help programmers build up concepts in different programming languages including C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL, and Algorithms.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="#">Java</a></li>
              <li><a href="#">ReactJS</a></li>
              <li><a href="#">Angular</a></li>
              <li><a href="#">C++</a></li>
              <li><a href="#">Python</a></li>
              <li><a href="#">Machine Learning</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2024 All Rights Reserved by <a href="#">LearnHub</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><FaFacebook /></a></li>
              <li><a className="twitter" href="#"><FaTwitter /></a></li>
              <li><a className="dribbble" href="#"><FaDribbble /></a></li>
              <li><a className="linkedin" href="#"><FaLinkedin /></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
