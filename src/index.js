import css from '../src/styles.css';
import { renderStaticElements, renderHeader, renderProjectSidebar, renderTaskList } from './dom-helper';
renderHeader();
renderStaticElements();
renderProjectSidebar();
renderTaskList();
let mediaQuery = window.matchMedia('(min-width: 768px)')


  // Register event listener
//   mediaQuery.addEventListener("change", () => {
//     responsiveSidebar(mediaQuery)
//   })

//   window.addEventListener('DOMContentLoaded', (event) => {
//     responsiveSidebar(mediaQuery)
// });
  
//   responsiveSidebar(mediaQuery);