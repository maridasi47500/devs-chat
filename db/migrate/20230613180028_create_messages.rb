class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.text :code
      t.text :print
      t.integer :programminglanguage_id
      t.integer :room_id
      t.integer :user_id

      t.timestamps
    end
  end
end
