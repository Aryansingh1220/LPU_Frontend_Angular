// decision making
// simple if else
// nested if else
//switch
// ternary operator



let sirIsAvailable = true;
let mood=true;
if(sirIsAvailable){
  if(mood){
    function attendaClasses(){
    console.log("Attending classes");
  }
  attendaClasses();
  }
  console.log("Sir is available but mood is not to attend the class");
  console.log("we will give exceuse to sir");
}




let foodAvailable = true;

if(foodAvailable){
  console.log("Eating food");
}
else{
  console.log("Hungary......!")
}




// Ternary operator
// it is the way to write if else statement in a shorter way


let aryanAge=21;
let ayushAge=22;

let whoWillgetMorePriority = (aryanAge>ayushAge) ? "Aryan will get more priority" : "Ayush will get more priority";
console.log(whoWillgetMorePriority);