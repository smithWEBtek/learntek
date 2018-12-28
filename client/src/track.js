
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

