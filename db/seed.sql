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

INSERT INTO 

//run on terminal to run this files/ restart new
//psql -U postgres -f db/schema.sql
//psql -U postgres -f db/seed.sql