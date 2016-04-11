'use strict';


var serviceWorkerRegistration;
var subscription;
var subscribeButton = document.querySelector('button');

if('serviceWorker' in navigator) {
    console.log('Service worker is supported');
    navigator.serviceWorker.register('sw.js').then(function(reg) {
        console.log('Service worker loaded \uD83D\uDE0E', reg);
        return navigator.serviceWorker.ready;
    }).then(function (workerRegistration) {
        serviceWorkerRegistration = workerRegistration;
        subscribeButton.disabled = false;
        console.log('Service Worker is ready \uD83D\uDE0E', serviceWorkerRegistration);
    }).catch(function(err) {
        console.log('\uD83D\uDE1E', err)
    });
} else {
    console.log('This browser does\'t support service workers, I\'m afraid \uD83D\uDE23');
}

subscribeButton.addEventListener('click', function() {
    if (subscription) {
        unsubscribe();
    } else {
        subscribe();
    }
});

function subscribe() {
    serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true}).
    then(function(pushSubscription){
        subscription = pushSubscription;
        console.log('Subscribed! Endpoint:', subscription.endpoint);
        subscribeButton.textContent = 'Unsubscribe';
    });
}
function unsubscribe() {
    subscription.unsubscribe().then(function(event) {
        subscribeButton.textContent = 'Subscribe';
        console.log('Unsubscribed!', event);
    }).catch(function(error) {
        console.log('Error unsubscribing', error);
        subscribeButton.textContent = 'Subscribe';
    });
    subscription = null;
}
