//console.log('hello world');

let message = document.querySelector('#message');

//To create a function that takes in an event
const addMovie = (event) => {
//To remove default set to button elements
    event.preventDefault();
// To Select the value of the element eg the input field and savee it to a variable
    let inputField = document.querySelector('input');
// To make the HTML for movie list items. To create a new variable that stores a new li element to hold movie titles, and movie's delete button
    const movie = document.createElement('li');
//To create a span element , to set textContent to be the value of the input field
    let movieTitle = document.createElement('span');
//To type out what the users type into inputField into the span
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
//To append movieTitle span to movie element, to attach the title to its parent
    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn)

    let ulElement = document.querySelector('ul');
//To attach movie element to the list
    ulElement.appendChild(movie)
    inputField.value = ''
};  

document.querySelector('form').addEventListener('submit', addMovie);


const deleteMovie = (event) => {
    event.target.parentNode.remove()
    //message.textContent = 'Movie deleted!'
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted.`
    revealMessage();
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked') === true){
        //message.textContent = 'Movie watched';
        message.textContent = `${event.target.textContent} watched.`
    } else {
        //message.textContent = 'Movie added back';
        message.textContent = `${event.target.textContent} added back.`
    };
    revealMessage()
};

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout (() => {
        message.classList.add('hide')}, 1000)
};