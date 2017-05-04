class AddSubtypeToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :subtype, :string
  end
end
