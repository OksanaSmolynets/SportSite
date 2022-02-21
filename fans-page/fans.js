const getSectionElem = document.querySelector('.fans');
const getFansMessageContainer = document.querySelector('.fans-message-container');
const getTextArea = document.getElementById('fans-message')
const getSendButton = document.getElementById('Send');

getSendButton.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    required();

    const createFanArticle = document.createElement('article');
    createFanArticle.className = 'article article-fans';
    const createFanMessage = document.createElement('p');
    createFanMessage.innerHTML = getTextArea.value
    createFanArticle.appendChild(createFanMessage);
    getFansMessageContainer.before(createFanArticle);

    const createDataContainer = document.createElement('div');
    createDataContainer.className = 'article-fan-info';
    createFanArticle.appendChild(createDataContainer);
    const createCurrentData = document.createElement('p');
    const today = new Date();
    var date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear() + '   ' + today.getHours() + ":" + today.getMinutes();

    createCurrentData.innerHTML = date
    createDataContainer.appendChild(createCurrentData);
    const createCurrentUserName = document.createElement('p');
    createCurrentUserName.innerHTML = `Some Fan ${today.getFullYear()}`
    createDataContainer.appendChild(createCurrentUserName);

    getTextArea.value = '';
});

function required() {
    var empt = getTextArea.value.trim().length;
    console.log(empt)
    if (empt === 0) {
        alert("Please input a Value");
        return false;
    }
}