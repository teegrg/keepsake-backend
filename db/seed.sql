\c keepsake_dev;


INSERT INTO users (firstName, lastName, address, email, phone, isVerified, password, created_at, role, image)
VALUES
('Anita', 'Jazz', '1400 Pennsylvania', 'jerry@gmail.com', '646-007-0000', true, 'password123', '07/13/23', 'host', 'https://images.squarespace-cdn.com/content/v1/6091c3e4f5f6071721c43f77/1683711745725-O1R2JQOY9II73V828PYS/Midjourney+Headshot.jpg'),
('John', 'Doe', '789 Elm St', 'johnw@example.com', '555-123-4567', true, 'secure456', '07/15/23', 'renter', 'https://www.zdnet.com/a/img/resize/340751cf020716892a48de5bde0974eb2737031f/2023/07/17/f6c8e458-e4ee-4bba-8e98-4d17fd8fa11e/img-7506.jpg?auto=webp&width=740'),
('Alice', 'Anderson', '123 Main St', 'alice@example.com', '555-123-4567', true, 'pass123', '07/14/23', 'host', 'https://c.vanceai.com/assets/images/common/introduce_23-2c356678ee.jpg'),
('Emma', 'Smith', '456 Oak St', 'emma@example.com', '555-567-8901', true, 'secret789', '07/16/23', 'renter', 'https://static.generated.photos/vue-static/face-generator/landing/demo-previews/age.jpg'),
('Sarah', 'Williams', '567 Park Ave', 'sarah@example.com', '555-987-6543', true, 'rent567', '07/15/23', 'host', 'https://www.aragon.ai/_next/image?url=%2Fimages%2Fheadshots%2Fmelissa-output.png&w=640&q=80'),
('Michael', 'Brown', '890 Pine Ave', 'michael@example.com', '555-789-1234', true, 'pine123', '07/18/23', 'renter', 'https://static.generated.photos/vue-static/face-generator/landing/wall/20.jpg'),
('Ryan', 'Johnson', '890 Sunset Blvd', 'ryan@example.com', '555-567-8901', true, 'sun123', '07/16/23', 'host', 'https://img.freepik.com/premium-photo/generative-ai-headshot-portrait-two-black-men-siblings-smiling_108985-1903.jpg'),
('Olivia', 'Taylor', '123 Cedar Ln', 'olivia@example.com', '555-234-5678', true, 'cedar234', '07/19/23', 'renter', 'https://static.generated.photos/vue-static/face-generator/landing/wall/4.jpg'),
('Linda', 'Clark', '456 Lake Dr', 'linda@example.com', '555-456-7890', true, 'lake456', '07/17/23', 'host', 'https://media.licdn.com/dms/image/D4E12AQHmxS2KAqsDvw/article-inline_image-shrink_1000_1488/0/1680041957472?e=1704326400&v=beta&t=Pm0dnfYsMnsFlZ9ONqYoVvltBj0yWndwx-mkVBeTL5w'),
('William', 'Harris', '234 Birch Rd', 'william@example.com', '555-345-6789', true, 'birch345', '07/20/23', 'renter', 'https://images.nightcafe.studio//assets/man-in-suit.jpg?tr=w-1600,c-at_max'),
('Ava', 'Martinez', '567 Maple Ln', 'ava@example.com', '555-123-4567', true, 'maple123', '07/24/23', 'host', 'https://images.squarespace-cdn.com/content/v1/55117645e4b0a2f3e886a6aa/1653509322812-YGXLQ3BR08NCJTTF9A6H/Portraits-031.jpg'),
('Henry', 'Garcia', '890 Cedar Dr', 'henry@example.com', '555-567-8901', true, 'cedar567', '07/25/23', 'host', 'https://www.schoolfablab.com/wp-content/uploads/2019/09/000016.jpg'),
('Ella', 'Lopez', '567 Willow Ave', 'ella@example.com', '555-345-6789', true, 'willow345', '07/27/23', 'renter', 'https://static.generated.photos/vue-static/face-generator/landing/demo-previews/makeup.jpg'),
('Linda', 'Clark', '456 Lake Dr', 'linda2@example.com', '555-456-7890', true, 'lake456', '07/17/23', 'host', 'https://static.vecteezy.com/system/resources/previews/024/621/480/large_2x/beautiful-young-woman-exudes-confidence-in-illuminated-studio-headshot-generated-by-ai-free-photo.jpg'),
('James', 'Wilson', '789 Oak Ave', 'james@example.com', '555-345-6789', true, 'oak789', '07/22/23', 'host', 'https://images.squarespace-cdn.com/content/v1/5ec689480cc22c2d441e152f/1597241102981-LPADHV8BTNNEZVL5TJ0Z/family-pet-photography-greenwich-ct-studio-photographer.jpg'),
('Benjamin', 'Gonzalez', '123 Spruce Rd', 'benjamin@example.com', '555-678-9012', true, 'spruce678', '07/28/23', 'renter', 'https://cdn.secta.ai/tmp/marko-headshot.jpeg'),
('Sophie', 'Adams', '456 Elm St', 'sophie@example.com', '555-789-0123', true, 'elm123', '07/21/23', 'host', 'https://i.pinimg.com/originals/55/3d/1d/553d1d1eb6f879624dd5f8753e88fa8e.jpg'),
('William', 'Harris', '234 Birch Rd', 'william2@example.com', '555-345-6789', true, 'birch345', '07/20/23', 'renter', 'https://annelordphotography.com/wp-content/uploads/2020/12/anne-lord-pet-photography-northern-virginia.jpg'),
('Sofia', 'Rodriguez', '456 Chestnut Dr', 'sofia@example.com', '555-234-5678', true, 'chestnut234', '07/30/23', 'renter', 'https://samanthabrandon.com/wp-content/uploads/2023/04/sam-.png'),
('Grace', 'Hernandez', '234 Birch St', 'grace@example.com', '555-901-2345', true, 'birch901', '07/26/23', 'renter', 'https://ph-files.imgix.net/824107d2-4381-4a81-bff7-a569e1b37b72.png?auto=format&fit=crop');


