class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.datetime :reservation, null: false
      t.integer :num_people, null: false
      t.text :notes
      t.boolean :canceled
      t.datetime :canceled_at
      t.integer :restaurant_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :reservations, :restaurant_id
    add_index :reservations, :user_id
  end
end
