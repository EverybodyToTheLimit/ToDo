import { clickHandler } from "./handlers";
import { getProjectNames } from "./projects-tasks";
import {formatRelative, isToday, isThisWeek, parseISO, format} from "date-fns";

let renderHeader = () => {
    let headerObject = document.createElement('div');
    let menuButton = document.createElement('btn');
    menuButton.className = "material-symbols-outlined"
    menuButton.id = "menu-button"
    menuButton.textContent = "menu"
    headerObject.className = "header";
    headerObject.id = "header"

    menuButton.addEventListener('click', () => {toggleSidebar()})
    headerObject.appendChild(menuButton)
    document.body.appendChild(headerObject);
}

let renderStaticElements = () => {

    // Add static elements and define the properties

    let containerObject = document.createElement('div');
    containerObject.className = "container";
    let sidebarObject = document.createElement('nav');
    sidebarObject.className = "sidebar";
    sidebarObject.id = "sidebar";
    let mainObject = document.createElement('div');
    mainObject.className = "main";
    mainObject.id = "main";
    let navStaticObject = document.createElement('div');
    navStaticObject.className = "nav-static";
    let navProjectsObject = document.createElement('div');
    navProjectsObject.className = "nav-projects";
    let navstaticToday = document.createElement('a');
    navstaticToday.className = "static-list-item"
    navstaticToday.textContent = "Today"
    navstaticToday.href = "#"
    let navstaticTodayIcon = document.createElement('i');
    navstaticTodayIcon.className = "material-symbols-outlined";
    navstaticTodayIcon.textContent = "today"
    let navstaticWeek = document.createElement('a');
    navstaticWeek.className = "static-list-item"
    navstaticWeek.textContent = "Week"
    navstaticWeek.href = "#"
    let navstaticWeekIcon = document.createElement('i');
    navstaticWeekIcon.className = "material-symbols-outlined";
    navstaticWeekIcon.textContent = "calendar_month"
    let navstaticImportant = document.createElement('a');
    navstaticImportant.className = "static-list-item"
    navstaticImportant.textContent = "Important"
    navstaticImportant.href = "#"
    let navstaticImportantIcon = document.createElement('i');
    navstaticImportantIcon.className = "material-symbols-outlined";
    navstaticImportantIcon.textContent = "assignment_late"
    let navstaticComplete = document.createElement('a');
    navstaticComplete.className = "static-list-item"
    navstaticComplete.textContent = "Completed"
    navstaticComplete.href = "#"
    let navstaticCompleteIcon = document.createElement('i');
    navstaticCompleteIcon.className = "material-symbols-outlined";
    navstaticCompleteIcon.textContent = "download_done"
    let navProjectsHeader = document.createElement("div");
    navProjectsHeader.className = "nav-project-header"
    let navProjectsTitle = document.createElement("div");
    navProjectsTitle.className = "nav-project-title"
    navProjectsTitle.textContent = "Projects"
    let navProjectsAdd = document.createElement("a");
    navProjectsAdd.href = '#'
    navProjectsAdd.className = "material-symbols-outlined"
    navProjectsAdd.textContent = "Add"

    // add event listeners and redirect to handler function

    navstaticToday.addEventListener('click', () => {clickHandler("today")})
    navstaticWeek.addEventListener('click', () => {clickHandler("week")})
    navstaticImportant.addEventListener('click', () => {clickHandler("important")})
    navstaticComplete.addEventListener('click', () => {clickHandler("complete")})
    navProjectsAdd.addEventListener('click', () => {clickHandler("new-project")})

    //create objects in DOM

    navProjectsHeader.appendChild(navProjectsTitle);
    navProjectsHeader.appendChild(navProjectsAdd);
    navProjectsObject.appendChild(navProjectsHeader);
    navstaticToday.appendChild(navstaticTodayIcon);
    navStaticObject.appendChild(navstaticToday);
    navstaticWeek.appendChild(navstaticWeekIcon);
    navStaticObject.appendChild(navstaticWeek);
    navstaticImportant.appendChild(navstaticImportantIcon);
    navStaticObject.appendChild(navstaticImportant);
    navstaticComplete.appendChild(navstaticCompleteIcon);
    navStaticObject.appendChild(navstaticComplete);
    sidebarObject.appendChild(navStaticObject);
    sidebarObject.appendChild(navProjectsObject)
    containerObject.appendChild(sidebarObject);
    containerObject.appendChild(mainObject);
    document.body.appendChild(containerObject);
}

