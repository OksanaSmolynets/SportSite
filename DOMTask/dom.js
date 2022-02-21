//Task 1
const listElement = document.querySelectorAll('#list li');
console.log(
    listElement[0].textContent,
    listElement[4].textContent,
    listElement[1].textContent,
    listElement[3].textContent,
    listElement[2].textContent
)

const listElement1 = document.getElementById('list');
const sublistElement1 = listElement1.getElementsByTagName('li');
console.log(
    sublistElement1[0].textContent,
    sublistElement1[4].textContent,
    sublistElement1[1].textContent,
    sublistElement1[3].textContent,
    sublistElement1[2].textContent
)

//Task 2
const header = document.querySelector('h1');
header.style.background = '#90EE90';
header.style.width = '40%';

const textStyles = document.querySelectorAll('#myDiv p');
textStyles[0].style.fontWeight = 'bold';
textStyles[1].style.color = 'red';
textStyles[2].style.textDecoration = 'underline';
textStyles[3].style.fontStyle = 'italic';

const makeHorisontalText = document.querySelector('#myList');
makeHorisontalText.style.display = 'flex';
const makeHorisontalTextList = makeHorisontalText.querySelectorAll('li');
for (let elem of makeHorisontalTextList) {
    elem.style.listStyle = 'none';
}

const spanStyles = document.querySelector('span');
spanStyles.style.visibility = 'hidden';


//Task 3
const buttonEvents = document.createElement('button');
buttonEvents.innerHTML = 'Live button!!!!!';
document.body.appendChild(buttonEvents);

buttonEvents.addEventListener("click", function () {
    let message = document.createElement('p');
    message.innerHTML = 'I was pressed!';
    document.body.appendChild(message);
});

buttonEvents.addEventListener("mouseenter", function (e) {
    let message = document.createElement('p');
    message.innerHTML = 'Mouse on me!';
    document.body.appendChild(message);
});

buttonEvents.addEventListener("mouseleave", function () {
    let message = document.createElement('p');
    message.innerHTML = 'Mouse is not on me!';
    document.body.appendChild(message);
});




