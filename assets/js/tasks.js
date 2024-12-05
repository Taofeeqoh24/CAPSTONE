let taskList = []; 
let filteredTaskList = []; 
 
// Add event listener to form submission 
document.getElementById('task-form').addEventListener('submit', addTask); 
 
// Function to add task 
function addTask(e) { 
    e.preventDefault(); 
    const title = document.getElementById('task-title').value; 
    const description = document.getElementById('task-description').value; 
    const deadline = document.getElementById('task-deadline').value; 
    const priority = document.getElementById('task-priority').value; 
 
    document.getElementById('task-list').textContent = 'Add Task'; 
        const task = { 
            title, 
            description, 
            deadline, 
            priority 
        }; 
        taskList.push(task); 

    taskList.sort((a, b) => { 
        const priorityOrder = ['High', 'Medium', 'Low']; 
        return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority); 
    }); 
    filteredTaskList = taskList; 
    displayTasks(); 
   
    alert('Task added successfully'); 
 
} 
 
// Function to display tasks 
function displayTasks() { 
    const taskListElement = document.getElementById('task-list'); 
    taskListElement.innerHTML = ''; 
 
    filteredTaskList.forEach((task, index) => { 
        const taskItem = document.createElement('li'); 
        taskItem.classList.add('task-item'); 
        taskItem.innerHTML = ` 
            <h3>${task.title}</h3> 
            <p>${task.description}</p> 
            <p>Deadline: ${task.deadline}</p> 
            <p>Priority: ${task.priority}</p> 
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>  
        `; 
        taskListElement.appendChild(taskItem); 
    }); 
} 
 
// Function to delete task 
function deleteTask(index) { 
    taskList.splice(index, 1); 
    filteredTaskList = taskList; 
    displayTasks(); 
} 
 
 
// Filtering functionality 
document.getElementById('filter-priority').addEventListener('change', (e) => { 
    const priority = e.target.value; 
    filteredTaskList = taskList.filter((task) => task.priority === priority || priority === 'All'); 
    displayTasks(); 
}); 
 
document.getElementById('filter-due-date').addEventListener('change', (e) => { 
    const deadline = e.target.value; 
    filteredTaskList = taskList.filter((task) => { 
        if (deadline === 'Today') { 
            return new Date(task.deadline).toDateString() === new Date().toDateString(); 
        } else if (deadline === 'This Week') { 
            return new Date(task.deadline).getWeek() === new Date().getWeek(); 
        } else if (deadline === 'Overdue') { 
            return new Date(task.deadline) < new Date(); 
        } else { 
            return true; 
        } 
    }); 
    displayTasks(); 
}); 
 
// Search functionality 
document.getElementById('search-bar').addEventListener('input', (e) => { 
    const keyword = e.target.value.toLowerCase(); 
    filteredTaskList = taskList.filter((task) => { 
        return task.title.toLowerCase().includes(keyword) || task.description.toLowerCase().includes(keyword); 
    }); 
    displayTasks(); 
});