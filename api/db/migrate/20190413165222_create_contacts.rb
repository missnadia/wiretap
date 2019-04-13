class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :mobile
      t.integer :work
      t.integer :home
      t.integer :fax
      t.string :home_address
      t.string :work_address
      
      t.timestamps null: false
    end
  end
end
