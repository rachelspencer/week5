const favColor = document.querySelector('#color')
favColor.addEventListener('click', function(){ alert('Forest Green'); });

const favPlace = document.querySelector('#place')
favPlace.addEventListener('click', function(){ alert('Bahana Gorge, a swimming hole at the end of a hike in Cairns.'); });

const favRitual = document.querySelector('#ritual')
favRitual.addEventListener('click', function(){ alert('Folding laundry while watching home renovation shows.'); });

function handleSubmit(evt) {
	evt.preventDefault();
    const formSelect = document.querySelector('#journey_info');
    const optionsList = formSelect.options;
    const selectedIndex = optionsList.selectedIndex;
    const selectedOption = optionsList[selectedIndex];
	console.log('selected value', selectedOption.value);

    if (selectedOption.value === 'cairns'){
        alert('In 2011 I left Cairns for Gold Coast where I studied at university and obtained a Bachelors Degree in Digital Media (Fine Art). I worked as an Art Consultant before resigning to move abroad.');
    } else if (selectedOption.value === 'leaving-aus') {
        alert('I moved to Fort Lauderdale in 2018 and started working on megayachts as a stewardess. During this time I travelled to the Mediterranean, Caribbean, Bahamas and New England. The two yachts I worked on are named Motor Yacht Mia Elise II and Motor Yacht C Ctar.');
    } else {
        alert('After four years as a stewardess I decided to take a land-based position managing a luxury penthouse in Miami. While I am no longer full time on yachts, I am still involved in operational aspects of my current boss\'s 60m megayacht.');
    }  
};

let form = document.querySelector('#journey');

form.addEventListener('submit', handleSubmit);