import css from '../src/styles.css';
import { renderLoginPrompt, responsiveSidebar,renderStaticElements, renderHeader, renderProjectSidebar, renderTaskList } from './dom-helper';
renderLoginPrompt(true)

let mediaQuery = window.matchMedia('(max-width: 768px)')


  mediaQuery.addEventListener("change", () => {
    responsiveSidebar(mediaQuery)
  })

  window.addEventListener('DOMContentLoaded', () => {
    responsiveSidebar(mediaQuery)
});
  
  responsiveSidebar(mediaQuery);