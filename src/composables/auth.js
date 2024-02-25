import { deviceInfo  } from '@/composables/capacitor_plugins'
import {useStore} from "@/stores/index"
import {baseURL} from "@/composables/configs"



export const device =   deviceInfo();

const toast = useToast()

export const signUp = async (name,email,password,country,referrer_code = null) => {
      const auth = useStore()
     
      auth.state.loading = true

    const signup_info = {
        name: name,
        email:email,
        password: password,
        referrer_code:referrer_code,
        country: country,
        device_token: auth.state.token,
        device_info: JSON.stringify(device),
    }

    console.log(signup_info)

  try {
    const response = await fetch('https://cryptodemoapi-production.up.railway.app//v1/auth/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(signup_info),
    })

    if (response.success) {
      // Redirect or perform any action after successful sign-up
      console.log('Sign-up successful!');
      auth.state.loading = false
      auth.setEmail(email)
      navigateTo('/sign_Up/verification')
    } else {
      // Handle error, maybe show an error message to the user
      console.error('Sign-up failed:', response.status);
      toast.message('Sign-up failed', {
        position: 'top',
        timeout: 2000,
      })
            auth.state.loading = false
    }
  } catch (error) {
    console.error('Error during sign-up:', error);
    toast.message(error, {
        position: 'top',
        timeout: 2000,
      })
      auth.state.loading = false
  }
  auth.state.loading = false

}


export async function login(username, password) {
    try {
        // Make a POST request to your login API endpoint
        const response = await fetch('MY_LOGIN_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(res=>res.json());

        if (!response.ok) {
            // Handle authentication failure, e.g., throw an error
            throw new Error('Invalid credentials');
        }

        // If the response is successful, parse the JSON response
        const data = await response.json();

        // Return the user data or token from the response
        return data;
    } catch (error) {
        // Handle any errors, e.g., log the error
        console.error('Error authenticating user:', error);
        throw error; // Rethrow the error for the calling code to handle
    }
}


