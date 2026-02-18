const input = document.querySelector('input');
const ul = document.querySelector('ul');
const addBtn = document.querySelector('button.add');
const cleanBtn = document.querySelector('button.clean');

const searchInput = document.querySelector('input.inputsearch');
const searchButton = document.querySelector('button.search2');

const assignments = [];

const addAssignment = (e) => {
    e.preventDefault();
    if (input.value === '') return;
    assignments.push(input.value);

    ul.textContent = '';
    assignments.forEach((assignment, key) => {
        const task = document.createElement('li');
        task.dataset.key = key;
        task.innerHTML = `<p style="font-size: 16px">*</p>
                    <p>${assignment}</p>
                    <button class="remove">X</button>`;

        task.querySelector('button').addEventListener('click', removeTask);

        ul.appendChild(task);
    });
    input.value = '';
    document.querySelector('span.counter').textContent = assignments.length;
};

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    assignments.splice(index, 1);

    ul.textContent = '';
    assignments.forEach((assignment, key) => {
        const task = document.createElement('li');
        task.dataset.key = key;
        task.innerHTML = `<p style="font-size: 16px">*</p>
                    <p>${assignment}</p>
                    <button class="remove">X</button>`;

        task.querySelector('button').addEventListener('click', removeTask);

        ul.appendChild(task);
    });
    document.querySelector('span.counter').textContent = assignments.length;
};

addBtn.addEventListener('click', addAssignment);

document
    .querySelectorAll('li button.remove')
    .forEach((item) => item.addEventListener('click', removeTask));

cleanBtn.addEventListener('click', (e) => {
    e.preventDefault();
    assignments.length = 0;
    ul.textContent = '';
    document.querySelector('span.counter').textContent = assignments.length;
});

searchButton.addEventListener('click', () => {
    const word = searchInput.value.toLowerCase();
    ul.textContent = '';
    console.log(word);
    const filterArray = assignments.filter((assignment) =>
        assignment.toLowerCase().includes(word)
    );
    console.log(filterArray);
    console.log(assignments);

    filterArray.forEach((record) => {
        const task = document.createElement('li');
        task.innerHTML = `<p style="font-size: 16px">*</p>
                    <p>${record}</p>`;

        ul.appendChild(task);
    });
});
