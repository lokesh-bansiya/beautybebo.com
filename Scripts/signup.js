
let personInformationData = JSON.parse(localStorage.getItem("personInformation")) ||  [];


function signUp(event){
    event.preventDefault();
    
    let usernameData = document.querySelector("#userName").value;
    let emailData = document.querySelector("#email").value;
    let passwordData = document.querySelector("#pass").value;

    if(usernameData=="" || emailData=="" || passwordData=="")
    {
        alert("Incompete credentials");
        document.getElementById("email").value="";
        document.getElementById("pass").value="";
        document.querySelector("#userName").value="";
    }
    
    else
    {
        let signUpObj = {
            username: usernameData,
            email: emailData,
            password: passwordData
        };
        
        class User {
            #password;
            constructor(username,password){
                this.organization = 'Masai';
                this.username = username;
                this.#password = password;
            }
        
            validateUsername(username){
                let value = username.includes("@") ? false : true;
                return value;
            }
        
            validatePassword(password){
                let value = password.includes('123') ? false : true;
                return value;
            }
        
            signUp(username, password){
                let isValidated = false;
                isValidated = this.validateUsername(username) && this.validatePassword(password);
        
                if(isValidated){
                    this.username = username;
                    this.#password = password;
        
                    console.log('User registered successfully');
                    alert("User registered successfully");

                    personInformationData.push(signUpObj);
                    localStorage.setItem("personPassword", JSON.stringify(passwordData));
                    localStorage.setItem("personEmail", emailData);
                    localStorage.setItem("personUsername", usernameData);
                    localStorage.setItem("personInformation", JSON.stringify(personInformationData));  
    
                    document.getElementById("email").value="";
                    document.getElementById("pass").value="";
                    document.querySelector("#userName").value="";          
                    window.location.href="login.html";

                }else{
                    console.log('please enter correct details');
                    alert("please enter correct details");
    
                    document.getElementById("email").value="";
                    document.getElementById("pass").value="";
                    document.querySelector("#userName").value="";
                }
            }
        }
        
        let u1 = new User();
        u1.signUp(usernameData,passwordData);
    }
}
