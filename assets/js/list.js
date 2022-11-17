import {Button} from "./button";
import('./button')

export const TaskList = function () {
    this.task = () => {
        let submit = document.querySelector('#submit');
        let list = document.querySelector('#list');
        let text = document.querySelector('#text');

        submit.addEventListener('click', function () {
            let p = document.createElement('p');
            list.appendChild(p);
            list.innerHTML += text.value;

            let button = new Button();
            button.createButton();
        });
    };
};