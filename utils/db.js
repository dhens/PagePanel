"use strict";

if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Saving feature will not be available.");
}

let request = window.indexedDB.open('SavedPagesDb', 3);

request.onerror = event => {
// Generic error handler for all errors targeted at this database's
// requests!
    console.error("Database error: " + event.target.errorCode);
};

request.onsuccess = event => {
    // DO something with request.result
    db = event.target.result;
};

// This event is only implemented in recent browsers
request.onupgradeneeded = function(event) {
    // Save the IDBDatabase interface
    var db = event.target.result;
  
    // Create an objectStore for this database
    var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
  };