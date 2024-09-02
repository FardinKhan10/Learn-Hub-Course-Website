package com.LearnHub.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LearnHub.bean.Course;
import com.LearnHub.dao.CourseDao;

@Service
public class CourseServiceImpl implements CourseService 
{

	@Autowired
	private CourseDao courseDao; 
	
	@Override
	public List<Course> getCourses()
	{
		return courseDao.findAll();
	}

	@Override
	public Course getCourse(long courseId) {
		// TODO Auto-generated method stub
		return courseDao.getById(courseId);
	}

	@Override
	public Course addCourse(Course course) {
		courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
        return courseDao.save(course);
    }

	@Override
	public Course deleteCourse(long courseId) {
		courseDao.deleteById(courseId);
		return null;
	}

}
