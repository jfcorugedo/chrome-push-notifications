'use strict';

if('serviceWorker' in navigator) {
    console.log('Service worker is supported');
    navigator.serviceWorker.register('sw.js').then(function(reg){
        console.log('Service worker loaded \uD83D\uDE0E', reg);
    }).catch(function(err) {
        console.log('\uD83D\uDE1E', err)
    });
} else {
    console.log('This browser does\'t support service workers, I\'m afraid \uD83D\uDE23');
}
