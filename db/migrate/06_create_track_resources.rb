class CreateTrackResources < ActiveRecord::Migration[5.2]
  def change
    create_table :track_resources do |t|
			t.integer :track_id
			t.integer :resource_id
    end
  end
end
