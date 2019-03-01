class EditRestaurantsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, :street_address
    remove_column :restaurants, :city
    remove_column :restaurants, :state
    remove_column :restaurants, :country
    remove_column :restaurants, :email

    add_column :restaurants, :address, :string, null: false
    add_column :restaurants, :email, :string, null: false
  end
end
