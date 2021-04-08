def numRescueBoats(people, limit)
  boats_number = 0
  left = 0
  rigth = people.length - 1
  people.sort!
  
  while left <= rigth
    if people[left] + people[rigth] <= limit
      left += 1
    end
    rigth -= 1
    boats_number += 1
  end
  boats_number
end