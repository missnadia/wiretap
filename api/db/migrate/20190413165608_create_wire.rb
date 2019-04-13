class CreateWire < ActiveRecord::Migration[5.2]
  def change
    create_table :wires do |t|
      t.string :content
      t.string :contact_method
      t.boolean :private
      
      t.timestamps null: false
    end
  end
end
