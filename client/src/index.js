
getData()
console.log("hello javascript---------------------------------");

const baseUrl = 'https://learntek.herokuapp.com/api/'

function getData() {
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
					case 'tracks':
						console.log("data: ", data)
						data.forEach(item => {
							let newTrack = new Track(item)
							apiDataHtml += newTrack.trackHTML()
						})
						dataDiv.innerHTML = apiDataHtml
						break;

					case 'resources':
						data.forEach(item => {
							let newResource = new Resource(item)
							apiDataHtml += newResource.resourceHTML()
						})
						dataDiv.innerHTML = apiDataHtml
						break;

					case 'activities':
						data.forEach(item => {
							let newActivity = new Activity(item)
							apiDataHtml += newActivity.activityHTML()
						})
						dataDiv.innerHTML = apiDataHtml
						break;

					default:
						console.log('there was no data returned');
				}
			})
		)
}
