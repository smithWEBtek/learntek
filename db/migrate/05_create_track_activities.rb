class CreateTrackActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :track_activities do |t|
			t.integer :track_id
			t.integer :activity_id
    end
  end
end
