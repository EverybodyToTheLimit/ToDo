
    import parseISO from "date-fns/parseISO";
    import { updateLocalStorage, retrieveLocalstorage } from "./storage";
    
    
    let projectList = [];
    if (retrieveLocalstorage(projectList)) {
        projectList = retrieveLocalstorage(projectList)
    };

    class project {
        constructor(title, tasks) {
            this.title = title
            this.tasks = []
        }

        
    }
    function createProject(title) {
        let newProject = new project(title);
        projectList.push(newProject);
        updateLocalStorage(projectList);
    };

    function deleteProject(index) {
        projectList.splice(index, 1);
        updateLocalStorage(projectList);
    };

    function updateProject(title, projectIndex) {
        projectList[projectIndex].title = title;
        updateLocalStorage(projectList);
    }

    function getProjectNames() {
        return projectList

    }

    class task {
        constructor(title, description, dueDate, priority, projectIndex, complete) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.projectIndex = projectIndex
            this.complete = false
    
        }
    };
    
    function createTask(title, description, dueDate, priority, projectIndex) {
        let newTask = new task(title, description, parseISO(dueDate), priority, projectIndex);
        projectList[projectIndex].tasks.push(newTask);
        updateLocalStorage(projectList);
    }

    function deleteTask(projectIndex, taskIndex) {
        projectList[projectIndex].tasks.splice(taskIndex, 1);
        updateLocalStorage(projectList);
    }

    function updateTask(title, description, dueDate, priority, projectIndex, taskIndex) {
        projectList[projectIndex].tasks[taskIndex].description = description;
        projectList[projectIndex].tasks[taskIndex].title = title;
        projectList[projectIndex].tasks[taskIndex].dueDate = parseISO(dueDate);
        projectList[projectIndex].tasks[taskIndex].priority  = priority;
        updateLocalStorage(projectList);
    }

    function toggleTaskCompleteStatus(projectIndex, taskIndex){
        projectList[projectIndex].tasks[taskIndex].complete == false ? projectList[projectIndex].tasks[taskIndex].complete = true : projectList[projectIndex].tasks[taskIndex].complete = false;
        updateLocalStorage(projectList);
    };

export {
    getProjectNames,
    createProject,
    deleteProject,
    createTask,
    deleteTask,
    updateTask,
    updateProject,
    toggleTaskCompleteStatus
}

