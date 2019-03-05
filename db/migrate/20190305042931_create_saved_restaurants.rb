class CreateSavedRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :saved_restaurants do |t|
      t.integer :restaurant_id, null: false
      t.integer :user_id, null: false
    end

    add_index :saved_restaurants, :restaurant_id
    add_index :saved_restaurants, :user_id
  end
end
