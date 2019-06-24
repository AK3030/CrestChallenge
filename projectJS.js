let createButton = document.getElementById("create");

let numDivs = 0;

let main = document.getElementById("main");

let numInput = document.getElementById("number-in");

let addButton = document.getElementById("add");

let deleteButton = document.getElementById("delete");

const addChild = () => {
    numDivs++;
    let newChild = document.createElement('div');
    newChild.setAttribute('class', 'box');
    newChild.innerText = numDivs;
    let newXButton = createXButton();
    newChild.appendChild(newXButton);
    main.appendChild(newChild);
}

const deleteChild = () => {
    numDivs--;
    main.removeChild(main.lastChild);
}

deleteButton.addEventListener('click', e => {
    deleteChild();
})

addButton.addEventListener('click', e => {
    e.preventDefault();
    addChild();
})

createButton.addEventListener('click', e => {
    e.preventDefault();
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    numDivs = 0;

    let numNew = numInput.value;

    for (let i = 0; i < numNew * 3; i++) {
        addChild();
    }
})

const createXButton = (num) => {
    let xButton = document.createElement('div');
    xButton.addEventListener('click', e => {
        deleteChild();
    })

    xButton.innerText = 'X'

    return xButton;
}