drop database if exists frizerskiSalon;
create database frizerskiSalon;
use frizerskiSalon;

create table frizerskiSalon(
    sifra int not null primary key auto_increment,
    naziv varchar(50) not null,
    adresa varchar(100),
    kontakt varchar(50),
    upravitelj varchar(50)
);

create table djelatnik(
    sifra int not null primary key auto_increment,
    frizerskiSalon int not null,
    osoba int not null,
    iban varchar(50),
    oib char(11)
);

create table korisnik(
    sifra int not null primary key auto_increment,
    osoba int not null,
    usluga varchar(75),
    djelatnik int not null
);

create table usluga(
    sifra int not null primary key auto_increment,
    tipUsluge varchar(100),
    cijena decimal(18,2),
    trajanje int,
    korisnik int not null
);

create table osoba(
    sifra int not null primary key auto_increment,
    ime varchar(50),
    prezime varchar(50),
    kontakt varchar(50)
);

alter table djelatnik add foreign key (frizerskiSalon) references frizerskiSalon(sifra);
alter table djelatnik add foreign key (osoba) references osoba(sifra);
alter table korisnik add foreign key (osoba) references osoba(sifra);
alter table korisnik add foreign key (djelatnik) references djelatnik(sifra);
alter table usluga add foreign key (korisnik) references korisnik(sifra);