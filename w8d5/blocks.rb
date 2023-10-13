# Blocks!

def greet name
  puts "Hello #{name}"
end

def dismiss name
  puts "Byeeee #{name}"
end


def fancify
  puts "🥔🍟🥔🌙🦜🐔🥚"
  yield
  puts "🥔🍟🥔🌙🦜🐔🥚"
end

fancify { 5.times do puts "Wiggle!" end }


def yieldy_repetition
  yield.times do
    puts "AYAYAYAYAYAYAYA"
  end
end


def some_number
  some_value = rand(10)

  some_value += 5
end


yieldy_repetition { some_number }