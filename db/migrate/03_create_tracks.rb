class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
			t.string :name
			t.string :description
			t.integer :category_id
			t.string :status
			t.date :start_date
			t.date :goal_date
    end
  end
end
