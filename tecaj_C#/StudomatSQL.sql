USE master;
GO
DROP DATABASE IF EXISTS Studomat;
CREATE DATABASE Studomat;
GO
USE Studomat;

CREATE TABLE sveucilista (
  sveuciliste_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  naziv VARCHAR(255) NOT NULL,
  adresa VARCHAR(255) NOT NULL
);

CREATE TABLE profesori (
  profesor_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  ime VARCHAR(100) NOT NULL,
  prezime VARCHAR(100) NOT NULL,
  oib CHAR(11),
  sveuciliste_id INT
);

CREATE TABLE kolegiji (
  kolegij_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  naziv VARCHAR(255) NOT NULL,
  opis TEXT
);

CREATE TABLE profesor_kolegij (
  profesor_id INT,
  kolegij_id INT
);

CREATE TABLE ispiti (
  ispit_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  naziv VARCHAR(255) NOT NULL,
  datum DATE NOT NULL,
  ocijena INT NOT NULL,
  prolaz BIT,
  kolegij_id INT
);

CREATE TABLE studenti (
  student_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  ime VARCHAR(100) NOT NULL,
  prezime VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  JMBAG CHAR(11),
  godina_studija INT,
  sveuciliste_id INT
);

CREATE TABLE student_profesori (
  student_id INT,
  profesor_id INT
);

CREATE TABLE student_kolegiji (
  student_id INT,
  kolegij_id INT
);

CREATE TABLE student_ispiti (
  student_id INT,
  ispit_id INT
);


/*
====================================================================================
ALTER TABLE (STVARANJE VEZA ZA TABLICE)
====================================================================================
*/

ALTER TABLE ispiti
ADD FOREIGN KEY (kolegij_id) REFERENCES kolegiji(kolegij_id);

ALTER TABLE profesori
ADD FOREIGN KEY (sveuciliste_id) REFERENCES sveucilista(sveuciliste_id);

ALTER TABLE studenti
ADD FOREIGN KEY (sveuciliste_id) REFERENCES sveucilista(sveuciliste_id);

ALTER TABLE profesor_kolegij
ADD FOREIGN KEY (kolegij_id) REFERENCES kolegiji(kolegij_id);

ALTER TABLE profesor_kolegij
ADD FOREIGN KEY (profesor_id) REFERENCES profesori(profesor_id);

ALTER TABLE studenti
ADD FOREIGN KEY (sveuciliste_id) REFERENCES sveucilista(sveuciliste_id);

ALTER TABLE student_profesori
ADD FOREIGN KEY (student_id) REFERENCES studenti(student_id);

ALTER TABLE student_profesori
ADD FOREIGN KEY (profesor_id) REFERENCES profesori(profesor_id);

ALTER TABLE student_kolegiji
ADD FOREIGN KEY (student_id) REFERENCES studenti(student_id);

ALTER TABLE student_kolegiji
ADD FOREIGN KEY (kolegij_id) REFERENCES kolegiji(kolegij_id);

ALTER TABLE student_ispiti
ADD FOREIGN KEY (student_id) REFERENCES studenti(student_id);

ALTER TABLE student_ispiti
ADD FOREIGN KEY (ispit_id) REFERENCES ispiti(ispit_id);


/*
====================================================================================
INSERT (UNOS PODATAKA U TABLICE)
====================================================================================
*/

INSERT INTO sveucilista (naziv, adresa) VALUES
  ('Sveuèilište A', 'Adresa 1'),
  ('Sveuèilište B', 'Adresa 2'),
  ('Sveuèilište C', 'Adresa 3'),
  ('Sveuèilište D', 'Adresa 4'),
  ('Sveuèilište E', 'Adresa 5'),
  ('Sveuèilište F', 'Adresa 6'),
  ('Sveuèilište G', 'Adresa 7'),
  ('Sveuèilište H', 'Adresa 8'),
  ('Sveuèilište I', 'Adresa 9'),
  ('Sveuèilište J', 'Adresa 10');

