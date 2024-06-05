# JavaScript DOM-Steuerung und Event Listener
[English](README.md)

Dieses Projekt bietet Beispiele und Erklärungen, wie man das DOM (Document Object Model) steuert und Event Listener in JavaScript verwendet. Es behandelt die Grundlagen der Manipulation von HTML-Elementen, der Handhabung von Benutzerinteraktionen und dem Reagieren auf verschiedene Ereignisse.

## Inhaltsverzeichnis
1. [Einführung](#einfuhrung)
2. [Erste Schritte](#erste-schritte)
3. [DOM-Manipulation](#dom-manipulation)
4. [Event Listener](#event-listener)
5. [Beispiele](#beispiele)
6. [DOM Controller](#dom-controller)
7. [Mitwirken](#mitwirken)

## Einführung
Das Verständnis, wie man mit dem DOM interagiert und Ereignisse verarbeitet, ist grundlegend für den Aufbau dynamischer Webanwendungen. Diese Anleitung hilft Ihnen, mit diesen Kernkonzepten in JavaScript zu beginnen.

## Erste Schritte
Um loszulegen, benötigen Sie grundlegende Kenntnisse in HTML, CSS und JavaScript. Stellen Sie sicher, dass Sie einen modernen Webbrowser und einen Code-Editor installiert haben.

## DOM-Manipulation
DOM-Manipulation bezieht sich auf die Fähigkeit, den Inhalt, die Struktur und das Styling einer Webseite dynamisch zu ändern. Häufige Aufgaben umfassen:
- Auswählen von Elementen
- Ändern von Inhalten
- Ändern von Stilen
- Hinzufügen oder Entfernen von Elementen

### Beispiel
```javascript
// Auswählen eines Elements
const element = document.getElementById('beispiel');

// Ändern des Inhalts
element.textContent = 'Hallo, Welt!';

// Ändern von Stilen
element.style.color = 'blau';
```

## Event Listener
Event Listener ermöglichen es Ihnen, Code als Reaktion auf Benutzerinteraktionen wie Klicks, Tastendrücke oder Mausbewegungen auszuführen.

### Beispiel
```javascript
// Auswählen eines Buttons
const button = document.querySelector('button');

// Hinzufügen eines Klick-Event Listeners
button.addEventListener('click', function() {
    alert('Button wurde geklickt!');
});
```

## Beispiele
Im `examples`-Verzeichnis finden Sie detailliertere Codebeispiele, die verschiedene DOM-Manipulationen und Event Listener demonstrieren.

### Beispiel: Ändern der Hintergrundfarbe
```javascript
// Auswählen eines Elements
const bgButton = document.getElementById('bgButton');

// Hinzufügen eines Klick-Event Listeners zum Ändern der Hintergrundfarbe
bgButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightgreen';
});
```

### Beispiel: Neue Elemente zum DOM hinzufügen
```javascript
// Funktion zum Hinzufügen eines neuen Absatzes zum Body
function addParagraph() {
    const newPara = document.createElement('p');
    newPara.textContent = 'Dies ist ein neuer Absatz!';
    document.body.appendChild(newPara);
}

// Auswählen eines Buttons und Hinzufügen eines Event Listeners
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addParagraph);
```

## DOM Controller
Um sicherzustellen, dass alle notwendigen JavaScript-Dateien geladen sind, bevor Funktionen ausgeführt werden, können Sie den folgenden Ansatz verwenden. Dies ist besonders nützlich für große Anwendungen mit mehreren JavaScript-Dateien.

### Beispiel: DOM Controller
```javascript
// Funktion zum dynamischen Laden einer JavaScript-Datei
function loadScript(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

// Funktion zur Initialisierung der Anwendung
function initializeApp() {
    // Ihr Initialisierungscode hier
    console.log('Alle Skripte geladen und App initialisiert.');
}

// Notwendige Skripte laden und dann die Anwendung initialisieren
loadScript('script1.js', function() {
    loadScript('script2.js', function() {
        loadScript('script3.js', initializeApp);
    });
});
```

In diesem Beispiel werden `script1.js`, `script2.js` und `script3.js` nacheinander geladen. Sobald alle Skripte geladen sind, wird die `initializeApp`-Funktion aufgerufen, um die Anwendung zu initialisieren.

## Mitwirken
Beiträge sind willkommen! Bitte forken Sie das Repository und reichen Sie Pull-Requests ein.

## Credits
Volkan Sah

