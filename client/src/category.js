
class Category {
	constructor(obj) {
		this.id = obj.id
		this.name = obj.name
		this.resources = obj.resources
	}
}

Category.prototype.categoryHTML = function () {
	return (`
		<div>
		<h3>${this.name}</h3>
		<button class='category-resources-buttons' id=${this.id}>show resources</button>
		</div>
		<div data-id=${this.id} class='category-resources-div'></div> 
		`)
}

function listenCategoryResources() {
	const categoryResourceButtons = document.querySelectorAll('button.category-resources-buttons')
	categoryResourceButtons.forEach(button => {
		button.addEventListener('click', function (event) {
			event.preventDefault()
			showCategoryResources(this.id)
			button.remove()
		})
	});
}

function showCategoryResources(id) {
	fetch(baseUrl + 'resources.json')
		.then(res => res.json()
			.then(data => {
				let resources = data.filter(r => {
					return r.category_id === +id
				})
				let resourcesHTML = resources.map((r, i) => {
					return `<li>${r.name}</li>`
				}).join('')
				document.querySelectorAll('.category-resources-div')[id - 1].innerHTML = resourcesHTML
			})
		)
}