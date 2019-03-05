class ChangeReservationTimeToInteger < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :reservation
    add_column :reservations, :reservation, :float, null: false
  end
end
