document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-btn");
  const inputField = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  // Add a new task
  addButton.addEventListener("click", () => {
    const taskText = inputField.value.trim();

    if (taskText) {
      const listItem = document.createElement("li");
      // Create 'mark as completed' button
      const completeButton = document.createElement("INPUT");
      completeButton.setAttribute("type", "checkbox");
      completeButton.style.fontSize='0.5rem'
      completeButton.addEventListener("click", () => {
        listItem.classList.toggle("completed");
      });
      listItem.appendChild(completeButton);

      // Create task text
      const taskContent = document.createElement("span");
      taskContent.textContent = taskText;
      taskContent.style.width = "100%";
      taskContent.style.marginLeft = "1rem";
      listItem.appendChild(taskContent);

      // Create 'delete' button
      const deleteButton = document.createElement("div");
      deleteButton.textContent = "🗑️";
      deleteButton.style.padding = "0.5rem";
      deleteButton.style.borderRadius = "12px";
      deleteButton.addEventListener("mouseover", () => {
        deleteButton.style.backgroundColor = "#e53935"; // Change color on hover
      });

      deleteButton.addEventListener("mouseout", () => {
        deleteButton.style.backgroundColor = ""; // Reset color when mouse leaves
      });
      deleteButton.classList.add("delete-btn");
      deleteButton.addEventListener("click", () => {
        todoList.removeChild(listItem);
      });
      listItem.appendChild(deleteButton);

      // Add the list item to the todo list
      todoList.appendChild(listItem);

      // Clear input field after adding
      inputField.value = "";
    }
  });

  // Allow hitting "Enter" to add a task
  inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addButton.click();
    }
  });
});
