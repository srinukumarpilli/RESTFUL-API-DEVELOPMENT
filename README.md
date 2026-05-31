# RESTFUL-API-DEVELOPMENT

*COMPANY*: CODTECH IT SOLUTIONS PRIVATE LIMITED

*NAME*: PILLI SRINU KUMAR

*INTERN ID*: CITS69

*DOMAIN*: SOFTWARE DEVELOPMENT

*DURATIONS*: 4 WEEKS

*MENTOR*: NEELA SANTOSH KUMAR

##Introduction

A RESTful API (Representational State Transfer Application Programming Interface) is a set of rules that allows communication between client applications and servers using HTTP methods such as GET, POST, PUT, and DELETE.

In this project, a Library Management System API was developed to manage book information. Users can add new books, view existing books, update book details, and delete books through API endpoints.

The API returns data in JSON format, which is widely used in modern web applications for data exchange.

Technologies Used

The following technologies were used during the development of this project:

Node.js
Express.js
Visual Studio Code
Postman
JavaScript
JSON
Software Requirements
Required Software
Visual Studio Code
Node.js
Postman
Web Browser
Node Packages

The following package was installed:

npm install express

Project Structure

The project contains the following files:

task2-api/

├── node_modules/

├── package.json

└── server.js

Implementation Process
Step 1: Project Setup

A new project folder named "task2-api" was created and opened in Visual Studio Code.

The Node.js project was initialized using:

npm init -y

This generated the package.json file.

Step 2: Installing Express.js

Express.js was installed using:

npm install express

Express.js was used to create the web server and API routes.

Step 3: Creating the Server

A file named server.js was created.

The Express server was configured to:

Receive HTTP requests
Process API routes
Return JSON responses

The server was configured to run on port 3000.

Step 4: Creating Book Data

An array was used to store book information.

Each book contains:

ID
Title
Author

Example:

{
"id": 1,
"title": "JavaScript Basics",
"author": "John"
}

Step 5: Implementing CRUD Operations
Create Operation (POST)

The POST endpoint allows users to add a new book.

Endpoint:

POST /books

Purpose:

Adds a new book to the collection.

Read Operation (GET)

The GET endpoint retrieves books.

Endpoints:

GET /books

GET /books/

Purpose:

Displays all books or a specific book.

Update Operation (PUT)

The PUT endpoint updates existing book information.

Endpoint:

PUT /books/

Purpose:

Modifies book details such as title and author.

Delete Operation (DELETE)

The DELETE endpoint removes a book.

Endpoint:

DELETE /books/

Purpose:

Deletes the selected book from the collection.

API Testing

The API was tested using Postman.

Testing Performed
Added a new book using POST request.
Retrieved all books using GET request.
Retrieved a specific book using GET by ID.
Updated book information using PUT request.
Deleted a book using DELETE request.

All requests returned successful JSON responses.

Features of the Project
RESTful API Architecture
CRUD Operations
JSON Data Handling
Express.js Routing
API Testing with Postman
Beginner-Friendly Implementation
Challenges Faced
Understanding API Routes

Initially, it was difficult to understand how API routes work.

Solution:

Practiced GET, POST, PUT, and DELETE methods and understood their functionality.

Testing API Requests

Configuring requests in Postman was challenging at first.

Solution:

Learned how to send JSON data and interpret API responses.

Error Handling

Some requests initially returned errors due to incorrect URLs.

Solution:

Verified endpoints and corrected route paths.

Learning Outcomes

Through this project, I learned:

Basics of Backend Development
Working with Node.js and Express.js
REST API Architecture
CRUD Operations
JSON Data Handling
API Testing Using Postman
Server Configuration and Routing
Results

The RESTful API for the Library Management System was successfully developed and tested. All CRUD operations worked correctly, and the API returned valid JSON responses. The project met all the required objectives and demonstrated the practical implementation of backend development concepts.

#OUTPUT

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/ebcebd08-ba97-40e8-8f6e-695136014e10" />
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/6480823d-df67-4493-bfcb-021f76059d75" />
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/fa76ffd6-f71b-492d-b2e1-154bea6ed4f3" />
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/8d890149-0b8e-4a6b-af3c-ae391f7decff" />

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/31e0ca8d-4652-46e6-8e42-883d3d5ca475" />

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/9a4b6ae3-b7ae-47bb-9715-5b4b96830f8f" />
