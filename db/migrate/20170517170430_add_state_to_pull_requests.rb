class AddStateToPullRequests < ActiveRecord::Migration[5.0]
  def change
    add_column :pull_requests, :state, :string
  end
end
