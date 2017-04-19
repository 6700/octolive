class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.references :action, polymorphic: true
      t.boolean :read
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
