'use strict';

if('serviceWorker' in navigator) {
    console.log('Service worker is supported')
} else {
    console.log('This browser does\'t support service workers');
}
