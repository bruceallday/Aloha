const submitButton = document.getElementsByClassName("submitButton");
const addToCartButton = document.getElementsByTagName("button");
const notiftext = document.getElementsByClassName("notif-text");
let cartTotal = 0;

submitButton[0].addEventListener("click", function(event){
    alert("Thanks for subscribing!");
    console.log(event);
})

for (let i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener("click", function(){
        cartTotal += 1;
        notiftext[0].innerHTML = cartTotal;
        console.log(cartTotal);
    })
    
}