document.addEventListener("DOMContentLoaded", function (){
    const submitButton = document.getElementsByClassName("submitButton");
    const addToCartButton = document.getElementsByClassName("cartButton");
    const notiftext = document.getElementsByClassName("notif-text");
    const pageLinks = document.querySelectorAll(".navLink");
    const aboutLocation = document.getElementsByClassName("aboutLocation");
    const shopLocation = document.getElementsByClassName("shopLocation");
    const featuredLocation = document.getElementsByClassName("featuredLocation");
    const updatesLocation = document.getElementsByClassName("updatesLocation");
    let cartTotal = 0;

    // Flkty set-up
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity(elem, {
        cellAlign: 'center',
        contain: true
    });

    var flkty = new Flickity('.main-carousel', {
    });

    pageLinks.forEach(element => {
        element.addEventListener("click", function(){
            ScrollToPosition(element, updatesLocation, featuredLocation, shopLocation, aboutLocation);
        })     
    });

    for (let i = 0; i < addToCartButton.length; i++) {
        addToCartButton[i].addEventListener("click", function () {
            UpdateCart();
        })
    }
    function UpdateCart() {
        cartTotal += 1;
        notiftext[0].innerHTML = cartTotal;
    }

    function ScrollToPosition(element, updatesLocation, featuredLocation, shopLocation, aboutLocation) {
        if (element.id === "updates") {
            updatesLocation[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
        else if (element.id === "featured") {
            featuredLocation[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
        else if (element.id === "shop") {
            shopLocation[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
        else if (element.id === "about") {
            aboutLocation[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    }

    const emailForm = document.getElementById("email-form");

    emailForm.addEventListener("submit", function () {
        const textBox = document.getElementById("input");
        const formData = textBox.value;

        console.log(formData);

        if(IsEmailValid(formData)){
            alert("Thanks for subscribing!");
        }else{
            alert("Please enter a valid email!")
        }
    })

    function HasSpecialCharacter(input) {
        const specialCharacters = ["@", ".com", ".ca", ".co.uk", "gmail", "yahoo"]

        for (let i = 0; i < specialCharacters.length; i++) {
            if (input.indexOf(specialCharacters[i]) > - 1) {
                return true;
            }
        }
    }

    function IsEmailValid(input) {
        if (HasSpecialCharacter(input)) {
            return true;
        } else {
            return false;
        }
    }
})



