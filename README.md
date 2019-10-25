# Aloha

A Responsive, static front-end mobile-first, e-commerce website.

![](AlohaGifReadMe.gif)

## Installing

To run Aloha download the project then run on  loval server of your choice <br>

Alternatively follow [this link]( https://bpouncey.github.io/Aloha/) for a live demo

### Technologies used

* HTML5
* CSS3
* JavaScript
* GIT
* bash

### Personal Learnings

The main take-away from this project was updating my previous skills into a more semantic, modern approach

Example:

From this:

```javascript
  addToCartButton.forEach(element => {
        element.addEventListener("click", function(){
            UpdateCart();
            AnimateCart(cart);
        })
    });
```

To this:

```javascript
   for (let i = 0; i < addToCartButton.length; i++) {
        addToCartButton[i].addEventListener("click", function(){
            UpdateCart();
            AnimateCart(cart);
        })
    }
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
