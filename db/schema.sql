DROP DATABASE IF EXISTS keepsake_dev;
CREATE DATABASE keepsake_dev;

\c keepsake_dev;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  address TEXT NOT NULL,
  email varchar(255) UNIQUE NOT NULL,
  phone TEXT NOT NULL,
  isVerified BOOLEAN,
  password varchar(255) NOT NULL,
  created_at date DEFAULT current_date,
  role TEXT,
  image TEXT,
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
  avg_rating INTEGER,
  description TEXT,
  image TEXT,
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
  listing_id INTEGER REFERENCES listing (listing_id),
  title TEXT NOT NULL, 
  body TEXT NOT NULL,
  rating INTEGER NOT NULL
);

DROP TABLE IF EXISTS availability;

CREATE TABLE availability (
  id SERIAL PRIMARY KEY,
  listing_id INTEGER REFERENCES listing (listing_id),
  days_not_available DATE[],
  min_days INTEGER NOT NULL,
  max_days INTEGER NOT NULL
);