const submitButton = document.getElementsByClassName("submitButton");
const addToCartButton = document.getElementsByTagName("button");
const notiftext = document.getElementsByClassName("notif-text");
let cartTotal = 0;

submitButton[0].addEventListener("click", function(){
    alert("Thanks for subscribing!");
})

for (let i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener("click", function(){
        UpdateCart();
    })
}
function UpdateCart() {
    cartTotal += 1;
    notiftext[0].innerHTML = cartTotal;
}

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
    // options
});