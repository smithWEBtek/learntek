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
			<fieldset>
				<h3>${this.name}</h3>
				<p>${this.description}</p>
				<p>status: ${this.status}</p>
			</fieldset>	
		</div>
	`)
}
