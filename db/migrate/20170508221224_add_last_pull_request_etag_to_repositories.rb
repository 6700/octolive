class AddLastPullRequestEtagToRepositories < ActiveRecord::Migration[5.0]
  def change
    add_column :repositories, :last_pull_requests_etag, :string
  end
end
