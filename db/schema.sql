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

DROP TABLE IF EXISTS user_reviews;

CREATE TABLE user_reviews (
  id SERIAL PRIMARY KEY,
  author_id INTEGER REFERENCES users (user_id),
  reviewed_id INTEGER REFERENCES users (user_id),
  title TEXT NOT NULL, 
  body TEXT NOT NULL,
  rating INTEGER NOT NULL,

);

CREATE TABLE listing_reviews (
  id SERIAL PRIMARY KEY,
  author_id INTEGER REFERENCES users (user_id),
  listing_id INTEGER REFERENCES users (user_id),
  title TEXT NOT NULL, 
  body TEXT NOT NULL,
  rating INTEGER NOT NULL,

);

CREATE TABLE availability (
    id SERIAL PRIMARY KEY
    listing_id INTEGER REFERENCES user_id (user_id),
    days_not_available DATE [],
    min_days INTEGER NOT NULL,
    max_days INTEGER NOT NULL,
);

