class CreateResources < ActiveRecord::Migration[5.1]
  def change
		create_table :resources do |t|
			t.string :name
			t.string :description
			t.string :format
			t.string :url
			t.integer :category_id
			t.string :public_id
			t.string :secure_url
			t.integer :width
			t.integer :height
      t.timestamps
    end
  end
end