let renderProjectSidebar = () => {
    document.querySelectorAll(".active-project").forEach(e => e.remove());


    let projectList = getProjectNames();
    
    for (let i=0; i < projectList.length; i++) {
        renderNewProject(projectList[i].title, i)
    }

}

let renderNewProject = (projectName, projectId) => {


    // add elements and define the properties

    let newProjectObject = document.createElement("a");
    newProjectObject.href = "#";
    newProjectObject.className = "active-project";
    newProjectObject.id = projectId;
    let newTitle = document.createElement("a");
    newTitle.textContent = projectName;
    let newProjectNav = document.createElement("div");
    newProjectNav.className = "modal-div"
    let newDeleteModal = document.createElement("btn");
    newDeleteModal.className = "material-symbols-outlined";
    newDeleteModal.textContent = "Delete";
    let newEditModal = document.createElement("btn");
    newEditModal.className = "material-symbols-outlined";
    newEditModal.textContent = "Edit"

    // add click listerners and pass to handler

    newTitle.addEventListener('click', () => {clickHandler("sidebar-project", projectId)})
    newEditModal.addEventListener('click', () => {clickHandler("edit-project", projectId)})
    newDeleteModal.addEventListener('click', () => {clickHandler("delete", projectId)})

    // add elements to the DOM 

    newProjectObject.appendChild(newTitle);
    newProjectNav.appendChild(newEditModal);
    newProjectNav.appendChild(newDeleteModal);
    newProjectObject.appendChild(newProjectNav);

    let mainAppend = document.querySelector(".nav-projects");
    mainAppend.appendChild(newProjectObject)
}

let removeProjectSidebar = (projectName, projectId) => {
    
    let delElement = document.getElementById(projectId);
    delElement.remove();

}


