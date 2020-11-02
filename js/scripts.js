/* Add your JavaScript to this file */

window.onload = (event) => {
    let email = document.getElementById("email")
    let btn = document.getElementsByTagName("button")
    let message = document.getElementsByClassName("message")



    btn[0].addEventListener("click",function (e){
        if(email.value == ""){
            message[0].innerHTML = "Please Enter a Valid Email Address"
        }else{
            message[0].innerHTML = "Thank You! Your email address " + email.value + " has been added to our mailing list!"
        }
        e.preventDefault()
    })







}