INSERT INTO listing (street, apt, city, state, zip, size, price, posted_at, type, host, renter, is_rented, avg_rating, description, image)
VALUES
  ('892 Gerard Ave', 'APT 2F', 'Bronx', 'NY', '10452', '4x4', 50, '2023-10-15', 'Storage', 1, 2, TRUE, 4,'It is big enough for suitcase’s and or clothes.', 'https://i1.wp.com/simplyalignedhome.com/wp-content/uploads/2020/02/Small-closet-with-wire-shelving-removed-scaled.jpg?fit=770%2C1024'),
  ('910 Grand Concourse', 'Flr 2', 'Bronx', 'NY', '10451', '5x5', 75, '2023-10-20', 'Storage', 2, 3, FALSE, 3, 'Max safe and super secure safe box that can hold documents and valuables', 'https://static.wixstatic.com/media/ca2c56_6bb2e8d868154adc96923e469a9b8017~mv2.jpeg/v1/fill/w_640,h_896,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ca2c56_6bb2e8d868154adc96923e469a9b8017~mv2.jpeg'),
  ('994 Southern Blvd', 'APT 3C', 'Bronx', 'NY', '10459', '10x10', 120, '2023-10-25', 'Storage', 3, 4, TRUE, 5,'This is a gated parking lot located outside of the building without cover. Please long term parking only.', 'https://2.bp.blogspot.com/-Uc9WayxakFg/Trgr8_mgryI/AAAAAAAADV4/58CbVYgRxGw/s1600/blog.jpg'),
  ('170 E 94th St', 'APT 5D', 'New York', 'NY', '10128', '10x20', 200, '2023-10-30', 'Storage', 4, 5, FALSE, 4,'Large open lot fits a truck or cars. This is safe and accessible neighborhood. This lot is secure and has an extra gate.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3j6GzsGPqo9rCYCA-PipTv0zLBK_tNr9Ow&usqp=CAU'),
  ('330 E 74th St', 'APT 5L', 'New York', 'NY', '10021', '4x4', 50, '2023-10-15', 'Storage', 5, 6, TRUE, 4, 'For long term only, small space, weather proof.', 'https://live.staticflickr.com/8039/8060796754_b479c6c58d_b.jpg'),
  ('413 E 50th St', 'APT 10L', 'New York', 'NY', '10022', '5x5', 75, '2023-10-20', 'Storage', 5, 3, FALSE, 3, 'Perfect for guitar or similar size instruments or stuff.', 'https://2.bp.blogspot.com/-Uc9WayxakFg/Trgr8_mgryI/AAAAAAAADV4/58CbVYgRxGw/s1600/blog.jpg'),
  ('426 11th Ave', 'Unit 5', 'New York', 'NY', '10018', '10x10', 120, '2023-10-25', 'Storage', 2, 1, TRUE, 5, 'This place is in basement.Long term prefered.Appoinment is needed for access.', 'https://images.hgmsites.net/lrg/empty-garage_100321409_l.jpg'),
  ('232 W 14th St', 'Floor 3', 'New York', 'NY', '10011', '10x9', 20, '2023-10-25', 'Storage', 2, 1, FALSE, 5, 'Decent space to hold stuff you dont want to get rid off.This place is gated and under constant camera view.Secure.', 'https://blog.markzproperties.com/hubfs/unfinished-basement.jpg'),
  ('104-36 37th Dr', 'Apt 9', 'Queens', 'NY', '11368', '8x6', 70, '2023-10-31', 'Storage', 7, 8, FALSE, 4, 'Longer the lease better the price.Any question contact me.', 'https://images.squarespace-cdn.com/content/v1/529aa1d6e4b0665935f83a70/1527717294092-V2BWQGCI0MH15CCPQO2G/Empty+coat+closets+with+hangers+ready+for+guests'),
  ('2520 E 17th St', 'Apt 9', 'Brooklyn', 'NY', '11235', '20x10', 200, '2023-10-30', 'Storage', 1, 2, FALSE, 4, 'Garage spot for long term parking. Not for daily coming and going. Car will be inside the garage but blocked from exit. Ideal for someone looking to store their car or park long term to fly out of JFK. The entrance and exit will be monitored by video. Please reach out if you have any questions.', 'https://media.istockphoto.com/id/178594527/photo/clean-garage.jpg?s=612x612&w=0&k=20&c=0pMNJ53-lcC2kiMgNJSyqsUZVThnDRksbHd751mzoUk=');

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


