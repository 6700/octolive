class AddLinkToIssues < ActiveRecord::Migration[5.0]
  def change
    add_column :issues, :link, :string
  end
end
