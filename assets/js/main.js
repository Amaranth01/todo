import {DeleteList} from "./deleteList";

import('../css/style.css')
import './list';
import {TaskList} from "./list";
import './deleteList';

let taskList = new TaskList();
taskList.task();

let deleteList = new DeleteList();
deleteList.deleteTask();