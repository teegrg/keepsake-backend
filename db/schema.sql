DROP DATABASE IF EXISTS keepsake_dev;
CREATE DATABASE keepsake_dev;

\c keepsake_dev;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  firstName TEXT,
  lastName TEXT,
  address TEXT,
  email varchar(255) UNIQUE NOT NULL,
  phone TEXT,
  verified BOOLEAN,
  password varchar(255) NOT NULL,
  created_at date DEFAULT current_date,
  role TEXT
);

DROP TABLE IF EXISTS listing;

CREATE TABLE listing (
  listing_id SERIAL PRIMARY KEY,
  address TEXT NOT NULL,
  size TEXT NOT NULL,
  price INTEGER,
  posted_at date,
  type TEXT,
  host INTEGER REFERENCES users (user_id),
  renter INTEGER REFERENCES users (user_id),
  isRented boolean,
  avg_rating INTEGER
);

DROP TABLE IF EXISTS user_reviews;

CREATE TABLE user_reviews (
  id SERIAL PRIMARY KEY,
  author_id INTEGER REFERENCES users (user_id),
  reviewed_id INTEGER REFERENCES users (user_id),
  title TEXT NOT NULL, 
  body TEXT NOT NULL,
  rating INTEGER NOT NULL
);

DROP TABLE IF EXISTS listing_reviews;

CREATE TABLE listing_reviews (
  id SERIAL PRIMARY KEY,
  author_id INTEGER REFERENCES users (user_id),
  listing_id INTEGER REFERENCES listing (user_id),
  title TEXT NOT NULL, 
  body TEXT NOT NULL,
  rating INTEGER NOT NULL
);

DROP TABLE IF EXISTS availability;

CREATE TABLE availability (
  id SERIAL PRIMARY KEY
  listing_id INTEGER REFERENCES user_id (user_id),
  days_not_available DATE [],
  min_days INTEGER NOT NULL,
  max_days INTEGER NOT NULL,
);

