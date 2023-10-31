\c keepsake_dev;

INSERT INTO listing_reviews (author, listing_id, title, body, rating)
VALUES
('Shela', 1, 'Safe and Secure Storage', 'The storage facility provided a safe and secure place for my items.', 5),
('Alex', 2, 'Convenient Storage Solution', 'I found the storage service to be convenient and reliable.', 4),
('Bryan', 3, 'Clean and Well-Managed', 'The storage space was clean and well-managed, making it easy to access.', 5),
('Emily', 4, 'Limited Access Hours', 'One drawback was the limited hours of access to my stored items.', 3),
('Nina', 5, 'Helpful Storage Manager', 'The storage manager was very helpful and friendly.', 5),
('Jack', 6, 'Average Storage Experience', 'Decent storage space, but it could use some improvements.', 3),
('Lucas', 7, 'Secure Storage Facility', 'The storage facility was secure and well-maintained.', 5),
('Sophie', 8, 'Damaged Items', 'Unfortunately, some of my items got damaged while in storage.', 2),
('David', 9, 'Peace of Mind', 'I had peace of mind knowing my belongings were safe in this storage place.', 4),
('Mia', 10, 'Highly Recommend', 'A great storage experience overall. I highly recommend this storage facility.', 5);



INSERT INTO user_reviews (author, reviewed_id, title, body, rating)
VALUES
('Jerry', 1, 'perfect', 'He is such a sport. He dropped the stuff with no hassle.', 5),
('Md', 2, 'Great Storage Experience', 'Safe and secure storage, highly recommended!', 4),
('Christain', 3, 'Clean and Convenient', 'The storage place was clean and easy to access.', 4),
('Tee', 4, 'Not Satisfied', 'The storage facility had limited hours of access.', 2),
('Judy', 5, 'Fantastic Service', 'The storage manager was very helpful and friendly.', 5),
('Jhon', 6, 'Average Storage', 'Decent storage space, but could use some improvements.', 3),
('Ahmed', 7, 'Excellent Storage Facility', 'The facility is well-maintained and secure.', 5),
('Rachel', 8, 'Terrible Experience', 'My stuff got damaged while in storage.', 1),
('Angel', 9, 'Secure and Reliable', 'I felt my belongings were safe in this storage place.', 5),
('Phillip', 10, 'Amazing Storage', 'A great storage experience overall. Highly recommend.', 5);



INSERT INTO users (firstName, lastName, address, email, phone, verified, password, created_at, role)
VALUES
('Jerry', 'Jazz', '1400 Pennsylvania', 'jerry@gmail.com', '646-007-0000', true, 'password123', '2023-07-13', 'rentee'),
('John', 'Doe', '789 Elm St', 'john@example.com', '555-123-4567', true, 'secure456', '2023-07-15', 'renter'),
('Alice', 'Anderson', '123 Main St', 'alice@example.com', '555-123-4567', true, 'pass123', '2023-07-14', 'rentee'),
('Emma', 'Smith', '456 Oak St', 'emma@example.com', '555-567-8901', true, 'secret789', '2023-07-16', 'renter'),
('Sarah', 'Williams', '567 Park Ave', 'sarah@example.com', '555-987-6543', true, 'rent567', '2023-07-15', 'rentee'),
('Michael', 'Brown', '890 Pine Ave', 'michael@example.com', '555-789-1234', true, 'pine123', '2023-07-18', 'renter'),
('Ryan', 'Johnson', '890 Sunset Blvd', 'ryan@example.com', '555-567-8901', true, 'sun123', '2023-07-16', 'rentee'),
('Olivia', 'Taylor', '123 Cedar Ln', 'olivia@example.com', '555-234-5678', true, 'cedar234', '2023-07-19', 'renter'),
('Linda', 'Clark', '456 Lake Dr', 'linda@example.com', '555-456-7890', true, 'lake456', '2023-07-17', 'rentee'),
('William', 'Harris', '234 Birch Rd', 'william@example.com', '555-345-6789', true, 'birch345', '2023-07-20', 'renter');



INSERT INTO availability (listing_id, days_not_available, min_days, max_days)
VALUES
(1, NULL, 7, 60),
(2, NULL, 2, 30),
(3, NULL, 1, 90),
(4, NULL, 6, 15),
(5, NULL, 14, 31),
(6, NULL, 3, 60),
(7, NULL, 1, 30),
(8, NULL, 4, 90),
(9, NULL, 7, 60),
(10, NULL, 1, 60);

//run on terminal to run this files/ restart new
//psql -U postgres -f db/schema.sql
//psql -U postgres -f db/seed.sql