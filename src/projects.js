
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

export {
    getProjectNames,
    createProject,
    deleteProject
}

