---
layout: blog-single
categories: blog
title: 'Unlimited Free Custom-Domain Email Addresses (Sorta): Part 2'
cover: /assets/gmail.jpg
date: 2020-03-09T15:53:51.142Z
keywords: 'gmail, domain, dns, namecheap, custom'
description: >-
  In part two we'll look at how to send from your new, custom domain email
  address, and as always, for free!
---
Welcome back! [In part one of this post](/blog/unlimited-free-custom-domain-email-addresses-sorta-part-1/) we looked at email forwarding through [Namecheap’s DNS](https://namecheap.pxf.io/rP5LG), into Google, and filtering emails into their own “inboxes” – free custom domain email! If you haven’t read part one, start there.

Right now, if you got an email to [anything@devvv.co](mailto:anything@devvv.co) and responded to it, the response would come from [yourname@gmail.com](mailto:yourname@gmail.com). Not exactly a great experience for the person emailing you! With a few extra steps, we can set up the option to send from your @gmail.com email, or your fancy new custom domain email as well.

## You Know What Happens When You Assume…

I have to make a few assumptions going into this article. First off, I learned that all of this (sending) is only possible if you have a standard, @gmail.com account. If you’re using Gmail to power another custom domain email, this ain’t gonna work. Second, I’m assuming that you’re using Gmail for you email provider, and as your email client. I haven’t tested this in third-party mail clients.

Let’s begin.

First, you need to turn on two-step verification for your Gmail account. I’m not sure why, but nothing else will work from this point on if you don’t.To turn to two-step verification, start by going to [Manage my Google Account](https://myaccount.google.com/). Click the security link on the right, and scroll to the section labeled “Signing in to Google”. There you’ll see an item labeled “2-Step Verification”. Click it, and then put in your password when prompted.

Click “Get Started” and follow the prompts. You’ll be asked to put in a phone number, option for text and call, and then enter the code they sent.

Next step is to generate an application password. Still in your account settings, under “Signing in to Google”, click “App Passwords”. Once again you’ll be asked to log in. For “App”, choose “Mail” and for “Device” choose whatever you want. Copy the new app password in the yellow box that comes up, and paste it somewhere secure, like a local text file. **NOTE: This password is like an auth key. Once you close this window, you’ll never see it again. Save the password somewhere.**

Now that 2-Step Auth is on and we have an application password, we can add a sending alias to Gmail. Go to your Gmail settings. Go to the tab labeled “Accounts and Imports”, and look for the section labeled “Send Mail As”. You’ll see an option to “Add another email address”. In the window that pops up, you can set a “From” name and address. Here you might want to use “Michael at Devvv.co” for example if it’s a business or side project. For email, I’ll enter “[michael@devvv.co](mailto:michael@devvv.co)”.

![](/assets/screen-shot-2020-03-11-at-9.51.51-am.png)

Here’s where the magic happens: in the next screen, enter “smtp.gmail.com” for the SMTP Server, your full gmail address as the username, and the app password you just copied as the password. Everything else can be left the same. An email will be sent to the email you just input, which should now be routed to your gmail account. Copy the code, paste it in to verify, and you’re all set!

Now when you’re composing a new email or a reply, you will see a dropdown in the “From” line, and you can choose your standard gmail address, or your new one.

![](/assets/multiple-from.jpg)

- - -

As you can see, it takes a little effort, but overall this is a great solution to having low-volume, custom email addresses for your side business, etc. totally free.

If you like this post, and you’re going to follow along, definitely use [Namecheap for your hosting, domain, and email needs](https://namecheap.pxf.io/rP5LG). I’m an affiliate and I do take commission when you use their services. I’m a customer first, affiliate second, and I won’t register a domain through anyone else - check them out!