class CreateSources < ActiveRecord::Migration[5.2]
  def change
    create_table :sources do |t|
			t.string :name
			t.string :url
			t.string :description
			t.integer :category_id
    end
  end
end
