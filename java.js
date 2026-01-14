// Function to add a task
function addTask() {
    const input = document.getElementById("todoInput");
    const taskValue = input.value.trim();

    if (taskValue === "") {
        alert("Please write something to do!");
        return;
    }

    const ul = document.getElementById("todoList");

    // Creating the list item (li)
    const li = document.createElement("li");
    
    // Adding content with stylish span and delete button
    li.innerHTML = `
        <span style="font-weight: 500; color: #2f3542;">${taskValue}</span>
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;

    // Add to list with a small fade-in effect
    ul.appendChild(li);

    // Clear input
    input.value = "";
}

// Function to remove a task
function removeTask(button) {
    const li = button.parentElement;
    li.style.opacity = "0";
    li.style.transform = "translateX(20px)";
    
    // Delay for animation before removing
    setTimeout(() => {
        li.remove();
    }, 300);
}

// Display Current Date
const dateDisplay = document.getElementById('date-display');
const options = { weekday: 'long', month: 'long', day: 'numeric' };
dateDisplay.innerText = new Date().toLocaleDateString('en-US', options);