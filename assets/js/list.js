import {Button} from "./button";
import {CheckButton} from "./checkButton";
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

            let buttonValidate = new CheckButton();
            buttonValidate.createButtonValidate();

            let edit = document.createElement('button');
            list.appendChild(edit);
            edit.className = "edit";
            edit.innerHTML += "éditer";

            edit.addEventListener('click', function () {
               let changeTask = document.createElement('input');
               changeTask.type = "text";
               p.contentEditable = "true";
               p.style.border = "2px black solid";
            })

            let del = document.createElement('button');
            list.appendChild(del);
            del.className = "del";
            del.innerHTML += "supprimer";

            del.addEventListener('click', function () {
                p.remove();
            })


            let button = new Button();
            button.createButton();
        });
    };
};