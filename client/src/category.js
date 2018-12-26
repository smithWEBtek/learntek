
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
		<button class='category-resources' id=${this.id}>show resources</button>	
		</div>
		`)
}

function showCategoryResources(id) {
	fetch(baseUrl + `categories/${id}/resources`)
		.then(res => res.json()
			.then(data => {
				let resources = data.map(resource => {
					return (`
				<p>${resource.name}</p>
				`)
				})
				console.log("resources: ", resources);
			}))
}

function listenCategoryResources() {
	const categoryResourceButton = document.querySelector('button.category-resources')
	categoryResourceButton.addEventListener('click', function (event) {
		event.preventDefault()
		showCategoryResources(this.id)
	});
}