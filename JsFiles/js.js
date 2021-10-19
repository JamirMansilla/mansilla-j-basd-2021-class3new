/*Get all the element by their Id*/

var form = document.getElementById("form")
var names = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPass = document.getElementById("confirmPass")
var age = document.getElementById("age");
var phone = document.getElementById("phone");
var address = document.getElementById("address");
var city = document.getElementById("city");
var postalCode = document.getElementById("postalCode");
var id = document.getElementById("id");

/////////////////////////////////////////////////////
/* all the message's id  */

var message = document.getElementsByClassName("message")
var message1 = document.getElementById("message1")
var message2 = document.getElementById("message2")
var message3 = document.getElementById("message3")
var message4 = document.getElementById("message4")
var message5 = document.getElementById("message5")
var message6 = document.getElementById("message6")
var message7 = document.getElementById("message7")
var message8 = document.getElementById("message8")
var message9 = document.getElementById("message9")
var message10 = document.getElementById("message10")



// General validations

/* function only text in text boxes
        (to make it work just add: onkeypress = "return onlyText(event)", in the html "input" element.)
        */
function onlyText (e){
    key = e.keyCode || e.which;
    keyBoard = String.fromCharCode(key).toLowerCase();
    letters = "abcdefghijklmnñopqrstuvwxyz ";
    spclLttrs = "8-32-37-38-46-164";
    specialKeyBoard = false;

    for(var sK in spclLttrs){
        if(key==spclLttrs[sK]){
            specialKeyBoard = true;break;
        }
    }
    if(letters.indexOf(keyBoard) == -1 && !specialKeyBoard){
        return false;
    }
}

// start with the validations!

// Full name validation

names.addEventListener("blur", namesBlur);
names.addEventListener("focus", namesFocus);

function namesBlur (e) {
    e.preventDefault();
    var n = names.value;
    if (n.length < 6 || n.indexOf(" ") <= 0 || n.indexOf(" ") == n.length -1){
        message1.innerHTML= "The name must be longer than 6 characters & have at least one space between name and surname";
}
}

function namesFocus (e){
    e.preventDefault();
    message1.innerHTML = "";
}

// E-mail validation

email.addEventListener("blur", emailBlur)
email.addEventListener("focus", emailFocus)

function emailBlur(e){
    e.preventDefault();
    var eV = email.value;
    var eMRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(!eMRE.test(eV)){
        message2.innerHTML= "invalid E-mail format"
    }
}

function emailFocus (e){
    e.preventDefault();
    message2.innerHTML = "";
}

// Password Validation

password.addEventListener("blur", passBlur);
password.addEventListener("focus", passFocus);

function passBlur(e){
    e.preventDefault();
    var pass = password.value;
    var pRE = /^[a-z0-9]{8,18}$/;

    if(!pRE.test(pass)){
        message3.innerHTML = "The password only accepts letters or numbers and also must have a lenght of 8 characters "
    }
    
}
function passFocus(e){
    e.preventDefault();
    message3.innerHTML = "";
}

// confirm password validation

confirmPass.addEventListener("blur", confirmBlur);
confirmPass.addEventListener("focus", confirmFocus);

function confirmBlur(e){
    e.preventDefault();
    var cPass = confirmPass.value;
    if(password.value !== cPass){
        message4.innerHTML = "The Passwords don't match"
    }
}

function confirmFocus(e){
    e.preventDefault();
    message4.innerHTML = "";
}


//confirm age validation

age.addEventListener("blur", ageBlur);
age.addEventListener("focus", ageFocus);

function ageBlur(e){
    e.preventDefault();
    var ageN = age.value;
    
    if( ageN < 18  || isNaN(ageN) || ageN.includes(",") || ageN.includes(".")){
        message5.innerHTML = "The number must be integer and greater or equal than 18"
    }
}
function ageFocus(e){
    e.preventDefault();
    message5.innerHTML = "";
}

// phone validation

phone.addEventListener("blur", phoneBlur);
phone.addEventListener("focus", phoneFocus);

function phoneBlur(e){
    e.preventDefault();
    var phono = phone.value;
    var numbersL = /^[0-9]{7,18}$/
    if( !numbersL.test(phono)  || isNaN(phono) || phono.includes(" ") || phono.includes("()")|| phono.includes("-")){
        message6.innerHTML = "The number must be at least of 7 digits '()-_,' not allowed"
    }
}
function phoneFocus(e){
    e.preventDefault();
    message6.innerHTML = "";
}

// address validation

address.addEventListener("blur", addressBlur);
address.addEventListener("focus", addressFocus);

function addressBlur(e){
    e.preventDefault();
    var addr = address.value;
    var aRE = /^[a-z0-9" "]{5,18}$/;
    if(!aRE.test(addr) || !addr.includes(" "))
    message7.innerHTML = " The address must have 5 characters long including letters & numbers and a space between";
}
function addressFocus(e){
    e.preventDefault()
    message7.innerHTML = ""
}

// City validation

city.addEventListener("blur", cityBlur);
city.addEventListener("focus", cityFocus);

function cityBlur(e){
    e.preventDefault();
    var cBlur = city.value;
    if(cBlur.length < 3){
        message8.innerHTML = "The city must be 3 characters long at least"
    }
}
function cityFocus(e){
    e.preventDefault();
    message8.innerHTML = "";
}
