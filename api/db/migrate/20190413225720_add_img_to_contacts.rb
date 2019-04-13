class AddImgToContacts < ActiveRecord::Migration[5.2]
  def change
    add_column :contacts, :img, :string
  end
end
