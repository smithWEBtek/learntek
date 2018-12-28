// newResource()
// newResourceForm()

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
		<h3>${this.name}</h3>
		</div>
	`)
}

// function newResource() {
// 	let newResourceLink = document.getElementById('new-resource')
// 	newResourceLink.addEventListener('click', function (event) {
// 		event.preventDefault()
// 		console.log('newResource link clicked........................');
// 	})
// 	newResourceForm()
// }

function newResourceForm() {
	// populate categories dropdown
	fetch(baseUrl + 'categories')
		.then(res => res.json()
			.then(categories => {
				let categoryOptions = categories.map(category => {
					return (`<option value=${category.id}>${category.name}</option>`)
				})
				// create form
				let resourceForm = (`
					<fieldset> 
						<form id='new-resource-form'>
							<input id='name' placeholder='resource name' /><br>
							<input id='description' placeholder='description'/><br>
							<input id='url' placeholder='url'/><br>
							<input id='format' placeholder='format'/><br>
							<select id="categorySelect"><br>
								${categoryOptions}
							</select><br>
							<button type='submit'>Submit Resource</button>
						</form>
					</fieldset>
				`)
				// put form onto DOM
				document.getElementById('new-resource-form-div').innerHTML = resourceForm
				// listen for click of new resource link
				createResource()
			})
		)
}

function createResource() {
	let form = document.querySelector('form#new-resource-form')
	form.addEventListener('submit', function (event) {
		event.preventDefault()
		let name = event.currentTarget.name.value
		let description = event.currentTarget.description.value
		let url = event.currentTarget.url.value
		let format = event.currentTarget.format.value
		let category_id = event.currentTarget.categorySelect.value

		let resource = {
			name: name,
			description: description,
			category_id: category_id,
			url: url,
			format: format
		}

		fetch('http://localhost:3000/api/resources', {
			method: 'post',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(resource)
		}).then(function (response) {
			console.log('response: ', response)
			console.log('new resource form submitted .............')
		});
	})
}


