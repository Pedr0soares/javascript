function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = taskInput.value;

  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remover';
  removeBtn.className = 'remove-btn';
  removeBtn.onclick = function() {
    taskList.removeChild(li);
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
