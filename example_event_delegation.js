// example_event_delegation.js
// Free to use under the GPLv3 and later

/*
    This script demonstrates how to use event delegation to handle DOM events
    more efficiently. Event delegation involves adding a single event listener
    to a parent element to manage events for multiple child elements.
*/

// Wait for the DOM content to load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Selecting the container element
    const container = document.querySelector('#container');

    // Adding a click event listener to the container element using event delegation
    container.addEventListener('click', function(event) {
        // Check if the clicked element has the class 'item'
        if (event.target.classList.contains('item')) {
            alert(`Item ${event.target.textContent} was clicked!`);
        }
    });

    // Dynamically adding items to the container
    for (let i = 1; i <= 5; i++) {
        const newItem = document.createElement('div');
        newItem.textContent = i;
        newItem.className = 'item';
        container.appendChild(newItem);
    }

    console.log('Items added to the container and event delegation set up.');
});

/*
    Explanation:
    - The DOMContentLoaded event ensures that the script runs only after the DOM is fully loaded.
    - A container element is selected to which the event listener will be added.
    - A click event listener is added to the container element. This listener uses event delegation to handle clicks on child elements with the class 'item'.
    - Inside the event listener, it checks if the clicked element (event.target) has the class 'item'. If true, an alert is shown.
    - Several items are dynamically added to the container to demonstrate that event delegation works even for elements added after the event listener is set up.
*/

/*
    HTML to test with this script:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Example Event Delegation</title>
        <style>
            #container {
                padding: 20px;
                background-color: #f0f0f0;
            }
            .item {
                background-color: #c0c0c0;
                margin: 5px;
                padding: 10px;
                border: 1px solid #000;
                cursor: pointer;
            }
        </style>
    </head>
    <body>
        <div id="container">Container</div>
        <script src="example_event_delegation.js"></script>
    </body>
    </html>
*/

