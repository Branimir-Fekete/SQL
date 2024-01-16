drop database if exists beautySalon;
create database beautySalon;
use beautySalon;

create table djelatnice (
    id int primary key auto_increment,
    oib char(11),
    osoba int not null
);

create table korisnici (
    id int primary key auto_increment,
    napomena text,
    osoba int not null
);

create table osoba(
    id int primary key auto_increment,
    ime varchar(50) not null,
    prezime varchar(50) not null,
    datum_rodjenja date not null,
    adresa varchar(100) not null,
    email varchar(100),
    telefon varchar(20)
);

create table usluge (
    id int primary key auto_increment,
    naziv varchar(50) not null,
    opis text,
    cijena decimal(10,2) not null
);

create table posjete (
    id int primary key auto_increment,
    datum datetime not null,
    korisnik int not null,
    djelatnica int not null,
    usluga int not null,
    foreign key (korisnik) references korisnici (id),
    foreign key (djelatnica) references djelatnice (id),
    foreign key (usluga) references usluge (id)
);

alter table korisnici add foreign key (osoba) references osoba(id);
alter table djelatnice add foreign key (osoba) references osoba(id);