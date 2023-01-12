import { createProject, createTask } from "./projects-tasks";

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function retrieveLocalstorage(db) {

    if (storageAvailable("localStorage")) {
        if (localStorage.getItem("projectList") === null) {

            // no database, creating a new one

            localStorage.setItem("projectList", JSON.stringify(db))
            // createProject("Demo Project")
            // createTask("Example project, non urgent, next week", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a luctus dui, sed rhoncus est. Nulla bibendum metus non quam viverra iaculis. Aliquam erat volutpat. Aenean in tempus lacus. Nullam et tortor porta, facilisis ante a, vehicula ligula. Integer ex magna, fringilla eget orci a, feugiat accumsan ligula. Ut vehicula tempus elementum.", "2023-01-16", "false", 0)
            // createTask("Urgent project for today", "Fusce et porta arcu. Proin bibendum ornare mauris sit amet vestibulum. Nunc euismod sagittis posuere. Donec non tempor mi, eu feugiat felis. Nulla ut justo viverra, eleifend odio sit amet, hendrerit felis. Nulla egestas, odio id faucibus faucibus, lectus orci finibus ex, vel pharetra ligula enim ut leo.", "2023-01-11", "true", 0)
            // createTask("Project for this week, also urgent", "Donec ante lorem, eleifend sed velit ac, lacinia volutpat libero. Duis lorem justo, elementum ac tristique in, dapibus at tellus. Nam lectus turpis, placerat ut urna porta, ornare feugiat enim. Sed pretium enim nulla, at vulputate libero porta sed. In hac habitasse platea dictumst. Nam eget egestas nisl, in pellentesque quam.", "2023-01-14", "true", 0)
            return false
        }
        else {
            let retrievedList = JSON.parse(localStorage.getItem("projectList"))
            return retrievedList;
        
        }
        }
    else {
        alert("no storage available")
    }
}

function updateLocalStorage (db) {
    localStorage.setItem("projectList", JSON.stringify(db))
}

export {
    retrieveLocalstorage,
    updateLocalStorage
}