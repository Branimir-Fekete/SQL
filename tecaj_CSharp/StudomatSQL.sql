USE master;

GO
DROP DATABASE IF EXISTS studomat;

CREATE DATABASE studomat;

GO USE studomat;

CREATE TABLE
  sveucilista (
    sifra INT IDENTITY (1, 1) NOT NULL PRIMARY KEY,
    naziv VARCHAR(255) NOT NULL,
    adresa VARCHAR(255) NOT NULL
  );

CREATE TABLE
  profesori (
    sifra INT IDENTITY (1, 1) NOT NULL PRIMARY KEY,
    ime VARCHAR(100) NOT NULL,
    prezime VARCHAR(100) NOT NULL,
    oib CHAR(11),
    sveuciliste_sifra INT,
    FOREIGN KEY (sveuciliste_sifra) REFERENCES sveucilista (sifra)
  );

CREATE TABLE
  kolegiji (
    sifra INT IDENTITY (1, 1) NOT NULL PRIMARY KEY,
    naziv VARCHAR(255) NOT NULL,
    opis TEXT
  );

CREATE TABLE
  profesor_kolegij (
    profesor_sifra INT,
    kolegij_sifra INT,
    FOREIGN KEY (profesor_sifra) REFERENCES profesori (sifra),
    FOREIGN KEY (kolegij_sifra) REFERENCES kolegiji (sifra)
  );

CREATE TABLE
  ispiti (
    sifra INT IDENTITY (1, 1) NOT NULL PRIMARY KEY,
    naziv VARCHAR(255) NOT NULL,
    datum DATE NOT NULL,
    ocijena INT NOT NULL,
    prolaz BIT,
    kolegij_sifra INT,
    FOREIGN KEY (kolegij_sifra) REFERENCES kolegiji (sifra)
  );

CREATE TABLE
  studenti (
    sifra INT IDENTITY (1, 1) NOT NULL PRIMARY KEY,
    ime VARCHAR(100) NOT NULL,
    prezime VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    JMBAG CHAR(11),
    godina_studija INT,
    sveuciliste_sifra INT,
    FOREIGN KEY (sveuciliste_sifra) REFERENCES sveucilista (sifra)
  );

CREATE TABLE
  student_profesori (
    student_sifra INT,
    profesor_sifra INT,
    FOREIGN KEY (student_sifra) REFERENCES studenti (sifra),
    FOREIGN KEY (profesor_sifra) REFERENCES profesori (sifra)
  );

CREATE TABLE
  student_kolegiji (
    student_sifra INT,
    kolegij_sifra INT,
    FOREIGN KEY (student_sifra) REFERENCES studenti (sifra),
    FOREIGN KEY (kolegij_sifra) REFERENCES kolegiji (sifra)
  );

CREATE TABLE
  student_ispiti (
    student_sifra INT,
    ispit_sifra INT,
    FOREIGN KEY (student_sifra) REFERENCES studenti (sifra),
    FOREIGN KEY (ispit_sifra) REFERENCES ispiti (sifra)
  );

/*
====================================================================================
ALTER TABLE (STVARANJE VEZA ZA TABLICE)
====================================================================================
 */
--ALTER TABLE ispiti
--ADD FOREIGN KEY (sifra) REFERENCES kolegiji(sifra);
--ALTER TABLE profesori
--ADD FOREIGN KEY (sifra) REFERENCES sveucilista(sifra);
--ALTER TABLE studenti
--ADD FOREIGN KEY (sifra) REFERENCES sveucilista(sifra);
--ALTER TABLE profesor_kolegij
--ADD FOREIGN KEY (kolegij) REFERENCES kolegiji(sifra);
--ALTER TABLE profesor_kolegij
--ADD FOREIGN KEY (profesor) REFERENCES profesori(sifra);
--ALTER TABLE studenti
--ADD FOREIGN KEY (sifra) REFERENCES sveucilista(sifra);
--ALTER TABLE student_profesori
--ADD FOREIGN KEY (student) REFERENCES studenti(sifra);
--ALTER TABLE student_profesori
--ADD FOREIGN KEY (profesor) REFERENCES profesori(sifra);
--ALTER TABLE student_kolegiji
--ADD FOREIGN KEY (student) REFERENCES studenti(sifra);
--ALTER TABLE student_kolegiji
--ADD FOREIGN KEY (kolegij) REFERENCES kolegiji(sifra);
--ALTER TABLE student_ispiti
--ADD FOREIGN KEY (student) REFERENCES studenti(sifra);
--ALTER TABLE student_ispiti
--ADD FOREIGN KEY (ispit) REFERENCES ispiti(sifra);
/*
====================================================================================
INSERT (UNOS PODATAKA U TABLICE)
====================================================================================
 */
INSERT INTO
  sveucilista (naziv, adresa)
VALUES
  ('Sveučilište Harvard', 'SAD'),
  ('Sveučilište Oxford', 'Velika Britanija'),
  ('Sveučilište Stanford', 'SAD'),
  ('MIT', 'SAD'),
  ('Kalifornijski institut za tehnologiju', 'SAD'),
  ('Sveučilište Cambridge', 'Velika Britanija'),
  ('ETH Zürich', 'Švicarska'),
  ('Sveučilište u Torontu', 'Kanada'),
  ('Nacionalno sveučilište u Singapuru', 'Singapur'),
  ('Sveučilište u Sydneyju', 'Australija');

