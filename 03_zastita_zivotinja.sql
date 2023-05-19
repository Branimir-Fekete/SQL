drop database if exists zastitaZivotinja;
create database zastitaZivotinja;
use zastitaZivotinja;

create table osoba(
    osobaID int primary key auto_increment,
    ime varchar(50) not null,
    prezime varchar(50) not null,
    kontakt varchar(50),
    oib char(11) not null,
    email varchar(50)
);

create table sticenik(
    sticenikID int primary key auto_increment,
    ime varchar(50) not null,
    vrsta varchar(50) not null,
    starost date,
    prostorID int
);

create table prostor(
    prostorID int primary key auto_increment,
    naziv varchar(50) not null,
    adresa varchar(50) not null
);

create table briga(
    osobaID int,
    sticenikID int,
    primary key (osobaID, sticenikID),
    foreign key (sticenikID) references sticenik(sticenikID),
    foreign key (osobaID) references osoba(osobaID)
);

alter table sticenik add foreign key (prostorID) references prostor(prostorID)
