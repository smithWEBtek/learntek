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


#### CATEGORY
*language, craft, art, technology, music, cooking, trade, literature (area of study)*

```ruby 
has_many :resources
has_many :sources
t.string :name
```

#### RESOURCE
*book, pdf, video, image, doc, url, course*
- [Learning Styles](https://www.learning-styles-online.com/overview/)
```ruby 
belongs_to :category

t.string :name
t.string :description
t.string :format
t.string :url
t.string :secure_url
t.string :public_id
t.integer :width
t.integer :height
```

#### TRACK
*categorized activities using resources organized by complexity*
```ruby
has_many :track_resources
has_many :resources, through: :track_resources
has_many :activities

t.string :name
t.string :description
t.integer :category_id
t.string :status
t.date :start_date
t.date :goal_date
```

#### TRACK_ACTIVITY
*join table for track and activity*
```ruby
belongs_to :track
belongs_to :activity

t.integer :track_id
t.integer :activity_id
```

#### TRACK_RESOURCE
*join table for track and activity*
```ruby
belongs_to :track
belongs_to :resource

t.integer :track_id
t.integer :resource_id
```

#### ACTIVITY
*action steps using categorized resources, organized by track*

- (learn) hello_world
- (internalize) improvise-deploy-blog-teach
- (quantity) repeat for retention, do it alot
- (quality) research more, go deeper

```ruby
has_many :track_activities
has_many :tracks, through: :track_activities

t.string :name
t.string :description
t.string :status
```