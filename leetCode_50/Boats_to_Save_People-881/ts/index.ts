export const numRescueBoats = (people: number[], limit: number): number => {
  let left: number = 0;
  let right: number = people.length - 1;
  let numbersOfBoats: number = 0;
  
  people = people.sort((a, b) => a - b);
  
  while (left <= right) {
    
    if(left === right) return numbersOfBoats += 1;
    if(people[left] + people[right] <= limit) left += 1;
    right -= 1;
    numbersOfBoats += 1;
  }

  return numbersOfBoats;
};