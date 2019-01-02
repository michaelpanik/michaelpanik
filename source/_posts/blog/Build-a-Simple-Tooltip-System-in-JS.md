---
title: Build a Simple Tooltip System in ES6
date: 2018-08-13 14:42:41
layout: blog-single
keywords: es6, tooltip, javascript, frontend, css, html, learn, tutorial, how-to
category: blog
tags:
description: Let's learn how to build a simple, data-attribute-driven tooltip system from scratch with just some vanilla Javascript (ES6) and CSS.
---
Today, let's look at how to build a simple, data-attribute-driven tooltip system from scratch with just some vanilla Javascript (ES6) and CSS.

## What We'll Be Making
Let's look at an example of what we're making. Hover over the icon below for an example (or checkout the "Stack" section on any of my [portfolio items.](/portfolio)).

<p style="text-align: center;"><i class="fab fa-rebel tooltip" data-tooltip="Die rebel scum!" style="font-size:3em"></i></p>

That fancy little popup bubble is called a "tooltip", and is creating automatically from the `data-tooltip` attribute and a class of `.tooltip`. Here's the markup from the above icon:
```html
<i class="fab fa-rebel tooltip" data-tooltip="Die rebel scum!"></i>
```
Let's see how it's done!

## DOM Manipulation with Javascript
The neat thing about Javascript is that not only can it manipulating the existing elements on a page - it can create and remove them too! With that in mind, we'll add a `<label>` element on every element that has the class `.tooltip`. Let's check out that code:
```js
// Get an array of all items on the page with class 'tooltip'.
const tooltipList = document.querySelectorAll('.tooltip')

// Loop through that array
tooltipList.forEach(function(el) {
    // Create a <label> element
    const tooltip = document.createElement('label')
    // Give it a class of 'tooltipBubble'
    tooltip.classList.add('tooltipBubble')
    // Set the text inside that element to be our 'data-tooltip' value
    tooltip.innerHTML = el.dataset.tooltip
    // Then insert it in the element we're on in the loop
    el.appendChild(tooltip)
})
```
Simple, right? Only problem is, it's not much of a tooltip just yet. It's alway visible, and kind of in the way.

<p style="text-align: center;"><i class="fab fa-rebel tooltip" data-tooltip="Die rebel scum!" style="font-size:3em"><label style="font-size:1rem;">Die rebel scum!</label></i></p>

Let's clean that up with some simple CSS!

## Style Tips
Let's have a look at that CSS code, first for the tooltipBubble element only.
```css
label.tooltipBubble {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    color: #fff;
    font-family: 'Arial';
    font-size: 12px;
    background: #2b3534;
    border-radius: 3px;
    padding: 5px 10px;
    bottom: 105%;
    line-height: 1em;
    pointer-events: none;
}
```
Of course some of these styles are optional, like the font, the colors, etc. The main thing to look at is the way we've used absolute positioning to center it above the parent element, and be entirely above the element, setting the `bottom` property instead of `top`. Also notice we set `pointer-events: none` so that we can't accidentally mouse over the tooltip and cause chaos.

For now, none of this positioning is correct, because it's positioned absolutely to the body, not the parent. To fix that, we set the parent to be `position: relative`, like so:
```css
.tooltip {
    position: relative;
}
```
Using a little bit of CSS trickery, we can add a small caret underneath the tooltip to make it more like a cartoon speech bubble. It's a neat trick using transparent borders and the :after pseudo-element to achieve this effect:
```css
label.tooltipBubble:after {
    content: '';
    display: block;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #2b3534;
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -2.5px;
}
```
Now let's have a go at some hover states to make them only appear when needed, and add some clean micro-interactions. First we need the tooltipBubble to start its life invisible. We'll also give it some negative bottom margin and a transition.
```css
.tooltipBubble {
    ...
    margin-bottom: -.5em;
    transition: .1s all linear;
    opacity: 0;
}
```
Now when we hover over an element with class `tooltip`, we'll want the label child element to show, and reset its margin to 0, giving a nice fade-in-and-up effect.
```css
.tooltip:focus>label,
.tooltip:hover>label {
    opacity: 1;
    margin: 0;
}
```
And there we are! Just a simple, no-frills implementation of a tooltip system that's easy to use, implement, and super lightweight.

What did I screw up? Angry, and want to take out your frustrations on random strangers on the internet? Hit the comment section below and scream about it!