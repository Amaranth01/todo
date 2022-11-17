let list = document.querySelector('#list');

export const Button = function () {
    this.createButton = () => {
        let del = document.createElement('button');
        let edit = document.createElement('button');
        let ok = document.createElement('button');

        list.appendChild(del);
        list.appendChild(edit);
        list.appendChild(ok);
        edit.className = "edit";
        edit.innerHTML += "éditer";
        ok.className = "ok";
        ok.innerHTML += "Valider"
        del.className = "del";
        del.innerHTML += "supprimer";
    }
}