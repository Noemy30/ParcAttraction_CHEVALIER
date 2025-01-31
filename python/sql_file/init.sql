DROP TABLE IF EXISTS attraction;

CREATE TABLE attraction (
    attraction_id int auto_increment,
    primary key(attraction_id),
    nom varchar(255) not null,
    description varchar(255) not null,
    difficulte int,
    visible bool default true
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    users_id int auto_increment,
    primary key(users_id),
    name varchar(255) not null,
    password varchar(255) not null
);

CREATE TABLE avis (
  avis_id INT AUTO_INCREMENT PRIMARY KEY,
  texte VARCHAR(255) NOT NULL,
  note INT NOT NULL,
  nom VARCHAR(255) NOT NULL DEFAULT 'Anonyme',
  prenom VARCHAR(255) NOT NULL DEFAULT 'Anonyme'
);