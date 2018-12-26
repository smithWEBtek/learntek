
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
						console.log('there was no track data');
				}
			})
		)
}

class Track {
	constructor(obj) {
		this.name = obj.name
		this.category_id = obj.category_id
		this.name = obj.name
		this.description = obj.description
		this.category_id = obj.category_id
		this.status = obj.status
		this.start_date = obj.start_date
		this.goal_date = obj.goal_date
	}
}

Track.prototype.trackHTML = function () {
	return (`
		<div>
			<h3>${this.name}</h3>
		</div>
	`)
}

class Resource {
	constructor(obj) {
		this.name = obj.name
		this.category_id = obj.category_id
		this.name = obj.name
		this.description = obj.description
		this.category_id = obj.category_id
		this.status = obj.status
		this.start_date = obj.start_date
		this.goal_date = obj.goal_date
	}
}

Resource.prototype.resourceHTML = function () {
	return (`
		<div>
		<h3>${this.secure_url || this.name}</h3>
		</div>
		`)
}