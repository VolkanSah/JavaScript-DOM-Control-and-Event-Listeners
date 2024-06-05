# JavaScript DOM-Steuerung und Event Listener
[English](README.md)

Dieses Projekt bietet Beispiele und Erklärungen, wie man das DOM (Document Object Model) steuert und Event Listener in JavaScript verwendet. Es behandelt die Grundlagen der Manipulation von HTML-Elementen, der Handhabung von Benutzerinteraktionen und dem Reagieren auf verschiedene Ereignisse.

## Inhaltsverzeichnis
1. [Einführung](#einfuhrung)
2. [Erste Schritte](#erste-schritte)
3. [DOM-Manipulation](#dom-manipulation)
4. [Event Listener](#event-listener)
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

## Credits
Volkan Sah