INSERT INTO
  profesori (ime, prezime, oib, sveuciliste_sifra)
VALUES
  ('Ivan', 'Horvat', '12345678901', 1),
  ('Marija', 'Kovač', '23456789012', 2),
  ('Marko', 'Babić', '34567890123', 3),
  ('Ana', 'Petrović', '45678901234', 4),
  ('Ivana', 'Jurić', '56789012345', 5),
  ('Ante', 'Novak', '67890123456', 6),
  ('Maja', 'Knežević', '78901234567', 7),
  ('Tomislav', 'Vuković', '89012345678', 8),
  ('Martina', 'Šimunović', '90123456789', 9),
  ('Petar', 'Radić', '01234567890', 10);

INSERT INTO
  kolegiji (naziv, opis)
VALUES
  (
    'Matematika',
    'Ovaj kolegij pokriva osnove matematike.'
  ),
  (
    'Fizika',
    'Fizika je prirodna znanost koja proučava temeljne zakone prirode.'
  ),
  (
    'Informatika',
    'Kolegij informatike bavi se računalnim znanostima i programiranjem.'
  ),
  (
    'Povijest umjetnosti',
    'Proučava se povijest razvoja umjetnosti kroz različite epohe.'
  ),
  (
    'Ekonomija',
    'Ekonomija se bavi proučavanjem proizvodnje, distribucije i potrošnje resursa.'
  ),
  (
    'Biologija',
    'Biologija je znanost koja proučava žive organizme i njihove interakcije.'
  ),
  (
    'Sociologija',
    'Sociologija se bavi proučavanjem društva i društvenih odnosa.'
  ),
  (
    'Psihologija',
    'Psihologija proučava ljudsko ponašanje i mentalne procese.'
  ),
  (
    'Lingvistika',
    'Lingvistika se bavi proučavanjem jezika i njegovih aspekata.'
  ),
  (
    'Arhitektura',
    'Arhitektura je umjetnost projektiranja i izgradnje građevina i prostora.'
  );

INSERT INTO
  ispiti (naziv, datum, ocijena, prolaz, kolegij_sifra)
VALUES
  ('Ispit iz Matematike', '2023-01-15', 3, 1, 1),
  ('Ispit iz Fizike', '2023-01-16', 4, 1, 2),
  ('Ispit iz Informatike', '2023-01-17', 5, 1, 3),
  (
    'Ispit iz Povijesti umjetnosti',
    '2023-01-18',
    2,
    0,
    4
  ),
  ('Ispit iz Ekonomije', '2023-01-19', 4, 1, 5),
  ('Ispit iz Biologije', '2023-01-20', 3, 1, 6),
  ('Ispit iz Sociologije', '2023-01-21', 5, 1, 7),
  ('Ispit iz Psihologije', '2023-01-22', 2, 0, 8),
  ('Ispit iz Lingvistike', '2023-01-23', 5, 1, 9),
  ('Ispit iz Arhitekture', '2023-01-24', 4, 1, 10);

INSERT INTO
  studenti (
    ime,
    prezime,
    email,
    JMBAG,
    godina_studija,
    sveuciliste_sifra
  )
VALUES
  (
    'Ana',
    'Horvat',
    'ana.horvat@efos.hr',
    '12345678901',
    1,
    1
  ),
  (
    'Ivan',
    'Kovač',
    'ivan.kovac@fazos.hr',
    '23456789012',
    2,
    2
  ),
  (
    'Marta',
    'Babić',
    'marta.babic@gfos.hr',
    '34567890123',
    3,
    3
  ),
  (
    'Petar',
    'Novak',
    'petar.novak@ffos.hr',
    '45678901234',
    1,
    4
  ),
  (
    'Elena',
    'Petrović',
    'elena.petrovic@efos.hr',
    '56789012345',
    2,
    5
  ),
  (
    'Marko',
    'Horvat',
    'marko.horvat@fazos.hr',
    '67890123456',
    3,
    6
  ),
  (
    'Lea',
    'Kovačević',
    'lea.kovacevic@gfos.hr',
    '78901234567',
    1,
    7
  ),
  (
    'Filip',
    'Marić',
    'filip.maric@ffos.hr',
    '89012345678',
    2,
    8
  ),
  (
    'Jana',
    'Perić',
    'jana.peric@efos.hr',
    '90123456789',
    3,
    9
  ),
  (
    'Luka',
    'Kovačić',
    'luka.kovacic@fazos.hr',
    '01234567890',
    1,
    10
  );

INSERT INTO
  profesor_kolegij (profesor_sifra, kolegij_sifra)
VALUES
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

INSERT INTO
  student_profesori (student_sifra, profesor_sifra)
VALUES
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

INSERT INTO
  student_kolegiji (student_sifra, kolegij_sifra)
VALUES
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

INSERT INTO
  student_ispiti (student_sifra, ispit_sifra)
VALUES
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
SELECT
  *
FROM
  sveucilista;

SELECT
  *
FROM
  profesori;

SELECT
  *
FROM
  kolegiji;

SELECT
  *
FROM
  ispiti;

SELECT
  *
FROM
  studenti;

SELECT
  *
FROM
  profesor_kolegij;

SELECT
  *
FROM
  student_profesori;

SELECT
  *
FROM
  student_kolegiji;

SELECT
  *
FROM
  student_ispiti;