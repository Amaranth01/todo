import('../css/style.css')
import './list';
import {TaskList} from "./list";

let taskList = new TaskList();
taskList.task();


let clear = document.querySelector('#clear');

// export const TodoList = function (){
//     submit.addEventListener('click', function () {
//         ;
//     });
//     clear.addEventListener('click', function () {
//         list.remove();
//     });
// }
// TodoList();