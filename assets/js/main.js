import('../../assets/css/style.css');
import('./validateButton');
import('./editButton');
import('./deleteButton');

let submit = document.querySelector('#submit');
let text = document.querySelector('#text');
let list = document.querySelector('#list');
let clear = document.querySelector('#clear');

const TodoList = function (){
    submit.addEventListener('click', function () {
        let p = document.createElement('p');
        list.appendChild(p);
        list.innerHTML += text.value;
    });
    clear.addEventListener('click', function () {
        list.remove();
    });
}

TodoList();