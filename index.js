  let parameters = {count:false, letters:false, special:false, number:false};
  let strengthBar = document.getElementById("strength-bar");
  function strengthChecker(){
    let password = document.getElementById("password").value;

    parameters.count = (password.length > 7)? true:false;
    parameters.letters = (/[A-Za-z]+/.test(password))? true:false;
    parameters.number = (/[0-9]+/.test(password))? true:false;
    parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password))? true:false;

    let barLength = Object.values(parameters).filter((value) => value);
    console.log(barLength, Object.values(parameters));
    strengthBar.innerHTML = "";
    for (let i in barLength) {
       let span = document.createElement("span");
       span.classList.add("strength");
       strengthBar.appendChild(span);
    }

    let spanRef = document.getElementsByClassName("strength");
    for (let i = 0; i < spanRef.length; i++) {
        switch (spanRef.length - 1) {
            case 0:
                spanRef[i].style.backgroundColor = "#ff3e36";
                break;
            case 1:
                spanRef[i].style.backgroundColor = "#ff691f";
                break;
            case 2:
                spanRef[i].style.backgroundColor = "#ffda36";
                break;
            case 3:
                spanRef[i].style.backgroundColor = "#0be881";
                break;
        }
    }
  }

  function toggle(){
    let password = document.getElementById("password");
    let eye = document.getElementById("toggle");

    if(password.getAttribute("type") === "password"){
        password.setAttribute("type", "text");
        eye.style.color = "#062b61";
    }else{
        password.setAttribute("type", "password");
        eye.style.color = "#6b6868";
    }
  }