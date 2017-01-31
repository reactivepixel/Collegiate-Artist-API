// Brandon
exports.addToChest = function(items) {
  var chestContents = [
    "Gold",
    "Bones",
    "Coal",
    "Rubbish",
  ];

  chestContents.push(items);
}


// TJ
exports.chestLocation = function(x,y) {
  if(x != 3 || y != 6){
console.log("You have input the wrong coordinates.");

  } else{

    console.log("Congratulations you have found the treasure.");
  }
  //console.log("X marks the spot");
}
