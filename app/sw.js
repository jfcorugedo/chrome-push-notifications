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
    var title = 'Push message';
    // The method waitUntil takes a promise and it does't end until that promise is resolved
    event.waitUntil(
        self.registration.showNotification(title, {
            body: 'Hey! You have a new notification',
            icon: 'images/icon.png',
            //Force a different tag so more than one notification can be showed
            tag: 'simple-notification' + Math.random()
        }));
});

self.addEventListener('notificationclick', function (event) {
    console.log('notification click. Tag: ', event.notification.tag);
    //This line is necessary only for android applications, that doesn't close the notification once the user clicks
    event.notification.close();

    var url = 'https://youtu.be/BKorP55Aqvg?list=RDMhllo1xQer8';

    event.waitUntil(
        // Gets a list of service worker clients whose origin are the same of this and returns them in a Promise
        clients.matchAll({
            type: 'window'
        })
        .then(function (windowClients) {
            console.log('windowClients', windowClients);
            //If there's a service worker client pointing at the url, reuse it
            for(var i = 0 ; i < windowClients.length ; i++) {
                var client = windowClients[i];
                if(client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }

            if(clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});