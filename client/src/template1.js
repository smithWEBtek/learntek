					case 'resources':
data.forEach(item => {
	let newResource = new Resource(item)
	let html = newResource.resourceHTML()
	document.getElementById('resources-data').innerHTML += html
})
break;



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

Resource.prototype.trackHTML = function () {
	return (`
		<div>
			<h3>${this.name}</h3>
		</div>
	`)
}