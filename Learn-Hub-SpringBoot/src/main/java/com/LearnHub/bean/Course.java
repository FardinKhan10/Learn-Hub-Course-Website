package com.LearnHub.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "Course")
public class Course
{
	@Id
	@GeneratedValue
	private long id;
	private String title;
	private String description;
}
