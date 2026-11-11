DROP DATABASE IF EXISTS Contact;

CREATE DATABASE Contact;

USE `Contact`;

CREATE TABLE contacts (
    ID INT NOT NULL AUTO_INCREMENT,
    Fname VARCHAR(50) NOT NULL,
    Lname VARCHAR(50) NOT NULL,
    Company VARCHAR(50) NOT NULL,
    Mail VARCHAR(50) NULL,
    Telephone INT (50) NULL,
    Note VARCHAR(255) NULL,
    PRIMARY KEY (id)
);

INSERT INTO contacts (Fname, Lname, Company, Mail, Telephone, Note)
values
    ('test', 'name', 'random', 'wail', 546732, 'bielzabub'); 