function linearSearch(array, num){
  for(let i=0; i<array.length;i++){
      if(num === array[i]) return i;
  }
  return -1;
}