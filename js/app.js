document.addEventListener('DOMContentLoaded', () => {
    // console.log('JavaScript has loaded');
    const newFormEntry = document.querySelector('#new-form-entry');
    newFormEntry.addEventListener('submit', handleNewFormEntrySubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);


});

const createChampionsItem = function (form) {
    const listOfChampionsItem = document.createElement('li');
    listOfChampionsItem.classList.add('list-of-champions-item');
    
    const rider = document.createElement('h2');
    rider.textContent = form.rider.value;
    listOfChampionsItem.appendChild(rider);

    const team = document.createElement('h3');
    team.textContent = form.team.value;
    listOfChampionsItem.appendChild(team);

    const year = document.createElement('h3');
    year.textContent = form.year.value;
    listOfChampionsItem.appendChild(year);

    const points = document.createElement('h4');
    points.textContent = form.points.value;
    listOfChampionsItem.appendChild(points);

    const victories = document.createElement('h4');
    victories.textContent = form.victories.value;
    listOfChampionsItem.appendChild(victories)

    const DNFs = document.createElement('p');
    DNFs.textContent = form.DNFs.value;
    listOfChampionsItem.appendChild(DNFs);



    return listOfChampionsItem;


}

const handleNewFormEntrySubmit = function (event) {
    event.preventDefault()

    const listOfChampionsItem = createChampionsItem(event.target);
    const listOfChampions = document.querySelector('#list-of-champions');
    listOfChampions.appendChild(listOfChampionsItem);

    event.target.reset();
}

const handleDeleteAllClick = function (event) {
    const listOfChampions = document.querySelector('#list-of-champions');
    listOfChampions.innerHTML = '';
}
