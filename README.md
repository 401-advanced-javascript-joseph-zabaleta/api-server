# Class 06-09: Dynamic API Server

## Overview
An Express/Node.js based server designed to be a “model agnostic” REST API server, which can perform CRUD operations on any data model

Total Phases: 4
Current Phase 4


## Feature Tasks and Requirements

### Phase 1: Build a working API Server using json-server
- [x] Install json-server globally on your computer
- [x] Create a folder called data with a db.json file, with containers for your data models
    - `{ "categories" : [], "products": [] }`

Start json-server from within your working folder and “watch” your database file
- [x] `json-server --watch ./data/db.json`

Your api will automatically respond to the following endpoints:
- `/categories` GET, POST
- `/categories/:id/` PUT, DELETE
- `/products` GET, POST
- `/products/:id/` PUT, DELETE

- Use `httpie` (command line), Insomnia, `Postman`, or any other “ReST” testing application to POST some categories and products, using JSON, into your API so that you have some data in there.
    - Note that json-server does not validate your data, it’ll just save whatever you send it. Be sure that you obey these rules for your data as you create/update it:
        - Data models should contain the following fields:
            - `categories`
                - [x] `id`, `name`, `display_name`, `description`
            - `products`
                - [x] `id`, `category`, `name`, `display_name`, `description`

- Using your ReST testing tool, also confirm that you can UPDATE, DELETE, and GET records for both categories and products from your API using the routes above
    - [x] GET ALL: GET - http://localhost:3000/categories
    - [x] GET SOME: GET - http://localhost:3000/categories?category=electronics // this is invalid param.
    - [x] GET ONE: GET - http://localhost:3000/categories/1
    - [x] UPDATE ONE: PATCH or PUT - http://localhost:3000/categories/1
    - [x] DELETE ONE: DELETE - http://localhost:3000/categories/1
- [x] Confirm that your API’s output matches exactly the specifications given in the requirements document

### Phase 2: Start of an Express API
- Create an express server, using 2 files
    - [x] `index.js` at the root of your repository, which will act as the “entry point” to your server.
        - [x] should require `lib/server.js` // followed proposed business structure `lib/models/server.js`
        - [x] should require `dotenv`, reading `PORT` from your `.env` file
        - [x] It should call the `.start()` method from the server with the PORT set in your environment
        - [x] `lib/server.js` which will serve as your server ‘module’ … will contain all of the logic for the server
            - [x] Must export an object with a `start()` method (it should not start on it’s own)

- Create a middleware folder and add 4 middleware modules to it:
- [x] `timestamp.js`
    - [x] Put the current timestamp (formatted like a proper date) on the `request` object in a property called `requestTime`
    - [x] Import this into your server and set it up to run at the application level for all routes
- [x] `logger.js`
    - [x] Execute a `console.log()` containing the request `path`, `method`, and the `requestTime` property of the request object
    - [x] Import this into your server and set it up to run at the application level for all routes
- [x] `404.js`
    - [x] Sends a 404/Not-Found message as the response (does not call `.next()`)
    - [x] Import this into your server and set it up to be “used” after your other routes
- [x] `500.js`
    - [x] Sends a 500/Server Error message as the response (does not call `.next()`)
    - [x] Import this into your server and set it up to be “used” as the last route

- Create `routes` within your `server.js` for both “categories” and “products”
    - The “data” for these routes will be contained within the router itself, as an in-memory object or array of objects (your choice)
    - Define CRUD routes to handle requests for both categories and products that will use this in-memory “database”
        - [x] `app.post('/products', (req, res) => {})` … uses the object in the body of the request to create a new “record”
        - [x] `app.get('/products', (req, res) => {})`
        - [x] `app.get('/products/:id', (req, res) => {})`
        - [x] `app.put('/products/:id', (req, res) => {})` … uses the object in the body to replace the record with the :id specified
        - [x] `app.delete('/products/:id', (req, res) => {})` … deletes the record with the :id specified
        - [x] … and repeat for categories

- Note that as you build and test this server, your data will be lost every time you restart the server.

### Phase 3: Modularizing and Persistence
- Update the `index.js`
    - [x] Require the mongoose library
    - [x] Prior to calling `start()` on your imported server module, it connect to Mongo, via `mongoose`
- Prepare the `server.js` for modularization
    - [x] Require the category and product router modules (see the bullet points below)
    - [x] `app.use()` each them in your app so that your routes will respond
- Write new routing modules for your server
    - [x] Create the files/folders: `routes/categories.js` and `routes/product.js`
    - [x] Create a router module for each of your data types (in each)
        - [x] Create an instance of `express.Router()` and export it
        - [x] Move the appropriate route definitions and route handlers from `server.js` here
        - [x] Redefine the definitions as `route` definitions (not `app` definitions)
        - [x] Confirm that your server works as before, but now modular
        - [x] Begin the conversion from memory data to persistent data …
            - [x] Import and initialize the appropriate Mongoose Collection (see bullet points below)
            - [x] In your handler methods, rather than change your in-memory data store, call the appropriate model methods
- [x] Add Persistence with Mongoose Collections
    - Work in `lib/models/categories` and `lib/models/products`
    - [x] For each, create both a schema and collection file
        - i.e. `categories.schema.js` and `categories.collection.js`
- The schema file should define your data model as a Mongoose schema
- The collection file should be a class that:
    - [x] Imports the schema
    - Exports a class with CRUD methods, coded to work with your schema
        - [x] `read()` performs a `find()` query in your schema
        - [x] `create()` performs a `save()` query in your schema for a new record
        - [x] `update()` performs a `findOneByIdAndUpdate()` operation in your schema for an existing record
        - [x] `delete()` performs a `findOneByIdAndDelete()` in your schema for a new record

### Phase 4:
- [x] Create a single router module that will work for any data model, rather than having separate router modules for every data module.
- [x] Create a single “mongo” collection class that every data model can extend from, keeping the CRUD logic for our models very DRY

## Implementation Notes:


## User Acceptance Tests

### Testing
- [x] Use `supergoose` and `supertest` to easily test your server without having to start it.

- Write unit tests for the middleware
    - These should be testable in isolation



## Authors
- Software Developer: Joseph Zabaleta
  - [Official Github](https://github.com/joseph-zabaleta)

## Collaborations
- none

## License
This project is under the MIT License.

## Acknowledgements / Resources
- none
