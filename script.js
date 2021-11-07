document.getElementsByClassName("font-changer__roboto")[0].addEventListener("click" , ()=>{
    document.getElementsByTagName("body")[0].style.fontFamily = "'Roboto', sans-serif"
})

document.getElementsByClassName("font-changer__poppins")[0].addEventListener("click" , ()=>{
    document.getElementsByTagName("body")[0].style.fontFamily = "'Poppins', sans-serif"
})

//Function for changing theme to purple

function purple(){
    document.querySelectorAll("body div .purple-text").forEach(element => {
        element.style.color = "purple";
    });
    document.querySelectorAll("body div .purple").forEach(element => {
        element.style.backgroundColor = "purple";
    });
}

//Function for changing theme to orange

function orange(){
    document.querySelectorAll("body div .purple-text").forEach(element => {
        element.style.color = "orangered";
    });
    document.querySelectorAll("body div .purple").forEach(element => {
        element.style.backgroundColor = "orangered";
    });
}

//Function for default style

function defaults(){
    document.querySelectorAll("body div .purple").forEach(element => {
        element.style.backgroundColor = "#A91A12";
    });
    document.querySelectorAll("body div .purple-text").forEach(element => {
        element.style.color = "#AE493E";
    });
    document.querySelectorAll("body div .orangered").forEach(element => {
        element.style.backgroundColor = "#A91A12";
    });
    document.getElementsByTagName("body")[0].style.fontFamily = "'Roboto', sans-serif"
}

function light_mode(){
    document.querySelectorAll("body div .black-text").forEach(element => {
        element.classList.replace("black-text" , "black-text-class");
    });
    document.querySelectorAll("body .white-background").forEach(element => {
        element.classList.replace("white-background" , "white-background-class");
    });
    document.querySelectorAll("body .light-gray-background").forEach(element => {
        element.classList.replace("light-gray-background" , "light-gray-background-class");
    });
    document.querySelectorAll("body div .gray-text").forEach(element => {
        element.classList.replace("gray-text" , "gray-text-class");
    });
    document.querySelectorAll("body div .dark-gray-text").forEach(element => {
        element.classList.replace("dark-gray-text" , "dark-gray-text-class");
    });
    document.querySelectorAll("body .dark-gray-background").forEach(element => {
        element.classList.replace("dark-gray-background" , "dark-gray-background-class");
    });
}

function dark_mode(){
    document.querySelectorAll("body div .black-text-class").forEach(element => {
        element.classList.replace("black-text-class" , "black-text");
    });
    document.querySelectorAll("body .white-background-class").forEach(element => {
        element.classList.replace("white-background-class" , "white-background");
    });
    document.querySelectorAll("body .light-gray-background-class").forEach(element => {
        element.classList.replace("light-gray-background-class" , "light-gray-background");
    });
    document.querySelectorAll("body div .gray-text-class").forEach(element => {
        element.classList.replace("gray-text-class" , "gray-text");
    });
    document.querySelectorAll("body div .dark-gray-text-class").forEach(element => {
        element.classList.replace("dark-gray-text-class" , "dark-gray-text");
    });
    document.querySelectorAll("body .dark-gray-background-class").forEach(element => {
        element.classList.replace("dark-gray-background-class" , "dark-gray-background");
    });
}


