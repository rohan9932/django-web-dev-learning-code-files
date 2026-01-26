-- Active: 1766658106806@@127.0.0.1@5432@postgres
SELECT datname FROM pg_catalog.pg_database;

--DDL -> Data Definition Languagte
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

-- DML -> Data Manipulation Language
SELECT tablename FROM pg_catalog.pg_tables;

SELECT * FROM public.students;

SELECT * FROM public.courses;


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



-- Primary Key, Foreign Key
-- JOIN
-- AGGREGATE Functions
-- Subquery
-- Window Function
-- Index : To access common column which are queried freq faster

SELECT * FROM public.students;

CREATE INDEX idx_first_name ON public.students(first_name);

--as we indexed it now filtering with first_name will be faster 
--but indexing stores it in ram. so we have to only idxing one or two columns
SELECT first_name, last_name
FROM public.students
WHERE first_name = 'Fiona';

--View -> Temporary Table

--Transaction : Need all the queries to be successfully executed other wise we can roll back.
-- eg. Transactions in bank. Only successful if deducted from A and increased at B both are true

BEGIN;

ROLLBACK;
COMMIT;


--ACID:
-- Atomicity: All queries need to be run in transacion
-- Consistency
-- Isolation: Do one task in a row then unlocks it to run next query

--Query Planner: Optmize Query
EXPLAIN
SELECT first_name, last_name
FROM public.students
WHERE first_name = 'Fiona';

EXPLAIN ANALYZE
SELECT first_name, last_name
FROM public.students
WHERE first_name = 'Fiona';

--CTE : Temporary Tables
--JSON + Array
--Trigger