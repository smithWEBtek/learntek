


function newTrackForm() {
	// populate the form 'categories_dropdown'
	fetch(baseUrl + 'categories')
		.then(res => res.json()
			.then(categories => {
				let categoryOptions = categories.map(category => {
					return (`<option value=${category.id}>${category.name}</option>`)
				})
				// create form
				let trackForm = (`
					<fieldset> 
						<form id='new-track-form'>
							<input id='name' placeholder='track name' /><br>
							<input id='description' placeholder='description'/><br>
							<input id='url' placeholder='url'/><br>
							<input id='format' placeholder='format'/><br>
							<select id="categorySelect"><br>
								${categoryOptions}
							</select><br>
							<button type='submit'>Submit Track</button>
						</form>
					</fieldset>
				`)
				// put form onto DOM
				document.getElementById('new-track-form-div').innerHTML = trackForm
				// listen for click of new track link
				createTrack()
			})
		)
}