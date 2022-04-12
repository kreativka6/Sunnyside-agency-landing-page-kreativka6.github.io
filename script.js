const hamburger = document.getElementById("hamburger");
const mobileMenuList = document.querySelector(".mobile_menu_list");
console.log(hamburger);

hamburger.addEventListener('click', function show(){
    
    if(mobileMenuList.style.display == "none"){
        mobileMenuList.style.display = "block";
    }else{
        mobileMenuList.style.display = "none";
    }
})