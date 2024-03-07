// middleware/checkAccount.js

// import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';

// export default function ({ route, redirect }) {
//   // Check if the user has previously created an account
//   SecureStoragePlugin.get({ key: 'user_account_created' })
//     .then((result) => {
//       // If the account exists, redirect to the login page
//       if (result && result.value === 'true' && route.path !== '/login/login_with_pin') {
//         redirect('/login/login_with_pin');
//       }
//     })
//     .catch((error) => {
//       console.error('Error checking account creation:', error);
//     });
// }


export default function ({ from, next }) {
  if (from.meta.scrollToHeader) {
    const headerElement = document.querySelector(from.meta.scrollToHeader)
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
  // Continue to the next middleware or page rendering
  next()
}