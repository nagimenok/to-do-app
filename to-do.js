let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let input = document.getElementById('input');

addToDoButton.addEventListener('click', function(){
    let newLine = document.createElement('p');
    newLine.classList.add('newLine-styling');
    newLine.innerText = " - " + " " + input.value;
    toDoContainer.appendChild(newLine);
    input.value="";
    newLine.addEventListener('click', function (){
        newLine.style.textDecoration = "line-through";
    })
    newLine.addEventListener('dblclick', function (){
        toDoContainer.removeChild(newLine);
    })

})










