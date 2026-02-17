const input = document.querySelector('input');
const ul = document.querySelector('ul');
const addBtn = document.querySelector('button.add');
const cleanBtn = document.querySelector('button.clean');

const assignments = [];

const addAssignment = (e) => {
    e.preventDefault();
    if (input.value === '') return;
    const task = document.createElement('li');
    task.innerHTML = `<p style="font-size: 16px">*</p>
                    <p>${input.value}</p>
                    <button class="remove">X</button>`;
    assignments.push(input.value);
    ul.textContent = '';
    assignments.forEach((assignment) => {
        ul.appendChild(assignment);
    });
    ul.appendChild(task);
    input.value = '';
    task.querySelector('button').addEventListener('click', removeTask);
};

const removeTask = (e) => {
    e.target.parentNode.remove();
};

addBtn.addEventListener('click', addAssignment);

document
    .querySelectorAll('li button.remove')
    .forEach((item) => item.addEventListener('click', removeTask));

cleanBtn.addEventListener('click', (e) => {
    e.preventDefault();
    assignments.length = 0;
    ul.textContent = '';
});
