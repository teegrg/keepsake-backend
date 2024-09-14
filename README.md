### Requirements
Ensure you have these ready
* Sign up for an account on **Stripe**
* **Node.js**: This application requires Node.js runtime environment to execute JavaScript code on the server side
 

### Getting started

1. **Clone the Repository**: Use the following command to clone the repository:
     ```bash
       git clone <repository_url>
     ```

2. **Install Dependencies**: Run this command to install dependencies:
    ```bash
    npm install
   ```
   
3. **Configure App**: Add needed variable in the environmental file:
    ```bash
    PORT=3003
    PG_HOST=<insert_postgreSQL_host_url> # Replace this with your PostgreSQL host (e.g., localhost or a remote database URL)
    PG_PORT=5432 # Replace this with the actual PostgreSQL port (5432 is the default)
    PG_DATABASE=keepsake_dev
    PG_USER=<insert_postgreSQL_user> # Replace this with your PostgreSQL user (e.g., postgres or a specific user)
    CLIENT_URL = <front-end link>
    SERVER_URL = <back-end link>
    SECRET = <Any passcode of your choice>
    STRIPE_SECRET_KEY = <STRIPE API KEY>
    STRIPE_PUBLIC_KEY = <STRIPE API KEY>
    ```
4. **Intialize Database**: Add data to database
    ```bash
    psql -d $DB_URL -f db/schema.sql
    psql -d $DB_URL -f db/seeds.sql
    ```

4. **Start**: Start the server using:
    ```bash
    npm start
   ```

