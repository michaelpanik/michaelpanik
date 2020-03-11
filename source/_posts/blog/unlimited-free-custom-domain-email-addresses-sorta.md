---
layout: blog-single
categories: blog
title: 'Unlimited Free Custom-Domain Email Addresses (Sorta): Part 1'
cover: /assets/gmail.jpg
date: 2020-03-09T15:53:51.142Z
keywords: 'gmail, domain, dns, namecheap, custom'
description: >-
  I always find that one of the most limiting things about starting any new
  endeavor is email. Whether it’s a business, blog, podcast, YouTube channel,
  open source project, or anything else, having a direct line of communication
  can be very helpful, even integral when you’re just getting started. While
  there’s a million free email options out there, there’s something very
  impactful about having your own, custom domain email address.
---
**UPDATE 3/11/2020: I’ve been asked by several people if it’s possible to send email from these domains as well as receive. Previously, I didn’t include instructions for such, but it IS possible in Gmail, and I’ve added the solution in [Unlimited Free Custom-Domain Email Addresses (Sorta): Part 2](/blog/unlimited-free-custom-domain-email-addresses-sorta-part-2/).**

I always find that one of the most limiting things about starting any new endeavor is email. Whether it’s a business, blog, podcast, YouTube channel, open source project, or anything else, having a direct line of communication can be very helpful, even integral when you’re just getting started. While there’s a million free email options out there, there’s something very impactful about having your own, custom domain email address. Example: [applecomputers@gmail.com](mailto:applecomputers@gmail.com) just doesn’t have the same weight as [steve@apple.com](mailto:steve@apple.com).

If you have the domain, setting up custom email is relatively simple. Most domain registrars offer an affordable custom email solution anyway. When “free” is the name of your low-budget game, however, even a few bucks a month can tip the scales. Here’s my secret to unlimited, free, custom-domain email addresses.

## A Quick Nod to Namecheap

[Namecheap](https://www.namecheap.com/) is my go-to domain registrar. Their customer support is dynamite and the freebies you get with their service is just excellent. One of the best freebies they offer is unlimited email forwarding on any domain in their system. The rest of this article will assume you’re using Namecheap for domains, and a free [Gmail](https://www.google.com/gmail/) account for the actual email.

## Let’s Get Going!

Step one is going to be to register your custom domain, if you haven’t already. Of course again, [register it through Namecheap](https://www.namecheap.com/domains/).

Once registered, go to your domain list in your account, find your new domain, and click “Manage”. On the first tab here, scroll to find the section titled “Email Forwarding”. You have some options here, but I’ll choose to do a catch-all.

![](/assets/email-forwarding.jpg)

Let’s pause: what’s happening now is that any email sent to anything ending in `@devvv.co` will forward to my inbox at [michael@michael-panik.com](mailto:michael@michael-panik.com).

Now you can ask anyone in the world to email [michael@devvv.co](mailto:michael@devvv.co), [info@devvv.co](mailto:info@devvv.co), [asdf1234@devvv.co](mailto:asdf1234@devvv.co), whatever and you will still see those emails! You can take it a step further and create forwarding rules for individual accounts (not just a catch-all) and forward them to different people.

## Here’s the Problem

Now you have emails coming to your inbox from your fancy custom domain. The problem is, they’re all mixed in – just like they came directly to your other email address! The solution to separating those emails into their own folders, tabs, etc. is filtering.

In Gmail, click the gear icon at the top right corner, and click "Settings". Choose the tab labeled "Filters and Blocked Addresses". Click the link labeled “New Filter”.

![](/assets/filters.jpg)

Here you’re presented with many options to filter by. We’re only interested in one: the "To:" line. Because we’re only forwarding emails, the "To" address doesn’t change – it’s still set to your custom domain! Set the To field to be whatever custom domain address you’re using, in our case `*@devvv.co`, the asterisk of course being a wildcard.

![](/assets/to-line.jpg)

Lastly, click "Create Filter", and check "Apply the Label" on the next step. Choose "New Label" and give it a name, probably the name of your blog, channel, business, etc. We’ll use "devvv.co". Click create, and you’re done.

![](/assets/label.jpg)

Now, when someone emails [anything@devvv.co](mailto:anything@devvv.co), I’ll see that email, in my inbox, with a "devvv.co" label. As a bonus, on the right, I can click the "devvv.co" folder, and see all of those emails, just as if they were their own inbox!

- - -

## Tis Better to Send Than to Receive

Currently, we’re able to receive emails from any domain we own, into any email account we own, and automatically sort them into their own folders - nifty! With email, that’s only half the battle: we have to be able to send emails as well. [In part two of this post](/blog/unlimited-free-custom-domain-email-addresses-sorta-part-2/), we’ll look at how to send emails from your fancy custom domain as well (and also for FREE!)