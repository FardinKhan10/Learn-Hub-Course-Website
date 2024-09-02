package com.LearnHub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.LearnHub.bean.Course;
import com.LearnHub.services.CourseService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MyController {

    @Autowired
    private CourseService courseService;

    // Get all courses
    @GetMapping("/courses")
    public List<Course> getCourses() {
        return this.courseService.getCourses();
    }

    // Get a specific course by ID
    @GetMapping("/courses/{courseId}")
    public Course getCourse(@PathVariable String courseId) {
        return this.courseService.getCourse(Long.parseLong(courseId));
    }

    // Add a new course
    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course) {
        return this.courseService.addCourse(course);
    }

    // Update an existing course
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/courses/{courseId}")
    public Course updateCourse(@RequestBody Course course, @PathVariable Long courseId) {
        course.setId(courseId); // Set the ID from the path variable to ensure it updates the correct course
        return this.courseService.updateCourse(course);
    }
    // Delete a course by ID
    @DeleteMapping("/courses/{courseId}")
    public Course deleteCourse(@PathVariable String courseId) {
        return this.courseService.deleteCourse(Long.parseLong(courseId));
    }
}
