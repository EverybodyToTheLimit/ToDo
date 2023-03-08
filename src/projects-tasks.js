
    import parseISO from "date-fns/parseISO";
    import { getFirestore, collection, getDoc, addDoc, setDoc, doc } from 'firebase/firestore/lite'
    import { getUUID } from "./auth";
    import { firebaseConfig } from "./firebase-setup";
    import { initializeApp } from "firebase/app";

    

    //plugging in Firestore 
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    async function updateLocalStorage(projectList) {


        // Add a new message entry to the Firebase database.
        try {
            let docRef = doc(db, 'projects', getUUID())
            let jsonized = JSON.stringify(projectList)
            let data = {
                "projectList" : jsonized
            }

            await setDoc(docRef, data)
        }
        catch(error) {
          console.error('Error writing new message to Firebase Database', error);
        }
      }

    async function retrieveLocalstorage (UUID) {
        try {
            const app = initializeApp(firebaseConfig);
            const db = getFirestore(app);
            let docRef = doc(db, 'projects', UUID)
            const retrievedDoc = await getDoc(docRef) 
            projectList = JSON.parse(retrievedDoc.data().projectList)

        }
        catch(error) {
            console.error(error)
        }    
    }




    let projectList = [];

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
    toggleTaskCompleteStatus,
    retrieveLocalstorage
}

