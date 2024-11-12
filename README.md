Porject-URL:https://roadmap.sh/projects/task-tracker-js
Task Tracker Application
This is a simple Task Tracker app built with HTML, CSS, and JavaScript. The app allows users to add tasks, mark them as completed, and delete tasks. It includes a visually integrated "Add" button inside the input box and basic hover effects on the "Delete" button.

Features:
Add new tasks with a user-friendly interface.
Mark tasks as completed by clicking the checkmark button.
Delete tasks by clicking the trash can icon.
Responsive design that works well on both desktop and mobile devices.
Project Structure:
├── index.html # HTML file containing the structure of the app
├── styles.css # CSS file for styling the app
├── script.js # JavaScript file handling app functionality
└── README.md # This file (README)

1. index.html:
   Contains the structure and layout of the Task Tracker app, including the input field for adding tasks, the button for submitting tasks, and an unordered list (<ul>) to display the tasks.
2. styles.css:
   Provides the styles for the app, including layout, button positioning, and hover effects.
   Ensures a clean and simple design, with the "Add" button inside the input box.
3. script.js:
   Implements the core functionality of the app.
   Allows users to add tasks, mark them as completed, and delete tasks.
   Adds hover effects to the delete button and ensures smooth task manipulation.
   Installation Instructions
   Prerequisites:
   You don't need any server-side tools or frameworks to run this app. The project only requires a web browser to open the HTML file.

Steps:
Clone or Download the repository to your local machine.

bash
Copy code
git clone https://github.com/aman01197kumar/Task-Tracker.git
or Download the ZIP and extract it.

Open the index.html file in your preferred web browser.

Simply double-click the index.html file, and it will open in your browser.

Usage
Adding a Task:

Type your task into the input field at the top of the app.
Click the "Add" button (inside the input box) or press the Enter key to add the task to the list.
Marking a Task as Completed:

Click the checkbox next to a task to mark it as completed. The task will be displayed with a line-through and a light green background.
Deleting a Task:

Click the trash can icon (🗑️) next to a task to delete it. The task will be removed from the list immediately.
The trash can icon will change color when hovered over, providing visual feedback to the user.
Customization
Icon Change: You can change the icon for the "Add" button by using a different Font Awesome icon. Just replace the class inside the <i> tag in the HTML (<i class="fas fa-level-down-alt"></i>).

Styling: You can customize the look and feel by modifying the styles.css file. This includes changing button colors, font sizes, and background styles.

Credits
Font Awesome: Used for the icons (e.g., checkmark, trash can) in the app.
Font Awesome 6 was used in this app via CDN: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css
License
This project is open-source and available under the MIT License. See the LICENSE file for more details.
