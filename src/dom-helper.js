import { clickHandler } from "./handlers";
import { getProjectNames } from "./projects-tasks";

let renderHeader = () => {
    let headerObject = document.createElement('div');
    headerObject.className = "header";
    headerObject.id = "header"
    headerObject.textContent = "ToDo App"
    document.body.appendChild(headerObject);
}

let renderStaticElements = () => {

    // Add static elements and define the properties

    let containerObject = document.createElement('div');
    containerObject.className = "container";
    let sidebarObject = document.createElement('nav');
    sidebarObject.className = "sidebar";
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
    newEditModal.addEventListener('click', () => {clickHandler("edit", projectId)})
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


let renderNewProjectModal = () => {

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
    let mainAppend = document.body;

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

    //add event listeners

    modalExit.addEventListener('click', () => {clickHandler("project-modal-cancel")});
    modalCancell.addEventListener('click', () => {clickHandler("project-modal-cancel")});

    modalSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        clickHandler("new-project-created",undefined,modalFormProjectName.value)
        modalForm.reset();
    })


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

let removeNewProjectModal = () => {
    let newProjectModal = document.getElementById('modal-display');
    newProjectModal.remove();
}

let renderTaskList = (projectId) => {

    document.getElementById('main').innerHTML = '';

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

    for (let i = 0; i < projectList[projectId].tasks.length; i++ ) {
        let taskDivTop = document.createElement('div')
        taskDivTop.className = "task-div-top"
        
        let taskDiv = document.createElement('div')
        taskDiv.className = "task-div"
        taskDiv.id = i;

        let radioButton = document.createElement('i')
        radioButton.className = "material-symbols-outlined"
        radioButton.textContent = "circle"
        taskDiv.appendChild(radioButton);
        let projectName = document.createElement('p');
        projectName.textContent = projectList[projectId].tasks[i].title;
        projectName.className = "task-project-name";
        taskDiv.appendChild(projectName);
        let dueDate = document.createElement('p');
        dueDate.textContent = projectList[projectId].tasks[i].dueDate;
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

        taskDivTop.appendChild(taskDiv)
        taskDivTop.appendChild(descriptionDiv)
        mainAppend.appendChild(taskDivTop)
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

export {
    renderHeader,
    renderStaticElements,
    renderProjectSidebar,
    renderNewProject,
    removeProjectSidebar,
    renderNewProjectModal,
    removeNewProjectModal,
    renderTaskList
}