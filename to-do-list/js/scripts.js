

var taskInput = document.getElementById('input-task');
var taskList = document.getElementById('task-list');
var btnAdd = document.getElementById('btnAdd');
var tasks = 0;


function createTask(id, taskName){
    var li = document.createElement("li");
    var check = document.createElement("input");
    check.type = "checkbox";
    check.name = "task"+id;
    var label = document.createElement("label");
    label.setAttribute('for', check.name);
    label.innerText = taskName;

    li.appendChild(check);
    li.appendChild(label);
    return li;
}

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    
    taskList.appendChild(createTask(tasks++, taskInput.value));
    
    taskInput.value = "";
});
