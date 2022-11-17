let list = document.querySelector('#list');

export const DeleteList = function () {
    let clear = document.querySelector('#clear');
    this.deleteTask = () => {
        clear.addEventListener('click', function() {
            list.remove();
        });
    }
}