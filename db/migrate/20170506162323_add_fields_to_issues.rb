class AddFieldsToIssues < ActiveRecord::Migration[5.0]
  def change
    add_reference :issues, :repository, foreign_key: true
  end
end
