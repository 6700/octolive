class AddStateToIssue < ActiveRecord::Migration[5.0]
  def change
    add_column :issues, :state, :string
  end
end
