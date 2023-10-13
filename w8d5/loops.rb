list_of_cool_names = ["Romel", "Casandra", "Justin", "Waleed", "Ralph", "Fahad", "Rita", "Ryan", "Francis"]

list_of_properties = {
  :color => "Beige",
  :capacity => 350,
  :content => "Coffee"
}
# each 

list_of_cool_names.each do |name|
  puts "Hello #{name} !"
end

list_of_properties.each_value do |value|
  puts value
end

# each_with

list_of_cool_names.each_with_index do |name, position|
  puts "Hello #{name} at position #{position}!"
end

# for 
for value in list_of_cool_names do
  puts value
end

for value in list_of_properties do 
  puts value
end

# .times

5.times do |number|
  puts "Wiggle #{number}"
end



# .upto

8.upto(30) do |number|
  puts number
end


