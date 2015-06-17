---
layout: post
title:  "Testing with Couch Cushion, pt. 1"
date:   2016-06-16
comments: true
categories: programming

navigation: true

summary_links:
  - { name: "Couch Cushion", href: "https://www.npmjs.com/package/couch-cushion" }
  - { name: "Model Test Example", href: "https://www.dropbox.com/s/8iv9t0gksi1xkvi/cart-test.zip?dl=0" }

---

[Couch Cushion](https://www.npmjs.com/package/couch-cushion) is light-weight and
easy to test with, and if you want to do integration tests you even have the
option of using a mock [Couchbase](http://www.couchbase.com/) bucket through the
[Couchbase Adapter](https://www.npmjs.com/package/cushion-adapter-couchbase).
Both of these options should work with any test framework you choose to use.
Myself, I'm partial to Mocha, and build out all of my tests using it and usually
some other fun libraries:

* [Mocha](http://mochajs.org/), A really awesome test framework for Node.js
* [Sinon](http://sinonjs.org/), Great stuff, like spies and stubs, for mocking and testing.
* [Should](https://www.npmjs.com/package/should), An assertion library, not required, but it's great and easy to use.

These are all great little libraries to help make your life easier while testing,
so feel free to check them and out and see how to use them.


## Testing Couch Cushion Models

One of the first things you're probably going to make using Couch Cushion are
your models. They're also likely to be some of the base structures of your app,
and as such are really important to get right. So it only stands to reason that
they'd be some of the first things to setup tests for, and why that's our
starting point. ;)

This example will only be two files. One for our model (`cart-model.js`) and one
for our test(`test/cart.js`).

First we setup a model:

*`cart-model.js`*

```
// Export a function that sets up our model inside couch-cushion
module.exports = function(cushion) {

    var Cart = new cushion.Schema({
        id: 'id',
        items: Array,
    });

    /**
     * A computed column to get the total of the items in the cart
     */
    Cart.compute('total', function() {
        return this.items._.reduce(function(previous, current) {
            return previous + current.price;
        }, 0);
    });

    /**
     * Empty the cart
     */
    Cart.method('empty', function() {
        this.items = [];
    });

    // Initialize model in Couch Cushion
    return cushion.model('Cart', Cart);
};
```

Once we have the model setup we can then create a test around it:

*`test/cart.js`*

```
var Cushion = require('couch-cushion/src'),
    cartSetup = require('../cart-model');

// Notice that we're getting couch-cushion with `.../src`. This gives a
// constructor instead of an already initialized object. We can use this to make
// sure that the cushion is fresh for each test.

var should = require('should'); // Our assertion library

describe('Cart', function() {
    var cushion, Cart;

    beforeEach(function() {
        // Reset everything and set it up again for each test
        cushion = new Cushion();
        Cart = cartSetup(cushion);
    });

    // Now we start actually testing our model
    describe('#total', function() {
        it('should return zero when cart items are empty', function() {
            var cart = new Cart();
            cart.total.should.equal(0); // If it's not 0, the test will fail
        });

        it('should return the total', function() {
            var cart = new Cart();
            cart.items = [{
                price: 1.00
            },{
                price: 4.00
            }];

            cart.total.should.equal(5);
        });
    });

    describe('#empty', function() {
        it('should empty the cart', function() {
            var cart = new Cart();
            cart.items = [{price:2.00},{price:1.00},{price:0.50},{price:8.00}];
            cart.items._.should.not.be.empty;

            cart.empty();

            // should.js makes checks like these super easy. :)
            cart.items._.should.be.empty;
        });
    });
});
```

Once you have everything setup, and your dependencies installed with npm, you
can then run your tests using mocha:

```
mocha
```

If you want, I also created a [zip of this example](https://www.dropbox.com/s/8iv9t0gksi1xkvi/cart-test.zip?dl=0).
