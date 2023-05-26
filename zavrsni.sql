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
    cijena_po_Ha decimal(10,2) not null,
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
insert into usluga (naziv,cijena_po_Ha,kolicina,opis) values 
('Oranje',70,30,'Usluga oranja po hektaru'),
('Sijanje',50,20,'Usluga sijanja po hektaru'),
('Tanjuranje',40,40,'Usluga tanjuranja po hektaru');


select * from proizvod;
insert into proizvod (naziv,cijena,kolicina,opis) values 
('Pšenica',200,150,'Prodaja konvencionalne pšenice po toni'),
('Soja',300,100,'Prodaja konvencionalne soje po toni'),
('Kukuruz',150,75,'Prodaja konvencionalnog kukuruza po toni');

select * from kupac;
insert into kupac (nazivSubjekta,adresa,OIB,IBAN) values
('Otkup d.o.o.','Kralja Tomislava 11, Tomislav grad','71788811640','HR5623600003555122791'),
('Prekup d.d.','Kralaj Zvonimira 22, Osijek','48738466613','HR4125000094359835333'),
('Dokup j.d.o.','Kralja Petra Krešimira 33, Vukovar','25494313864','HR7223600003316151945');