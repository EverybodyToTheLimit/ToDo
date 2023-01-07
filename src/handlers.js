import { removeProjectSidebar } from "./dom-helper"

let clickHandler = (clickOrigin, id) => {
    alert(clickOrigin)
    if (id !== undefined) {
        alert(id)
    }
    if (clickOrigin == "delete") {
        removeProjectSidebar(clickOrigin, id)
    }
}

export {
    clickHandler
}