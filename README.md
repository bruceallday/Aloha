# Aloha

A Responsive, static front-end mobile-first, e-commerce website.

![](AlohaGifReadMe.gif)

## Installing

To run Aloha download the project then run on  local server of your choice <br>

Alternatively follow [this link]( https://bpouncey.github.io/Aloha/) for a live demo

### Technologies used

* HTML5
* CSS3
* JavaScript
* GIT
* bash
* [Flickity](https://flickity.metafizzy.co/)

### Personal Learnings

The main take-away from this project was updating my previous skills into a more semantic, modern approach.

Example:

From this:

```javascript
  for (let i = 0; i < addToCartButton.length; i++) {
        addToCartButton[i].addEventListener("click", function(){
            updateCart();
            animateCart(cart);
        })
    }
```

To this:

```javascript
    addToCartButton.forEach(element => {
        element.addEventListener("click", function(){
            updateCart();
            animateCart(cart);
        })
    });
```


## Environment

* macOS Mojave: 10.14.6
* VS Code: 1.39.1

## Contributing

Please feel free to clone this project, feedback and improvements welcome.

## Authors

* **Bruce Pouncey** - *Initial work* - [BPouncey](https://github.com/BPouncey)

## License

N/A

## Acknowledgments

[RED Academy](https://github.com/redacademy)
