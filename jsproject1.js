//  javascript project to detect a Spy
// and leave a secret code for him

/////////////////////////////
/////JAVASCRIPT PROJECT1/////
////////////////////////////


var firstName = prompt("What's your first name?");

var lastName = prompt("What's your last name?");

var age = prompt("How old are you?");

var height = prompt("How tall are you in cetimeters?");

var petName = prompt("What's your pet Name?");

alert("Wow! Thanks so much for the informaion.")


//four conditions need to be true to get the spy
//We'll start by declaring all of them as false
var nameCrit = null;
var ageCrit = null;
var heightCrit = null;
var petCrit = null;

//Same first letter for First and Last Name.
if (firstName[0] === lastName[0]) {
      nameCrit = true
} else {
  nameCrit = false
}

//Spy must be between the ages of 20 and 30.
if (age >= 20 && age <= 30) {
      ageCrit = true
} else { ageCrit = false
}

//height of Spy must be at least 173cm tall
if (height>172) {
      heightCrit = true
} else {
  heightCrit = false
}

//Name of Spy's pet ends with letter y
//Code to pick the last letter
if (petName[petName.length-1] === "y") {
  petCrit = true;

} else {
  petCrit = false;
}


//Check for validity of the criteria

if (nameCrit && ageCrit && heightCrit & petCrit) {
    console.log("Congratulations Comrade! Your secret code is 123#341");
} else {
  console.log("Sorry! nothing for you");
}
