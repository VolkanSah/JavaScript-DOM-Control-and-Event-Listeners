// example_create_document_fragment.js
// Free to use under the GPLv3 and later

/*
    This script demonstrates how to use the createDocumentFragment method to 
    efficiently create and add multiple nodes to the DOM. It covers the basics
    of using DocumentFragment for batch DOM manipulation.
*/

// Wait for the DOM content to load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Selecting the container element
    const container = document.querySelector('#container');

    // Creating a DocumentFragment
    const fragment = document.createDocumentFragment();

    // Creating multiple elements and appending them to the fragment
    for (let i = 1; i <= 5; i++) {
        const newItem = document.createElement('div');
        newItem.textContent = `Item ${i}`;
        newItem.className = 'item';
        fragment.appendChild(newItem);
    }

    // Appending the fragment to the container element
    container.appendChild(fragment);

    console.log('All items added to the container.');
});

/*
    Explanation:
    - The DOMContentLoaded event ensures that the script runs only after the DOM is fully loaded.
    - A container element is selected where the new items will be added.
    - A DocumentFragment is created to hold the new elements.
    - A loop is used to create multiple div elements, which are then appended to the fragment.
    - Finally, the fragment containing all the new elements is appended to the container element, efficiently updating the DOM in a single operation.
*/

/*
    HTML to test with this script:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Example createDocumentFragment</title>
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
            }
        </style>
    </head>
    <body>
        <div id="container">Container</div>
        <script src="example_create_document_fragment.js"></script>
    </body>
    </html>
*/

