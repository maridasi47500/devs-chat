class Message < ApplicationRecord
  belongs_to :room
  before_save :mycode
  def mycode
    if self.mylang && if self.mylang != ""
    threads = []
    p self.code
    myvalue=""
    case self.mylang
    when "ruby"
    threads << Thread.new { Thread.current[:output] = `ruby -e "#{self.code.gsub("\r\n",";").gsub("\n",";")}"` }
    when "python"
    threads << Thread.new { Thread.current[:output] = `python -c '#{self.code.gsub("\r\n",";").gsub("\n",";")}'` }
    end
    threads.each do |t|
        t.join
        myvalue << t[:output]
    end
    self.print=myvalue
    end
    end
  end
end
