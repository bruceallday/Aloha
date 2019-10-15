document.addEventListener("DOMContentLoaded", function (){
    const addToCartButton = document.querySelectorAll(".cartButton");
    const notiftext = document.getElementsByClassName("notif-text");
    const pageLinks = document.querySelectorAll(".navLink");
    const aboutLocation = document.getElementsByClassName("aboutLocation");
    const shopLocation = document.getElementsByClassName("shopLocation");
    const featuredLocation = document.getElementsByClassName("featuredLocation");
    const updatesLocation = document.getElementsByClassName("updatesLocation");
    const emailForm = document.getElementById("email-form");
    const cart = document.querySelector(".cart");
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
            ScrollToPosition(element);
        })     
    });

    addToCartButton.forEach(element => {
        element.addEventListener("click", function(){
            UpdateCart();
            AnimateCart(cart);
        })
    });

    emailForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const textBox = document.getElementById("input");
        const formData = textBox.value;

        if (IsEmailValid(formData)) {
            alert("Thanks for subscribing!");
        } else {
            alert("Please enter a valid email!");
        }
    });

    function ScrollToPosition(element) {
        if (element.id === "updates") {
            updatesLocation[0].scrollIntoView({ behavior: "smooth", block: "start" });
        }
        else if (element.id === "featured") {
            featuredLocation[0].scrollIntoView({ behavior: "smooth", block: "start" });
        }
        else if (element.id === "shop") {
            shopLocation[0].scrollIntoView({ behavior: "smooth", block: "start" });
        }
        else if (element.id === "about") {
            aboutLocation[0].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    
    function UpdateCart() {
        cartTotal += 1;
        notiftext[0].innerText = cartTotal;
    }

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

    function AnimateCart(cart) {
        cart.classList.add("cartAni");
        setTimeout(function () {
            cart.classList.remove("cartAni");
        }, 400);
    }
})




