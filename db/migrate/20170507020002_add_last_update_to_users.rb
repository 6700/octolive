class AddLastUpdateToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :last_update, :datetime
  end
end
