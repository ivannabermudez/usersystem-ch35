function login(){
    //get the values from the HTML (username, password)
    let pass=$("#txtPassword").val();
    let uname=$("#txtUserName").val();
    let flag=true;

    //get the users from the LS
   let users = readUsers();

    //travel the users array 
    for(let i=0;i<users.length;i++){
        let user = users[i];
         //compare the input values vs ls values  
         if(pass==user.password && uname==user.user.email){
            window.location= "users.html";
    }     else{
        flag=false;
    }

    }
    if(flag){
        $("#alert-error").removeClass("hide");
        setTimeout(function(){
            $("#alert-error").addClass("hide");
        },3000);
    }

    
}