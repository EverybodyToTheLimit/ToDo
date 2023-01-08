import { removeNewProjectModal, removeProjectSidebar, renderNewProject, renderNewProjectModal } from "./dom-helper"

let clickHandler = (clickOrigin, id, Projectname) => {
    alert(clickOrigin)
    if (id !== undefined) {
        alert(id)
    }
    else if (clickOrigin == "delete") {
        removeProjectSidebar(clickOrigin, id)
    }
    else if (clickOrigin == "new-project-created") {
        alert(Projectname);
        renderNewProject(Projectname, 999);
        removeNewProjectModal();
    }
    else if (clickOrigin == "new-project") {
        renderNewProjectModal();
    }
}

export {
    clickHandler
}