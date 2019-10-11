document.addEventListener("DOMContentLoaded", function (){
    const submitButton = document.getElementsByClassName("submitButton");
    const addToCartButton = document.getElementsByTagName("button");
    const notiftext = document.getElementsByClassName("notif-text");
    const pageLinks = document.querySelectorAll(".navLink");
    const aboutLocation = document.getElementsByClassName("aboutLocation");
    const shopLocation = document.getElementsByClassName("shopLocation");
    const featuredLocation = document.getElementsByClassName("featuredLocation");
    const updatesLocation = document.getElementsByClassName("updatesLocation");
    let cartTotal = 0;

    pageLinks.forEach(element => {
        element.addEventListener("click", function(){
            if(element.id === "updates") {
                updatesLocation[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

            }else if(element.id === "featured"){
                featuredLocation[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

            }else if(element.id === "shop"){
                shopLocation[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

            }else if (element.id === "about"){
                aboutLocation[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }
        })     
    });

    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity(elem, {
        cellAlign: 'center',
        contain: true
    });

    var flkty = new Flickity('.main-carousel', {
    });

    submitButton[0].addEventListener("click", function () {
        alert("Thanks for subscribing!");
    })

    for (let i = 0; i < addToCartButton.length; i++) {
        addToCartButton[i].addEventListener("click", function () {
            UpdateCart();
        })
    }
    function UpdateCart() {
        cartTotal += 1;
        notiftext[0].innerHTML = cartTotal;
    }
})




