class AddLinkToPullRequests < ActiveRecord::Migration[5.0]
  def change
    add_column :pull_requests, :link, :string
  end
end
