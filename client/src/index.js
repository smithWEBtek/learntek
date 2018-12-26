
getTracks()
console.log("hello javascript---------------------------------");



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
			<h3>${track.name}</h3>
		</div>
	`)
}



function getTracks() {
	let apiLinks = document.querySelectorAll('a.api-links')
	apiLinks.forEach(link => {
		link.addEventListener('click', getApiData)
	})
}

function getApiData(event) {
	event.preventDefault()
	let url = this.href
	fetch(url)
		.then(res => res.json()
			.then(data => {
				console.log("data: ", data)
				switch (url) {
					case 'http://localhost:3000/api/tracks':
						data.forEach(item => {

							debugger

							let newTrack = new Track(item)
							let html = newTrack.trackHTML()
							document.getElementById('tracks-data').append(html)
						})
					default:
						console.log('there was no track data');
				}
			})
		)
} 