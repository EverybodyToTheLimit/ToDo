import css from '../src/styles.css';
import { responsiveSidebar,renderStaticElements, renderHeader, renderProjectSidebar, renderTaskList } from './dom-helper';
renderHeader();
renderStaticElements();
renderProjectSidebar();
renderTaskList();
let mediaQuery = window.matchMedia('(max-width: 768px)')


  mediaQuery.addEventListener("change", () => {
    responsiveSidebar(mediaQuery)
  })

  window.addEventListener('DOMContentLoaded', (event) => {
    responsiveSidebar(mediaQuery)
});
  
  responsiveSidebar(mediaQuery);