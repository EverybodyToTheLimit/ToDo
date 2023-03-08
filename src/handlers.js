import { updateLoginInfo, renderLoginPrompt, filterMain, clearMainScreen, completeTaskToggle, renderTaskList, renderProjectSidebar, removeNewProjectModal, renderNewProjectModal, responsiveSidebar,renderStaticElements, renderHeader } from "./dom-helper"
import { retrieveLocalstorage, updateProject, updateTask, toggleTaskCompleteStatus, deleteTask, createTask, createProject, deleteProject, getProjectNames} from "./projects-tasks"
import {
    
        signIn,
        signOutUser,
        initFirebaseAuth,
        getProfilePicUrl,
        getUserName,
        getUUID,
        isUserSignedIn
      
} from './auth'
import { firebaseConfig } from "./firebase-setup";
import { initializeApp } from 'firebase/app';



initializeApp(firebaseConfig);

let authHandler = async () => {
    if ((isUserSignedIn() === false)) {
        await signIn()
        if (isUserSignedIn() === true) {
            await retrieveLocalstorage(getUUID())
            renderHeader() 
            renderStaticElements() 
            renderProjectSidebar()
            updateLoginInfo(getUserName(), getProfilePicUrl())
        }
}
    else {
        await signOutUser()
        location.reload();
    }
}

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
    else if (clickOrigin == "edit-project") {
        renderNewProjectModal("project-edit", projectId);
    }
    else if (clickOrigin == "project-edited") {
        updateProject(Projectname,projectId)
        removeNewProjectModal();
        renderProjectSidebar();
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
        renderTaskList(projectId);
    }
    else if (clickOrigin == "task-edit") {
        renderNewProjectModal("task-edit", projectId, taskId)
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

    else if (clickOrigin == "week") {
        clearMainScreen();
        let projectList = getProjectNames()
        for (let i = 0; i < projectList.length; i++) {
            renderTaskList(i, true);
        }
        filterMain("week")
    }

    else if (clickOrigin == "today") {
        clearMainScreen();
        let projectList = getProjectNames()
        for (let i = 0; i < projectList.length; i++) {
            renderTaskList(i, true);
        }
        filterMain("today")
    }

}



export {
    clickHandler,
    authHandler
}