class CreateRepositories < ActiveRecord::Migration[5.0]
  def change
    create_table :repositories do |t|
      t.string :name
      t.string :uid
      t.references :owner, foreign_key: true
      t.string :url

      t.timestamps
    end
  end
end
