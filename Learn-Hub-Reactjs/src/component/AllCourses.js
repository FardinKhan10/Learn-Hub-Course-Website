import React, { useEffect, useState } from "react";
import Course from "./Course";
import "../css/AllCourses.css";
import base_url from "../api/api";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses = () => {
  // State to store the list of courses
  const [courses, setCourses] = useState([]);

  // Function to update the course list after deletion
  const updateCourse = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  // Set the document title when the component mounts
  useEffect(() => {
    document.title = "All Courses || LearnHub";
  }, []);

  // Function to fetch all courses from the server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        // On success, log the response data and update the courses state
        console.log(response.data);
        toast.success("Courses have been loaded");
        setCourses(response.data);
      },
      (error) => {
        // On error, log the error and show a toast notification
        console.error(error);
        toast.error("Something went wrong");
      }
    );
  };

  // Fetch courses when the component mounts
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  return (
    <div className="all-courses-container">
      <h1>All Courses</h1>
      <p>List of Courses</p>
      {courses.length > 0 ? (
        courses.map((item) => (
          <Course key={item.id} course={item} update={updateCourse} />
        ))
      ) : (
        <p>No Courses Available</p>
      )}
    </div>
  );
};

export default AllCourses;
