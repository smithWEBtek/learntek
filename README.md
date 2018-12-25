# learnTEK
### SUMMARY
The `learnTEK` app provides a web interface for managing the learning experience for any subject that can be learned in a browser.
It is backed by a Ruby on Rails API to provide: 
- backend data
- CRUD operations to the postgresql database
- Model & Controller interaction with [Cloudinary](http://www.cloudinary.com) (online storage & retreival of digital artifacts at CDN level performance.)

* Ruby version: 2.4.4

* System dependencies: 
- will require a Cloudinary account for storing books, videos, images, docs

* Configuration
### Cloudinary
- Create an account on Cloudinary for storing your resource files (pdfs, docs, videos, images, files)
- Create a cloudinary.yml file (follow Cloudinary instructions to download it, which holds your Cloudinary credentials)
- Update .gitignore with `/config/cloudinary.yml` to prevent your credentials from uploading to Github

### Chrome PDF extension
- Provides a better viewing experience for PDF files
- See: [PDF Viewer in Chrome Web Store](https://chrome.google.com/webstore/detail/pdf-viewer/oemmndcbldboiebfnladdacbdfmadadm)

* Database create, migrate, seed
- rake db:dcms

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

- Fork & clone repo
- run: $`bundle install`
- run: $`rake db:dcms`
- browse to: `localhost:3000`

### Data Model

- category
	- language, craft, art, technology, music, cooking, trade, discipline, literature, 
	- [Learning Styles](https://www.learning-styles-online.com/overview/)

- resource
	- book, pdf, video, image, doc 

- source
	- subject matter expert
	- resource provider or curator
	- organization

- activity
	- (learn) hello_world
	- (internalize) improvise-deploy-blog-teach
	- (quantity) repeat for retention, do it alot
	- (quality) research more, go deeper

