class Mymessage < ApplicationRecord
  belongs_to :room
  belongs_to :message
end
