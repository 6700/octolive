class CreateOwners < ActiveRecord::Migration[5.0]
  def change
    create_table :owners do |t|
      t.string :avatar_url
      t.string :name
      t.integer :type
      t.string :uid, index: true

      t.timestamps
    end
  end
end
