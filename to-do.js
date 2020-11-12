let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let input = document.getElementById('input');

<<<<<<< HEAD
addToDoButton.addEventListener('click', function(e){
    e.preventDefault()
=======
savedtodos = []

addToDoButton.addEventListener('click', function(){
>>>>>>> de1a421bf95efcabea88ff3d3381706ed4fe65ab
    let newLine = document.createElement('p');
    newLine.classList.add('newLine-styling');
    const todo = newLine.innerText = " - " + " " + input.value;
    toDoContainer.appendChild(newLine);
    input.value="";
    newLine.addEventListener('click', function (){
        newLine.style.textDecoration = "line-through";
    })
    newLine.addEventListener('dblclick', function (){
        toDoContainer.removeChild(newLine);
    })

    savedtodos.push(todo);
    console.log(savedtodos);

})
 











