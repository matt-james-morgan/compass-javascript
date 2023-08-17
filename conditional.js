const raining = false;
const cold = true;

if (raining){
  console.log(`don't forget your umbrella!`);
}

if(cold){
  console.log(`Make sure you pick out a scarf!`);
}

console.log(`Now you're ready to go outside`);

const temp = 16;

if(temp<0){
	console.log('do not forget to bring a scarf!');
}else if (temp<15){
	console.log('short sleeves will not cut it');
}else{
	console.log('short sleeves are fine');
}
