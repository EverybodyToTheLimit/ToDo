import css from '../src/styles.css';
import { createTask } from './projects-tasks';
import { renderStaticElements, renderHeader, renderProjectSidebar, renderTaskList } from './dom-helper';
renderHeader();
renderStaticElements();
renderProjectSidebar();
createTask("title1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a luctus dui, sed rhoncus est. Nulla bibendum metus non quam viverra iaculis. Aliquam erat volutpat. Aenean in tempus lacus. Nullam et tortor porta, facilisis ante a, vehicula ligula. Integer ex magna, fringilla eget orci a, feugiat accumsan ligula. Ut vehicula tempus elementum.", 12, 1, 0)
createTask("title2", "description2", 23, 2, 0)
createTask("title3", "description3", 32, 3, 0)
renderTaskList();