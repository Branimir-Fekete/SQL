drop database if exists muzej;
create database muzej;
use muzej;

create table kustos(
    kustosID int primary key auto_increment,
    ime varchar(50) not null,
    prezime varchar(50) not null,
    oib char(11) not null,
    iban varchar(50) not null,
    email varchar(75)
);

create table sponzor(
    sponzorID int primary key auto_increment,
    naziv varchar(50) not null,
    adresa varchar(75) not null,
    kontakt varchar(50)
);

create table izlozba(
    izlozbaID int primary key auto_increment,
    naziv varchar(50) not null,
    kustosID int,
    sponzorID int,
    foreign key (kustosID) references kustos(kustosID),
    foreign key (sponzorID) references sponzor(sponzorID)
);

create table djelo(
    djeloID int primary key auto_increment,
    naziv varchar(50) not null,
    autor varchar(50) not null,
    izlozbaID int,
    foreign key (izlozbaID) references izlozba(izlozbaID)
);