// example_fetch_data.js
// Free to use under the GPLv3 and later

/*
    This script demonstrates how to fetch data from a server using the Fetch API.
    It covers the basics of making GET requests, handling responses, and updating the DOM with the fetched data.
*/

// Wait for the DOM content to load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Selecting the container element where data will be displayed
    const container = document.querySelector('#dataContainer');

    // Function to fetch data from the server
    function fetchData(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                displayData(data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                container.textContent = 'Failed to load data.';
            });
    }

    // Function to display fetched data in the DOM
    function displayData(data) {
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item';
            itemElement.textContent = `Item ID: ${item.id}, Item Name: ${item.name}`;
            container.appendChild(itemElement);
        });
    }

    // URL to fetch data from
    const dataUrl = 'https://jsonplaceholder.typicode.com/users'; // Example API endpoint

    // Fetch data from the server
    fetchData(dataUrl);
});

/*
    Explanation:
    - The DOMContentLoaded event ensures that the script runs only after the DOM is fully loaded.
    - The fetchData function uses the Fetch API to make a GET request to the provided URL.
    - The response is checked for errors, then parsed as JSON.
    - The displayData function iterates over the fetched data and creates new div elements for each item, displaying them in the container element.
    - If there is an error during the fetch operation, an error message is logged, and a failure message is displayed in the container.
*/

/*
    HTML to test with this script:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Example Fetch Data</title>
        <style>
            #dataContainer {
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
        <div id="dataContainer">Data will be loaded here...</div>
        <script src="example_fetch_data.js"></script>
    </body>
    </html>
*/

