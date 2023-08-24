const range = (start, end, step) => {
  let count = start;
  let arr = []
  while(count <= end){
    arr.push(count);
    count += step;
  }
  return arr;
}

console.log(range(-5,2,3));