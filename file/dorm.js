
function show()
{
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value

    if(name==="")
    {
      document.querySelector("#errorname").innerHTML ="Enter name here"
      let selectname = document.querySelector("#name")
      selectname.style.borderColor = "red"
      selectname.style.outlineColor = "red"
    }
    else if(email==="")
    {
        document.querySelector("#errormail").innerHTML = "Enter valid email "
        let selectname = document.querySelector("#email")
        selectname.style.borderColor = "red"
        selectname.style.outlineColor = "red"  
    }
    else if(!(email.includes("@") && email.includes(".com")))
    {
        document.querySelector("#errormail").innerHTML = "Enter valid email using @ and .com "
        let selectname = document.querySelector("#email")
        selectname.style.borderColor = "red"
        selectname.style.outlineColor = "red"
    }
    else if(password==="")
    {
        document.querySelector("#errorpassword").innerHTML = "Enter valid password "
        let selectname = document.querySelector("#password")
        selectname.style.borderColor = "red"
        selectname.style.outlineColor = "red" 
    }
    else if(!(password.matches(/[1234567890]/) &&
        password.matches(/[qwertyuioplkjhgfdsazxcvbnm]/) &&
        password.matches(/[{}:"?><!@#$%^&*()_+]/) &&
        password.matches(/[QWERTYUIOPLKJHGFDSAZXCVBNM]/)
    ))
    {
        document.querySelector("#errorpassword").innerHTML = "use special characters and upper case "
        let selectname = document.querySelector("#password")
        selectname.style.borderColor = "red"
        selectname.style.outlineColor = "red" 
    }
    return false;
}
function s(arg)
{
    let selectname = document.querySelector(`#${arg}`)
    selectname.style.borderColor = "black"
    selectname.style.outlineColor = "black"
}