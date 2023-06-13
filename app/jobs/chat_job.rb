class ChatJob < ApplicationJob
  queue_as :default

  def perform(*args)
    @msg=args[0]
    ActionCable.server.broadcast("chat_#{@msg.room.name}", { code: @msg.code, print:@msg.print,mylang:@msg.mylang })
  end
end
