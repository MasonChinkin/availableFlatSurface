class AddRatingToRestaurantsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :rating, :integer
  end
end
