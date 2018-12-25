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

#### RESOURCE
*book, pdf, video, image, doc, url, course*
```ruby 
has_many :categories
belongs_to :source

t.string :public_id
t.string :url
t.string :secure_url
t.integer :width
t.integer :height
t.string :format
```

#### TRACK
*categorized activities using resources*
```ruby
has_many :resources
has_many :sources, through: :resources
has_many :activities

t.string :name
t.string :category
```

#### CATEGORY
*language, craft, art, technology, music, cooking, trade, discipline, literature (area of study)*

- [Learning Styles](https://www.learning-styles-online.com/overview/)

```ruby 
has_many :resources
has_many :sources
```

#### SOURCE
*subject matter expert, resource provider or curator, organization, mentor*
```ruby
belongs_to :category
has_many :resources

t.string :name
t.string :url
t.string :description
```

#### ACTIVITY
*action steps using categorized resources, organized by track*

- (learn) hello_world
- (internalize) improvise-deploy-blog-teach
- (quantity) repeat for retention, do it alot
- (quality) research more, go deeper

```ruby
has_many :tracks
has_many :resources 
```