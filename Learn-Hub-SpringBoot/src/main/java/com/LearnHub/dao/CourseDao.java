package com.LearnHub.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.LearnHub.bean.Course;

public interface CourseDao extends JpaRepository <Course , Long>
{

}
