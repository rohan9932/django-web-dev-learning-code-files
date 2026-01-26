-- Active: 1765124918347@@127.0.0.1@3306@Varsity
-- comment
SHOW DATABASES;

SHOW TABLES;

CREATE TABLE Students (
    student_id INT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    age INT,
    grade_level INT,
    city VARCHAR(50)
);

DROP TABLE Students;

INSERT INTO `Students` (student_id, first_name, age)
VALUES
    (1, "Rohan", 21),
    (2, "Rahim", 20);

SELECT * FROM `Students`

SELECT student_id, first_name, age FROM `Students`

SELECT student_id, first_name, age FROM `Students` WHERE age = 21 LIMIT 1;

SELECT student_id, first_name, age FROM `Students` WHERE first_name = "Rahim" OR age = 70;

SELECT COUNT(*) FROM `Students`


-- -------------- SQL Constraints ------------------

DROP DATABASE school_db;

CREATE DATABASE school_db;

DROP TABLE students

-- Primary key is unique. it can't be null
CREATE TABLE students(
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    age INT CHECK(age >= 16 AND age <= 26),
    enrollment_date DATE DEFAULT(CURRENT_DATE),
    status VARCHAR(100) DEFAULT "enrolled"
);

-- Will not run
-- INSERT INTO students(
--     email,
--     full_name,
--     age
-- ) VALUES (
--     "c1@example.com",
--     "C1",
--     27
-- );

INSERT INTO students(
    email,
    full_name,
    age
) VALUES(
    "f5@example.com",
    "F5",
    17
);

SELECT * FROM students;

SELECT AVG(age) FROM students;


-- primary key and foreign key
CREATE TABLE courses(
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_code VARCHAR(10) UNIQUE,
    course_name VARCHAR(100) NOT NULL,
    credits INT DEFAULT 3 CHECK(credits > 0),
    max_students INT DEFAULT 30 CHECK (max_students BETWEEN 10 AND 100)
);

INSERT INTO courses (course_code, course_name, credits, max_students) VALUES
('CS101', 'Introduction to Computer Science', 3, 40),
('MA205', 'Linear Algebra', 4, 30),
('PH103', 'Classical Mechanics', 3, 25),
('EN301', 'Creative Writing Workshop', 3, 15),
('HI410', 'Modern European History', 4, 50),
('PY202', 'Cognitive Psychology', 3, 35),
('EC305', 'Microeconomic Theory', 3, 20),
('AR115', 'Introduction to Digital Art', 4, 55);

CREATE TABLE enrollments(
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,

    FOREIGN KEY (student_id)
    REFERENCES students(student_id),

    FOREIGN KEY (course_id)
    REFERENCES courses(course_id)
);

-- will throw error -> can't update
-- INSERT INTO enrollments(
--     student_id,
--     course_id
-- ) VALUES(
--     15,
--     232
-- )

CREATE TABLE marks(
    mark_id INT PRIMARY KEY AUTO_INCREMENT,
    mark INT NOT NULL,
    st_id INT,

    Foreign Key (st_id) REFERENCES students(student_id)
);

-- need to enter proper student id which exits
INSERT INTO marks(mark, st_id) VALUES(78, 3)

SELECT * FROM marks;

-------- subquery -------
SELECT * 
FROM students
WHERE age > (
    SELECT AVG(age)
    FROM students
);


-- CTE (Common Table Expression)
SELECT * FROM students;
SELECT * FROM courses;

--declaring temp table
WITH mytable AS (
    SELECT age, COUNT(*) AS cnt
    FROM students
    GROUP BY age
)
SELECT * FROM mytable;

SELECT age, COUNT(*)
FROM students
GROUP BY age;


-- Indexing = used for search optimizations
-- without indexing any search operation will perform linear search

-- Primary Idx (Clustered Idx): Primary Key
-- Secondary Idx (Non-Clustered Idx): 
