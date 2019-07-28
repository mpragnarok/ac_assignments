// init
let list = document.querySelector('#my-todo')
let done = document.querySelector('#my-done')
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}

function addItem(text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}

// move the checked todos to Done
// not yet
function moveToDone(todo) {
  let newDone = document.createElement('li')
  newDone.innerHTML = `
    <label for="done" class="checked">${todo}</label>
    <i class="delete fa fa-trash"></i>  `
  done.appendChild(newDone)


}

// Create
const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', function (event) {
  console.log(this)
  console.log(event.target)
  let inputValue = document.querySelector('#newTodo').value
  if (inputValue !== "") {
    console.log(inputValue)
    addItem(inputValue)
  }

})

// Enter to create todo
const inputArea = document.querySelector('#newTodo')
inputArea.addEventListener('keypress', function (event) {
  console.log(this)
  console.log(event.target)
  let inputValue = document.querySelector('#newTodo').value
  if (event.keyCode == 13) {
    console.log(inputValue)
    addItem(inputValue)
  }

})

// Delete and move to Done list
list.addEventListener('click', function (event) {
  console.log(this)
  console.log(event.target)
  if (event.target.classList.contains('delete')) {
    let li = event.target.parentElement
    li.remove()
  } else if (event.target.tagName === 'LABEL') {
    let li = event.target.parentElement
    let todo = event.target.textContent
    li.remove()
    moveToDone(todo)


  }
})

// Delete and Move back to todo list in done list

done.addEventListener('click', function (event) {
  console.log(this)
  console.log(event.target)
  if (event.target.classList.contains('delete')) {
    let li = event.target.parentElement
    li.remove()
  } else if (event.target.tagName === 'LABEL') {
    let li = event.target.parentElement
    let todo = event.target.textContent
    addItem(todo)
    li.remove()
  }
})