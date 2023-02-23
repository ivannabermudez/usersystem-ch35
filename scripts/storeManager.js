function saveUser(user){
    let oldusers = readUsers();
    oldUsers.push(user);
     //this is an object 
    let val = JSON.stringify(user);
    console.log(val); //this is an string
    localStorage.setItem("user",val);//this fn sends elements to local storage
}

function readUsers(){
    let users= localStorage.getItem("users");//this fn gets elements from locals
    console.log(users); //this is an string
    if(!users){ //NOT users?
        //here the LS is empty
        return [];//creating the array 
    }else{
        //if you get here the LS has users
        let listUsers = JSON.parse(users) //parse back into an array 
        console.log(listUsers); //this is an array
        return listUsers;
    }
}