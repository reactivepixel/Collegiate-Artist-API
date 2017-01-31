var chestContents = [
  "Gold",
  "Bones",
  "Coal",
  "Rubbish",
];



// Brandon
// exports.addToChest = function(items) {
//
// chestContents.push(items);
// }


// TJ
exports.chestLocation = function(x,y,items) {
  chestContents.push(items);
  if(x != 3 || y != 6){
console.log("You have input the wrong coordinates.");

  } else{
console.log("Congratulations you have found the treasure. The current contents of your chest are "+chestContents);

  }
  //console.log("X marks the spot");
}
