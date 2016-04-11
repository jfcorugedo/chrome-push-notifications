'use strict';

console.log('Started', self);
self.addEventListener('install', function(event) {
    // By default an old service worker will stay running until all tabs that use it are closed or unloaded.
    // A new service worker will remain in the waiting state.
    // When this method is called the service worker will skip the waiting state and immediately activate.
    self.skipWaiting();
    console.log('Installed', event);
});

self.addEventListener('activate', function(event) {
    console.log('Activated', event);
});

self.addEventListener('push', function(event) {
    console.log('push message received', event);
    //TODO
});
