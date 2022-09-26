console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully.');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const catImage = document.querySelector('#cat-image')
catImage.addEventListener('mouseover', function(){ alert('You are paww-retty'); });