INSERT INTO availability (listing_id, min_days, max_days, after_hours, appointment_needed, private)
VALUES
  (1, 2, 7, TRUE, FALSE, FALSE),
  (2, 3, 10, FALSE, TRUE, FALSE),
  (3, 1, 5, TRUE, TRUE, FALSE),
  (4, 2, 14, FALSE, FALSE, TRUE),
  (5, 1, 30, FALSE, FALSE, TRUE),
  (6, 4, 10, TRUE, TRUE, TRUE),
  (7, 2, 5, FALSE, FALSE, FALSE),
  (8, 1, 3, TRUE, TRUE, TRUE),
  (9, 3, 7, FALSE, TRUE, FALSE),
  (10, 2, 14, TRUE, FALSE, TRUE);


INSERT INTO property_type_lookup (property_type)
VALUES
('closet'),
('safebox'),
('parking lot'),
('backyard'),
('alleyway'),
('closet'),
('basement'),
('alleyway'),
('closet'),
('garage');

INSERT INTO blackoutDates (listing_id, start_date, end_date) VALUES
(1, '2023-11-15', '2023-11-20'),
(2, '2023-12-01', '2023-12-05'),
(3, '2023-11-25', '2023-11-27');

INSERT INTO booked (user_id, listing_id, blackoutdate_id, total, status, request)
VALUES
(2, 1, 1, 75.00, 'confirmed', 'Need access on specific hours'),
(3, 2, 2, 120.00, 'pending', 'Require appointment before access'),
(4, 3, 3, 150.00, 'confirmed', 'Long-term storage needed'),
(5, 4, NULL, 100.00, 'confirmed', 'Short-term parking requirement'),
(6, 5, NULL, 50.00, 'cancelled', 'Change of plans'),
(7, 6, NULL, 75.00, 'confirmed', 'Require access on weekends'),
(8, 7, NULL, 90.00, 'pending', 'Interested in long-term rental'),
(9, 8, NULL, 30.00, 'confirmed', 'Short-term storage needed'),
(10, 9, NULL, 80.00, 'pending', 'Appointment for inspection'),
(11, 10, NULL, 200.00, 'confirmed', 'Long-term parking required');


-- //run on terminal to run this files/ restart new
-- //psql -U postgres -f db/schema.sql
-- //psql -U postgres -f db/seed.sql