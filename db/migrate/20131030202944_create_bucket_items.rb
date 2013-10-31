class CreateBucketItems < ActiveRecord::Migration
  def change
    create_table :bucket_items do |t|
      t.string :title
      t.string :description
      t.boolean :completed
      t.date :completed_date

      t.timestamps
    end
  end
end
