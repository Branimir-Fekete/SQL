drop database if exists obiteljskostablo;
create database obiteljskostablo;
use obiteljskostablo;

create table maldic(
    id int not null primary key auto_increment,
    suknja varchar(50) not null,
    kuna decimal(16,8) not null,
    drugiputa datetime,
    asocijalno bit,
    ekstroventno bit not null,
    dukserica varchar(50) not null,
    muskarac int
);

create table muskarac(
    id int not null primary key auto_increment,
    bojaociju varchar(50) not null,
    hlace varchar(50),
    modelnaocala varchar(50),
    maraka decimal(16,5) not null,
    zena int not null
);

create table zena(
    id int not null primary key auto_increment,
    treciputa datetime,
    hlace varchar(46),
    kratkamajica varchar(31) not null,
    jmbag char(11) not null,
    bojaociju varchar(39) not null,
    haljina varchar(44),
    sestra int not null
);

create table sestra(
    id int not null primary key auto_increment,
    introvertno bit,
    haljina varchar(31) not null,
    maraka decimal(16,6),
    hlace varchar(46) not null,
    narukvica int not null
);

create table svekar(
    id int not null primary key auto_increment,
    bojaociju varchar(40) not null,
    prstena int,
    dukserica varchar(41),
    lipa decimal(13,8),
    eura decimal(12,7),
    majica varchar(35)
);

create table sestra_svekar(
    id int not null primary key auto_increment,
    sestra int not null,
    svekar int not null
);

create table cura(
    id int not null primary key auto_increment,
    novcica decimal(16,5) not null,
    gustoca decimal(18,6) not null,
    lipa decimal(13,10),
    ogrlica int not null,
    bojakose varchar(38),
    suknja varchar(36),
    punac int
);

create table punac(
    id int not null primary key auto_increment,
    ogrlica int,
    gustoca decimal(14,9),
    hlace varchar(41) not null
);

alter table cura add foreign key (punac) references punac(id);
alter table mladic add foreign key (muskarac) references muskarac(id);
alter table muskarac add foreign key (zena) references zena(id);
alter table zena add foreign key (sestra) references sestra(id);
alter table sestra_svekar add foreign key (sestra) references sestra(id);
alter table sestra_svekar add foreign key (svekar) references svekar(id);