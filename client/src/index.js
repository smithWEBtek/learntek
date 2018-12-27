console.log("hello javascript---------------------------------");
listenToDataLinks()
listenForNewDataLinks()

// const baseUrl = 'https://learntek.herokuapp.com/api/'
const baseUrl = 'http://localhost:3000/api/'

function listenToDataLinks() {
	let apiLinks = document.querySelectorAll('a.api-links')
	apiLinks.forEach(link => {
		link.addEventListener('click', getApiData)
	})
}

function getApiData(event) {
	event.preventDefault()
	let url = this.id
	let dataDiv = document.getElementById('api-data')
	dataDiv.innerHTML = '...loading...'

	let apiDataHtml = ''

	fetch(baseUrl + url)
		.then(res => res.json()
			.then(data => {

				switch (url) {
					case 'new-tracks':
						console.log("data: ", data)
						data.forEach(item => {
							let newTrack = new Track(item)
							apiDataHtml += newTrack.trackHTML()
						})
						dataDiv.innerHTML = apiDataHtml
						break;

					case 'new-resources':
						data.forEach(item => {
							let newResource = new Resource(item)
							apiDataHtml += newResource.resourceHTML()
						})
						dataDiv.innerHTML = apiDataHtml
						break;

					case 'new-activities':
						data.forEach(item => {
							let newActivity = new Activity(item)
							apiDataHtml += newActivity.activityHTML()
						})
						dataDiv.innerHTML = apiDataHtml
						break;

					case 'new-categories':
						data.forEach(item => {
							let newCategory = new Category(item)
							apiDataHtml += newCategory.categoryHTML()
						})
						dataDiv.innerHTML = apiDataHtml
						listenCategoryResources()
						break;

					default:
						console.log('there was no data returned');
				}
			})
		)
}

function listenForNewDataLinks() {
	let apiNewLinks = document.querySelectorAll('a.api-new-links')
	apiNewLinks.forEach(link => {
		link.addEventListener('click', getNewForm)
	})
}

function getNewForm(event) {
	event.preventDefault()
	let form = this.id
	let dataDiv = document.getElementById('api-data')
	dataDiv.innerHTML = '... loading new form ...'
	switch (form) {
		case 'new-track':
			newTrackForm()
			break;
		case 'new-resource':
			newResourceForm()
			break;
		case 'new-activity':
			newActivityForm()
			break;
		case 'new-category':
			newCategoryForm()
			break;
		default:
			console.log('there was no form specified in the request');
	}
}

