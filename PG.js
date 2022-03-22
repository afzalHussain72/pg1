    function generatePassword(){
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_!@#$%&*(){}[]";
    var passwordLength = 16;
    var password = "";
    for(let i=0; i<passwordLength; i++){
       var randomNum = Math.floor(Math.random()*chars.length);
       password+=chars.substring(randomNum,randomNum+1)
    }


document.getElementById("password").value = password;
}