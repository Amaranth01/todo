import('../../assets/css/style.css')

let todoList = document.querySelector('#list');

const list = [
    "Do 100 JavaScript Projects",
    "Lean Node JS",
    "Learn REACTJS",
    "Learn GraphQL",
];

todoList.push(list);

console.log(todoList);