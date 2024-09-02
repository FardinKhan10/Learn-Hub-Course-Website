import React, { useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Button, Label } from "reactstrap";
import "../css/AddCourses.css";
import base_url from "../api/api";
import axios from "axios";
import { toast } from "react-toastify";

const AddCourses = () => {
  useEffect(() => {
    document.title = "Add Courses || LearnHub";
  }, []);

  const [course, setCourses] = useState({});

  // Form handler function
  const handleForm = (e) => {
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  };

  // Function to post data on server
  const postDataToServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        // On success, log the response data and update the courses state
        console.log(response.data);
        toast.success("Course Added");
        setCourses({});
      },
      (error) => {
        // On error, log the error and show a toast notification
        console.error(error);
        toast.error("Something went wrong");
      }
    );
  };

  return (
    <div className="add-course-container">
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label for="userId">Course Id</Label>
          <Input
            type="text"
            name="userId"
            id="userId"
            placeholder="Enter Course Id"
            onChange={(e) => {
              setCourses({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Title"
            onChange={(e) => {
              setCourses({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Course Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Enter Description"
            style={{ height: 150 }}
            onChange={(e) => {
              setCourses({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button color="success" type="submit" className="mr-2">
            Add Course
          </Button>
          <Button
            color="warning"
            type="reset"
            className="ml-2"
            onClick={() => setCourses({})}
          >
            Clear
          </Button>
        </Container>
      </Form>
    </div>
  );
};

export default AddCourses;
