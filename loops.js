function forLoop (array){
  for (i=0;i<25;i++){
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
//  if (i===1){
//    array.push(`I am ${i} strange loop.`)
//    }
//    else{
//      array.push(`I am ${i} strange loops.`)
//    }
  }
  return array;
}
function whileLoop(n){
  while(n>0){
    console.log(n);
    n--;
  }
}
