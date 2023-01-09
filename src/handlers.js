import { renderTaskList, renderProjectSidebar, removeNewProjectModal, renderNewProjectModal } from "./dom-helper"
import { deleteTask, createTask, createProject, deleteProject} from "./projects-tasks"

let clickHandler = (clickOrigin, projectId, Projectname, taskId) => {
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
        renderNewProjectModal();
    }
    else if (clickOrigin == "project-modal-cancel") {
        removeNewProjectModal();
        renderProjectSidebar();
    }
    else if (clickOrigin == "sidebar-project") {
        renderTaskList(projectId)
    }
    else if (clickOrigin == "add-new-event") {
        createTask("some-title", "Etiam diam lectus, fermentum in nunc in, euismod sollicitudin justo. Donec varius lacus leo, ut hendrerit nunc laoreet sodales.", 123, 1, projectId)
        renderTaskList(projectId);
    }
    else if (clickOrigin == "task-delete") {
        deleteTask(projectId, taskId);
        renderTaskList(projectId);
    }
}

export {
    clickHandler
}