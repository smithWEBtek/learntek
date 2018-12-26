class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
			t.string :name
			t.string :description
			t.integer :category_id
    end
  end
end
