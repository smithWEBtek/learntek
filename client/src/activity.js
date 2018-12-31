// console.log('activity.js loaded ---')
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


function newActivityForm() {
	clearApiDataDiv()
	let activityForm = (`
		<fieldset>
			<strong>New Activity</strong>
			<form id='new-activity-form'>
				<input id='name' placeholder='activity name' /><br>
				<input id='description' placeholder='description'/><br>

				<select id='statusSelect' placeholder='status'>
					<option>choose status</option>
					<option value='new'>new</option>
					<option value='started'>started</option>
					<option value='progressing'>progressing</option>
					<option value='complete'>complete</option>
				</select><br>

				<button type='submit'>Submit Activity</button>
			</form>
		</fieldset>
		`)
	document.getElementById('new-form-div').innerHTML = activityForm
	createActivity()
}

function createActivity() {
	let form = document.querySelector('form#new-activity-form')
	form.addEventListener('submit', function (event) {
		event.preventDefault()
		let name = event.currentTarget.name.value
		let description = event.currentTarget.description.value
		let status = event.currentTarget.statusSelect.value

		let activity = {
			name: name,
			description: description,
			status: status
		}

		fetch(`${baseUrl}activities`, {
			method: 'post',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(activity)
		}).then(function (response) {
			clearNewFormDiv()
		});
	})
}
