

function listenForNewDataLinks() {
	let apiNewLinks = document.querySelectorAll('a.api-new-links')
	apiNewLinks.forEach(link => {
		link.addEventListener('click', getNewForm)
	})
}

function getNewForm(event) {
	event.preventDefault()
	let form = 'resources'
	dataDiv.innerHTML = '... loading new form ...'
	switch (form) {
		case 'tracks':
			newTrackForm()
			break;
		case 'resources':
			debugger;
			newResourceForm()
			break;
		case 'activities':
			newActivityForm()
			break;
		case 'categories':
			newCategoryForm()
			break;
		default:
			console.log('there was no form specified in the request');
	}
}
