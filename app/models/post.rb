class Post < ActiveRecord::Base
  before_create :set_upvotes_to_zero
  has_many :comments

  def set_upvotes_to_zero
    self.upvotes = 0
  end

  def as_json(options = {})
    super(options.merge(include: :comments))
  end
end
