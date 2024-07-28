function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
    // .then(data => console.log(data))
}

function displayTodos(todos) {
    const todoContainer = document.getElementById('todo-container')
    for (const todo of todos) {
        console.log(todo);
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
        <h3>Title ${todo?.title}</h3>
        `;
        todoContainer.appendChild(todoDiv)
    }

}
loadTodos()