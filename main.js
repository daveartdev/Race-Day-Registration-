// Race Number Assignment (random)
let raceNumber = Math.floor(Math.random() * 1000);

//Early registration (boolean) and Runner's age
let early = true;
let age = 18;

//control flow statements (if, else if)
if(early && age >= 18){
  raceNumber += 1000;
}

if(early && age > 18){
  console.log(`Your race will start at 9:30 and your Race Number is ${raceNumber}`);
}
else if(!early && age > 18){
  console.log(`Late adults run at 11:00 am and your Race Number is: ${raceNumber}.`);
}
else if(age < 18){
  console.log(`Youth registrants run at 12:30 pm and your Race Number is: ${raceNumber}.`);
}
else {
  console.log(`See the registration desk please.`);
}