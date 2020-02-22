---
layout: blog-single
categories: blog
title: 'JavaScript Quick Tip: Simulated API Calls With Promises'
cover: /assets/pankaj-patel-1IW4HQuauSU-unsplash.jpg
date: 2020-02-23T02:03:04.164Z
keywords: 'react, es6, quick tips, promises, javascript, programming'
description: >-
  Here's an easy, quick way to simulate API calls for a situation where you may
  not have the final backend/API available to you. This is especially helpful
  when the architecture of the API responses has been determined, but is not
  fully implemented.
---

Here's an easy, quick way to simulate API calls for a situation where you may not have the final backend/API available to you. This is especially helpful when the architecture of the API responses has been determined, but is not fully implemented.

> NOTE: This example assumes you're using Fetch, Axios, or some other promised-based system for making your API calls.

## What's a Promise?

According to the [Moz web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), "A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason." Essentially, this means a promise allows you to perform an operation in the background, then allow you to handle the returned data, when it's returned.

Most importantly here, Promises are "thenable", meaning that once the Promise can be called as a function, and a chained `then()` function passes the data to a callback. If that that function is also thenable, the chain can continue on and on.

Chances are, if you've done any API calls in ES6, using the `fetch` API, you've seen this before. It probably looked something like this:
```js
fetch('https://api.example.com/endpoint')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => throw new Error(err))
```
The fetch function returns a Promise, and can be passed on to our thenable chain. If the fetch fails, the `catch()` function takes over.

## Simulating API calls

First off, I recommend using wrapper functions to make your data calls, all stored in something like an `api.js` file. For example:
```js
const getAllUsers = () => {
    // return Promise of the users data
}
```

This returns a Promise that we can then chain off of:
```js
getAllUsers()
    .then(data => console.log(data))
```

With this setup, we can simulate the response of an API in the `getAllUsers()` function, until our real endpoints are ready. First, we'll return a Promise object.
```js
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        resolve()
    })
}
```

Of course, this will return no data to our thenable chain. All we have to do is take the object we know the API will return, and provide it as an argument to the resolve function.
```js
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        resolve({
            users: [
                { name: "Michael" },
                { name: "Sarah" },
                { name: "Bill" },
            ]
        })
    })
}
```

Now when we call `getAllUsers()`, our first `.then()` will receive a JSON object, the same as the response from our future API.

## Taking Things a Step Further

Currently, the promise resolves instantly, and is not much different than just returning the data outright. With a few more lines of code, we can simulate the response time of a real API call. This is especially useful for testing loading states.

To accomplish this, we'll use a simple `setTimeout()` function, plus a random number, to waiting a bit before resolving the promise. Using our example from earlier, let's add the timer:
```js
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve({
            users: [
                { name: "Michael" },
                { name: "Sarah" },
                { name: "Bill" },
            ]
        }), Math.random() * 1000)
    })
}
```

That's it! `Math.random() * 1000` will generate a random time in milliseconds between 0 and 1000, or one second. Setting our resolve as the callback function of the timer means that after that random amount of time, the Promise is resolved, and we'll get data!

## Conclusion

Sometimes, especially early on in a new project, you just don't have access to live APIs, but you have to start building, This method is an easy way to get started early, and get building faster!

If you have questions, thoughts, or improvements, feel free to leave a comment below, or [drop me a line](https://michael-panik.com/contact/).
