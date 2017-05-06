class RemoveAsigneeFromIssue < ActiveRecord::Migration[5.0]
  def change
    remove_reference :issues, :asignee
  end
end
