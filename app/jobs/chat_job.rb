require "assets/mylib"
class ChatJob < ApplicationJob
  queue_as :default
  include ActionView::Helpers::TextHelper 

  def perform(*args)
    @msg=args[0]
    p @msg.code.indenthtml
    ActionCable.server.broadcast("chat_#{@msg.room.name}", { code: simple_format(@msg.code.indenthtml), print:simple_format(@msg.print.indenthtml),mylang:@msg.mylang,userid:@msg.user.try(:id) })
  end
end
