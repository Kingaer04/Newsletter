function visi(){
    if(!document.querySelector(".input").value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        document.querySelector(".error").innerHTML = "valid email required"
        document.querySelector(".input").style.backgroundColor = "rgba(253, 208, 218, 0.3)"
        return false;
    }
    else{
        document.querySelector(".error").innerHTML = ""
        document.querySelector(".input").style.backgroundColor = "white"
        return true;
    }
    
}
