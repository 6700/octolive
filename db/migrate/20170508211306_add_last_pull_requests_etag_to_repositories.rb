class AddLastPullRequestsEtagToRepositories < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :last_repositories_etag, :string
  end
end
