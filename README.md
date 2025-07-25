# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Useful resources](#Useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: [solution URL here](https://www.frontendmentor.io/solutions/base-apparel-email-validation-GdZqGVP6gl)
- Live Site URL: [live site URL here](https://ttar007.github.io/Base-apparel/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript

### What I learned

- The code below is used to display an error. At first, I used `innerHTML` to insert those elements but the problem is that It removed eventListener that I have added to the button because `innerHTML` behaves like replace rather than insert.
- After I read the doc from MDN, I used `insertAdjacent` instead because It behaves like insert rather than replace and provides a parameter for position also.

```js
inputContainer.insertAdjacentHTML(
  "beforeend",
  `
  <img id="error-img" class="error-icon" src="./images/icon-error.svg" width="24" height="24" alt="error icon">
  <p id="error-msg" class="error-message">Please provide a valid email</p>
  `
);
```

### Useful resources

- [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) - This helped me for understand `innerHTML`

## Author

- Frontend Mentor - [@TTAR007](https://www.frontendmentor.io/profile/TTAR007)
- Twitter - [@T_TAR_007](https://www.twitter.com/T_TAR_007)