let renderNewProjectModal = (type, projectId, taskId) => {

    //create elements and define properties

    let modalDisplay = document.createElement('div');
    modalDisplay.className = "modal-display"
    modalDisplay.id = "modal-display"
    let newProjectModalDiv = document.createElement('div');
    newProjectModalDiv.className = "new-project-modal-container";
    let modalTitle = document.createElement('div');
    modalTitle.className = "modal-title-div";
    let modalTitleText = document.createElement('div');
    modalTitleText.className = "modal-title";
    modalTitleText.textContent = "New Project"
    let modalExit = document.createElement('btn');
    modalExit.href = "#"
    modalExit.className = "material-symbols-outlined";
    modalExit.textContent = "close"

    let modalForm = document.createElement('form');
    modalForm.action = "#"

    let modalBody = document.createElement('div');
    modalBody.className = "modal-body"
    let modalFormProjectName = document.createElement('input')
    modalFormProjectName.id = "project-name"
    modalFormProjectName.name = "project-name"
    modalFormProjectName.type = "text"
    modalFormProjectName.placeholder = "e.g. Learn metallurgy"
    modalFormProjectName.required = true;
    let modalFormLabel = document.createElement('LABEL')
    modalFormLabel.htmlFor = "project-name"
    modalFormLabel.innerHTML = "Project title*"

    let modalSubmitDiv = document.createElement('div');
    modalSubmitDiv.className = "modal-submit"
    let modalCancell = document.createElement('btn');
    modalCancell.className= "cancel-button"
    modalCancell.textContent = "Cancel"
    let modalSubmit = document.createElement('btn');
    modalSubmit.className = "submit-button"
    modalSubmit.textContent = "Submit"
    modalSubmit.type = "submit"

    // add cancel and x exit options

    modalExit.addEventListener('click', () => {clickHandler("project-modal-cancel")});
    modalCancell.addEventListener('click', () => {clickHandler("project-modal-cancel")});

    // plug in fields for task modal

    if (type == "task" || type == "task-edit") {
    let modalFormTaskDescription = document.createElement('input')
    modalFormTaskDescription.id = "task-description"
    modalFormTaskDescription.name = "task-description"
    modalFormTaskDescription.type = "text"
    modalFormTaskDescription.placeholder = "e.g. Getting to know types of alloys"
    modalFormTaskDescription.required = false;
    let modalFormDescriptionLabel = document.createElement('LABEL')
    modalFormDescriptionLabel.htmlFor = "task-description"
    modalFormDescriptionLabel.innerHTML = "Task Description"


    let modalFormDueDate = document.createElement('input')
    modalFormDueDate.id = "due-date"
    modalFormDueDate.name = "due-date"
    modalFormDueDate.type = "date"
    modalFormDueDate.required = false;
    modalFormDueDate.max = "9999-12-30"
    let modalFormDueDateLabel = document.createElement('LABEL')
    modalFormDueDateLabel.htmlFor = "due-date"
    modalFormDueDateLabel.innerHTML = "Due Date"

    let modalCheckboxGroup = document.createElement("div");
    modalCheckboxGroup.className = "check-group"
    let modalFormPriority = document.createElement('input')
    modalFormPriority.id = "priority"
    modalFormPriority.name = "priority"
    modalFormPriority.type = "checkbox"
    let modalFormPriorityLabel = document.createElement('LABEL')
    modalFormPriorityLabel.htmlFor = "priority"
    modalFormPriorityLabel.innerHTML = "Priority task?"
    
    modalFormLabel.textContent = "Task title*"
    modalTitleText.textContent = "New Task"

    if (type == "task-edit") {
        let projectList = getProjectNames()
        modalFormProjectName.value = projectList[projectId].tasks[taskId].title;
        modalFormTaskDescription.value = projectList[projectId].tasks[taskId].description;
        modalFormPriority.value = projectList[projectId].tasks[taskId].priority;
        if(modalFormPriority.value !== "false") {modalFormPriority.checked = true}
        let dateFeed = projectList[projectId].tasks[taskId].dueDate.toString();
        modalFormDueDate.value = dateFeed.slice(0,10)

    }

    modalCheckboxGroup.appendChild(modalFormPriorityLabel);
    modalCheckboxGroup.appendChild(modalFormPriority);
    modalBody.appendChild(modalFormLabel);
    modalBody.appendChild(modalFormProjectName);
    modalBody.appendChild(modalFormDescriptionLabel);
    modalBody.appendChild(modalFormTaskDescription);
    modalBody.appendChild(modalCheckboxGroup);
    modalBody.appendChild(modalFormDueDateLabel);
    modalBody.appendChild(modalFormDueDate);
    modalSubmitDiv.appendChild(modalCancell);
    modalSubmitDiv.appendChild(modalSubmit);
    modalTitle.appendChild(modalTitleText);
    modalTitle.appendChild(modalExit);
    modalForm.appendChild(modalBody)
    modalForm.appendChild(modalSubmitDiv)
    newProjectModalDiv.appendChild(modalTitle);
    newProjectModalDiv.appendChild(modalForm);
    modalDisplay.appendChild(newProjectModalDiv);
    let header = document.getElementById('header')
    header.before(modalDisplay)



    // add event listeners for tasks
    if (type == "task-edit") {
    modalSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return
        } else {
        clickHandler("task-edited",projectId,modalFormProjectName.value,taskId,modalFormTaskDescription.value,modalFormDueDate.value,modalFormPriority.checked)
        modalForm.reset();
        }
    })   
    }

    else if (type == "task") {
        
        modalSubmit.addEventListener('click', (event) => {

            event.preventDefault();
            if (!validateForm()) {
                return
            } else {
        clickHandler("new-event-created",projectId,modalFormProjectName.value,undefined,modalFormTaskDescription.value,modalFormDueDate.value,modalFormPriority.checked)
        modalForm.reset();
            }
        })
    }  

    }

    else if (type == "project" || type == "project-edit"){
    
    //plug in logic for project-edit
    if (type == "project-edit") {
        let projectList = getProjectNames();
        modalTitle.value = projectList[projectId].title;
        modalSubmit.addEventListener('click', (event) => {
            event.preventDefault();
            if (!validateForm()) {
                return
            } else {
            clickHandler("project-edited", projectId, modalFormProjectName.value)
            modalForm.reset();
            }
        })

    }

    //add event listeners for project
    else if (type == "project") {
    modalSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return
        } else {
        clickHandler("new-project-created",undefined,modalFormProjectName.value)
        modalForm.reset();
        }
    })}


    //create in DOM
    
    modalSubmitDiv.appendChild(modalCancell);
    modalSubmitDiv.appendChild(modalSubmit);
    modalBody.appendChild(modalFormLabel);
    modalBody.appendChild(modalFormProjectName);
    modalTitle.appendChild(modalTitleText);
    modalTitle.appendChild(modalExit);
    modalForm.appendChild(modalBody)
    modalForm.appendChild(modalSubmitDiv)
    newProjectModalDiv.appendChild(modalTitle);
    newProjectModalDiv.appendChild(modalForm);
    modalDisplay.appendChild(newProjectModalDiv);
    let header = document.getElementById('header')
    header.before(modalDisplay)
    }

}

