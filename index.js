
function checkUserInput() {
  var selectedInputs = document.getElementsByClassName('menu-select');
  var check = true;
  for(var i = 0; i < selectedInputs.length; i++) {
    if(selectedInputs[i].value == "initial") {
      check = false;
    }

  }
  if(check == false) {
    alert("You must fill out all options");
  }
  else {
    //call function to add to database
  }
}
