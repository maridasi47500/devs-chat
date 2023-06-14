class String
    def indenthtml
      s = "\t"
      gsub(s, "&emsp;") 
    end
    def indent 
      s = "\t"
      gsub(/^/, s) 
    end
end

