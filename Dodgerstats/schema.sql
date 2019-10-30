CREATE TABLE students(
  id SERIAL PRIMARY KEY,
  fname text,
  lname text,
);
CREATE TABLE grades(
    gid SERIAL PRIMARY KEY,
    studentid int,
    grade char
    FOREIGN KEY (studentid) REFERENCES students(id) on DELETE CASCADE
);