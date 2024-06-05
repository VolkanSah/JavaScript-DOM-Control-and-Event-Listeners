// example_listener.js

/*
    Example Listener Script
    This script demonstrates how to use various event listeners in JavaScript.
    It covers the basics of adding, removing, and handling events for different
    HTML elements.
*/

// Wait for the DOM content to load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Selecting elements
    const button = document.querySelector('#clickButton');
    const inputField = document.querySelector('#inputField');
    const hoverBox = document.querySelector('#hoverBox');
    const form = document.querySelector('#exampleForm');

    // Adding a click event listener to a button
    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });

    // Adding a keyup event listener to an input field
    inputField.addEventListener('keyup', function(event) {
        console.log(`Key pressed: ${event.key}`);
        document.querySelector('#inputDisplay').textContent = inputField.value;
    });

    // Adding mouseenter and mouseleave event listeners to a box
    hoverBox.addEventListener('mouseenter', function() {
        hoverBox.style.backgroundColor = 'lightblue';
        console.log('Mouse entered the box');
    });

    hoverBox.addEventListener('mouseleave', function() {
        hoverBox.style.backgroundColor = 'lightgray';
        console.log('Mouse left the box');
    });

    // Adding a submit event listener to a form
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const formData = new FormData(form);
        console.log('Form submitted');
        console.log('Form Data:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    });
});

/*
    Explanation:
    - The DOMContentLoaded event ensures that the script runs only after the DOM is fully loaded.
    - Click event: An alert is shown when the button is clicked.
    - Keyup event: Logs the key pressed and displays the input field's value in real-time.
    - Mouseenter and Mouseleave events: Changes the background color of the box and logs messages when the mouse enters and leaves the box.
    - Submit event: Prevents the default form submission, logs the form data, and demonstrates how to handle form submissions using JavaScript.
*/

/*
    HTML to test with this script:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Example Listener</title>
        <style>
            #hoverBox {
                width: 200px;
                height: 200px;
                background-color: lightgray;
                margin: 20px;
            }
        </style>
    </head>
    <body>
        <button id="clickButton">Click Me</button>
        <br><br>
        <input type="text" id="inputField" placeholder="Type something...">
        <p>Input Display: <span id="inputDisplay"></span></p>
        <br>
        <div id="hoverBox">Hover over me!</div>
        <br>
        <form id="exampleForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <br><br>
            <button type="submit">Submit</button>
        </form>
        <script src="example_listener.js"></script>
    </body>
    </html>
*/

