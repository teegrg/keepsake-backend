DROP DATABASE IF EXISTS keepsake_dev;
CREATE DATABASE keepsake_dev;

\c keepsake_dev;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  address TEXT,
  email varchar(255) UNIQUE NOT NULL,
  phone TEXT,
  isVerified BOOLEAN,
  password varchar(255) NOT NULL,
  created_at date DEFAULT current_date,
  role TEXT,
  image TEXT
);

DROP TABLE IF EXISTS listing;

CREATE TABLE listing (
  listing_id SERIAL PRIMARY KEY,
  street TEXT NOT NULL,
  apt TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip TEXT NOT NULL,
  size TEXT NOT NULL,
  price INTEGER,
  posted_at date DEFAULT CURRENT_DATE,
  type TEXT,
  host INTEGER REFERENCES users (user_id),
  renter INTEGER REFERENCES users (user_id),
  isRented boolean,
  avg_rating INTEGER,
  description TEXT,
  image TEXT
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
  min_days INTEGER NOT NULL,
  max_days INTEGER NOT NULL,
  after_hours BOOLEAN,
  appointment_needed BOOLEAN,
  private BOOLEAN
);

DROP TABLE IF EXISTS property_type_lookup;

CREATE TABLE property_type_lookup (
  id SERIAL PRIMARY KEY,
  property_type TEXT
);

DROP TABLE IF EXISTS blackoutDates;

CREATE TABLE blackoutDates (
  id SERIAL PRIMARY KEY,
  listing_id INTEGER REFERENCES listing (listing_id),
  start_date date,
  end_date date
);

DROP TABLE IF EXISTS booked;

CREATE TABLE booked (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (user_id),
  listing_id INTEGER REFERENCES listing (listing_id),
  blackoutdate_id INTEGER REFERENCES blackoutDates (id),
  total DECIMAL,
  status TEXT,
  request TEXT
);