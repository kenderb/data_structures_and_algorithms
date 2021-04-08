def validMountainArray(arr)
  current = 1
  
  while current < arr.length && arr[current] > arr[current - 1]
    current += 1
  end
  
  return false if current === 1 || current === arr.length
  
  while current < arr.length && arr[current] < arr[current - 1]
    current += 1
  end
  
  current === arr.length
  
end