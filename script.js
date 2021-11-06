document.getElementsByClassName("font-changer__roboto")[0].addEventListener("click" , ()=>{
    document.getElementsByTagName("body")[0].style.fontFamily = "'Roboto', sans-serif"
})

document.getElementsByClassName("font-changer__poppins")[0].addEventListener("click" , ()=>{
    document.getElementsByTagName("body")[0].style.fontFamily = "'Poppins', sans-serif"
})

document.getElementsByClassName("theme-changer-purple")[0].addEventListener("click" , ()=>{
    document.querySelectorAll("body div .purple").forEach(element => {
        element.style.backgroundColor = "purple";
    });
})

document.getElementsByClassName("theme-changer-purple")[0].addEventListener("click" , ()=>{
    document.querySelectorAll("body div .purple-text").forEach(element => {
        element.style.color = "purple";
    });
})

document.getElementsByClassName("theme-changer-red")[0].addEventListener("click" , ()=>{
    document.querySelectorAll("body div .purple").forEach(element => {
        element.style.backgroundColor = "orangered";
    });
})

document.getElementsByClassName("theme-changer-red")[0].addEventListener("click" , ()=>{
    document.querySelectorAll("body div .purple-text").forEach(element => {
        element.style.color = "orangered";
    });
})

document.getElementsByClassName("defaults")[0].addEventListener("click" , ()=>{
    document.querySelectorAll("body div .purple").forEach(element => {
        element.style.backgroundColor = "#A91A12";
    });
})

document.getElementsByClassName("defaults")[0].addEventListener("click" , ()=>{
    document.querySelectorAll("body div .purple-text").forEach(element => {
        element.style.color = "#AE493E";
    });
})


document.getElementsByClassName("defaults")[0].addEventListener("click" , ()=>{
    document.querySelectorAll("body div .orangered").forEach(element => {
        element.style.backgroundColor = "red";
    });
})
document.getElementsByClassName("defaults")[0].addEventListener("click" , ()=>{
    document.getElementsByTagName("body")[0].style.fontFamily = "'Roboto', sans-serif"
})

