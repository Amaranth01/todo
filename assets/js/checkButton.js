let list = document.querySelector('#list');

export const CheckButton = function () {
    this.createButtonValidate = () => {
        let ok = document.createElement('button');
        list.appendChild(ok);
        ok.innerHTML += "Valider"
        ok.className = "ok";

        ok.addEventListener('click', function () {
            list.style.textDecoration = 'line-through';
        })
    }
}