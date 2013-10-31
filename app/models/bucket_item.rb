class BucketItem < ActiveRecord::Base
  attr_accessible :completed, :completed_date, :description, :title
end