let validateForm = () => {
    let modalFormProjectName = document.getElementById("project-name")
    let dueDate = document.getElementById("due-date")
    let hint = document.querySelector(".hint")
    if (hint !== null) {hint.remove()}
  
        if (modalFormProjectName.value == "") {
        modalFormProjectName.classList.add("invalid")
        let hintDev = document.createElement('div');
        hintDev.textContent = "Title cannot be empty"
        hintDev.classList.add("hint")
        modalFormProjectName.parentNode.insertBefore(hintDev, modalFormProjectName.nextSibling)
        return false
        }

        else if (dueDate !== null && dueDate.value == "") {
        dueDate.classList.add("invalid")
        let hintDev1 = document.createElement('div');
        hintDev1.textContent = "Please enter a valid date"
        hintDev1.classList.add("hint")
        dueDate.parentNode.insertBefore(hintDev1, dueDate.nextSibling)
        return false
        }
        
        else {
            return true
        }
}

let removeNewProjectModal = () => {
    let newProjectModal = document.getElementById('modal-display');
    newProjectModal.remove();
}

let clearMainScreen = () => {
    document.getElementById('main').innerHTML = '';
}

let renderTaskList = (projectId, complete) => {

    if (complete !== true) {
    clearMainScreen();
    }

    let projectTitle = document.createElement('div')
    projectTitle.classList = "project-title"
    if (projectId == undefined) {
        projectTitle.textContent = "Select an existing project" + "\r\n" + "or add a new one"
        let mainAppend = document.getElementById('main');
        mainAppend.appendChild(projectTitle);
        return
    }
 
    let projectList = getProjectNames();
    projectTitle.textContent = projectList[projectId].title
    projectTitle.id = projectId
 

    let mainAppend = document.getElementById('main');
    mainAppend.appendChild(projectTitle);

    for (let i = 0; i < projectList[projectId].tasks.length; i++ ) 
    {

        let taskDivTop = document.createElement('div')
        taskDivTop.className = "task-div-top"
        let taskDiv = document.createElement('div')
        taskDiv.className = "task-div"
        taskDiv.id = i;
        taskDiv.dataset.id = "p" + projectId + "t" + i ;
        taskDiv.dataset.priority = projectList[projectId].tasks[i].priority;
        let radioButton = document.createElement('i')
        radioButton.className = "material-symbols-outlined"
        radioButton.textContent = "circle"
        taskDiv.appendChild(radioButton);
        let projectName = document.createElement('p');
        projectName.textContent = projectList[projectId].tasks[i].title;
        projectName.className = "task-project-name";
        taskDiv.appendChild(projectName);
        let dueDate = document.createElement('p');
        dueDate.textContent = format(new Date(projectList[projectId].tasks[i].dueDate), 'dd MMM yyyy');
        dueDate.className = "due-date"
        taskDiv.appendChild(dueDate);
        let editButton = document.createElement('i')
        editButton.className = "material-symbols-outlined task-edit"
        editButton.textContent = "edit"
        taskDiv.appendChild(editButton);
        let deleteButton = document.createElement('i')
        deleteButton.className = "material-symbols-outlined task-delete"
        deleteButton.textContent = "delete"
        taskDiv.appendChild(deleteButton)

        let descriptionDiv = document.createElement("p");
        descriptionDiv.className = "task-description";
        descriptionDiv.textContent = projectList[projectId].tasks[i].description

        
        radioButton.addEventListener('click', ()=> {clickHandler("task-complete", projectId, undefined, i)})
        editButton.addEventListener('click', ()=> {clickHandler("task-edit", projectId, undefined, i)})
        deleteButton.addEventListener('click', ()=> {clickHandler("task-delete", projectId, undefined, i)})
        
        taskDivTop.appendChild(taskDiv)
        taskDivTop.appendChild(descriptionDiv)
        mainAppend.appendChild(taskDivTop)

        if (projectList[projectId].tasks[i].complete == true) {completeTaskToggle(i, projectId)}
    }

    renderNewTaskSection(projectId);

}

function renderNewTaskSection (projectId) {
    let mainAppend = document.getElementById('main');
    let newTaskSection = document.createElement('div');
    newTaskSection.className =  "new-task-div"
    let newTaskIcon = document.createElement('i');
    newTaskIcon.className = "material-symbols-outlined"
    newTaskIcon.textContent = "Add"
    let newTaskText = document.createElement('p');
    newTaskText.textContent = "Add new task"

    newTaskIcon.addEventListener('click', () => {
        clickHandler("add-new-event", projectId);
    })


    newTaskSection.appendChild(newTaskIcon);
    newTaskSection.appendChild(newTaskText);
    mainAppend.appendChild(newTaskSection);
}

