---
title: Pure CSS Card Flip Hover Effect
date: 2018-09-02 22:09:07
categories:
- blog
tags:
---
Today we’re going to look at a pretty simple, CSS-only way to achieve a card-flipping effect. The goal is that on hovering over the card, it flips around to reveal content on the back. Let’s get started!

## CSS Transforms
CSS provides us with 2D and 3D transform properties that can be used to achieve some awesome effects! The only problem is, if you’re new to it, they can be a bit daunting. Let’s understand the basics!

2D transforms include translate, rotate, scale, skew, and matrix. Let’s focus on the first three. With translate, rotate, and scale, you have two axises: X (horizontal) and Y (vertical). The example below gives you and idea of how each of these transforms affect each axis.

<p data-height="396" data-theme-id="dark" data-slug-hash="KxNOOa" data-default-tab="result" data-user="michaelpanik" data-pen-title="2D CSS Transforms" class="codepen">See the Pen <a href="https://codepen.io/michaelpanik/pen/KxNOOa/">2D CSS Transforms</a> by Michael Panik (<a href="https://codepen.io/michaelpanik">@michaelpanik</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

As you can see, there’s little visual difference between the last two. If you rotateZ, the block will appear to get thinner, but you could do that with scaleX, right?

<p data-height="373" data-theme-id="dark" data-slug-hash="NLdPdZ" data-default-tab="result" data-user="michaelpanik" data-pen-title="Scale X vs Rotate X (No Perspective)" class="codepen">See the Pen <a href="https://codepen.io/michaelpanik/pen/NLdPdZ/">Scale X vs Rotate X (No Perspective)</a> by Michael Panik (<a href="https://codepen.io/michaelpanik">@michaelpanik</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

You could! And the effect is the exact same, until you change your perspective a bit...

## Perspective

The CSS perspective property gives life to 3D transforms. We add it to a parent, and it’s applied to its children. Suddenly, rather than just a boring flattening look when we rotateZ, the block skews and gives us a life-like 3D effect. I bet you’re not shocked, but this is the basis of our card-flipping effect.

<p data-height="371" data-theme-id="dark" data-slug-hash="gdgbmZ" data-default-tab="result" data-user="michaelpanik" data-pen-title="Scale X vs Rotate X (Perspective)" class="codepen">See the Pen <a href="https://codepen.io/michaelpanik/pen/gdgbmZ/">Scale X vs Rotate X (Perspective)</a> by Michael Panik (<a href="https://codepen.io/michaelpanik">@michaelpanik</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Something to note: perspective is a touchy and strange property. For example only works on the parent element. If you apply perspective to the element you’re transforming, there’s no effect. Also, its values are a bit odd (at least to me, anyway). At about 1000px you achieve a near-perfect ortholinear perspective (meaning, no perspective at all – the flat look from earlier). At 1px you achieve wildly skewed lines that are basically unmanageable. For our case, we’ll look right in the middle, 500px.

## All Together Now!
Let’s start building this thing! First, our markup: We’ll need a div to represent the front of the card, the back of the card, and a wrapper. The wrapper is what we’ll actually transform, so that we only have to do it once, and let the “faces” of the card hold content, images, etc. For our example, we’ll go for something like this:
``` html
<div class="card">
    <div class="card__front"></div>
    <div class="card__back">Content!</div>
</div>
```

Now for some styling, we’ll need to lay these faces over top of each other before we move forward. We also want them to be the same size – the size of the wrapper. This is easily done by setting some positions. I’ve also set one face to pink and one to lightblue so we can see what’s going on a little easier.
``` css
.card {
    height: 200px;
    width: 200px;
    position: relative;
}

.card > div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.card__front {
    background: pink;
}

.card__back {
    background: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

Now let’s put all this transform knowledge to work! We’ll start with a rotateX on the wrapper, and some perspective on the body so we can see what’s happening.
```css
.body {
    perspective: 500px; 
}

.card {
    height: 200px;
    width: 200px;
    position: relative;
    transform: rotateX(.25turn);
}
```

Looking good! Now let’s animate that so we can see how we’re really looking. We’re just using simple transitions to animate the transform on hover. I’ve also added a subtle drop shadow that gets bigger and blurrier for effect, and a subtle scale to push the idea that this card is flipping over and headed your way.
```css
.card {
    height: 200px;
    width: 200px;
    position: relative;
    transform: rotateX(.25turn);
    transition: .5s all ease-out;
    box-shadow: 0 2px 4px rgba(0,0,0,.3);
}

.card:hover {
    transform: rotateY(.5turn) scale(1.2);
    box-shadow: 0 10px 30px rgba(0,0,0,.16);
}
```

Now we’re talking! The only problem is, we can see the back of the card at all times – and it’s backwards! No worries, we just need to hide it.

We’ll use some opacity on the `.card__back` element and a separate transition to show it when the side of the card is straight on with the screen, giving the effect that the card has been flipped! Note that we’re using a bit of CSS magic with the transition-delay property. That allows us to time exactly when to show the backside of the card.
```css
.card__back {
    background: lightblue;
    opacity: 0;
    transition-delay: .17s;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

Now when the card flips around, the back side is shown at just the perfect time! Only problem - it’s backwards. Easy enough with another (this time 2D) transform on just the `.card__back` element. Now our card flips to reveal cool, correctly-facing content.
```css
.card__back {
    background: lightblue;
    opacity: 0;
    transition-delay: .17s;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotateY(.5turn);
}
```
Neat! All except that jitter if you don’t hover over it just right…

[graphic example - gif jittery card]

## Jitter Bugs
This one bugged (pun intended) me for a while. The final and simplest solution is just to wrap the entire card in another container, its only purpose being to capture hover states and pass it on.
```html
<div class="hover-area">
    <div class="card">
        <div class="card__front"></div>
        <div class="card__back">Content!</div>
    </div>
</div>
```
Now instead of `.card:hover`, we use `.hover-area:hover`. This way we’re not “hovering out” of the card if our mouse just accidentally gets out of it (which is easy to do at the apex of the flip). Instead, we’re always inside that hover-area, and the effect can stay smooooooooth.

Here’s the final result on CodePen (plus some added fun):

<p data-height="560" data-theme-id="dark" data-slug-hash="KxNrpx" data-default-tab="result" data-user="michaelpanik" data-pen-title="Card Flipping Effect" class="codepen">See the Pen <a href="https://codepen.io/michaelpanik/pen/KxNrpx/">Card Flipping Effect</a> by Michael Panik (<a href="https://codepen.io/michaelpanik">@michaelpanik</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Hopefully this can be helpful if you, like myself, ever have a client who wants an effect like this on content card, be it events, blog posts, Tweets, an Instagram feed or something else!

Anything I could do better? Thoughts or improvements? Drop me a line in the comments below!
