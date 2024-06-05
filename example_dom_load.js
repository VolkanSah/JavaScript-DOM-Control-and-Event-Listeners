// example_dom_load.js
// Free to use under the GPLv3 and later

/*
    This script demonstrates how to dynamically load JavaScript files and
    ensure that application initialization occurs only after all necessary
    scripts have been loaded.
*/

/**
 * Dynamically loads a JavaScript file by creating a script element and appending it to the document head.
 * @param {string} url - The URL of the JavaScript file to load.
 * @param {function} callback - The callback function to execute once the script is loaded.
 */
function loadScript(url, callback) {
    const script = document.createElement('script'); // Create a new script element
    script.type = 'text/javascript'; // Set the script type
    script.src = url; // Set the script source to the provided URL
    script.onload = callback; // Set the callback function to execute once the script is loaded
    document.head.appendChild(script); // Append the script element to the document head
}

/**
 * Initializes the application by executing any necessary startup code.
 * This function is called only after all required scripts have been loaded.
 */
function initializeApp() {
    // Your initialization code here
    console.log('All scripts loaded and app initialized.'); // Log a message indicating that the app has been initialized
}

// Load the necessary scripts in sequence and then initialize the application
loadScript('script1.js', function() { // Load the first script
    loadScript('script2.js', function() { // Once the first script is loaded, load the second script
        loadScript('script3.js', initializeApp); // Once the second script is loaded, load the third script and initialize the application
    });
});

/*
    Explanation:
    - The loadScript function dynamically loads a JavaScript file by creating a script element, setting its source, and appending it to the document head.
    - The initializeApp function contains the initialization code for the application and is called once all required scripts are loaded.
    - The scripts are loaded sequentially: script1.js is loaded first, followed by script2.js, and finally script3.js. Once all scripts are loaded, the initializeApp function is called.
*/
