# Kanban App - Client

![Kanban App Screenshot](![Kanban dark](https://github.com/Alexandre-ead-dev/Kanban/assets/94064067/1192df46-7efe-42d1-b7e0-45fd03cc2da8)
) <!-- Replace with your actual screenshot -->

## Description

The client part of this project is a Kanban app built using ReactJS and ViteJS. The app utilizes Tailwind CSS. The Kanban app is designed to help users manage and organize tasks in a visual board layout, with columns representing different stages of a workflow. Users can create, edit, and delete tasks, drag tasks between columns, and set task statuses using this intuitive and user-friendly app. Kanban task management web app challenge from Frontend Mentor.

## Table of Contents

- [Installation](#installation)
- [Components](#components)
- [Hooks](#hooks)
- [Modals](#modals)
- [Redux](#redux)
- [API](#api)

## Installation

1. Clone the repository: `git clone https://github.com/your-username/kanban-app-client.git`
2. Navigate to the project directory: `cd kanban-app-client`
3. Install dependencies: `npm install`

## Components

- **Center.jsx**: The `Center` component is responsible for rendering the central area of the Kanban board. It displays columns and tasks within those columns.

- **Checklist.jsx**: The `Checklist` component represents a single checklist item for a task. Users can mark checklists as completed or not completed.

- **Column.jsx**: The `Column` component represents a single column in the Kanban board. Each column contains tasks related to a specific stage in the workflow.

- **EllipsisMenu.jsx**: The `EllipsisMenu` component renders an ellipsis menu icon, which, when clicked, displays additional options for a task (e.g., edit, delete).

- **EmptyBoard.jsx**: The `EmptyBoard` component is rendered when there are no boards available. It provides an option to add a new board.

- **Header.jsx**: The `Header` component represents the header section of the Kanban app. It includes buttons for adding new boards and tasks.

- **HeaderDropdown.jsx**: The `HeaderDropdown` component renders a dropdown menu within the header, providing options for board-related actions (e.g., add, edit, delete).

- **Sidebar.jsx**: The `Sidebar` component displays a sidebar with navigation options, allowing users to switch between different boards and an option to switch to dark mode.

- **Task.jsx**: The `Task` component represents a single task card in the Kanban board. It displays task details such as title, description, and checklists.

## Hooks

- **darkMode.js**: The `darkMode` hook manages the state for enabling and disabling the dark mode feature in the app.

## Modals

- **AddEditBoardModal.jsx**: The `AddEditBoardModal` component is a modal that allows users to add or edit a board. It includes input fields for the board's name and columns.

- **AddEditTaskModal.jsx**: The `AddEditTaskModal` component is a modal that allows users to add or edit a task. It includes input fields for the task's title, description, and checklists.

- **DeleteModal.jsx**: The `DeleteModal` component is a modal that confirms the deletion of a board or task when triggered.

- **TaskModal.jsx**: The `TaskModal` component is a modal that displays detailed information about a specific task when triggered.

## Redux Reducers

- **BoardSlice.js**: The `BoardSlice` reducer manages the state related to boards and tasks in the Kanban app. It includes actions for adding, editing, and deleting boards and tasks. Additionally, it handles actions for setting a board as active, managing task status, and updating task positions when dragged between columns. The reducer also handles fetching boards from the backend API using Redux Thunk and updating the state accordingly.

##API
The API module in this project provides functions to interact with the backend server for various CRUD operations related to boards and tasks. It uses Axios to make HTTP requests to the backend API.

#Endpoints

-saveBoardData(data): Sends a POST request to create a new board on the server.
-fetchBoardsFromBackend(): Sends a GET request to fetch all boards from the server.
-deleteBoardById(boardId): Sends a DELETE request to delete a specific board from the server.
-updateBoardData(boardId, updatedData): Sends a PUT request to update an existing board on the server.
-addTaskToBoard(boardId, newColIndex, taskData): Sends a POST request to add a new task to a board on the server.
-editTaskOnBoard(boardId, prevColIndex, newColIndex, taskIndex, taskData): Sends a PUT request to update an existing task on the server.
-deleteTaskFromBoard(boardId, colIndex, taskIndex): Sends a DELETE request to delete a specific task from a board on the server.
-dragTaskOnBoard(boardId, dragData): Sends a PUT request to update the position of a task on the server when dragged between columns.
-setChecklistCompletedOnBoard(boardId, colIndex, taskIndex, checklistIndex, isCompleted): Sends a PUT request to update the completion status of a checklist item for a specific task on the server.
-setTaskStatusOnBoard(boardId, colIndex, taskIndex, status, newColIndex): Sends a PUT request to update the status of a specific task and potentially move it to a different column on the server.
Note: Replace API_BASE_URL in the code with the actual URL of your backend server, and ensure appropriate error handling for API request failures.






