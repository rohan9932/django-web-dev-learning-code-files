-- Active: 1765124918347@@127.0.0.1@3306@Varsity
CREATE DATABASE Varsity;

SHOW DATABASES;

SHOW TABLES;

-- Primary key is a not null as when we make relation with other table we do it with primary key in common
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    birth_date DATE,
    enrollment_date DATE,
    cgpa DECIMAL(4, 3),
    is_active BOOLEAN,
    course_id INT
);


CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100),
    instructor VARCHAR(50),
    credits INT,
    department VARCHAR(50)
);



-- Enter data
INSERT INTO courses (course_id, course_name, instructor, credits, department) VALUES
(101, 'Introduction to Computer Science', 'Dr. Alan Turing', 3, 'Computer Science'),
(102, 'Calculus I', 'Prof. Emmy Noether', 4, 'Mathematics'),
(103, 'Linear Algebra', 'Dr. David Hilbert', 4, 'Mathematics'),
(104, 'Principles of Marketing', 'Prof. Peter Drucker', 3, 'Business'),
(105, 'Organic Chemistry', 'Dr. Marie Curie', 4, 'Science');


INSERT INTO students (student_id, first_name, last_name, birth_date, enrollment_date, cgpa, is_active, course_id) VALUES
(1, 'Alice', 'Smith', '2004-05-15', '2023-09-01', 3.850, TRUE, 101),
(2, 'Bob', 'Johnson', '2003-11-20', '2022-09-01', 3.520, TRUE, 102),
(3, 'Charlie', 'Brown', '2005-01-25', '2023-09-01', 2.980, TRUE, 104),
(4, 'Diana', 'Prince', '2002-08-10', '2021-09-01', 3.995, TRUE, 103),
(5, 'Ethan', 'Hunt', '2004-03-05', '2023-01-15', 3.100, TRUE, 101),
(6, 'Fiona', 'Gleason', '2003-12-12', '2022-09-01', 3.670, TRUE, 105),
(7, 'George', 'Clark', '2002-06-30', '2021-09-01', 3.050, TRUE, 102),
(8, 'Hannah', 'Scott', '2005-04-18', '2024-01-15', 3.750, TRUE, 104),
(9, 'Ivan', 'Petrov', '2003-09-01', '2022-01-15', 2.800, FALSE, 105),
(10, 'Jasmine', 'Lee', '2004-07-22', '2023-09-01', 3.440, TRUE, 103);

INSERT INTO students (student_id, first_name, last_name, birth_date, enrollment_date, cgpa, is_active, course_id) VALUES
(11, 'Jasmine', 'Jones', '2004-07-22', '2023-09-11', 3.440, TRUE, 103);

SELECT * FROM courses;

SELECT * FROM students;


--Order By
SELECT
    student_id,
    first_name,
    last_name,
    cgpa
FROM students
ORDER BY cgpa DESC;


SELECT
    student_id,
    first_name,
    last_name,
    cgpa
FROM students
ORDER BY first_name DESC, last_name DESC;

SELECT
    student_id,
    first_name,
    last_name,
    cgpa
FROM students
ORDER BY cgpa DESC LIMIT 3;


--LIKE use kora hoi pattern match korte (Type 1)
--% means J r por joto jai e thakuk
SELECT
    student_id,
    first_name,
    last_name,
    cgpa
FROM students
WHERE first_name LIKE 'J%';

--last name n er age ja iccha tai
SELECT
    student_id,
    first_name,
    last_name,
    cgpa
FROM students
WHERE first_name LIKE '%n';


--Jodi amra emon ekta name ber korte chai jeikhane m majhe sheikhane '_' use korte pari
--eta mean kore lastname 5 character r
SELECT
    student_id,
    first_name,
    last_name,
    cgpa
FROM students
WHERE last_name LIKE '_m___';


--Basic Aggregate Function
--Here count shows num of rows
SELECT COUNT(*) FROM students;

SELECT AVG(cgpa) FROM students WHERE cgpa > 3.5;

SELECT MAX(cgpa) FROM students WHERE cgpa > 3.5;

SELECT MIN(cgpa) FROM students WHERE cgpa > 3.5;

--Grouping
SELECT course_id, cgpa
FROM students
ORDER BY course_id;

-- So basically ekhane for eg. 101 course_id r row gula group hoye geche ar cgpa merged_fn onujayi merge hoyeche(ekhane AVG)
-- Grouping thakle sheikhane HAVING use kora hoi filtering e
SELECT course_id, AVG(cgpa), COUNT(*)
FROM students
WHERE course_id IS NOT NULL
GROUP BY course_id
HAVING COUNT(*) > 1;


-- JOIN
SELECT * FROM courses;

-- left join mane jei table select korsi left e oi table r shob data thakbe ar right e jake join korsi tar data ashbe according left table data
SELECT
    s.student_id,
    s.first_name,
    s.last_name,
    s.course_id,
    c.course_name
FROM students s
LEFT JOIN courses c ON s.course_id = c.course_id


SELECT
    c.course_name,
    s.student_id,
    s.first_name,
    s.last_name,
    s.course_id
FROM students s
RIGHT JOIN courses c ON s.course_id = c.course_id;

-- Inner e null wala value gular row baad jabe
SELECT
    c.course_name,
    s.student_id,
    s.first_name,
    s.last_name,
    s.course_id
FROM students s
INNER JOIN courses c ON s.course_id = c.course_id;


--Foreign key
ALTER TABLE `students` ADD FOREIGN KEY (course_id) REFERENCES `courses`(course_id) ON DELETE SET NULL ON UPDATE CASCADE;

SELECT course_id, AVG(cgpa)
FROM students
GROUP BY course_id;