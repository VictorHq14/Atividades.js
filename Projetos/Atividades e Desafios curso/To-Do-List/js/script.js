document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

   
    function createTaskItem(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

       
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = (event) => {
          
            event.stopPropagation();
            listItem.remove();
        };

        listItem.appendChild(removeButton);
        return listItem;
    }

   
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

  
    addTaskButton.addEventListener('click', addTask);

    
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
