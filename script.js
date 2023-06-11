document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
  
    addButton.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');
  
        const taskTextSpan = document.createElement('span');
        taskTextSpan.classList.add('task');
        taskTextSpan.innerText = taskText;
        listItem.appendChild(taskTextSpan);
  
        const taskActionsDiv = document.createElement('div');
        taskActionsDiv.classList.add('task-actions');
  
        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerText = 'Edit';
        taskActionsDiv.appendChild(editButton);
  
        const completeButton = document.createElement('button');
        completeButton.classList.add('complete');
        completeButton.innerText = 'Complete';
        taskActionsDiv.appendChild(completeButton);
  
        listItem.appendChild(taskActionsDiv);
  
        listItem.addEventListener('click', function(event) {
          const target = event.target;
          if (target.classList.contains('edit')) {
            const newTaskText = prompt('Edit task:', taskText);
            if (newTaskText !== null && newTaskText.trim() !== '') {
              taskTextSpan.innerText = newTaskText;
            }
          } else if (target.classList.contains('complete')) {
            listItem.classList.toggle('completed');
          } else {
            listItem.remove();
          }
        });
  
        taskList.appendChild(listItem);
        taskInput.value = '';
      }
    });
  });
  