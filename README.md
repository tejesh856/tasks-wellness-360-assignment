<h1 align="center" id="title">tasks wellness 360 assignment</h1>

<p align="center"><img src="https://socialify.git.ci/tejesh856/tasks-wellness-360-assignment/image?description=1&amp;descriptionEditable=A%20Task%20Management%20API%20built%20with%20Node.js%20and%20Express.js%2C%20using%20an%20in-memory%20data%20store.&amp;font=Source%20Code%20Pro&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Solid&amp;stargazers=1&amp;theme=Dark" alt="project-image"></p>

<p id="description">This assignment is a simple Task Management API built with Node.js and Express.js. It provides a RESTful API for managing tasks with an in-memory data store. Users can perform CRUD (Create Read Update Delete) operations and mark tasks as complete. Each task includes properties such as a unique ID (UUID) title description due date status and timestamps for creation and last update.</p>

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   GET /tasks: Retrieve all tasks.
*   GET /tasks/{id}: Retrieve a specific task by ID.
*   POST /tasks: Create a new task.
*   PUT /tasks/{id}: Update an existing task.
*   DELETE /tasks/{id}: Delete a task.
*   PATCH /tasks/{id}/complete: Mark a task as complete.
*   Tasks have properties: id (UUID) title description due\_date status created\_at updated\_at.
*   Tasks are stored in-memory.
*   Basic error handling and input validation.
*   Uses appropriate HTTP status codes.
*   Unit test implemented for the POST /tasks endpoint.

<h2>🛠️ Installation Steps:</h2>

<p>1. First clone the repository to your local machine</p>

```
git clone https://github.com/tejesh856/tasks-wellness-360-assignment.git
```

<p>2. Change into the project directory:</p>

```
cd your-repository
```

<p>3. run the following command to install all required dependencies listed in package.json:</p>

```
npm install
```

<p>4. To start the server run:</p>

```
npm start
```

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   nodejs
*   javascript
*   express.js
