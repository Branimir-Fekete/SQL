drop database if exists igraona;
create database igraona;
use igraona;

create table dijete(
    sifra int not null primary key auto_increment,
    ime varchar(50) not null,
    imeRoditelja varchar(50) not null,
    prezime varchar(50) not null,
    telefonRoditelja int not null
);

create table dijetePosjeta(
    dijete int not null,
    posjeta int not null
);

create table posjeta(
    sifra int not null primary key auto_increment,
    datimVrijemeDolaska date not null,
    datimVrijemeOdlaska date not null,
    napomena text,
    djelatnik_sifra int not null
);

create table djelatnik(
    sifra int not null primary key auto_increment,
    iban varchar(50) not null,
    ime varchar(50) not null,
    oib char(11) not null,
    prezime varchar(50) not null,
    radnoMjesto varchar(50)
);

create table uslugaposjeta(
    usluga int not null,
    posjeta int not null
);

create table usluga(
    sifra int not null primary key auto_increment,
    cijena decimal(10.2) not null,
    jedinicaMjere int not null,
    kolicina int,
    naziv varchar(75)
);

create table operater(
    sifra int not null primary key auto_increment,
    email varchar(100) not null,
    ime varchar(50) not null,
    lozinka varchar(50) not null,
    oib char(11) not null,
    prezime varchar(50) not null
);


alter table dijetePosjeta add foreign key (dijete) references dijete(sifra);
alter table dijetePosjeta add foreign key (posjeta) references posjeta(sifra);
alter table posjeta add foreign key (djelatnik_sifra) references djelatnik(sifra);
alter table uslugaposjeta add foreign key (usluga) references posjeta(sifra);
alter table uslugaposjeta add foreign key (posjeta) references usluga(sifra);
