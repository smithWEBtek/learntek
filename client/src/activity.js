
class Activity {
	constructor(obj) {
		this.name = obj.name
		this.description = obj.description
		this.status = obj.status
	}
}

Activity.prototype.activityHTML = function () {
	return (`
		<div>
			<h3>${this.name}</h3>
		</div>
	`)
}
