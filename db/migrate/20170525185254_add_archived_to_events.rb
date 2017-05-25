class AddArchivedToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :archived, :boolean, default: false
  end
end
