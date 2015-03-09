---
layout: post
title:  "re: Brevity vs. Clarity"
date:   2015-02-27
comments: true
categories: css

navigation: true

summary_links:
  - { name: "Brevity vs. Clarity, ALA", href: "http://alistapart.com/blog/post/brevity-vs-clarity" }

---

Anthony Colangelo recently posted a pretty interesting 
[article](http://alistapart.com/blog/post/brevity-vs-clarity) on ALA, comparing 
abbreviated class names with non. If you haven't seen it already, I recommend 
giving it a read. I am writing in response because this issue also happens to be 
in relation to one of my biggest pet peeves, indecipherably obtuse class names. 

I'm of the firm belief that a code-base should be self-documenting as much as 
possible, even if at the expense of a few extra bytes. It makes a project more 
maintainable when what is happening is available at a glance, rather than having 
to sift through documentation. Even if you, as the current developer in the 
current time, know what's going on because you've been knee-deep in the project 
and can tell without a second thought that `tc` stands for total cost, who's to 
say that you'll know what it means in a few months or that another developer 
will know?

The problem of maintainability becomes a two-fold one with css. We have to worry 
about our class names in both the html and the css source. While we can have our
class names documented and commented in our css files, making it easier for 
developers to parse and understand:

```css
/**
 * Price list
 * A list for different prices and totals
 */
.listP { /* ... */ }

/**
 * Total Cost
 * Used to style the final purchase price of the user's
 * cart, after shipping and taxes.
 */
.tc { /* ... */ }
```

When another developer first comes across this class it's most likely not 
going to be in a nicely commented stylesheet. It's going to be someplace in 
the html and completely devoid of the commenting we did previous:

```html
<ul class="listP">
   <!-- ... -->
   <li class="tc"> ... </li>
</ul>
```

Time then has to be spent going through stylesheets to find what these classes 
actually pertain to. Time that might not have to be spent if the naming 
conventions were more clear. 

Of course, `tc` is a pretty dramatically abbreviated class name, and we wouldn't
see anything like in the wild. So what about about `ttlCst`, `totalCst`, or any
number of abbreviated names? Sure they are now more understandable, but
`total-cost` or even `totalCost` is still going to be the easiest to read and
understand.