function completeTaskToggle (taskId, projectId) {
    let dataValue = "p" + projectId + "t" + taskId
    let targetDiv = document.querySelector('[data-id="' + dataValue + '"]')

    if (targetDiv.className == "task-div completed") {
        targetDiv.className = "task-div"
        targetDiv.nextSibling.className = "task-description"
        targetDiv.firstChild.textContent = "circle"
    }
    else if (targetDiv.className == "task-div"){
        targetDiv.className = "task-div completed"
        targetDiv.nextSibling.className = "task-description strikethrough"
        targetDiv.firstChild.textContent = "task_alt"
    }
};

function filterMain(mode) {
    let mainScreen = document.getElementById("main");
    mainScreen.querySelectorAll(".new-task-div").forEach(e => e.remove());
    if (mode == "completed") {
        mainScreen.querySelectorAll(".task-div").forEach(e => {
            
            if (e.className !== "task-div completed") {
                e.parentNode.remove();
            }
        })
    }
    else if (mode == "important") {
        mainScreen.querySelectorAll(".task-div").forEach(e => {
            
            if (e.dataset.priority === "false") {
                e.parentNode.remove();
            }
        })

    }

    else if (mode == "week") {
        mainScreen.querySelectorAll(".due-date").forEach(e => {
            e.textContent

            if (!isThisWeek(new Date(e.textContent))) {
                e.parentNode.parentNode.remove();
            }
            else {
                const result = formatRelative(new Date(e.textContent), new Date());
                e.textContent = result;
            }
        })

    }

    else if (mode == "today") {
        mainScreen.querySelectorAll(".due-date").forEach(e => {
            e.textContent

            if (!isToday(new Date(e.textContent))) {
                e.parentNode.parentNode.remove();
            }
        })

    }

    mainScreen.querySelectorAll(".project-title").forEach(e => {
            
        if (e.nextSibling == null || e.nextSibling.className !== "task-div-top") {
            e.remove();
        }
    })

    if (mainScreen.childNodes.length == 0) {
        let infoDiv = document.createElement('div');
        infoDiv.textContent = "Looks like there are no " + mode + " tasks. Time to get cracking..."
        infoDiv.className = "project-title"
        mainScreen.appendChild(infoDiv);
    }
}

function toggleSidebar() {
    
    let sidebar = document.getElementById('sidebar')
    if (!sidebar.classList.contains('sidebar-show')) {
      sidebar.classList.remove('sidebar-hide');
      sidebar.classList.add('sidebar-show');
    } else if (sidebar.classList.contains('sidebar-show')) {
      sidebar.classList.remove('sidebar-show');
      sidebar.classList.add('sidebar-hide');
    }
  }


// function responsiveSidebar (e) {
//     let sidebar = document.getElementById('sidebar');
//     let menuButton = document.getElementById('menu-button');
//     let main = document.querySelector(".main");
//     let container = document.querySelector(".container");
//     let header = document.getElementById('header');
//     // Check if the media query is true
//     if (e.matches && !sidebar.classList.contains('sidebar-show')) {
//       // Then log the following message to the console
//       console.log('Media Query Matched!')
//       sidebar.classList.remove('sidebar-hide');
//       sidebar.classList.add('sidebar-show');
//       menuButton.classList.remove('sidebar-show');
//       menuButton.classList.add('sidebar-hide');
//       main.classList.remove('main-mobile');
//       container.classList.remove('container-mobile');
//       container.classList.add('container-wide');
//       header.classList.remove('header-mobile')
//     }
//     else if (!e.matches && sidebar.classList.contains('sidebar-show')){
//       sidebar.classList.remove('sidebar-show');
//       sidebar.classList.add('sidebar-hide');
//       menuButton.classList.remove('sidebar-hide');
//       menuButton.classList.add('sidebar-show');
//       main.classList.add('main-mobile');
//       container.classList.add('container-mobile');
//       container.classList.remove('container-wide');
//       header.classList.add('header-mobile')
//     }
//   }
  

export {
    renderHeader,
    renderStaticElements,
    renderProjectSidebar,
    renderNewProject,
    removeProjectSidebar,
    renderNewProjectModal,
    removeNewProjectModal,
    renderTaskList,
    completeTaskToggle,
    clearMainScreen,
    filterMain
}