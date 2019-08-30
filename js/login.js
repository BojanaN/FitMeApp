document.querySelector("#myBtn").addEventListener("click", myFunction);
document.querySelector("#myBtn1").addEventListener("click", myFunction1);
    
    

function myFunction() {
    var x = document.getElementById("logIn");
    var y = document.getElementById("signUp");
    if (x.style.display === "block") {
    x.style.display = "block";
    y.style.display = "none";
    } else {
    x.style.display = "block";
    y.style.display = "none";
    }
} 



function myFunction1() {
    var x = document.getElementById("logIn");
    var y = document.getElementById("signUp");
    if (y.style.display === "block") {
    y.style.display = "block";
    x.style.display = "none";
    } else {
    y.style.display = "block";
    x.style.display = "none";
    }
}

if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  

    function matchpass(){  
        var firstpassword=document.f1.password.value;  
        var secondpassword=document.f1.password2.value;  
          
        if(firstpassword==secondpassword){  
        return true;  
        }  
        else{  
        alert("password must be same!");  
        return false;  
        }  
        }  


