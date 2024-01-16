drop database if exists djecjiVrtic;
create database djecjiVrtic;
use djecjiVrtic;

create table odgajateljica(
    odgajateljicaID int primary key auto_increment,
    ime varchar(50) not null,
    prezime varchar(50) not null,
    strucnaSprema varchar(50) not null,
    oib char(11) not null,
    email varchar(50),
    iban varchar(50)
);

create table odgojnaSkupina(
    skupinaID int primary key auto_increment,
    naziv varchar(50) not null,
    odgajateljicaID int,
    foreign key (odgajateljicaID) references odgajateljica(odgajateljicaID)
);

create table dijete(
    dijeteID int primary key auto_increment,
    ime varchar(50) not null,
    prezime varchar(50) not null,
    skupinaID int,
    foreign key (skupinaID) references odgojnaSkupina(skupinaID)
);