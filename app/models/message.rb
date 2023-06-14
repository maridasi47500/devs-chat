class Message < ApplicationRecord
  belongs_to :room
  belongs_to :user,optional:true
  belongs_to :programminglanguage
  before_save :mycode
  def mylang
    self.programminglanguage.name
  end
  def mycode
    if self.programminglanguage
    threads = []
    p self.code
    myvalue=""
    p (self.programminglanguage.printres % [self.code.gsub("\r\n",";").gsub("\n",";")])
    threads << Thread.new { Thread.current[:output] = `#{self.programminglanguage.printres % [self.code.gsub("\r\n",";").gsub("\n",";")]}` }
    threads.each do |t|
        t.join
        myvalue << t[:output]
    end
    self.print=myvalue
    end
  end
end
