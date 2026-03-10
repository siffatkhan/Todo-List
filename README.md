# To Do List App

A simple React to do list app where users can create and manage tasks.  
Each user has their own list and tasks are saved in the browser using local storage.

Live Demo  
https://todolistbysifat.netlify.app/

Tech Stack
- React
- JavaScript ES6
- HTML
- CSS
- Browser Local Storage

Features
- Add new tasks
- Delete tasks
- Mark tasks as complete or incomplete
- Separate task list for each user
- Data saved in browser local storage
- Tasks remain saved after refreshing the page

How It Works
- User enters a username.
- The app loads that user's task list from local storage.
- Tasks can be added, deleted, or marked as done.
- Each user has their own separate stored list.

Run Project Locally

1. Clone the repository

git clone <repository-url>

2. Move into the project folder

cd to-do-item-list-app-final

3. Install dependencies

npm install

4. Start the development server

npm start

5. Open in browser

http://localhost:3000

Build for Production

npm run build

Project Structure

src
components
App.jsx
TakeInput.jsx
ToDoItem.jsx
styles.css
index.js

Data Storage

The app uses browser Local Storage.

todoApp_currentUser  
Stores the current logged in username.

todoList_username  
Stores the tasks for that specific user.

Example

[
  { text: "Buy groceries", done: false },
  { text: "Study React", done: true }
]
