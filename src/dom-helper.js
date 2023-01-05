let renderHeader = () => {
    let headerObject = document.createElement('div');
    headerObject.className = "header";
    headerObject.textContent = "ToDo App"
    document.body.appendChild(headerObject);
}

let renderStaticElements = () => {
    let containerObject = document.createElement('div');
    containerObject.className = "container";
    let sidebarObject = document.createElement('nav');
    sidebarObject.className = "sidebar";
    let mainObject = document.createElement('div');
    mainObject.className = "main";
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


export {
    renderHeader,
    renderStaticElements
}