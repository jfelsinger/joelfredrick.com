---
layout: post
title:  "CSS Variables"
date:   2015-02-27
comments: true
categories: css

navigation: true

summary_links:
  - { name: "Using CSS Variables, MDN", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" }
  - { name: "CSS Variables, w3", href: "http://dev.w3.org/csswg/css-variables/" }
  - { name: "...A Bad Idea, Aaron gustafson", href: "http://aaron-gustafson.com/notebook/css-variables-are-a-bad-idea/" }

---

If you haven't heard, variables, those useful little things that let you save
values, might be coming to CSS. It's an idea that's been thrown around for quite
a while, and has currently made it's way to [the w3c editor's draft](http://dev.w3.org/csswg/css-variables/).
Not surprising considering the push for it.

Variables have been a feature in different CSS preprocessors for a long time
now. Being able to save a particular value, use it throughout your style sheets,
and then change the value somewhere down the line without having to update it
everywhere in your codebase is a huge boon to maintainability and productivity.
The benefits of moving such functionality to native CSS so that everyone can
make use of it seem pretty clear-cut, but is it really?

Aaron Gustafson has presented an eye-opening article on the subject,
*[CSS Variables Are a Bad Idea](http://aaron-gustafson.com/notebook/css-variables-are-a-bad-idea/)*.
It takes a look at CSS variables from another angle and comes to the conclusion
that maybe adding variables to the CSS spec won't be all it's chalked up to be.
I recommend that anyone thinking about CSS variables give it a read.
