class AddRenewInfoToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :remaining_rate, :integer
    add_column :users, :next_rate_reset, :datetime
  end
end
