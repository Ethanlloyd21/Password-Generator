function create() {


    let howManyChar = document.getElementById("slider").value;

    let availableChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    for (var i = 0; i <= howManyChar; i++) {
        password = password + availableChar.charAt(Math.floor(Math.random() * Math.floor(availableChar.length - 1)));

    }

    document.getElementById("display").value = password;

    //document.getElementById("lastNums").innerHTML += password + "<br />";
}

document.getElementById("length").innerHTML = "Length = 60";

document.getElementById("slider").oninput = function() {

    if (document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 8";
    }
}