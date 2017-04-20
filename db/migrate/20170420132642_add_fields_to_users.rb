class AddFieldsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :show_name, :string
    add_column :users, :uid, :string, index: true
    add_column :users, :avatar_url, :string
    add_column :users, :scopes, :string, array: true, default: []
    add_column :users, :access_token, :string
  end
end
