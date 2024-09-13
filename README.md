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