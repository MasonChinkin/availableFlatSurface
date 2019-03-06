class AddBookedTimesToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :booked_times_today, :integer
  end
end
