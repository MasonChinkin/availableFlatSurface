class AddHoursToRestaurantsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :hours, :string
  end
end
