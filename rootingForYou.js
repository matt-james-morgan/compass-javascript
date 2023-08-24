const judgeVegetable = (veg, metric) =>{
  
  let highestMetric = 0;
  let winner = '';
  
  for(let contestant of veg){
    if(contestant[metric]> highestMetric){
      highestMetric = contestant[metric];
      winner = contestant.submitter;
    }
  }
  return winner;
}

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));