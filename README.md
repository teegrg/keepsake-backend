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
    PG_USER=<insert_postgreSQL_user>    # Replace this with your PostgreSQL user (e.g., postgres or a specific user)
    
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

## Listing Routes

- **GET** - `/search`: Performs a search for listings.
    - **Response:** Returns search results sorted by ascending order or an error if the search fails.
- **GET** - `/listings`: Retrieves all listings in the database.
    - **Response:** Returns a JSON array containing details of all listings.
- **GET** - `/listings/:id`: Retrieves a listing by its ID.
    - **Response:** Returns the details of the requested listing if found.
- **POST** - `/listings     `: Creates a new listing.
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