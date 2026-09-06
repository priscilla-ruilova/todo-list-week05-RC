/* Requirements: 
1) Be able to enter task
2) Be able to mark complete
3) when tasks complete, a line-through or disappear
4) Be able to delete individual tasks
5) Have to be able to delete all tasks
*/

//We have a title at the top called: To Do List 
//Input to add task
//submit button 
//display task in a list 
//have a running list if you have more inputs 
//Have ability to check off completed tasks 
//Make a strikethrough and make comment transparent if you check 
//Have to be able to delete individual tasks
//clear all button that would clear the list entirely 
//alert that asks are you sure you want to delete?

document.querySelector('#submitItem').addEventListener('click', addToDo);

function addToDo(){
    const newToDo = document.querySelector('#addListItem').value
    const newLi = document.createElement('li');
    const deleteTask = document.createElement('button');
    const checkboxInFront = document.createElement('input');

    console.log(newToDo);

    document.querySelector('#toDoList').appendChild(newLi);
    newLi.innerText = newToDo;
    newLi.appendChild(deleteTask);
    deleteTask.innerText = '🗑️'
    
    //Used 🗑️ to delete individual newTwoDos
    deleteTask.addEventListener('click', ()=>{ //this is an anonymous function 
        newLi.remove(); //This removes something from the DOM
    })
    
    //This names the type of input that we created as a 'checkbox' input type. This also adds it infront of the variable newLi which is the new list item that we created
    checkboxInFront.type = 'checkbox'
    newLi.prepend(checkboxInFront);

    //This makes it so that when we add a list item, the value of the inpute with an id of addListItem = '' (an empty string)
    document.querySelector('#addListItem').value = ''
    
    // If checkbox input is checked, then linethrough of to do list item 
    checkboxInFront.addEventListener('change', function(){ //this is also an anonymous function 
        if (checkboxInFront.checked){
        newLi.style.textDecoration = 'line-through'
        } else{
            newLi.style.textDecoration = 'none'
        } 
    }) 
    
    //Click event to delete all newLi!!!
    document.querySelector('#deleteButton').addEventListener('click', deleteAllToDos);
    function deleteAllToDos(){
    newLi.remove()
    }
    }
