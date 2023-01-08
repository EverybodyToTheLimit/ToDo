
    let projectList = []

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

export {
    projects,
    createProject,
    deleteProject
}