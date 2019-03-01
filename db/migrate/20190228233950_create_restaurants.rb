class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :cost
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :state
      t.string :country, null: false
      t.string :email, null: false
      t.string :phone
      t.string :website
      t.string :payment_options
      t.string :dress_code
      t.string :neighborhood
      t.string :cross_street
      t.string :parking_details
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :restaurants, :name
    add_index :restaurants, :user_id
  end
end
