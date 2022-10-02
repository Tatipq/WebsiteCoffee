function myNav(){
    let bar = document.querySelector(".bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.left == "0%"){
            nav.style.left = "-100%"
            bar.src = "images/menu.png"
        }else{
            nav.style.left = "0%"
            bar.src = "images/x.png"
        }
    }
}
myNav();