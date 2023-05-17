drop database if exists opgbranimirfekete;
create database opgbranimirfekete;
use opgbranimirfekete;

create table vlasnik(
    id int not null primary key auto_increment,
    ime varchar(50) not null,
    prezime varchar(50) not null,
    adresa varchar(100) not null,
    email varchar(100),
    telefon varchar(50),
    oib char(11) not null,
    iban varchar(50) not null
);

create table usluge(
    id int primary key auto_increment,
    naziv varchar(50) not null,
    cijena decimal(10,2) not null,
    opis text,
    vlasnikID int,
    foreign key (vlasnikID) references vlasnik(id)
);

create table proizvodi(
    id int primary key auto_increment,
    naziv varchar(50) not null,
    cijena decimal(10,2) not null,
    količina decimal(10,2) not null,
    opis text,
    vlasnikID int,
    foreign key (vlasnikID) references vlasnik(id)
);

select * from vlasnik;
insert into vlasnik (ime,prezime,adresa,email,telefon,oib,iban) values ('branimir','fekete','petraperica','ime@prezime',123456789,98765432101,11223344556677);


select * from usluge;
insert into usluge (naziv,cijena,opis) values ('oranje',999,'oranje plugom');


select * from proizvodi;
insert into proizvodi (naziv,cijena,količina,opis) values ('pšenica',888.88,2,'prodajem pšenicu');