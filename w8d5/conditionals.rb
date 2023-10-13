# == != && ||

some_value = 9001
some_other_value = "9001"

if some_value == some_other_value.to_i
  puts "They are the same!"
elsif some_value > some_other_value
  puts "Some value is bigger"
else
  puts "Some other value is bigger"
end

# if some_value < 10000 
#   puts "That's small!"
# end


# bob = {
#   :name => "Robert",
#   :wizard? => false
# }

# harry = {
#   :name => "Harry",
#   :wizard? => true
# }

# if !bob[:wizard?]
#   puts "I'm judging you"
# end

# unless bob[:wizard?]
#   puts "I'm judging you"
# end 

# puts "I'm judging you VERY HARD" unless bob[:wizard?]


# # redirect_to "/" unless user_logged_in