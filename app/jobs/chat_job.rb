class ChatJob < ApplicationJob
  queue_as :default
  include ActionView::Helpers::TextHelper 

  def perform(*args)
    @msg=args[0]
    ActionCable.server.broadcast("chat_#{@msg.room.name}", { code: simple_format(@msg.code), print:simple_format(@msg.print),mylang:@msg.mylang,userid:@msg.user.try(:id) })
  end
end
