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
var button = document.getElementById("button")

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
/* arrray for validate the button*/ 
var arrayButton = [];
var errorButton = [];


// start with the validations!

// Full name validation

names.addEventListener("blur", namesBlur);
names.addEventListener("focus", namesFocus);

function namesBlur (e) {
    e.preventDefault();
    var n = names.value;
    if (n.length < 6 || n.indexOf(" ") <= 0 || n.indexOf(" ") == n.length -1){
        message1.innerHTML= "The name must be longer than 6 characters & have at least one space between name and surname";
        arrayButton [0] = "fill";
        errorButton[0] = "The name must be longer than 6 characters & have at least one space between name and surname"
    }else{
    arrayButton [0] = "Full Name: "+ names.value + "\n"
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
        message2.innerHTML= "invalid E-mail format";
        arrayButton [1] = "fill";
        errorButton[1] = "invalid E-mail format";
    }else{
    arrayButton [1] = "E-Mail: "+ email.value + "\n"
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
        arrayButton [2] = "fill";
        errorButton[2] = "The password only accepts letters or numbers and also must have a lenght of 8 characters ";
    }else{
        arrayButton [2] = "PassWord: "+ password.value + "\n";
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
        arrayButton [3] = "fill";
        errorButton[3] = "The Passwords don't match";
}else{
    arrayButton [3] = "Confirm PassWord: "+ confirmPass.value + "\n"
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
        arrayButton [4] = "fill";
        errorButton[4] = "The number must be integer and greater or equal than 18";
}else{
arrayButton [4] = "Age: "+ age.value + "\n"
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
        arrayButton [5] = "fill";
        errorButton[5] = "The number must be at least of 7 digits '()-_,' not allowed";
}else{
arrayButton [5] = "Phone Number: "+ phone.value + "\n"
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

    if(!aRE.test(addr) || !addr.includes(" ")){
    message7.innerHTML = " The address must have 5 characters long including letters & numbers and a space between";
    arrayButton [6] = "fill";
    errorButton[6] = " The address must have 5 characters long including letters & numbers and a space between";
}else{
arrayButton [6] = "Address: "+ address.value + "\n"
}}
function addressFocus (e){
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
        message8.innerHTML = "The city must be 3 characters long at least";
    arrayButton [7] = "fill";
    errorButton[7] = "The city must be 3 characters long at least";
}else{
arrayButton [7] = "City: "+ city.value + "\n"
}
}
function cityFocus(e){
    e.preventDefault();
    message8.innerHTML = "";
}

// Post code Validation

postalCode.addEventListener("blur", postalCodeBlur);
postalCode.addEventListener("focus", postalCodeFocus);

function postalCodeBlur(e){
    e.preventDefault();
    var pC = postalCode.value;
    if(pC.length < 3 || pC.includes("+") || pC.includes(".") || pC.includes("-")){
        message9.innerHTML = "The Postal Code must be 3 numbers long at least";
        arrayButton [8] = "fill";
        errorButton[8] = "The Postal Code must be 3 numbers long at least";
}else{
arrayButton [8] = "Postal Code: "+ postalCode.value + "\n"
}
}
function postalCodeFocus(e){
    e.preventDefault();
    message9.innerHTML = "";
}

// ID validation

id.addEventListener("blur", idBlur);
id.addEventListener("focus", idFocus);

function idBlur(e){
    e.preventDefault();
    var iD = id.value;
    if(iD.length < 7 || iD.length > 8|| iD.includes("+") || iD.includes(".") || iD.includes("-")){
        message10.innerHTML = "The ID must be 7 numbers long at least but less than 8";
        arrayButton [9] = "fill";
        errorButton[9] = "The ID must be 7 numbers long at least but less than 8";
}else{
arrayButton [9] = "ID Number: "+ id.value + "\n"
}

}
function idFocus(e){
    e.preventDefault();
    message10.innerHTML = "";
}


// Button events

button.addEventListener("click", clickEvent)

function clickEvent(e){
    if(arrayButton.includes("fill")){
        alert (errorButton.join(" "));
    }else{
        alert (arrayButton.join(" "))
    }
}

//////////////////
/* BONUS */
