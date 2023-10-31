DROP DATABASE IF EXISTS keepsake_dev;
CREATE DATABASE keepsake_dev;

\c keepsake_dev;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    firstName text,
    lastName text,
    address text,
    email varchar(255) UNIQUE NOT NULL,
    phone text,
    verified boolean,
    password varchar(255) NOT NULL,
    created_at date DEFAULT current_date,
    role text
);
