const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = function (arr){

  let station = [];

  for(let val of arr){
    if(val[1] >= 20){
      if(val[2]==='school' || val[2]==='community centre'){
        station.push(val[0]);
      }
    }
    
    
  } 
  return station;
}

console.log(chooseStations(stations));