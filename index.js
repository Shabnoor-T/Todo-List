function add() {
    var todoInput = document.getElementById("todo-input")
    var todotext = todoInput.value.trim();

    if(todotext !=="") {
        var li = document.createElement("li");
        li.textContent = todotext;

        var deleteButton = document.createElement("button")
        deleteButton.textContent = "delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = function() {
            li.remove();
        }

        li.appendChild(deleteButton);
        document.getElementById("todo-list").appendChild(li);

        todoInput.value="";
    }
}