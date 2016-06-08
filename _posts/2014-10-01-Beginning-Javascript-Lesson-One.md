---
title: 'Beginning Javascript With Node: 1'
date: 2014-10-01 00:00:00 Z
categories:
- tutorial
- node
- javascript
- programming
layout: post
comments: true
navigation: true
navigation_links:
- name: Setup
  href: "#gettingSetup"
- name: Hello World
  href: "#helloWorld"
summary_links:
- name: Node.js
  href: http://nodejs.org
- name: Brackets
  href: http://brackets.io
---

Javascript is a quirky little language that originated to add functionality to web
pages. Over the years it has been plagued with issues regarding browser-support, 
a finicky handling of dynamic typing, and a number of other problems. 
But, despite all of that JavaScript a language that many developers
have grown to love. As such it has gone from just manipulating elements on web pages to
being able to run the servers that actually serve up those web pages, and many other things
that people five or ten years ago would have never even dreamed of doing with it.

Javascript is a language that continues to become more powerful and more widely
used as time goes on. That is why I've decided to write a bit to help people get
started with Javascript and programming with it. This series of posts is going to go beyond
the simple manipulation of web-pages and will be about teaching you how to use Javascript 
with Node.js to create programs that you can run on your local machine. Just like programming 
languages such as C++ or C.

This first post is to get you setup with some of the tools you'll need to make
and then run your programs.

<h2 id="gettingSetup">Getting Setup</h2>

<h3 id="node">Node</h3>

Node is a platform for easily building applications, and it is also the platform
that will run and execute the Javascript code that we create. Installing node
is a pretty straightforward process, but it can vary from system to system. For
the most part you just have to follow the instructions on the 
[node.js download page](http://nodejs.org/download/) to get up and running.

<h4>Windows</h4>

If you're on Windows you'll have a nice and easy installer that you can run. 
Just download the appropriate file for your system and follow the installation.

<small>
When running the Windows installer I've only run into one problem: node not
being properly included into the path after install. If this happens you can't 
run node from anywhere in the powershell or the command prompt, which can be 
quite frustrating.

The remedy is to find where node is installed on your system and then add it to
the path. The exact process to do this changes depending on which version of
Windows you are running.
</small>


<h4>Linux</h4>

Things are a bit different if you're on a Linux system, and depending on your
distribution installing node might just be as easy as:

```
sudo apt-get install -y nodejs
```

If your distribution doesn't already have node in it's repositories, then you
might want to follow these [instructions](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager)
on Github to help you get up and running.


<h3 id="ide">IDE</h3>

IDE stands for Integrated Development Environment. It's a program that you use
to write your code in. If you've done any programming before you might have a
preferred IDE, and that's ok. If you're new to programming though, or you just
want to try something new, I suggest you checkout 
[brackets.io](http://brackets.io). Brackets is an absolutely brilliant little
tool for creating code for the web and with web technologies. Since Javascript
was born on the web, I can't think of anything better for someone learning to
program with Javascript.

<h3 id="terminal">The Console</h3>

The terminal, the command prompt, powershell, that monolithic thing with its one
blinking eye. It goes by many names, but it is basically a text based interface
between you and your computer. And, while it might be daunting for some, you'll
have to get to know the console well to use node and the programs we'll be
making. If you want to get a bit more familiar with the console, feel free to
check out my post 
[Your friend, the Terminal](/2014/1/Your-friend-the-terminal/). Oh, and if
you're on Windows, use powershell.

<h2 id="helloWorld">Hello World!</h2>

So now that you have your tools and they're setup, let's get ready to write our
first program. The purpose of this program will be simple, to output the words
"Hello World!" to the screen.

We'll start by opening up our IDE and creating a new Javascript file. Once you
have that done, type or copy the following:

```javascript
/* jshint node: true */
'use strict';

console.log('Hello World!');
```

When you're done save your program to your computer. Name it something you'll
remember or just `app.js`, it doesn't matter too much.

Then, open up your console and `cd` to the directory where you stored your
program. Then, run the `node` command followed by your program's name to execute
it. If your program was named `app.js`, all of that that together should look 
something like this:

```
joel@monolith:~$ cd Documents/node_projects
joel@monolith:~/Documents/node_projects$ node app.js
Hello World!
```

If all went well, the words "Hello World!" should have been outputted to the
console. If so, hurray! You just wrote your first working program. But what's
actually going on here though? There are a few different parts here that make
this program work. I'm going to break it down and explain them to you.

The first couple lines of the program don't handle any of the executing of the
program, but are instead there to help instruct the code parser on how to
evaluate our code.

```
/* jshint node: true */
```

The first line is a comment, and inside is a directive that is used to tell a
program called jshint that this code is going to be ran inside of node. Jshint
is a type of program called a linter, it checks your code and points out where
you might be failing to follow best practices. If you're using Brackets you might
already have it installed, if not you can install Jshint as a plugin and all of
your Javascript will be checked with it.

```
'use strict';
```

This tells the Javascript interpreter to use "strict" mode. In strict mode some of
the more common Javascript pitfalls will throw errors instead of potentially
running with unintuitive results.

After that comes the real meat of the program:

```
console.log('Hello World!');
```

This line is made up of three distinct parts. The first, `console`, specifies
the built-in console object. Objects are a fundamental part of modern
programming, and can be described as self-contained modules that can either do
things or store values. The `console` object is a built-in object that can
handle some of the outputting of data to the console.

After we specify the console object, we're calling the conole object's `log`
method. A method is a name for something that an object can do. The syntax to
access an object's methods is a period followed by the method name, `.log`.

Just accessing an object's methods isn't enough though, to actually run the
method you have to follow it with parenthesis, `()`. Methods can also take in data 
they need to execute properly, and the way that is done is by passing the value
`(` between `)` two parenthesis. In our case, we pased in the string-literal,
`('Hello World!')`. 

All together this tells the console's log function to go ahead and output the 
value "Hello World!" to the console.

Then, at the very end, we have a single semi-colon, `;`. In Javascript it's a
best practice to end all of your statements with a semi-colon. It lets the
interpreter know it is ok to move on to the next thing to execute. It's the same
as in writing, where you end all of your sentences with a period. If you didn't
you wouldn't know where one sentence ends, and another begins.

---

Now that you've written your first program, and gotten a run down of how it
works, why not do some experimenting to see what you can do with things?

<ul class="list--unordered">
    <li>Can you rewrite your program to make something different be output?</li>
    <li>What happens if you call `console.log` more than once in the same program?</li>
    <li>Does the space between different parts of our programs matter?</li>
</ul>

[Next: Lesson 2](/2014/10/Beginning-Javascript-Lesson-Two)
