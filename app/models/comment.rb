class Comment < ActiveRecord::Base
  before_create :set_upvotes_to_zero
  belongs_to :post

  def set_upvotes_to_zero
    self.upvotes = 0
  end
end
