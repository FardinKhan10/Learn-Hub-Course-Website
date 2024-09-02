import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container,
  Input,
} from "reactstrap";
import "../css/Course.css";
import base_url from "../api/api";
import axios from "axios";
import { toast } from "react-toastify";

const Course = ({ course, update }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(course.title);
  const [updatedDescription, setUpdatedDescription] = useState(course.description);

  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        console.log(response.data);
        toast.success("Course Deleted");
        update(id);
      },
      (error) => {
        console.error(error);
        toast.error("Something went wrong");
      }
    );
  };

  const updateCourse = (updatedCourse) => {
    axios.put(`${base_url}/courses/${updatedCourse.id}`, updatedCourse).then(
      (response) => {
        console.log(response.data);
        toast.success("Course Updated");
        update(updatedCourse.id, response.data);
        setIsEditing(false); // Exit editing mode on success
      },
      (error) => {
        console.error(error);
        toast.error("Something went wrong");
      }
    );
  };

  const handleUpdate = () => {
    const updatedCourse = {
      ...course,
      title: updatedTitle,
      description: updatedDescription,
    };
    updateCourse(updatedCourse);
  };

  return (
    <Card className="text-center my-3 course-card">
      <CardBody>
        {isEditing ? (
          <>
            <Input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              placeholder="Course Title"
              className="mb-2"
            />
            <Input
              type="textarea"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
              placeholder="Course Description"
              className="mb-3"
            />
          </>
        ) : (
          <>
            <CardTitle tag="h5">{course.title}</CardTitle>
            <CardText>{course.description}</CardText>
          </>
        )}
        <Container className="text-center">
          {isEditing ? (
            <>
              <Button color="success" className="mr-2" onClick={handleUpdate}>
                Save
              </Button>
              
              <Button color="secondary" className="ml-2"  onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button
                color="danger"
                className="mr-2"
                onClick={() => deleteCourse(course.id)}
              >
                Delete
              </Button>
              <Button
                color="warning"
                className="ml-2"
                onClick={() => setIsEditing(true)}
              >
                Update
              </Button>
            </>
          )}
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
