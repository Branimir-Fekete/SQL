drop database if exists odvjetnik;
create database odvjetnik;
use odvjetnik;
create table odvjetnik (
    sifra int not null primary key auto_increment,
    naziv_ureda varchar (100),
    osoba int not null
);

create table djelatnost (
    odvjetnik int not null,
    obrana int not null
);

create table obrana (
    sifra int not null primary key auto_increment,
    datum datetime,
    sat time,
    sud varchar (50)
);

create table ispomoc (
    obrana int not null,
    suradnik int not null
);

create table suradnik (
    sifra int not null primary key auto_increment,
    osoba int not null,
    obrana int not null
);

create table osoba (
    sifra int not null primary key auto_increment,
    ime varchar (50),
    prezime varchar (50),
    oib char (11),
    kontak_telefon char (14),
    e_mail varchar (50),
    iban varchar (50)   
);

create table stranka (
    obrana int not null,
    klijent int not null
);

create table klijent (
    sifra int not null primary key auto_increment,
    osoba int not null
);

alter table odvjetnik add foreign key (osoba)
references osoba (sifra);

alter table djelatnost add foreign key (odvjetnik)
references odvjetnik (sifra);

alter table djelatnost add foreign key (obrana)
references obrana (sifra);

alter table stranka add foreign key (obrana)
references obrana (sifra);

alter table stranka add foreign key (klijent)
references klijent (sifra);

alter table ispomoc add foreign key (obrana)
references obrana (sifra);

alter table ispomoc add foreign key (suradnik)
references suradnik (sifra);

alter table suradnik add foreign key (osoba)
references osoba (sifra);