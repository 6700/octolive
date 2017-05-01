class AddFieldsToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :bookmarked, :boolean
    add_column :events, :message, :string
    add_column :events, :repo_name, :string
  end
end
