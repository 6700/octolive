class CreateIssues < ActiveRecord::Migration[5.0]
  def change
    create_table :issues do |t|
      t.string :uid
      t.references :owner, foreign_key: true
      t.string :title
      t.text :body
      t.references :asignee, foreign_key: true, foreign_key: { to_table: :owners }

      t.timestamps
    end
  end
end
