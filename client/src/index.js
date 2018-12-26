
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
	fetch(baseUrl + url)
		.then(res => res.json()
			.then(data => {
				console.log("data: ", data)

				switch (url) {
					case 'tracks':
						document.getElementById('tracks-data').innerHTML = ''
						data.forEach(item => {
							let newTrack = new Track(item)
							let html = newTrack.trackHTML()
							document.getElementById('tracks-data').innerHTML += html
						})
						break;

					case 'resources':
						data.forEach(item => {
							let newResource = new Resource(item)
							let html = newResource.resourceHTML()
							document.getElementById('resources-data').innerHTML += html
						})
						break;

					default:
						console.log('there was no data returned');
				}
			})
		)
}
