class AddLastIssuesEtagToRepositories < ActiveRecord::Migration[5.0]
  def change
    add_column :repositories, :last_issues_etag, :string
  end
end
