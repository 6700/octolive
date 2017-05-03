class CreatePullRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :pull_requests do |t|
      t.string :body
      t.string :title
      t.string :uid
      t.references :repository, foreign_key: true

      t.timestamps
    end
  end
end
