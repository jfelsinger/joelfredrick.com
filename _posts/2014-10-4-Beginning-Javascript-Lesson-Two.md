---
layout: post
title:  "Beginning Javascript With Node: 2"
date:   2014-10-04
comments: true
categories: tutorial javascript programming 

navigation: true

navigation_links:
  - { name: Case Sensitivity, href: "#caseSensitivity" }
  - { name: White-Space, href: "#whiteSpace" }
  - { name: Types, href: "#types" }
  - { name: Numbers, href: "#numbers" }
  - { name: Strings, href: "#strings" }

summary_links:
  - { name: Code Challenge, href: "https://dl.dropboxusercontent.com/u/60111312/lesson.2.zip" }

---

In this lesson I'll be going over some of Javascript's basic syntax as well as 
the basic types and different ways you can use them.

<h2 id="caseSensitivity">Case Sensitivity</h2>

One of the most important things to keep in mind when writing Javascript, and 
most any other computer language out there, is that everything is case 
sensitive. What that means is that:

```javascript
var ThisValue;  // would be different from...
var thisValue;  // Notice the difference in casing?
```

If you don't keep an eye out, it is very easy to run into bugs from mis-typed 
values:

```javascript
thisValue = 10;

var newValue = ThisValue + 2;   
```

ThisValue hasn't been defined yet, so we might not get the expected result. In 
the same vein...

```javascript
console.log("I'm going to log this string");
Console.Log("I'm going to throw an error, cause I don't exist");
```

So, when writing code, make sure to pay close attention to the case that you are
using.

<h2 id="whiteSpace">White-space</h2>

One area where Javascript so uptight about is white-space. White space is the 
combined presence of all of the different types of "blank" characters in a 
program. Things like spaces, tabs, and new-lines are all white-space, and for 
the most part you can put white-space wherever you want. Or, you can leave 
white-space out where you want.

This...

```javascript
var thisValue = 42;
```

is exactly the same as...

```javascript
var thisValue=42;
```

and is even the same as...

```javascript
var


thisValue =
            42;

```

Going back to our Hello World example, all of the following are also the same:

```javascript

console.log('Hello World!');
```

```javascript
console
    .log('Hello World!');
```

```javascript
console . log( 'Hello World!' );

```

As long as you don't mess up any of the words, you can have as much or as little 
white-space as you want. What I mean by don't mess up the words is to make sure
that all of your keywords and identifiers can still be made out the same.

Don't do this:

```javascript
varthis Value = 4 2; // That won't fly, sorry. :I
```


<h2 id="types">Types</h2>

Everything in Javascript is classified as a type of some sort or another. Types 
are representative of the kinds of values that variables can be created in a 
programming language. In Javascript, types fall into two categories, primitive 
and object types.

The primitive types are:

```javascript
25;         // numbers
'Hi!';      // strings
true;       // booleans
undefined;  // undefined
null;       // and nulls
```

Any values that don't fall under these types are categorized as object types:

```javascript
{ 'a': 1 }; // Objects,
['a','b'];  // Arrays,
            // and special types of objects called functions...

function hello() { console.log("Hiya!"); }
```

Anything that you use or write in a Javascript program falls into one of these
types. Each type has different features, uses, and places where they work best.
It's importaant to learn about these details so that you can take advantage of
them, and don't fall into the pitfalls caused by using the wrong types for a
given situation.

<h3 id="numbers">Numbers</h3>

For the rest of this I'm going to be going through the different types and 
showing some of the things that you can do with them, and to start I'll be going 
over numbers.


Unlike other programming languages, almost all numeric values in Javascript are 
represented as the same number type.

```javascript
42;     // => a number
-42;    // => a negative number
0;      // => another number
41.999; // => also a number
0xff;   // => believe it or not, that too is a number
2.3e8   // => We even have exponential notation
```

Javascript gives us a lot we can do with numbers. For example, all of the basic 
arithmetic operations are included as part of the language.

```javascript
6 + 2;  // => 8, addition
6 - 2;  // => 4, subtraction
6 * 2;  // => 12, multiplication
6 / 2;  // => 3, division

// And even an operator called a modulo, that gives you the remainder
// when division occurs:

6 % 2;  // => 0, there was no remainder
3 % 2;  // => 1, 3/2 leaves us a remainder of 1
```

