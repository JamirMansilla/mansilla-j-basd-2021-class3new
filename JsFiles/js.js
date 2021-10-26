
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
var button = document.getElementById("button");


/////////////////////////////////////////////////////

/* all the popups message's id  */

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

// The MODAL

var modal = document.getElementById("modal");
var closeModal = document.getElementById("exitModal");
var modalMsg = document.getElementById("modalMsg")
var modalTitle = document.getElementById("modalTitle")

// closing the MODAL

closeModal.addEventListener("click", closeFModal)
function closeFModal (e){
    e.preventDefault();
    modal.style.display = "none"
}
window.onclick = function(outside){
    if (outside.target == modal){
        modal.style.display = "none"
    }
}

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

// lets start with the validations!

// Full name validation


names.addEventListener("focus", namesFocus);

function namesFocus (e){
    e.preventDefault();
    message1.innerHTML = "";
}

names.addEventListener("blur", namesBlur);

function namesBlur (e) {
    e.preventDefault();
    var n = names.value;
    if (n.length < 6 || n.indexOf(" ") <= 0 || n.indexOf(" ") == n.length -1){
        message1.innerHTML= "The name must be longer than 6 characters & have at least one space between name and surname";
        arrayButton [0] = "fill";
        errorButton[0] = "The name must be longer than 6 characters & have at least one space between name and surname"
    }else{
    arrayButton [0] = "Full Name: "+ names.value + "\n";
    errorButton[0] = "";
}
}



// E-mail validation

email.addEventListener("focus", emailFocus)

function emailFocus (e){
    e.preventDefault();
    message2.innerHTML = "";
}

email.addEventListener("blur", emailBlur)

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
    errorButton[1] = "";
}
}


// Password Validation

password.addEventListener("focus", passFocus);    

function passFocus(e){
    e.preventDefault();
    message3.innerHTML = "";
}

password.addEventListener("blur", passBlur);

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
        errorButton[2] = "";
    }
}
// confirm password validation

confirmPass.addEventListener("focus", confirmFocus);

function confirmFocus(e){
    e.preventDefault();
    message4.innerHTML = "";
}

confirmPass.addEventListener("blur", confirmBlur);

function confirmBlur(e){
    e.preventDefault();
    var cPass = confirmPass.value;
    if(password.value !== cPass){
        message4.innerHTML = "The Passwords don't match"
        arrayButton [3] = "fill";
        errorButton[3] = "The Passwords don't match";
}else{
    arrayButton [3] = "Confirm PassWord: "+ confirmPass.value + "\n"
    errorButton[3] = "";
}
}


//confirm age validation

age.addEventListener("focus", ageFocus);

function ageFocus(e){
    e.preventDefault();
    message5.innerHTML = "";
}

age.addEventListener("blur", ageBlur);

function ageBlur(e){
    e.preventDefault();
    var ageN = age.value;
    
    if( ageN < 18  || isNaN(ageN) || ageN.includes(",") || ageN.includes(".")){
        message5.innerHTML = "The number must be integer and greater or equal than 18"
        arrayButton [4] = "fill";
        errorButton[4] = "The number must be integer and greater or equal than 18";
}else{
arrayButton [4] = "Age: "+ age.value + "\n"
errorButton[4] = "";
}
}

// phone validation

phone.addEventListener("focus", phoneFocus);
function phoneFocus(e){
    e.preventDefault();
    message6.innerHTML = "";
}

phone.addEventListener("blur", phoneBlur);

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
errorButton[5] = "";
}
}

// address validation

address.addEventListener("focus", addressFocus);
function addressFocus (e){
    e.preventDefault()
    message7.innerHTML = ""
}

address.addEventListener("blur", addressBlur);

function addressBlur(e){
    e.preventDefault();
    var addr = address.value;
    var aRE = /^[a-zA-Z0-9" "]{5,18}$/;

    if(!aRE.test(addr) || !addr.includes(" ")){
    message7.innerHTML = " The address must have 5 characters long including letters & numbers and a space between";
    arrayButton [6] = "fill";
    errorButton[6] = " The address must have 5 characters long including letters & numbers and a space between";
}else{
arrayButton [6] = "Address: "+ address.value + "\n"
errorButton[6] = "";
}}

// City validation

city.addEventListener("focus", cityFocus);
function cityFocus(e){
    e.preventDefault();
    message8.innerHTML = "";
}

city.addEventListener("blur", cityBlur);

function cityBlur(e){
    e.preventDefault();
    var cBlur = city.value;
    if(cBlur.length < 3){
        message8.innerHTML = "The city must be 3 characters long at least";
    arrayButton [7] = "fill";
    errorButton[7] = "The city must be 3 characters long at least";
}else{
arrayButton [7] = "City: "+ city.value + "\n"
errorButton[7] = "";
}
}

// Post code Validation

