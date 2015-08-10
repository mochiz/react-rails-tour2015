class CreateStageWinners < ActiveRecord::Migration
  def change
    create_table :stage_winners do |t|
      t.integer :stage
      t.integer :winner_rider_number
      t.string :name
      t.string :avatar_url
      t.string :photo_url
      t.string :official_url

      t.timestamps null: false
    end
  end
end
