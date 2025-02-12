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
    id INT AUTO_INCREMENT PRIMARY KEY,
    attraction_id INT NOT NULL,
    nom VARCHAR(100) NULL,
    prenom VARCHAR(100) NULL,
    note TINYINT NOT NULL CHECK (note BETWEEN 1 AND 5),
    texte TEXT NOT NULL,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (attraction_id) REFERENCES attraction(attraction_id) ON DELETE CASCADE
);