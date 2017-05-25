---
title: Getting Setup With TypeScript and Node.js
date: 2017-05-24 20:04:06.131000000 Z
categories:
- programming
layout: post
comments: true
navigation: true
navigation_links:
- name: Hello World!
  href: 
- name: Compiled JavaScript
  href: 
- name: ts-node
  href: 
- name: Using NPM Packages
  href: 
---

To get started using TypeScript with Node.js, the first thing you'll have to do
is install TypeScript itself. The TypeScript site itself has a
[pretty good intro](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
itself, but I'm going to cover some of the things that I wish had been more
clear starting out.

Assuming you have Node.js and NPM installed, the first thing you'll want to do
is actually install typescript itself:

```shell
npm install -g typescript
```

If you don't already have Node.js and NPM installed, you'll want [to do that](https://nodejs.org/en/download/).

### Hello World!    {#helloWorld}

To get started, let's make a familiar "Hello World" program. First, create
a folder to house your little project. Then create a file, `hello.ts` with
the following code:

```typescript
let message: string;

message = 'Hello World!';

console.log(message);
```

You can then compile this:

```shell
tsc hello.ts
```

And run the output:

```shell
node hello.js
```

If all went well, you should see a nice, friendly "Hello World!" output to the
console where you ran the last command.

### Examining the compiled JavaScript   {#compile}

After running the above, you might be curious about the quality of the JavaScript
that your TypeScript is being compiled to. Well, in my short experience,
TypeScript seems to be pretty efficient about the JavaScript it outputs. Looking
at your `hello.ts` program again:

```typescript
let message: string;

message = 'Hello World!';

console.log(message);
```

You can also check the `hello.js` that it compiles too, and if you're setup is
anything like mine you should see the following:

```javascript
var message;
message = 'Hello World!';
console.log(message);
```

Pretty similar, but the `let` was changed to a `var`. Less than ideal. This is
because TypeScript (at least at the time of writing this) targets an older
version of the EcmaScript specification than the latest and greatest by default.
Luckilly, it's pretty easy to fix this.

The first thing you'll want to do is create a `tsconfig.json` file, so you can
configure the TypeScript compiler. Luckilly, getting a `tsconfig.json` file to
play with is as easy as:

```shell
tsc --init
```

This will create a `tsconfig.json` file with a lot of stuff already set inside of
it. You'll want to open that `tsconfig.json` and edit the `target` value:

```json
{
  compilerOptions: {
    "target": "es6",        // By default this will be "es3" or "es5", we want to use
    "module": "commonjs",   // the new JS though, so we want "es6"
    // ... a lot more lines of stuff ...
  }
}
```

After you've edited and saved the configuration, you can then compile again:

```shell
tsc
```

Notice that I haven't specified `hello.ts` this time. This is because `tsc` will
already automatically compile all TypeScript files in the directory, so
specifying a target file is unecessary. Also, because of a strange quirk where
the `tsconfig.json` is ignored if you specify a target file. If you want to learn
more about these quirks, as well as the other configuration options, the
[documentation has you covered](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

This should have created the `hello.js` file again, but this time:

```javascript
"use strict";
let message;
message = 'Hello World';
console.log(message);
```

Great! Everything is there as you'd expect it. You even have a `"use strict";`
statement, which was missing from the first compilation.


### Skip some steps with `ts-node`  {#tsnode}

Our program is nice, but, if you're like me, you'll likely wish you could skip
the compilation step, at least for debugging. Luckilly, that's easilly done with
the `ts-node` module. I wouldn't recommend this solution for running your
TypeScript in a production environment, but it's just fine for development and
quick testing.

First install the `ts-node` module with npm:

```shell
npm install -g ts-node
```

Then you can use `ts-node` to run your TypeScript directly, the same as you would
with a JavaScript file and Node.js:

```shell
ts-node hello.ts
```

Again, If all went well, you should see the same friendly message as before.
Also, unlike with `tsc`, when you specify the file to run with `ts-node` it'll
use your `tsconfig.json` to tell it how to interpret the TypeScript that it's
running, so you don't have to worry about your configuration being ignored.


## Using NPM Modules In TypeScript  {#npm}

One of the most useful things about Node.js is its robust ecosystem of packages,
which you can add to a project through the node package manager, NPM. If you're
going to write a Node.js project, chances are you'll want to use some of these
packages. However, if you're writing your Node.js project in TypeScript there
are some extra steps that you'll have to do.

The majority of NPMs packages are written with just Node.js in mind, and that
means plain, vanilla JavaScript. That means no type information or signatures for
TypeScript to go off of; JavaScript is loosely typed after all. So, if you want
to use those NPM packages, you'll need that type information so that TypeScript
knows what's up.

From what I've seen of different tutorials (quite a few outdated by now), there
were a few different ways of getting that type information in the past. However,
the prescribed way to do it is also through NPM.

Most of the popular packages on NPM will also have an `@types` counterpart,
which contains the type information for it. So when you install a package:

```shell
npm install chalk
```

You can *usually* also install the types for it:

```shell
npm install @types/chalk
```

Then you can use those modules in a programs. Going back to the example from
before, `hello.ts`:

```typescript
import * as chalk from 'chalk';

let message: string;
message = 'Hello World!';

console.log(chalk.blue(message));
```

```shell
ts-node hello.ts
```

That should output the same as above, but this time (if your console supports it)
the output will be blue.

With this you should now have the basics necessary to get started using
TypeScript as your language to build Node.js applications. If you have any
questions or comments feel free to leave them in the comments section below and
I'll try to help you out.
