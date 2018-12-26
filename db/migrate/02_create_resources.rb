class CreateResources < ActiveRecord::Migration[5.1]
  def change
		create_table :resources do |t|
			t.integer :category_id
			t.string :name
			t.string :format
			t.string :url
			t.string :description

      t.timestamps
    end
  end
end
