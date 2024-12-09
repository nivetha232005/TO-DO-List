document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    let ul = document.getElementById('taskList');
    let li = document.createElement('li');


    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleTaskCompletion);


    let taskContent = document.createElement('span');
    taskContent.textContent = taskText;


    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove');
    removeBtn.addEventListener('click', removeTask);

    li.appendChild(checkbox);
    li.appendChild(taskContent);
    li.appendChild(removeBtn);
    ul.appendChild(li);
}

function toggleTaskCompletion(event) {
    let li = event.target.parentElement;
    if (event.target.checked) {
        li.classList.add('completed');
    } else {
        li.classList.remove('completed');
    }
}

function removeTask(event) {
    let li = event.target.parentElement;
    li.remove();
}