INSERT INTO profesori (ime, prezime, oib, sveuciliste_id) VALUES
  ('Ime 1', 'Prezime 1', '12345678901', 1),
  ('Ime 2', 'Prezime 2', '23456789012', 2),
  ('Ime 3', 'Prezime 3', '34567890123', 3),
  ('Ime 4', 'Prezime 4', '45678901234', 4),
  ('Ime 5', 'Prezime 5', '56789012345', 5),
  ('Ime 6', 'Prezime 6', '67890123456', 6),
  ('Ime 7', 'Prezime 7', '78901234567', 7),
  ('Ime 8', 'Prezime 8', '89012345678', 8),
  ('Ime 9', 'Prezime 9', '90123456789', 9),
  ('Ime 10', 'Prezime 10', '01234567890', 10);

INSERT INTO kolegiji (naziv, opis) VALUES
  ('Kolegij 1', 'Opis kolegija 1'),
  ('Kolegij 2', 'Opis kolegija 2'),
  ('Kolegij 3', 'Opis kolegija 3'),
  ('Kolegij 4', 'Opis kolegija 4'),
  ('Kolegij 5', 'Opis kolegija 5'),
  ('Kolegij 6', 'Opis kolegija 6'),
  ('Kolegij 7', 'Opis kolegija 7'),
  ('Kolegij 8', 'Opis kolegija 8'),
  ('Kolegij 9', 'Opis kolegija 9'),
  ('Kolegij 10', 'Opis kolegija 10');
  
INSERT INTO ispiti (naziv, datum, ocijena, prolaz, kolegij_id) VALUES
  ('Ispit 1', '2023-01-01', 85, 1, 1),
  ('Ispit 2', '2023-01-02', 78, 1, 2),
  ('Ispit 3', '2023-01-03', 92, 1, 3),
  ('Ispit 4', '2023-01-04', 67, 0, 4),
  ('Ispit 5', '2023-01-05', 91, 1, 5),
  ('Ispit 6', '2023-01-06', 76, 1, 6),
  ('Ispit 7', '2023-01-07', 88, 1, 7),
  ('Ispit 8', '2023-01-08', 70, 0, 8),
  ('Ispit 9', '2023-01-09', 93, 1, 9),
  ('Ispit 10', '2023-01-10', 82, 1, 10);

INSERT INTO studenti (ime, prezime, email, JMBAG, godina_studija, sveuciliste_id) VALUES
  ('Student 1', 'Prezimovic 1', 'student1@example.com', '12345678901', 1, 1),
  ('Student 2', 'Prezimovic 2', 'student2@example.com', '23456789012', 2, 2),
  ('Student 3', 'Prezimovic 3', 'student3@example.com', '34567890123', 3, 3),
  ('Student 4', 'Prezimovic 4', 'student4@example.com', '45678901234', 1, 4),
  ('Student 5', 'Prezimovic 5', 'student5@example.com', '56789012345', 2, 5),
  ('Student 6', 'Prezimovic 6', 'student6@example.com', '67890123456', 3, 6),
  ('Student 7', 'Prezimovic 7', 'student7@example.com', '78901234567', 1, 7),
  ('Student 8', 'Prezimovic 8', 'student8@example.com', '89012345678', 2, 8),
  ('Student 9', 'Prezimovic 9', 'student9@example.com', '90123456789', 3, 9),
  ('Student 10', 'Prezimovic 10', 'student10@example.com', '01234567890', 1, 10);


INSERT INTO student_profesori (student_id, profesor_id) VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6),
  (7, 7),
  (8, 8),
  (9, 9),
  (10, 10);

INSERT INTO student_kolegiji (student_id, kolegij_id) VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6),
  (7, 7),
  (8, 8),
  (9, 9),
  (10, 10);

INSERT INTO student_ispiti (student_id, ispit_id) VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6),
  (7, 7),
  (8, 8),
  (9, 9),
  (10, 10);

 /*
====================================================================================
SELECT (PROVJERA STANJA TABLICA)
====================================================================================
*/

SELECT * FROM sveucilista;
SELECT * FROM profesori;
SELECT * FROM kolegiji;
SELECT * FROM profesor_kolegij;
SELECT * FROM ispiti;
SELECT * FROM studenti;
SELECT * FROM student_profesori;
SELECT * FROM student_kolegiji;
SELECT * FROM student_ispiti;
