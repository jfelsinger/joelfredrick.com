---
title: Toolin' around the terminal
date: 2014-01-08 20:00:00 Z
categories:
- console
- tutorial
- terminal
- linux
- unix
layout: post
comments: false
---

<small>
*Disclaimer*: If you aren't familiar with the terminal yet, you might want to
[get introduced](/2014/1/Your-friend-the-terminal/) first.
</small>

We know where we are in the terminal, and we can examine our surroundings. The
only thing we need to know now is how to get around. Luckily, most terminals
have a number of really useful features to help you navigate. Not the least of
which is ``cd``.

The ``cd``(change directory) command is the go to command for getting places in
a *nix shell. Try it out.

```
joel@monolith:~$ cd Documents
joel@monolith:~/Documents$ _
```

This is a great start, but what about going backwards? We just need to ``cd`` to
the parent directory. How, though? Well, the parent directory, and also the 
current directory, have special donations to them in, you might have even seen
them before. The parent directory can be referenced to through ``..`` and the
current directory can be referenced through ``.``. Yup, a couple dots.

Lets get back.

```
joel@monolith:~/Documents$ cd ..
joel@monolith:~$
```

It worked! 

<h2 id="speed">Need for speed, terminal velocity</h2>

With ``cd`` and the parent directory reference, ``..``, you are
armed with the knowledge necessary to get just about anywhere with the terminal.
It can be pretty slow typing all those directories though, so lets get this 
things motor revving.

If used a computer at all in the last ten years you probably know about 
auto-completion, where you start to type and the application finishes it for 
you. Well, quite a few terminals have ``<tab>`` triggered auto-completion, and
it makes all the difference when it comes to speed in the terminal.

```
joel@monolith:~$ cd Doc<tab>
joel@monolith:~$ cd Documents
joel@monolith:~/Documents$ _
```

Booyah, that saved me having to type five characters. Tab completion has its
caveats though. If what you have so far is too ambiguous, can't be uniquely
matched, you'll have to keep typing. It can also get hairy trying to tab
complete a name that occurs a lot in a directory. For example:

```
joel@monolith:~$ cd D<tab><tab>
Desktop/  Documents/  Downloads/  Dropbox/
joel@monolith:~$ cd Doc<tab>
joel@monolith:~/Documents$ _
```

If you noticed, double-tapping tab will show all the possibly results if their
is any ambiguity. This is usually very useful, but not always.

```
joel@monolith:~$ cd /usr/share/<tab><tab>
Display all 23598 possibilities? (y or n)_
```

Yeah, no.

Tab complete gets you places pretty fast, but we can still go faster. Remember
the values that are referenced to the current directory, and how fast it is to
type those couple dots. Well, there are other references like that too. One of
the best ones is ``~``. The ``~`` references the home directory of the current
user. This can be used to get back home from anywhere.

```
dorothy@munchkinBox:/someplace/that/definitely/is/not/kansas$ cd ~
dorothy@munchkinBox:~$ _
```

So what? Anybody with magic slippers can get back home, but what if you want to
return to ``/someplace/that/definitely/is/not/kansas/`` again? Well, you could
cd to the directory again, but who wants that hassle. Our terminal has something
even ruby slipers don't, the ability to take you to the last place you've been.

How? With the ``-`` reference. ``-`` references the directory you were in prior
to your most recent ``cd`` command. Now, lets try getting back to oz.

```
dorothy@munchkinBox:~$ cd -
/someplace/that/definitely/is/not/kansas
dorothy@munchkinBox:/someplace/that/definitely/is/not/kansas$ _
```


