const input = document.querySelector('#input-task');
const listContainer = document.querySelector('#list-container');
const addBtn = document.querySelector('#add-taskBtn');


addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value === '') {
        alert('Please write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" class="checkbox">
                                ${input.value}
                                <span><i class="fa-regular fa-trash-can"></i></span>`;
        listContainer.appendChild(li);
    }

    input.value = '';
    saveData();
});



listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
        const listItem = e.target.closest('li');
        listItem.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'I') {
        e.target.parentElement.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// Load data from localStorage when the page loads
const savedData = localStorage.getItem('data');
if (savedData) {
    listContainer.innerHTML = savedData;
}
// localStorage.clear();