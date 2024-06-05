# JavaScript DOM-Control and Event-Listeners
[Deutsch](LIES-MICH.md)

This project provides examples and explanations on how to control the DOM (Document Object Model) and use event listeners in JavaScript. It covers the basics of manipulating HTML elements, handling user interactions, and responding to various events.

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [DOM Manipulation](#dom-manipulation)
4. [Event Listeners](#event-listeners)

## Introduction
Understanding how to interact with the DOM and handle events is fundamental to building dynamic web applications. This guide will help you get started with these core concepts in JavaScript.

## Getting Started
To get started, you need basic knowledge of HTML, CSS, and JavaScript. Ensure you have a modern web browser and a code editor installed.

## DOM Manipulation
DOM manipulation refers to the ability to dynamically change the content, structure, and style of a web page. Common tasks include:
- Selecting elements
- Changing content
- Modifying styles
- Adding or removing elements

### Example
```javascript
// Selecting an element
const element = document.getElementById('example');

// Changing content
element.textContent = 'Hello, World!';

// Modifying styles
element.style.color = 'blue';
```

## Event Listeners
Event listeners allow you to execute code in response to user interactions such as clicks, key presses, or mouse movements. 

### Example
```javascript
// Selecting a button
const button = document.querySelector('button');

// Adding a click event listener
button.addEventListener('click', function() {
    alert('Button was clicked!');
});
```
## Credits
Volkan Sah