postalCode.addEventListener("focus", postalCodeFocus);
function postalCodeFocus(e){
    e.preventDefault();
    message9.innerHTML = "";
}

postalCode.addEventListener("blur", postalCodeBlur);

function postalCodeBlur(e){
    e.preventDefault();
    var pC = postalCode.value;
    if(pC.length < 3 || pC.includes("+") || pC.includes(".") || pC.includes("-")){
        message9.innerHTML = "The Postal Code must be 3 numbers long at least";
        arrayButton [8] = "fill";
        errorButton[8] = "The Postal Code must be 3 numbers long at least";
}else{
arrayButton [8] = "Postal Code: "+ postalCode.value + "\n"
errorButton[8] = "";
}
}

// ID validation

id.addEventListener("focus", idFocus);
function idFocus(e){
    e.preventDefault();
    message10.innerHTML = "";
}

id.addEventListener("blur", idBlur);

function idBlur(e){
    e.preventDefault();
    var iD = id.value;
    if(iD.length < 7 || iD.length > 8|| iD.includes("+") || iD.includes(".") || iD.includes("-")){
        message10.innerHTML = "The ID must be 7 numbers long at least but less than 8";
        arrayButton [9] = "fill";
        errorButton[9] = "The ID must be 7 numbers long at least but less than 8";
}else{
arrayButton [9] = "ID Number: "+ id.value + "\n"
errorButton[9] = "";
}
}

// setting the local storage function

var lStorage = function () {
    localStorage.setItem('name', names.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('confirm password', confirmPass.value);
    localStorage.setItem('age', age.value);
    localStorage.setItem('phone number', phone.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('postal code', postalCode.value);
    localStorage.setItem('id number', id.value);
}

// Button events validation and submit

button.addEventListener("click", clickEvent)

function clickEvent(e){
    e.preventDefault();
    namesBlur(e);
    emailBlur(e);
    passBlur(e);
    confirmBlur(e);
    ageBlur(e);
    phoneBlur(e);
    addressBlur(e);
    cityBlur(e);
    postalCodeBlur(e);
    idBlur(e);
    var url = 'https://curso-dev-2021.herokuapp.com/newsletter?name='+names.value+'&email='+email.value+'&password='+password.value+'&confirmPassword='+confirmPass.value+'&age='+age.value+'&phoneNumber='+phone.value+'&address='+address.value+'&city='+city.value+'&postalCode='+postalCode.value+'&id='+id.value;
    if(arrayButton.length == 0){
        modal.style.display = "block";
        modalTitle.innerHTML = "Wait";
        modalMsg.innerHTML = "Please complete the form before!";
    }else if(arrayButton.includes("fill")){
        modal.style.display = "block";
        var fillMsgs = '<ul class = "modalList">';
        for (i = 0; i < errorButton.length; i++){
            if(errorButton[i] !== null && errorButton[i] !== undefined){
                fillMsgs += '<li>' + errorButton[i] + '</li>';
            }
        }
        fillMsgs += '</ul>';
        modalTitle.innerHTML = "Error"
        modalMsg.innerHTML = fillMsgs;
    }else{
        fetch(url)
            .then(function(res){
                if(res.status === 200){
                    return res.json();
                }else{
                    throw Error(res.status);
                }
            })
            .then(function(e){
                modal.style.display = "block";
                modalTitle.innerHTML = "Congratulations! here is your info: ";
                var modalInfo = '<ul class = "modalList">';
                for(i = 0; i < arrayButton.length; i++){
                    modalInfo += '<li>' + arrayButton[i] + '</li>';
                }
                modalInfo += '</ul>';
                modalMsg.innerHTML = modalInfo;
                lStorage();

            })
            .catch(function(err){
                modal.style.display = "block";
                modalMsg.innerHTML = "Error: "+ err;
            })
    } 
}

//////////////////////////////
/* Checking the local storage for info*/
function checkLS () {
    names.value = !!localStorage.getItem('name') ? localStorage.getItem('name') : null;
    email.value = !!localStorage.getItem('email') ? localStorage.getItem('email') : null;
    password.value = !!localStorage.getItem('password') ? localStorage.getItem('password') : null;
    confirmPass.value = !!localStorage.getItem('confirm password') ? localStorage.getItem('confirm password') : null;
    age.value = !!localStorage.getItem('age') ? localStorage.getItem('age') : null;
    phone.value = !!localStorage.getItem('phone number') ? localStorage.getItem('phone number') : null;
    address.value = !!localStorage.getItem('address') ? localStorage.getItem('address') : null;
    city.value = !!localStorage.getItem('city') ? localStorage.getItem('city') : null;
    postalCode.value = !!localStorage.getItem('postal code') ? localStorage.getItem('postal code') : null;
    id.value = !!localStorage.getItem('id number') ? localStorage.getItem('id number') : null;
};
window.onload = checkLS();