Visit [http://localhost:8000](http://localhost:8000) to access the server.

**Note:** The default port is set to `8000`.


### Routes / Methods

- **GET** - `/`: Health check - ensures the server is running.
    - **Response:** Returns a status of 200 OK if the server is running.

### User Routes

- **POST** - `/register`: Registers a new user.
    - **Request Body:** Expects a JSON payload with user details.
    - **Response:** Returns the registered user or validation error.
- **POST** - `/login`: Logs in an existing user.
    - **Request Body:** Expects a JSON payload with user credentials.
    - **Response:** Returns a session token or authentication error.
- **GET** - `/protected`: Accesses a protected route.
    - **Response:** Returns protected content if authenticated.
- **GET** - `/logout`: Logs out the user and ends the session.
    - **Response:** Returns a confirmation of logout.
- **GET** - `/users`: Retrieves all users in the database.
    - **Response:** Returns a JSON array containing details of all users.
- **GET** - `/users/:id`: Retrieves a user by their ID.
    - **Response:** Returns the details of the requested user if found.
- **GET** - `/users/:id/listings`: Retrieves a listings of user ID.
    - **Response:** Returns all the listings of User ID.
- **PUT** - `/users/:id`: Updates an existing user by their ID.
    - **Request Body:** Expects a JSON payload with updated user details.
    - **Response:** Returns the updated user.
- **DELETE** - `/users/:id`: Deletes a user by their ID.
    - **Response:** Returns a confirmation of deletion or error message if the user is not found.
- **GET** - `/users/:id/listings`: Retrieves all listings of a user by their ID.
    - **Response:** Returns a JSON array containing all listings of the specified user.
- **GET** - `/users/:userId/bookings`: Retrieves all bookings for a user by their ID.
    - **Response:** Returns a JSON array of bookings or an error if none are found.

### User Review Routes
- **GET** - `/users/:userId/reviews`: Retrieves reviews for a specific user.
    - **Response:** Returns the reviews of the requested user if found, or a `404` error if not.
- **POST** - `/users/:userId/reviews`: Creates a new review.
    - **Request Body:** Expects a JSON payload with review details.
    - **Response:** Returns the created review or a `400` error if the request fails.
- **DELETE** - `/users/:userId/reviews/:id`: Deletes a review by its ID.
    - **Response:** Returns a confirmation of deletion or a `404` error if the review is not found.
- **PUT** - `/users/:userId/reviews/:id`: Updates a review by its ID.
    - **Request Body:** Expects a JSON payload with updated review details.
    - **Response:** Returns the updated review.

### Listing Routes

- **GET** - `/search`: Performs a search for listings.
    - **Response:** Returns search results sorted by ascending order or an error if the search fails.
- **GET** - `/listings`: Retrieves all listings in the database.
    - **Response:** Returns a JSON array containing details of all listings.
- **GET** - `/listings/:id`: Retrieves a listing by its ID.
    - **Response:** Returns the details of the requested listing if found.
- **POST** - `/listings`: Creates a new listing.
    - **Request Body:** Expects a JSON payload with listing details.
    - **Response:** Returns the created listing or validation error.
- **DELETE** - `/listings/:id`: Deletes a listing by its ID.
    - **Response:** Returns a confirmation of deletion or error message if the listing is not found.
- **PUT** - `/listings/:id`: Updates a listing by its ID.
    - **Request Body:** Expects a JSON payload with updated listing details.
    - **Response:** Returns the updated listing.
- **GET** - `/:listingId/blackout`: Retrieves blackout dates for a listing.
    - **Response:** Returns blackout dates for the requested listing or an error if none are found.
- **GET** - `/:listingId/bookings`: Retrieves all bookings for a listing.
    - **Response:** Returns a JSON array of bookings or an error if none are found.

### Booking Routes

- **GET** - `/bookings`: Retrieves all bookings.
    - **Response:** Returns a JSON array of all bookings.
- **GET** - `/bookings/:listingId`: Retrieves bookings for a specific listing by its ID.
    - **Response:** Returns the bookings of the specified listing or an error if not found.
- **GET** - `/bookings/:bookingId`: Retrieves a booking by its ID.
    - **Response:** Returns the details of the requested booking or an error if not found.
- **POST** - `/bookings`: Creates a new booking.
    - **Request Body:** Expects a JSON payload with booking details including `user_id`, `listing_id`, `blackoutdate_id`, `total`, `status`, and `request`.
    - **Response:** Returns the created booking.
- **DELETE** - `/bookings/:id`: Deletes a booking by its ID.
    - **Response:** Returns a confirmation of deletion or an error if the booking is not found.
- **PUT** - `/bookings/:id`: Updates a booking by its ID.
    - **Request Body:** Expects a JSON payload with updated booking details including `user_id`, `listing_id`, `blackoutdate_id`, `total`, `status`, and `request`.
    - **Response:** Returns the updated booking.
- **GET** - `/bookings/user/:userId`: Retrieves bookings for a specific user by their ID.
    - **Response:** Returns the user's bookings or an error if not found.
- **GET** - `/bookings/user/:userId/details`: Retrieves detailed bookings for a user, including information about the booking, the renter, the listing, and blackout dates.
    - **Response:** Returns a JSON object with booking details, including the listing's host and blackout date details.

### Blackout Date 
- **GET** - `/blackout`: Retrieve all blackout dates.
    - **Response:** Returns a JSON array of all blackout dates. If no blackout dates are found, returns a `404` with an error message.
- **GET** - `/blackout/:blackoutId`: Retrieve a specific blackout date by its ID.
    - **Response:** Returns the blackout date with the provided `blackoutId`. If the blackout date is not found, returns a `404` error.
- **POST** - `/blackout`: Create a new blackout date.
    - **Request Body:** Expects a JSON payload with blackout date details.
    - **Response:** Returns the newly created blackout date. If creation fails, returns a `400` error with details.
- **DELETE** - `/blackout/:blackoutId`: Delete a specific blackout date by its ID.
    - **Response:** Returns the deleted blackout date if successful. If the blackout date is not found, returns a `404` error.
- **PUT** - `/blackout/:blackoutId`: Update a specific blackout date by its ID.
    - **Request Body:** Expects a JSON payload with updated blackout date details.
    - **Response:** Returns the updated blackout date if successful. If the blackout date is not found, returns a `404` error.
- **GET** - `/blackout/listing/:listingId`: Retrieve blackout dates for a specific listing.
    - **Response:** Returns a JSON array of blackout dates for the listing with the provided `listingId`. If no blackout dates are found or an error occurs, returns a `500` error.

### Availability

- **GET** - `/listings/:listingId/availability`: Retrieve availability for a specific listing.
    - **Query Parameter:** `listingId` - The ID of the listing for which availability is being requested.
    - **Response:** Returns the availability details for the listing. If no availability is found, returns a `404` error with a message.