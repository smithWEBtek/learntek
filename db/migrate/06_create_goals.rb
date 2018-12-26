class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
			t.string :name
			t.string :description
			t.string :status
			t.date :goal_date
			t.date :start_date
			t.date :end_date
      t.timestamps
    end
  end
end
