class EditReservationTimeColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :reservation
    add_column :reservations, :reservation, :time
  end
end
