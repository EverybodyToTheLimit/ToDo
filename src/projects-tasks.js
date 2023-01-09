
    let projectList = [{
        title: 'Demo Project',
        tasks: [],
    }]

    class project {
        constructor(title) {
            this.title = title
        }

        
    }
    function createProject(title) {
        let newProject = new project(title);
        projectList.push(newProject);
    };

    function deleteProject(index) {
        projectList.splice(index, 1);
    };

    function getProjectNames() {
        return projectList

    }

    class task {
        constructor(title, description, dueDate, priority, projectIndex) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.projectIndex = projectIndex
    
        }
    };
    
    function createTask(title, description, dueDate, priority, projectIndex) {
        let newTask = new task(title, description, dueDate, priority, projectIndex);
        projectList[projectIndex].tasks.push(newTask);
    }

export {
    getProjectNames,
    createProject,
    deleteProject,
    createTask
}

