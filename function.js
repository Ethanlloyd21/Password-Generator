
//Length = 60 as the middle of the slider. 
document.getElementById("length").innerHTML = "Length = 60";

//setting up the value of the slider as the user toggle 
document.getElementById("slider").oninput = function() {

    if (document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 8";
    }
}


//function that creates a generated password
function create() {

    //getting how many characters of the password via the slider
    var howManyChar = document.getElementById("slider").value;

    var Special = "!@#$%^&*()_+";
    var Numerical = "1234567890";
    var Lower = "abcdefghijklmnopqrstuvwxyz";
    var Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    //setting the availableChar to empty string
    var availableChar = "";
    //setting the password to empty string
    var password = "";

    
    var option1 = document.getElementById('opt1').checked;
    var option2 = document.getElementById('opt2').checked;
    var option3 = document.getElementById('opt3').checked;
    var option4 = document.getElementById('opt4').checked;
  
    //if the checkbox on Special is checked then add var Special on the availableChar
    if (option1 === true) {
        availableChar += Special;
    }
    //if the checkbox on Numerical is checked then add var Numerical on the availableChar
    if (option2 === true) {
        availableChar += Numerical;
    }
    //if the checkbox on Lowercase Letters is checked then add var Lower on the availableChar
    if (option3=== true) {
        availableChar += Lower;
    }
    //if the checkbox on Uppercase Letters is checked then add var Upper on the availableChar
    if (option4 === true) {
        availableChar += Upper;
    }
    //if no check box is checked then throws an error and alert the user.
    if (option1 !== true && option2 !== true && option3 !== true && option4 !== true ) {
        alert('Invalid Entry: Please select at least one check box for a character type');
    }
   

    //generating a passowrd based on the checked box input of the user.
    for (var i = 0; i <= howManyChar; i++) {

        password = password + availableChar.charAt(Math.floor(Math.random() * Math.floor(availableChar.length - 1)));

    }

    //displaying the password 
    document.getElementById("display").value = password;
} 


//function that copies the password on the clipboard
function clipCopy() {

    document.getElementById('display').select();

    document.execCommand("Copy");

    alert("Your password is now copied on the clipboard!");
}
 