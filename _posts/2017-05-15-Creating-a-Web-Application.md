---
title: Creating a Web Application
date: 2017-05-15 00:00:00 Z
published: false
categories
- programming
layout: post
comments: true
navigation: true
summary_links:
- name: Couch Cushion
  href: https://www.npmjs.com/package/couch-cushion
---

It's long been a goal of mine to create a successful web application of my own.
There's a lot to be said for using your own skills to create something you can
use to sustain yourself with. I've worked on successful client projects before,
and have started on the road to creating my own successful web application as
well, but I've never released a finished app of my own. That's something I wish
to remedy, and I'm going to document the process here.

I definitely think I can do it, but there are some pitfalls. Mainly, I don't
know what exactly I want to build. I don't have the markettable idea, or the
solvable problem to fix yet. This is a big hurdle to overcome, since coming up
with a good idea is really tough. However, this doesn't mean I can't get
started.

Even without a central idea, With this project there are a few things I know
that I want. I want it to provide a service for users that is useful over a long
timeframe. Something like Trello, or the services provided by Atlassian.
Something that provides every day usefulness should have more staying power and
have a better chance of improving the quality of users's everyday life. Besides
the type of service, I plan to monetize this through a subscription-based
pricing scheme. The main reason being, that I suspect such a scheme will be the
most sustainable, allowing for customers to only pay for the service for us much
as they plan to use it, and providing consistent income as long as their
actually are users. So, if it's a good service, it should sustain itself.
Additionally, this makes providing a "freemium" tier scheme more sensable, so
everyone can get use out of whatever the app provides.

Normally, I wouldn't make assumptions like the above when starting a project,
especially when I don't even know the core idea. However, I'm choosing to do
that now so that I can get a head-start on development while I pin-down an
actual idea of what to build. This might lead me to cut-out certain app ideas
that I generate, but overall I'm hoping to save time by getting the development
of some of the more complicated systems out of the way. Then, once the actual
idea is decided on, all of my resources can go to solving the problems that
presents instead of focusing on user-management, payment schemes, subscription
logic, etc.


## Things I'll need to do

Speaking of assumptions, going off the of the ones that I've made above, there
are a few things that I can plan for having to develop. If my assumptions are
true, I know I'll have to develop the following:

* A system for users to register. (along with all the other typical
  user-management stuff, password recovery, login, logout, etc.; this is pretty
  par for the course.)
* A system for users to choose and purchase a subscription. (Along with handling
  for when subscriptions expire, handling the changing of a subscriptions, and
  managing what features are accessible based on subscription.)

Along with that I'll also need to put in place the base architecture for serving
pages and handling requests. Since this is going to be a regular-ol' web app as
a service, I'm looking at creating a REST API for providing the actually
functionality, then accessing that through pretty-basic client-side means. A
REST API allows us to be pretty flexible with how we build our front-end, and
also let's us expand and provide functionality for other clients -- native apps
anyone? -- in the future.

So, how am I going to accomplish the above tasks? There are a couple ways I can
go about it. I've built much of this functionality before, and could re-use what
I've made on other projects to get to this starting point in no time. However,
I'm not going to do that. Instead, I'm going to start from scratch, using some
new technologies that I'm currently unfamiliar with, and make this a learning
experience. The three reasons for doing this:

1. So I can learn something new stuff and improve myself as a developer.
2. To give myself more time for idea generation.
3. To improve on the solutions that I've made before in a way that I can be sure
   that I'm not migrating over any bad architectural decisions from past
   projects.


## So, what will I be using to build this?

Glad you asked. There are a few new technologies that I plan to try out to
accomplish this project, and overall it feels like a pretty-big change from my
usual way of doing things.

First off, instead of vanilla JavaScript, I'm going to hop on the TypeScript
bandwagon for this. TypeScript as a language has a lot going for it, and is
becoming increasingly popular. While I love my good ol' JavaScript, TypeScript
is definitely something I want to have under my belt, and with it's
comprehensive compiler, strict-typing, and real-time feedback, I think it'll
lend a lot to the development of a big project like this. At the very least, I
hope to see a decrease in small, easily-preventable bugs from the strict-typing
alone.

Secondly, I plan to use Koa in lieu, of Express. Express is well-supported, and
used in a lot of applications, including any node.js app with an http-side I've
done before, but Koa looks like it has a lot of goodies that I hope will relieve
past-gripes I've had with Express.

Last on the list, I'm going to use TypeORM instead of my usual Mongoose. Mainly,
because it looks awesome and like it'll be a joy to use, but also because it
provides a consistent interface for many various DB types. Unless I'm outdated
on my knowledge, Mongoose really-only does MongoDB well. I'd like to be able to
painlessly manage separate types of DBs without problem, not just for this, but
for future projects as well.

That's about it for the big, new stuff I'll trying, so what other type of stuff
do I plan to use? You might have guessed some of it already, but here's a list:

* Node.js
* MongoDB
* Stripe (for payments and subscription services)
* Vue.js (for the front-end, &lt;3 U Vue)
* Docker (for ease of development, testing, and deployment)
* Mocha (did somebody say testing?)
* Gulp.js (my go-to task-runner)
* Various libraries that I have no clue about yet...


And, that's about it for tech. I plan to go into more detail and show off more
how I'm building things as I get to it. But for now that pretty much sums up my
current plans.
