class RemoveOwnerFromIssues < ActiveRecord::Migration[5.0]
  def change
    remove_reference :issues, :owner
  end
end
