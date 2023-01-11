
    import parseISO from "date-fns/parseISO";
    
    let projectList = [{
        title: 'Demo Project',
        tasks: [
            
        ],
    }]

    class project {
        constructor(title, tasks) {
            this.title = title
            this.tasks = []
        }

        
    }
    function createProject(title) {
        let newProject = new project(title);
        projectList.push(newProject);
    };

    function deleteProject(index) {
        projectList.splice(index, 1);
    };

    function updateProject(title, projectIndex) {
        projectList[projectIndex].title = title;
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
        console.log(projectList)        // only to check status
    }

    function deleteTask(projectIndex, taskIndex) {
        projectList[projectIndex].tasks.splice(taskIndex, 1);
    }

    function updateTask(title, description, dueDate, priority, projectIndex, taskIndex) {
        projectList[projectIndex].tasks[taskIndex].description = description;
        projectList[projectIndex].tasks[taskIndex].title = title;
        projectList[projectIndex].tasks[taskIndex].dueDate = parseISO(dueDate);
        projectList[projectIndex].tasks[taskIndex].priority  = priority;
    }

    function toggleTaskCompleteStatus(projectIndex, taskIndex){
        projectList[projectIndex].tasks[taskIndex].complete == false ? projectList[projectIndex].tasks[taskIndex].complete = true : projectList[projectIndex].tasks[taskIndex].complete = false;
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

