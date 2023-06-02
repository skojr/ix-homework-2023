


class Task {
    constructor(task, check) {
        this.task = task;
    }
}

class UI {
    constructor() {
        this.form = document.getElementById('form');

        this.tableBody = document.getElementById('table-body');

        this.taskInput = document.getElementById('task-input');

        this.form.addEventListener('submit', (e) => this.onFormSubmit(e));

        // Creates an array of tasks
        this.taskList = [];

      }

    // When the form is submitted
    onFormSubmit(e) {
        e.preventDefault();
        console.log('I was clicked');

        // Defines input value
        this.taskValue = document.getElementById('task-input').value

        // Instantiates Task class
        const task = new Task(this.task);
        
        // Pushes input value into an empty array
        this.taskList.push(this.taskValue);
        
        // Console log checks
        console.log(this.taskValue);
        console.log(this.taskList);

        // Clears input field by calling back to this.taskInput
        this.taskInput.value = '';

        // Calls to function within class that creates table upon submission
        this.renderTaskTable();
    }

    renderTaskTable() {
            this.tableBody.innerHTML = '';
        
            for (let i = 0; i < this.taskList.length; i++) {
              const tasks = this.taskList[i];
              const tr = this.createTaskRow(tasks);
              console.log(tr);
              this.tableBody.appendChild(tr);
            }
    }

    createTaskRow(tasks) {
        // Create row
        const tr = document.createElement('tr');

        // Create cell
        const tdTask = document.createElement('td');
        const tdCheck = document.createElement('td');
        const tdAction = document.createElement('td');

        //Create delete button
        const actionButtons = this.deleteButton(tasks);
        tdAction.appendChild(actionButtons);

        //Create check button
        const checkButton = this.checkButton(tasks);
        tdCheck.appendChild(checkButton);

        // First, create input element
        const check = document.createElement('input');

        // Create delete action

        // Add text into cell
        tdTask.innerHTML = tasks;

        // Append to created tr element
        tr.appendChild(tdTask);
        tr.appendChild(tdCheck);
        tr.appendChild(tdAction);

        return tr;

    }

    checkButton(tasks) {
        const check = document.createElement('input');
        check.setAttribute("class",'form-check-input ms-4');
        check.setAttribute("id", "flexCheckDefault");
        check.setAttribute("type", "checkbox");

        return check;
    };

    deleteButton(tasks) {
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'btn btn-danger btn-sm ms-3');
        deleteButton.innerHTML = 'Delete';

        deleteButton.addEventListener('click', () => this.onRemoveBookClicked(book));
        return deleteButton;
    };
    
}

const ui = new UI();