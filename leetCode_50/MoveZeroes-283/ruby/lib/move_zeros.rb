def moveZeros(arr)
  zero_index = 0
  
  arr.each_with_index do |number|
    unless number.zero?
      arr[zero_index] = number
      zero_index += 1
    end
  end
  
  for i in zero_index..arr.length - 1 do 
    arr[i] = 0 
  end
  
  arr
end