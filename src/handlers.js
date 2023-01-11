import { filterMain, clearMainScreen, completeTaskToggle, renderTaskList, renderProjectSidebar, removeNewProjectModal, renderNewProjectModal } from "./dom-helper"
import { updateTask, toggleTaskCompleteStatus, deleteTask, createTask, createProject, deleteProject, getProjectNames} from "./projects-tasks"

let clickHandler = (
                        clickOrigin, 
                        projectId, 
                        Projectname, 
                        taskId,
                        taskDescription,
                        dueDate,
                        priority
                    
                    ) => {
    if (clickOrigin == "delete") {
        deleteProject(projectId);
        renderProjectSidebar();
        renderTaskList();
    }
    else if (clickOrigin == "new-project-created") {
        createProject(Projectname)
        removeNewProjectModal();
        renderProjectSidebar();
    }
    else if (clickOrigin == "new-project") {
        renderNewProjectModal("project");
    }
    else if (clickOrigin == "project-modal-cancel") {
        removeNewProjectModal();
        renderProjectSidebar();
    }
    else if (clickOrigin == "sidebar-project") {
        renderTaskList(projectId)
    }
    else if (clickOrigin == "add-new-event") {
        renderNewProjectModal("task", projectId)
        // createTask("some-title", "Etiam diam lectus, fermentum in nunc in, euismod sollicitudin justo. Donec varius lacus leo, ut hendrerit nunc laoreet sodales.", 123, 1, projectId)
        renderTaskList(projectId);
    }
    else if (clickOrigin == "task-edit") {
        renderNewProjectModal("task-edit", projectId, taskId)
        // createTask("some-title", "Etiam diam lectus, fermentum in nunc in, euismod sollicitudin justo. Donec varius lacus leo, ut hendrerit nunc laoreet sodales.", 123, 1, projectId)
        renderTaskList(projectId);
    }
    else if (clickOrigin == "task-delete") {
        deleteTask(projectId, taskId);
        renderTaskList(projectId);
    }
    else if (clickOrigin == "new-event-created") {
        createTask(Projectname, taskDescription, dueDate, priority, projectId)
        removeNewProjectModal();
        renderTaskList(projectId);
    }
    else if (clickOrigin == "task-edited") {
        updateTask(Projectname,taskDescription, dueDate, priority, projectId, taskId)
        removeNewProjectModal();
        renderTaskList(projectId);
    }
    else if (clickOrigin == "task-complete") {
        toggleTaskCompleteStatus(projectId, taskId);
        completeTaskToggle(taskId, projectId)
    }
    else if (clickOrigin == "complete") {
        clearMainScreen();
        let projectList = getProjectNames()
        for (let i = 0; i < projectList.length; i++) {
            renderTaskList(i, true);
            filterMain("completed")
        }
    }

    else if (clickOrigin == "important") {
        clearMainScreen();
        let projectList = getProjectNames()
        for (let i = 0; i < projectList.length; i++) {
            renderTaskList(i, true);
        }
        filterMain("important")
    }
}

export {
    clickHandler
}