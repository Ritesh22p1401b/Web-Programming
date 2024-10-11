

function Confirmation() { 
    var Val = confirm("Do you want to continue ?"); 
    if (Val == true) { 
        console.log(" CONTINUED!"); 
        return true; 
    } else { 
        console.log("NOT CONTINUED!"); 
        return false; 
    } 

}

