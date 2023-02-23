function display(userArray){
    const TABLE=$("#users");
    let tr="";
    //travel the array
    for(let i=0; i<usersArray.length; i++){
        let user = usersarray[i];
        //create the tr
        tr=`<tr> 
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.fname}</td>
        <td>${lname}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${phone}</td>
        <td>${payment}</td>
        <td>${color}</td>
        <td style="background-color: ${user.color}" > </td>
    </tr>`;
        //append() the tr into the HTML
        TABLE.append(tr);
    }
}

function init (){
    console.log("Listing users...");
    let users = readUsers();
    display(users);
}

window.onload=init;
