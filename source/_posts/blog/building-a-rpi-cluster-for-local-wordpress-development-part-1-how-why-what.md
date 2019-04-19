---
layout: blog-single
categories: blog
title: >-
  Building an RPi Cluster For Local Wordpress Development - Part 1 (How, Why,
  What)
date: 2019-04-19T21:16:04.079Z
keywords: 'wordpress, rpi, raspberry pi, cluster, trellis, bedrock, roots, load balancing'
description: >-
  Ever since I was about ten years old and heard the term "render farm" on the
  bonus features of a Pixar DVD, I've been obsessed with the idea of clustered
  computing: multiple computers working together to do more than any one could.
  In those days I was way more interested in the (someone flawed) idea of buying
  loads of thrift store, Pentium III-powered boxes to fill my parents' basement
  with and create my own render farm, as I was really into CGI.
---
Ever since I was about ten years old and heard the term "render farm" on the bonus features of a Pixar DVD, I've been obsessed with the idea of clustered computing: multiple computers working together to do more than any one could. In those days I was way more interested in the (someone flawed) idea of buying loads of thrift store, Pentium III-powered boxes to fill my parents' basement with and create my _own_ render farm, as I was really into CGI.

Nowadays, my focus is all on web, and that's where most of the action is in cluster computing now: powering the cloud that powers everything else.

## Why Build a Cluster?

Like I said above, I've always wanted to. More importantly, **to learn!** As I learn more about modern, scalable deployment, I want to better understand what goes on in those vast Amazon server farms when all I have to do is click a button. It also helps to have a local (free!) environment that can be configured to replicate my production environment. I love a good virtual machine, but to understand it all a bit better, I figured having hardware on my desk can't hurt.

## Okay, what's the gameplan?

Get some computers. Cluster them.

I think.

This is a learning process for me, and I'll document as I go. Step one is the "what". We'll get to that in a bit. The only real plan is to figure it out as I go. The goal is to create a load-balanced webserver running Wordpress by way of Trellis that I can configure and provision with Ansible.

Okay, maybe I have a bit more of a plan that I let on.

One more goal: I want it to look cool. Small, compact, flashy, and a conversation piece for my workspace.

![Raspberry Pi microcomputers on a shelf](/assets/img_3471.jpg "Building a clustered webserver out of Raspberry Pis for local Wordpress development")

## The What - Hardware

I start with hardware, a set of three Raspberry Pis given to me by a friend who no longer needed them. I'll distribute power from a single power supply, feed ethernet from a small switch, and maybe long term include a small LCD panel to give some back feedback/uptime indication. The Pis are here, the switch, PSU, and cluster casing are coming in, and next time we'll jump in a photo-heavy look at the rigging up the hardware.
