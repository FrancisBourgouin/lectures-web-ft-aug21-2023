# What's a class ?

# A group of students?
# Blueprint a way to build something

class Potato 
  def initialize name, type
    # @ is instance variable
    @name = name
    @type = type
  end

  attr_reader :name
  attr_accessor :type

  def greet
    puts "Hi, my name is #{@name} and I'm a #{@type} potato." 
  end
end

# russett = Potato.new("Potator", "Russett")

# puts russett

# russett.type = "Yukon Gold"

# russett.greet