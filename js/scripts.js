/* Add your JavaScript to this file */

window.onload = (event) => {
    let email = document.getElementById("email")
    let btn = document.getElementsByTagName("button")
    let message = document.getElementsByClassName("message")



    btn[0].addEventListener("click", function(){
        if(email.value == ""){
            message[0].innerHTML = "Please Enter a Valid Email Address"
        }else{
            message[0].innerHTML = "Thank You! Your email address " + email.value + " has been added to our mailing list!"
        }

        alert("The submission button makes an attempt to post the form thus reloading the page in this instance too quickly to see the message update with email. However it was still added to message")


    });







}