// Copyright Volkan Kücükbudak 
// Free tu use under the GPLv3 and later
// Function to load a JavaScript file dynamically
function loadScript(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

// Function to initialize the application
function initializeApp() {
    // Your initialization code here
    console.log('All scripts loaded and app initialized.');
}

// Load necessary scripts and then initialize the application
loadScript('script1.js', function() {
    loadScript('script2.js', function() {
        loadScript('script3.js', initializeApp);
    });
});
