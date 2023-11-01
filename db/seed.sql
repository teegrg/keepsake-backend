\c keepsake_dev;

INSERT INTO listing_reviews (author_id, listing_id, title, body, rating)
VALUES
(1, 1, 'Safe and Secure Storage', 'The storage facility provided a safe and secure place for my items.', 5),
(1, 2, 'Convenient Storage Solution', 'I found the storage service to be convenient and reliable.', 4),
(1, 3, 'Clean and Well-Managed', 'The storage space was clean and well-managed, making it easy to access.', 5),
(4, 4, 'Limited Access Hours', 'One drawback was the limited hours of access to my stored items.', 3),
(6, 5, 'Helpful Storage Manager', 'The storage manager was very helpful and friendly.', 5),
(9, 6, 'Average Storage Experience', 'Decent storage space, but it could use some improvements.', 3),
(1, 7, 'Secure Storage Facility', 'The storage facility was secure and well-maintained.', 5),
(2, 8, 'Damaged Items', 'Unfortunately, some of my items got damaged while in storage.', 2),
(3, 9, 'Peace of Mind', 'I had peace of mind knowing my belongings were safe in this storage place.', 4),
(10, 10, 'Highly Recommend', 'A great storage experience overall. I highly recommend this storage facility.', 5);



INSERT INTO user_reviews (author_id, reviewed_id, title, body, rating)
VALUES
(2, 1, 'perfect', 'He is such a sport. He dropped the stuff with no hassle.', 5),
(5, 2, 'Great Storage Experience', 'Safe and secure storage, highly recommended!', 4),
(1, 3, 'Clean and Convenient', 'The storage place was clean and easy to access.', 4),
(3, 4, 'Not Satisfied', 'The storage facility had limited hours of access.', 2),
(6, 5, 'Fantastic Service', 'The storage manager was very helpful and friendly.', 5),
(7, 6, 'Average Storage', 'Decent storage space, but could use some improvements.', 3),
(8, 7, 'Excellent Storage Facility', 'The facility is well-maintained and secure.', 5),
(10, 8, 'Terrible Experience', 'My stuff got damaged while in storage.', 1),
(4, 9, 'Secure and Reliable', 'I felt my belongings were safe in this storage place.', 5),
(9, 10, 'Amazing Storage', 'A great storage experience overall. Highly recommend.', 5);



INSERT INTO users (firstName, lastName, address, email, phone, verified, password, created_at, role)
VALUES
('Jerry', 'Jazz', '1400 Pennsylvania', 'jerry@gmail.com', '646-007-0000', true, 'password123', '07/13/23', 'host'),
('John', 'Doe', '789 Elm St', 'john@example.com', '555-123-4567', true, 'secure456', '07/15/23', 'renter'),
('Alice', 'Anderson', '123 Main St', 'alice@example.com', '555-123-4567', true, 'pass123', '07/14/23', 'host'),
('Emma', 'Smith', '456 Oak St', 'emma@example.com', '555-567-8901', true, 'secret789', '07/16/23', 'renter'),
('Sarah', 'Williams', '567 Park Ave', 'sarah@example.com', '555-987-6543', true, 'rent567', '07/15/23', 'host'),
('Michael', 'Brown', '890 Pine Ave', 'michael@example.com', '555-789-1234', true, 'pine123', '07/18/23', 'renter'),
('Ryan', 'Johnson', '890 Sunset Blvd', 'ryan@example.com', '555-567-8901', true, 'sun123', '07/16/23', 'host'),
('Olivia', 'Taylor', '123 Cedar Ln', 'olivia@example.com', '555-234-5678', true, 'cedar234', '07/19/23', 'renter'),
('Linda', 'Clark', '456 Lake Dr', 'linda@example.com', '555-456-7890', true, 'lake456', '07/17/23', 'host'),
('William', 'Harris', '234 Birch Rd', 'william@example.com', '555-345-6789', true, 'birch345', '07/20/23', 'renter'),
('Ava', 'Martinez', '567 Maple Ln', 'ava@example.com', '555-123-4567', true, 'maple123', '07/24/23', 'host'),
('Henry', 'Garcia', '890 Cedar Dr', 'henry@example.com', '555-567-8901', true, 'cedar567', '07/25/23', 'host'),
('Ella', 'Lopez', '567 Willow Ave', 'ella@example.com', '555-345-6789', true, 'willow345', '07/27/23', 'renter'),
('Linda', 'Clark', '456 Lake Dr', 'linda@example.com', '555-456-7890', true, 'lake456', '07/17/23', 'host'),
('James', 'Wilson', '789 Oak Ave', 'james@example.com', '555-345-6789', true, 'oak789', '07/22/23', 'host'),
('Benjamin', 'Gonzalez', '123 Spruce Rd', 'benjamin@example.com', '555-678-9012', true, 'spruce678', '07/28/23', 'renter'),
('Sophie', 'Adams', '456 Elm St', 'sophie@example.com', '555-789-0123', true, 'elm123', '07/21/23', 'host'),
('William', 'Harris', '234 Birch Rd', 'william@example.com', '555-345-6789', true, 'birch345', '07/20/23', 'renter'),
('Sofia', 'Rodriguez', '456 Chestnut Dr', 'sofia@example.com', '555-234-5678', true, 'chestnut234', '07/30/23', 'renter'),
('Grace', 'Hernandez', '234 Birch St', 'grace@example.com', '555-901-2345', true, 'birch901', '07/26/23', 'renter');


INSERT INTO listing (address, size, price, posted_at, type, host, renter, isRented, avg_rating)
VALUES
  ('Storage Unit A', '4x4', 50, '2023-10-15', 'Storage', 1, 2, TRUE, 4),
  ('Storage Unit B', '5x5', 75, '2023-10-20', 'Storage', 2, 3, FALSE, 3),
  ('Storage Unit C', '10x10', 120, '2023-10-25', 'Storage', 3, 4, TRUE, 5),
  ('Storage Unit D', '10x20', 200, '2023-10-30', 'Storage', 4, 5, FALSE, 4);
  ('Storage Unit E', '4x4', 50, '2023-10-15', 'Storage', 5, 6, TRUE, 4),
  ('Storage Unit F', '5x5', 75, '2023-10-20', 'Storage', 5, 3, FALSE, 3),
  ('Storage Unit G', '10x10', 120, '2023-10-25', 'Storage', 2, 1, TRUE, 5),
  ('Storage Unit H', '10x20', 200, '2023-10-30', 'Storage', 1, 2, FALSE, 4);

INSERT INTO availability (listing_id, days_not_available, min_days, max_days)
VALUES
(1, ['07/13/2023', '07/17/2023'], 7, 60),
(2, ['07/13/2023', '07/19/2023'], 2, 30),
(3, ['07/13/2023', '07/17/2023'], 1, 90),
(4, ['07/13/2023', '07/18/2023'], 6, 2023),
(5, ['07/13/2023', '08/21/2023'], 14, 31),
(6, ['07/13/2023', '07/28/2023'], 3, 60),
(7, ['07/13/2023', '07/30/2023'], 1, 30),
(8, ['07/13/2023', '08/13/2023'], 4, 90),
(9, ['07/13/2023', '07/16/2023'], 7, 60),
(10, ['07/13/2023', '07/29/2023'], 1, 60);


//run on terminal to run this files/ restart new
//psql -U postgres -f db/schema.sql
//psql -U postgres -f db/seed.sql