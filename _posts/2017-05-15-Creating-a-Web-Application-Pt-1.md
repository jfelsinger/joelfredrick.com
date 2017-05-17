---
title: Creating A Web Application, Pt. 1
date: 2017-05-15 20:04:06.131000000 Z
categories:
- programming
layout: post
comments: true
navigation: true
---

It's long been a goal of mine to create a successful web application of my own.
There's a lot to be said for using your own skills to create something you can
use to sustain yourself with. Even better if that something is also bettering
others, either through improving their businesses or making their job's more
pleasant. And while I've worked on successful client projects before, and have
started on the road to creating my own web application as well, I've never
released a finished app of my own. That's something I wish to remedy, and while
I do I'm going to document the process here for all to see.

Building a successful application is a large undertaking, and also one which is
hard to pull off. I'm confident that I can do it, but there are some pitfalls
that I know I'm going to face from the start. Mainly, at this exact moment, I
don't know what exactly I'm going to build. I don't have a marketable idea, the
big problem to set out and fix yet. This is a big challenge to overcome, since
coming up with a good idea is both really tough and central to the working and
mission of the application itself. However, this doesn't mean I can't get
started.

Even without a central idea, with this project there are a few things I know
that I want. I want it to provide a service for users that is useful over a long
time frame. Something like Trello, or the services provided by Atlassian.
Something that provides every day usefulness, should have more staying power and
have a better chance of improving the quality of users's lives. Additionally, I
plan to monetize my application through a subscription-based pricing scheme. The
main reason being, that I suspect such a scheme will be the most sustainable,
allowing for customers to only pay for the service for us much as they plan to
use it, and providing consistent income as long as their actually are users.
So, if it's a good service, it should sustain itself.  Additionally, this makes
providing a "freemium" tier scheme more sensable, so everyone can get use out of
whatever the final application provides.

Normally, I wouldn't make assumptions like the above when starting a project,
especially when I don't even know the core idea. However, I'm choosing to do
that now so that I can get a head-start on development while I pin-down an
actual idea of what to build. This might lead me to cut-out certain app ideas
that I generate, but overall I'm hoping to save time by getting the development
of some of the more complicated systems out of the way. Then, once the actual
idea is decided on, all of my resources can go to solving the set of challenges
come with it instead of focusing on user-management, payment schemes,
subscriptions, and other logic.


## Things I'll need to do

Speaking of assumptions, going off the of the ones that I've made above, there
are a few things that I can plan on having to develop. Given that I'm right,
I know I'll have to develop the following:

* A system for users to register. (along with all the other typical
  user-management stuff, password recovery, login, logout, etc.; this is pretty
  par for the course.)
* A system for users to choose and purchase a subscription. (Along with handling
  for when subscriptions expire, handling the changing of a subscriptions, and
  managing what features are accessible based on subscription.)

Along with that I'll also need to put in place the base architecture for serving
pages and handling requests. Since whatever service we finally provide will be
presented through a regular ol' web application, I'm looking at creating a REST
API for providing the actual functionality and data access, then accessing that
through basic client-side means. A REST API allows us to be flexible with how we
build our front-end, and also let's us expand and provide functionality for
other clients -- native apps anyone? -- in the future.

So, how am I going to accomplish the above tasks? There are a couple ways I can
go about it. I've built much of this functionality before. I could re-use what
I've made on other projects to get to this starting point in no time. However,
I'm not going to do that. Instead, I'm going to start from scratch, using new
technologies that I'm currently unfamiliar with to make this a learning
experience. Generally, I don't like to re-invent the wheel for projects like
this, but there are three reasons for doing it here:

1. So I can learn something new stuff and improve myself as a developer.
2. To give myself more time for idea generation.
3. To improve on the solutions that I've made before in a way that I can be sure
   that I'm not migrating over any bad architectural decisions from past
   projects.
4. *FREE BONUS REASON*: So that I can document the process of building a
   (hopefully) well-constructed application from scratch for anyone who wants to
   see how to build a large project themselves.


## Things I'll be using

So, what will I be using to do this? Glad you asked (and if you didn't ask, too
bad). There are a few new technologies that I plan to try out to accomplish this
project, and overall it feels like a pretty-big change from my usual way of
doing things.

First off, instead of vanilla JavaScript, for this project I'm going to hop on
the TypeScript bandwagon. TypeScript as a language has a lot going for it, and
is becoming increasingly popular. While I love my good ol' JavaScript,
TypeScript is definitely a tool I want to have on my belt. With it's
comprehensive compiler, strict-typing, and real-time IDE feedback, I think it'll
lend a lot to the development of a big project like this. At the very least, I
hope to see a decrease in small, easily-preventable bugs from the strict-typing
alone.

Secondly, I plan to use Koa in lieu of Express. Express is well-supported, and
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
do I plan to use? If you know me you might have guessed some of it already,
here's a list of some of the different stuff I'll be covering as I build this:

* Node.js
* MongoDB
* Stripe (for payments and subscription services)
* Vue.js (for the front-end, &lt;3 U Vue)
* Docker (for ease of development, testing, and deployment)
* Mocha (did somebody say testing?)
* Gulp.js (my go-to task-runner)
* Various libraries that I have no clue about yet...

For the tech overview, that's about it. I'll go into more detail on how I'm
using each of the above as I document the development process in upcoming blog
posts. I'll be aiming to both document the creation of this web application, and
to lay the groundwork in explaining the methods that I use for development so
that any of you reading can pick these things up and make something of your own
too.


## My Goals

So, I've said that I want to create a successful web application. As a goal,
that's a pretty abstract one. To better be able to judge the success of this
venture we'll need a more concrete finish line for which to reach for. I'm also
a believer of aiming your sights high.

For this project, I'm going to take of the shrewd approach of judging success
based on the earnings that the app generates, as well as the satisfaction of the
app's users based on how many of them stay and continue to use the application
after their initial subscription.

With that in mind, I plan to make this a 6-month venture. The first three months
shall be spent on research, development, design, initial-marketing, and hopefully
in curating a successful launch. After launching, I plan to spend the next
3-months in fine-tuning, drawing in more users, and reducing churn.

At the end of this 6-month experiment my goal is to have a well-polished
application that is generating **$6,000 per month**, with a low churn-rate
through the app's bettering of user's lives (consequently, causing them to stick
around).

The entire process, or at least as much as I manage to write about, will be
documented here. I'll try to cover the project's development, as well as the
marketing steps that I take in getting this project up and running with
customers. And, while it might be a bit optimistic for me, I'm going to be
shooting for an update a week on this, so keep a lookout.


Wish me luck! :)
