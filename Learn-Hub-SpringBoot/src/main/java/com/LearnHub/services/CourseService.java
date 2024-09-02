package com.LearnHub.services;

import java.util.List;

import com.LearnHub.bean.Course;

public interface CourseService
{
	public List<Course> getCourses();
	
	public Course getCourse(long courseId);
	
	public Course updateCourse(Course course);
	
	public Course addCourse(Course course);

	public Course deleteCourse(long courseId);	
}
