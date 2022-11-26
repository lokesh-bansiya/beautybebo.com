
let password_data = JSON.parse(localStorage.getItem("personPassword"));

let username_data = localStorage.getItem("personUsername");

console.log(username_data,password_data);

function logIn(event){

    event.preventDefault();
    
    let usernameData = document.querySelector("#userName").value;
    let passwordData = document.querySelector("#pass").value;

    if(usernameData=="" || passwordData=="")
    {
        alert("Incompete credentials");
        document.getElementById("email").value="";
        document.getElementById("pass").value="";
        document.querySelector("#userName").value="";
    }
    
    else
    {
        if(usernameData === username_data && passwordData === password_data){
            console.log('Login Successfull');
            alert("Login Successfull");
            window.location.href="index.html";
        }else{
            console.log('Authentication failed');
            alert("Authentication failed")
        }
    }
}
  