import { renderProjectSidebar, removeNewProjectModal, renderNewProjectModal } from "./dom-helper"
import { createProject, deleteProject} from "./projects"

let clickHandler = (clickOrigin, id, Projectname) => {
    if (clickOrigin == "delete") {
        deleteProject(id);
        renderProjectSidebar();
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
}

export {
    clickHandler
}