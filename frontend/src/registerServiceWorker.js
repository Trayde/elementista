/* eslint-disable no-console */

import { register } from 'register-service-worker'

function registerServiceWorker() {
  if (process.env.NODE_ENV === 'production') {
    register(`${process.env.BASE_URL}sw3.js`, {
      ready () {
        console.log(
          'App is being served from cache by a service worker.\n' +
          'For more details, visit https://goo.gl/AFskqB producao'
        )
      },
      registered () {
        console.log('Service worker has been registered. 1')
      },
      cached () {
        console.log('Content has been cached for offline use. 2')
      },
      updatefound () {
        console.log('New content is downloading. entou no update')
        if (navigator.serviceWorker && navigator.serviceWorker.getRegistrations) {
         navigator.serviceWorker.getRegistrations().then(registrations => {
           for (let registration of registrations) {
             registration.update().then(() => {
               console.log('Service worker update requested.');
             }).catch(error => {
               console.error('Error updating service worker:', error);
             });
           }
         }).catch(error => {
           console.error('Error getting service worker registrations:', error);
         });
       } else {
         console.warn('Service Worker API is not supported.');
       }
      },
      updated () {
        console.log('New content is available; please refresh. 4')
      },
      offline () {
        console.log('No internet connection found. App is running in offline mode.')
      },
      error (error) {
        console.error('Error during service worker registration:', error)
      }
    })
  }
}


// Register the service worker when the application starts
registerServiceWorker();

// Optionally, you can call updateServiceWorker() when needed, e.g., on a button click
// updateServiceWorker();
