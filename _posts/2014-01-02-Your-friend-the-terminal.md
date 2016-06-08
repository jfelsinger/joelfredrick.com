---
title: Your friend, the terminal
date: 2014-01-02 17:47:00 Z
categories:
- console
- tutorial
- terminal
- linux
- unix
layout: post
comments: false
---

These days we live in a world of GUIs. We have buttons, text-boxes, windows 
(sorry, I'm not talking about you [Microsoft](//www.microsoft.com)), 
scroll-bars, and all manner of magical GUI guidness. GUIs are a tool created for 
ease of use and understanding, and to that end they do a fantastic job. But, 
despite the niceties that GUIs offer, they aren't always our most efficient 
choice for getting a job done. This is where our other option comes in, the 
terminal.  

Yes, the console, that text-covered monolith. That unfamiliar black slate that
strikes fear into the hearts of the uninitiated. Scary, no? Well, friends, I'm
hear to tell you that the console is not something to be feared. It is to be
embraced. It is terse, powerful, and chock-full of goodies and treats. So, why
don't you open up a terminal so I can introduce you to my friend.

<h2 id="basics">Finding your bearings</h2>

When you first open up your terminal you will probably be greeted with a prompt,
probably something like the following:

```
joel@monolith:~$ _
```

Your prompt may look different, but most modern terminals show something 
similar. If you're running a completely unconfigured terminal, or an older one
you might be presented with just a ``$`` or a ``#``. That's alright, you just
won't have as much information displayed at your fingertips.

The prompt above is pretty simple. I have the user, the name of the system, and
the working directory (``~`` is shorthand for your home directory).

So what do we do from here? Well, lets **print** our **working directory**. Type
``pwd`` and then press return.

```
$ pwd
/home/joel
```

You should see whatever your current working directory is printed out right
underneath the prompt you entered the command into. Cool beans, especially if
your prompt doesn't already tell you where you are at.

Now, when I first started working with the terminal I was a bit intimidated. I
frequently wondered if I was going to break something, maybe I'd accidentally
delete a core file that the computer needed to run, or possibly I'd ruin the
setup that took me ages to finally get working. Well, like I said, all the 
worrying made me a bit skittish around the terminal. But what I've learned is
that it isn't always as unforgiving as you've probably been told. Sure, it's a
new beast that you have to get used to, but don't be afraid to mess around.

If you're just starting out on your journey with the terminal the only command
you might want to be wary of is ``rm``, especially when used with stars (``*``).
Other than that don't worry; it's all part of learning.

We know where we are at, so what's next? Lets have a look around. Well we are 
on a computer, so we can't *actually* look around. Lets just **list** out what's
in the directory instead.

```
$ ls
Documents  Dropbox  Games  post.md
```

So there we have it, the contents of my home directory. If you're terminal is
configured to do so the files you list out will even be color-coded for you. If
you don't have that luxury, don't fret. You can get more information listed for
you if you add a flag while executing the command.

"What's a flag," you ask? Well, a flag is a type of argument, and let me stop 
you before you ask about those too. When you enter a command into the terminal
you can type in extra information behind the command it to change the way the
command executes. These extra bits of information are called arguments. Flags
are one letter arguments that are usually denoted with a hyphen ``-``.

Lets try that. We're going to add an ``l`` flag to indicate we want to list more
information.

```
drw-rw-r-x    1  joel joel     198  Sep  9   2012 Documents
drw-rw-r-x    1  joel joel     198  Sep 12   2012 Dropbox
drwxrwxr-x    2  joel joel    4096  Jul 10  10:30 Games
-rw-r--r--    16 joel joel    4096  Jun 25   2013 post.md
```


The d at the very front tells if the listing is a directory(folder) or not. The
other bits aren't terribly important right now. But lets say you wanna know
more about the ls command instead, well there is an argument for that.

Regular arguments are frequently preceded with double hyphens, ``--``. Most
commands also come with a ``help`` argument that tells you more about it. Why
not try it out with ls?

```
$ ls --help
```

[Next: How to get around](/2014/1/Toolin-around-the-terminal/)
