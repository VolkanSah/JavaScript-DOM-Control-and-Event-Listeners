// example_stop_propagation.js
// Free to use under the GPLv3 and later

/*
    This script demonstrates how to use the stopPropagation method to prevent
    event propagation to parent elements. It covers the basics of handling
    events and stopping their propagation.
*/

// Wait for the DOM content to load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Selecting elements
    const parentDiv = document.querySelector('#parentDiv');
    const childDiv = document.querySelector('#childDiv');

    // Adding a click event listener to the parent div
    parentDiv.addEventListener('click', function() {
        alert('Parent DIV clicked!');
    });

    // Adding a click event listener to the child div
    childDiv.addEventListener('click', function(event) {
        alert('Child DIV clicked!');
        event.stopPropagation(); // Prevent the event from propagating to the parent element
    });
});

/*
    Explanation:
    - The DOMContentLoaded event ensures that the script runs only after the DOM is fully loaded.
    - Two div elements are selected: one parent div and one child div inside the parent.
    - A click event listener is added to the parent div that shows an alert when the parent div is clicked.
    - A click event listener is added to the child div that shows an alert when the child div is clicked and prevents the event from propagating to the parent div using the stopPropagation method.
*/

/*
    HTML to test with this script:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Example stopPropagation</title>
        <style>
            #parentDiv {
                width: 300px;
                height: 300px;
                background-color: lightcoral;
                padding: 20px;
            }
            #childDiv {
                width: 100px;
                height: 100px;
                background-color: lightblue;
                margin: auto;
            }
        </style>
    </head>
    <body>
        <div id="parentDiv">
            Parent DIV
            <div id="childDiv">Child DIV</div>
        </div>
        <script src="example_stop_propagation.js"></script>
    </body>
    </html>
*/

