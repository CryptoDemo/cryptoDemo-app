import { defineStore } from 'pinia'


export const authStore = defineStore('auth_store',()=> {

    const state = reactive({
      user: null,
      isAuthenticated: false,
      token:null,
      pin: null,
      isPinSet: false,
    });
  
  
  const setUser = (payload) => {
      state.user = payload;
      state.isAuthenticated = true;
  };
  const setToken = (payload) => {
      state.token = payload;
      
  };

  const setPin = (payload) => {
      state.pin = payload;
      state.isPinSet = true;
  };


  const verifyPin =(pin) => {
    return pin === this.pin;
  };

  
  const clearUser = () => {
      state.user = null;
      state.isAuthenticated = false;
    }

    return {
      state,
      setUser,
      clearUser,
      setToken,
      setPin,
      verifyPin
    }
},
  {persist: {
    storage: persistedState.localStorage,
  }},)


  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
  
  }