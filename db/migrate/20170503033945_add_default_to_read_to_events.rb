class AddDefaultToReadToEvents < ActiveRecord::Migration[5.0]
  def change
    change_column :events, :read, :boolean, :default => false
  end
end
