// Seleziono gli elementi della pagina HTML  con document.GetElementById e assegno le variabili //
let newTaskInput = document.getElementById('newTask')
let addTaskButton = document.getElementById('btAddTask')
let taskList = document.getElementById('taskList')
let completedTaskList = document.getElementById('completedTaskList')

// Evento sul bottone "Aggiungi Task" //
addTaskButton.addEventListener('click',function(e){
    let newTaskText = newTaskInput.value //testo nuovo task

// Crea un nuovo elemento list(li) per il task
    let newTask = document.createElement('li')
    newTask.textContent = newTaskText

// Evento per click sul task //
    newTask.addEventListener('click', function(e){
        this.classList.toggle('completed') //segna il task completato
        if(this.classList.contains('completed')){ //sposta il task nella lista appropriata
            completedTaskList.appendChild(this);
        }else{
            taskList.appendChild(this);
        } 
    });

//  bottone per eliminare task //
    let deleteButton = document.createElement('button')
    deleteButton.textContent='Elimina'
    deleteButton.addEventListener('click',function(){
        if (newTask.parentNode){ //rimuove task dalla lista
            newTask.parentNode.removeChild(newTask);
        }
    });

// bottone elimina //
newTask.appendChild(deleteButton);

// aggiunge nuovo task alla lista

taskList.appendChild(newTask);

//svuota l'input per il nuovo task
newTaskInput.value='';

});