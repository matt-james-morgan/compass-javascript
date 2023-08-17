//Setting age of kids
let bethanyAge = Math.round(Math.random() * 4) + 13;
let dannyAge = Math.round(Math.random() * 12);
let mariaAge = 18;

//checking age and placing in correct catergory
if(bethanyAge<13){
  console.log('Bethany should go to Elementary School');
} else if(bethanyAge >=13 || bethanyAge <= 18){
  console.log('Bethany should go to High School');
}  else{
  console.log('Bethany should go to Lightouse Labs');
}

if(dannyAge<13){
  console.log('Dany should go to Elementary School');
} else if(dannyAge >= 13 || dannyAge <= 18){
  console.log('Dany should go to High School');
} else{
  console.log('Dany should go to Lightouse Labs');
}
 
if(mariaAge < 13){
  console.log('Maria should go to Elementary School');
} else if(mariaAge >=13 || mariaAge <= 18){
  console.log('Maria should go to High School');
} else{
  console.log('Maria should go to Lightouse Labs');
}