// create a constructor fore the users

function User(email,pass,fname,lname,age,gender,phone,payment,color){
    this.email = email;
  this.password = password;
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.gender = gender;
  this.phone = phone;
  this.payment = payment;
  this.color = color;
}
function validation(user){
    let valid=true;

    if(user.email==""){
    //if i get here it means that the user email is empty
    valid=false; 
    $("#txtEmail").addClass("alert-error");
}

return valid; 
}

//validations start
function validation(user){
    let valid=true;

    if(user.email==""){
    //if i get here it means that the user email is empty
    valid=false; 
    $("#txtEmail").addClass("alert-error");
    }
    if(user.color=="#000000"){
        valid=false;
        $("selColor").addClass("alert-error");
    }
    if(user.payment==""){
        valid=false;
        $("selPayment").addClass("alert-error");
    }
return valid;




}

//validations end
function validatePass(){
    let inpuPassword = $("#txtPassword"); //this is the HTML element 
    let password = inputPassword.val(); //this is the password 
    if(password.length<6){
        inputPassword.css("background-color","red");
    } else {
        inputPassword.css("background-color, green"); //jquery changed the css
    }
}

function register(){
    //get the values from the form
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputfname = $("#txtFirstName").val();
    let inputLname = $("#txtLastName").val();
    let inputAge = $("#txtAge").val();
    let inputGender = $("#txtFirstName").val();
    let inputPhone = $("#txtFirstName").val();
    let inputPayment = $("#txtFirstName").val();
    let inputColor = $("#txtColor").val();

    //get the values from the form 
    //create the user using the constructor 
    letnewUser = new User (inputEmail,inputPassword,inputFname,inputLname,inputAge,inputGender,inputPhone,inputPayment,inputColor);
    
    if(validation(newUser)){
   saveUser(newUser); //this fn is under stageManager 
    }
    //clear the form
    $("input").val("");
}

function init(){
    $("#btnAdd").click(register);
    $("#txtpassword").keyop(validatePass);
}

window.onload=init;