We also have a Math object for some more advanced operations that aren't 
handled by Javascript's basic operators.

```javascript
Math.pow(2,4);      // => 16, 2 to the power of 4
Math.abs(-100);     // => 100, absolute value
Math.sqrt(9);       // => 3, the square root
Math.PI;            // => 3.14...
Math.E;             // => e
```

Javascript and it's different operators retain the order of operations that you 
might be familiar with from basic arithmetic. This means that you can write out
more complex equations without much problem.

```javascript
6 + 2 / 2;                  // => 7, 6 + (2 / 2) ... 6 + 1

6 - 2 + 2 - 2;              // => 4

(6+2) / 2;                  // => 4, you can even use parenthesis! :D

Math.PI * Math.pow(20,2)    // => Area of a circle with a radius of 20
```

And those are just a few of them. If you're curious about the other functions of 
the Math object you can check out the 
[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference/Global_Objects/Math).
It has information on pretty much all of Javascript's features and how to use 
them.

<h3 id="strings">Strings</h3>

Strings in JS are unchangeable sequences of characters, and what that boils down 
to is that, basically, strings are just text. To declare a string literal in
your program write the text that you want surrounded by either single or double 
quotes.


```javascript
'I am also a string!';
"I am a string!";
```

If you want to have a quotation mark in the string itself, use surrounding 
quotations that are different from the quotation mark you plan on using.

```javascript
"I'm a string with a single-quote inside!";

'I have "double-quotes" inside of me!';
```

You can also do something called escaping if you don't want to use a particular
type of quotation mark around your string, or in case you have to use both types
of marks in a single string. To escape something in a string, precede it with a
backslash `\\`.


```javascript
'I\'m a string that has, "both types of marks."';

"You can also escape the '\"' character when using double-quoted strings. :)";
```

<small>
NOTE: A number of Javascript style guides and programmers recommend sticking to
single-quoted strings whenever possible. 
</small>

You can also combine strings, concatenate them, with the `+` operator.

```javascript
'I am ' + 'just a part' + ' of a whole.'; // => 'I am just a part of a whole'
```

Besides concatenation there are a number of functions that are built into 
strings that can help you manipulate them in different ways.

```javascript
var s = "My cool string";

s.length;       // => gives you the length of the string
s[0];           // => M, the character in the first position of the string
s[1];           // => y, the character at the second position.
s.indexOf('c'); // => 3, the position of the first occurrence of 'c'
s[s.length-1];  // => g, the last character in the string
```

You might have noticed that the counting of characters started at 0 for some of 
these examples. That is because strings and some other ordered types are stored 
starting at number 0, instead of number 1. This is called zero-based 
positioning, and is common in a lot of programming languages. It might be 
counter-intuitive to the way you think about counting, but keep it in mind
because counting incorrectly is a common source of bugs in programs.

---

Time for a quick recap. In this lesson we've learned about **case-sensitivity** 
and what that means about identifiers that are typed out with a different case. 
We also learned about **white space**, as well as how we're able use it (or not 
use it) however we want.  Then we went into **types**, going over most of the 
different types, before taking a more in depth look at the **number** and 
**string** types.

Your mission now, is to write some programs using what you learned here, and to
experiment. I've linked a
[zip file](https://dl.dropboxusercontent.com/u/60111312/lesson.2.zip) 
with some challenges for you to try to this post, and after that here are some 
things for you to consider:

<ul class="list--unordered">
    <li>What happens if we try and concatenate a number with a string using the <code>+</code> operator?</li>
    <li>What happens if we try the above with the other arithmetic operators, <code>-</code>, <code>*</code>, <code>/</code>, etc?</li>
    <li>What happens when escaping something other than a <code>'</code> or a <code>"</code> in a string?</li>
</ul>

[Previous: Lesson 1](/2014/10/Beginning-Javascript-Lesson-One)

<!--[Next: Lesson 3](/2014/10/Beginning-Javascript-Lesson-Three)-->
