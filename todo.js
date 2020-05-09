let todos = []
try {
    todos = JSON.parse(localStorage.getItem('todos'))
}
catch{
    todos = []
    console.log("problem loading database")
}
let idRender = "all"
let removeTodo = function (id) {

    todos = todos.filter(function (todo) {
        return todo.id !== id
    })
    localStorage.setItem('todos', JSON.stringify(todos))
    if (idRender === "all") {
        renderTodo()
    }
    else if (idRender === "active") {
        renderActive()
    }
    else {
        renderCompleted()
    }
}
let renderTodo = function () {
    let todoLeft=0;
    let toDolist = document.querySelector('#mainToDoList')
    while (toDolist.firstChild) {
        toDolist.removeChild(toDolist.lastChild);
    }
    todos.forEach((todo, index) => {
        if(todo.completed===false){
            todoLeft++;
        }
        const closeButton = document.createElement('button')
        closeButton.textContent = 'x'
        closeButton.addEventListener('click', function (e) {
            console.log(todo.id)
            removeTodo(todo.id)
        })
        const text = document.createElement('span')
        text.textContent = todo.text
        const checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        checkbox.checked = todo.completed
        checkbox.addEventListener('change', function (e) {
            // todo.completed=!todo.completed
            // renderTodo()
            // console.log(todo.completed)
            todo.completed = !todo.completed
            console.log(todo.completed)
            // localStorage.removeItem('todo')
            // localStorage.setItem('todo',todos)
            localStorage.setItem('todos', JSON.stringify(todos))
            if (idRender === "all") {
                renderTodo()
            }
            else if (idRender === "active") {
                renderActive()
            }
            else {
                renderCompleted()
            }
        })
        const appendTodo = document.createElement('div')
        appendTodo.appendChild(checkbox)
        appendTodo.appendChild(text)
        appendTodo.appendChild(closeButton)
        toDolist.appendChild(appendTodo)
    })
    document.querySelector('#toDoLeft').textContent=`${todoLeft} ToDo left`
}
let renderActive = function () {
    let todoLeft=0
    let toDolist = document.querySelector('#mainToDoList')
    while (toDolist.firstChild) {
        toDolist.removeChild(toDolist.lastChild);
    }
    todos.forEach((todo, index) => {
        if (todo.completed === false) {
            todoLeft++
            const closeButton = document.createElement('button')
            closeButton.textContent = 'x'
            closeButton.addEventListener('click', function (e) {
                console.log(todo.id)
                removeTodo(todo.id)
            })
            const text = document.createElement('span')
            text.textContent = todo.text
            const checkbox = document.createElement('input')
            checkbox.type = "checkbox"
            checkbox.checked = todo.completed
            checkbox.addEventListener('change', function (e) {
                // todo.completed=!todo.completed
                // renderTodo()
                // console.log(todo.completed)
                todo.completed = !todo.completed
                console.log(todo.completed)
                // localStorage.removeItem('todo')
                // localStorage.setItem('todo',todos)
                localStorage.setItem('todos', JSON.stringify(todos))
                if (idRender === "all") {
                    renderTodo()
                }
                else if (idRender === "active") {
                    renderActive()
                }
                else {
                    renderCompleted()
                }
            })
            const appendTodo = document.createElement('div')
            appendTodo.appendChild(checkbox)
            appendTodo.appendChild(text)
            appendTodo.appendChild(closeButton)
            toDolist.appendChild(appendTodo)
        }
    })
    document.querySelector('#toDoLeft').textContent=`${todoLeft} ToDo left`
}
let renderCompleted = function () {
    let todoLeft=0
    let toDolist = document.querySelector('#mainToDoList')
    while (toDolist.firstChild) {
        toDolist.removeChild(toDolist.lastChild);
    }
    todos.forEach((todo, index) => {
        if (todo.completed === true) {
            const closeButton = document.createElement('button')
            closeButton.textContent = 'x'
            closeButton.addEventListener('click', function (e) {
                console.log(todo.id)
                removeTodo(todo.id)
            })
            const text = document.createElement('span')
            text.textContent = todo.text
            const checkbox = document.createElement('input')
            checkbox.type = "checkbox"
            checkbox.checked = todo.completed
            checkbox.addEventListener('change', function (e) {
                // todo.completed=!todo.completed
                // renderTodo()
                // console.log(todo.completed)
                todo.completed = !todo.completed
                console.log(todo.completed)
                // localStorage.removeItem('todo')
                // localStorage.setItem('todo',todos)
                localStorage.setItem('todos', JSON.stringify(todos))
                if (idRender === "all") {
                    renderTodo()
                }
                else if (idRender === "active") {
                    renderActive()
                }
                else {
                    renderCompleted()
                }
            })
            const appendTodo = document.createElement('div')
            appendTodo.appendChild(checkbox)
            appendTodo.appendChild(text)
            appendTodo.appendChild(closeButton)
            toDolist.appendChild(appendTodo)
        }
        else{
            todoLeft++
        }
    })
    document.querySelector('#toDoLeft').textContent=`${todoLeft} ToDo left`
}
document.querySelector('#newToDo').addEventListener('submit', function (e) {
    e.preventDefault()
    if(e.target.elements.textInput.value.length>0){
    let todoObject = {
        id: Math.floor(Math.random() * 100000),
        text: e.target.elements.textInput.value,
        completed: false
    }
    todos.push(todoObject)
    e.target.elements.textInput.value = ''
    // localStorage.removeItem('todo')
    // localStorage.setItem('todo',todos)
    localStorage.setItem('todos', JSON.stringify(todos))
    if (idRender === "all") {
        renderTodo()
    }
    else if (idRender === "active") {
        renderActive()
    }
    else {
        renderCompleted()
    }
}
})
document.querySelector('#activeButton').addEventListener('click', function (e) {
    idRender = "active"
    renderActive()
})
document.querySelector('#allButton').addEventListener('click', function (e) {
    idRender = "all"
    renderTodo()
})
document.querySelector('#completedButton').addEventListener('click', function (e) {
    idRender = "completed"
    renderCompleted()
})
document.querySelector('#clearCompleted').addEventListener('click',function(e){
    todos = todos.filter(function (todo) {
        return todo.completed === false
    })
    localStorage.setItem('todos', JSON.stringify(todos))
    if (idRender === "all") {
        renderTodo()
    }
    else if (idRender === "active") {
        renderActive()
    }
    else {
        renderCompleted()
    }
})
renderTodo()
