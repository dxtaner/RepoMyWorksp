--test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
create table employee(
    id int primary key,
    name varchar(50) not null,
    birthday Date,
    email varchar(100)   
);

--Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
insert into employee (id, name, birthday, email) values (1, 'Brandi', '05/09/2016', 'blauchlan0@xrea.com');
insert into employee (id, name, birthday, email) values (2, 'Brod', '22/04/2016', 'blaister1@nsw.gov.au');
insert into employee (id, name, birthday, email) values (3, 'Lem', '07/06/2019', 'lmary2@sciencedirect.com');
insert into employee (id, name, birthday, email) values (4, 'Bobbette', '12/04/2014', 'bgoodlife3@state.tx.us');
insert into employee (id, name, birthday, email) values (5, 'Fallon', '30/11/2021', 'fblanning4@netscape.com');
insert into employee (id, name, birthday, email) values (6, 'Danell', '02/07/2019', 'dmalkinson5@photobucket.com');
insert into employee (id, name, birthday, email) values (7, 'Samantha', '07/11/2015', 'sheck6@myspace.com');
insert into employee (id, name, birthday, email) values (8, 'Martainn', '24/08/2020', 'mcrome7@smh.com.au');
insert into employee (id, name, birthday, email) values (9, 'Osbourne', '16/11/2012', 'oboolsen8@techcrunch.com');
insert into employee (id, name, birthday, email) values (10, 'Barbra', '19/07/2019', 'bhollow9@imdb.com');
insert into employee (id, name, birthday, email) values (11, 'Rosaline', '18/06/2014', 'rloitertona@reuters.com');
insert into employee (id, name, birthday, email) values (12, 'Katha', '01/03/2021', 'kmacandieb@si.edu');
insert into employee (id, name, birthday, email) values (13, 'Trey', '22/08/2013', 'ttorregianic@usatoday.com');
insert into employee (id, name, birthday, email) values (14, 'Edeline', '19/03/2017', 'edurransd@cdbaby.com');
insert into employee (id, name, birthday, email) values (15, 'Nissie', '12/11/2015', 'nperrie@google.com.au');
insert into employee (id, name, birthday, email) values (16, 'Sebastien', '16/08/2020', 'ssangof@utexas.edu');
insert into employee (id, name, birthday, email) values (17, 'Philipa', '23/01/2020', 'pklugg@addthis.com');
insert into employee (id, name, birthday, email) values (18, 'Lucine', '27/12/2012', 'lcucksonh@mysql.com');
insert into employee (id, name, birthday, email) values (19, 'Aylmer', '10/10/2014', 'ascedalli@wordpress.com');
insert into employee (id, name, birthday, email) values (20, 'Clarie', '30/01/2018', 'ckunzj@merriam-webster.com');
insert into employee (id, name, birthday, email) values (21, 'Henrie', '22/01/2014', 'hakramk@baidu.com');
insert into employee (id, name, birthday, email) values (22, 'Jolene', '03/03/2014', 'jdeyl@webs.com');
insert into employee (id, name, birthday, email) values (23, 'Sean', '24/04/2012', 'scrucettim@google.com.au');
insert into employee (id, name, birthday, email) values (24, 'James', '31/01/2019', 'jdavisonn@comsenz.com');
insert into employee (id, name, birthday, email) values (25, 'Halley', '10/02/2022', 'hranaldo@tripadvisor.com');
insert into employee (id, name, birthday, email) values (26, 'Kareem', '06/01/2017', 'kboleynp@photobucket.com');
insert into employee (id, name, birthday, email) values (27, 'Niki', '03/11/2021', 'ndorkenq@youtu.be');
insert into employee (id, name, birthday, email) values (28, 'Anallese', '01/03/2019', 'akimptonr@theglobeandmail.com');
insert into employee (id, name, birthday, email) values (29, 'Addie', '23/05/2017', 'aorthmanns@sohu.com');
insert into employee (id, name, birthday, email) values (30, 'Brew', '26/06/2013', 'breddingt@nhs.uk');
insert into employee (id, name, birthday, email) values (31, 'Brockie', '10/11/2017', 'bmorewoodu@harvard.edu');
insert into employee (id, name, birthday, email) values (32, 'Fabe', '20/10/2012', 'ftisunv@state.tx.us');
insert into employee (id, name, birthday, email) values (33, 'Francisca', '05/02/2013', 'fdiffleyw@soundcloud.com');
insert into employee (id, name, birthday, email) values (34, 'Mela', '16/10/2017', 'msandilandsx@google.com.au');
insert into employee (id, name, birthday, email) values (35, 'Huberto', '09/05/2022', 'hworcestery@opensource.org');
insert into employee (id, name, birthday, email) values (36, 'Parsifal', '20/01/2022', 'pburwellz@census.gov');
insert into employee (id, name, birthday, email) values (37, 'Lissy', '29/02/2020', 'lholton10@hexun.com');
insert into employee (id, name, birthday, email) values (38, 'Lorenza', '08/07/2018', 'ljerzykiewicz11@canalblog.com');
insert into employee (id, name, birthday, email) values (39, 'Cinnamon', '31/03/2021', 'cmcenhill12@typepad.com');
insert into employee (id, name, birthday, email) values (40, 'Taddeusz', '27/06/2014', 'tcramer13@surveymonkey.com');
insert into employee (id, name, birthday, email) values (41, 'Davina', '25/01/2020', 'dradloff14@people.com.cn');
insert into employee (id, name, birthday, email) values (42, 'Kania', '30/03/2014', 'kogilby15@drupal.org');
insert into employee (id, name, birthday, email) values (43, 'Starla', '28/12/2019', 'ssalvador16@quantcast.com');
insert into employee (id, name, birthday, email) values (44, 'Leesa', '05/09/2012', 'liannuzzelli17@blogger.com');
insert into employee (id, name, birthday, email) values (45, 'Heloise', '26/05/2014', 'hbamlett18@macromedia.com');
insert into employee (id, name, birthday, email) values (46, 'Ula', '22/05/2020', 'umalenfant19@usatoday.com');
insert into employee (id, name, birthday, email) values (47, 'Giulia', '23/02/2019', 'ggreetham1a@hud.gov');
insert into employee (id, name, birthday, email) values (48, 'Bambi', '22/04/2015', 'bsalway1b@studiopress.com');
insert into employee (id, name, birthday, email) values (49, 'Jase', '04/03/2020', 'jmacwilliam1c@blogger.com');
insert into employee (id, name, birthday, email) values (50, 'Ernestus', '14/01/2014', 'eminshaw1d@auda.org.au');

select * from employee;

--Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
UPDATE employee SET id = 88, name = 'Alihan Karaca' WHERE id = 17;
UPDATE employee SET id = 55, email = 'AlihanKaraca@gmai.com' WHERE id = 50;
UPDATE employee SET name = 'Yıldızım' WHERE id = 7;
UPDATE employee SET name = 'Naji Fıra' WHERE name='Jase';
UPDATE employee SET name = 'Bamitow' WHERE email='bsalway1b@studiopress.com';

--Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
DELETE FROM employee WHERE id = 22;
DELETE FROM employee WHERE name like 'B%';
DELETE FROM employee WHERE email like '%ov';
DELETE FROM employee WHERE id between 55 and 100;
DELETE FROM employee WHERE id=1 and name='BAl';

select * from employee;
