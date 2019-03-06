class AddTablesLeftToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :tables_left, :integer
  end
end
