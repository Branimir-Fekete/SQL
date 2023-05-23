drop database if exists opgbranimirfekete;
create database opgbranimirfekete;
use opgbranimirfekete;

create table kupac(
    id int not null primary key auto_increment,
    nazivSubjekta varchar(50),
    adresa varchar(75),
    OIB char(11),
    IBAN varchar(50)
);

create table usluga(
    id int not null primary key auto_increment,
    naziv varchar(50) not null,
    cijena decimal(10,2) not null,
    kolicina decimal(10,2) not null,
    opis text
);

create table proizvod(
    id int not null primary key auto_increment,
    naziv varchar(50) not null,
    cijena decimal(10,2) not null,
    kolicina decimal(10,2) not null,
    opis text
);

create table racun(
    id int not null primary key,
    PDV int not null,
    vrijemeIzdavanja date not null,
    opisPlacanja text not null,
    kupac_id int not null,
    usluga_id int not null,
    proizvod_id int not null,
    foreign key (usluga_id) references usluga(id),
    foreign key (proizvod_id) references proizvod(id),
    foreign key (kupac_id) references kupac(id)
);

create table administrator(
    id int primary key not null auto_increment,
    ime varchar(50) not null,
    prezime varchar(50) not null,
    email varchar(75) not null,
    lozinka varchar(50) not null,
    OIB char(11)
);

select * from usluga;
insert into usluga (naziv,cijena,kolicina,opis) values ('oranje',999.99,50,'oranje plugom');


select * from proizvod;
insert into proizvod (naziv,cijena,kolicina,opis) values ('pšenica',888.88,90,'prodajem pšenicu');