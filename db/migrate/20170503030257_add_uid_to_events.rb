class AddUidToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :uid, :string
  end
end
