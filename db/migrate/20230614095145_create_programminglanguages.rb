class CreateProgramminglanguages < ActiveRecord::Migration[7.0]
  def change
    create_table :programminglanguages do |t|
      t.string :name
      t.string :printres

      t.timestamps
    end
  end
end
