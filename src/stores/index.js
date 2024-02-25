import { defineStore } from 'pinia'




export const useStore = defineStore('app',()=> {
    const currentNavMenu = ref("home")
    const  currentAccMenu = ref("spot")
    const BankName = ref("")
    const accountName = ref("")
    const accountNumber = ref("")

    const state = reactive({
      user: null,
      isAuthenticated: false,
      token:null,
      pin: null,
      isPinSet: false,
      loading: false,
      email:null,
    });
  
  
  const setUser = (payload) => {
      state.user = payload;
      state.isAuthenticated = true;
  };

  const setToken = (payload) => {
      state.token = payload;
      
  };
  const setEmail = (payload) => {
      state.email = payload;
      
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
      currentNavMenu,
      currentAccMenu,
      BankName,
      accountName,
      accountNumber,
      state,
      setEmail,
      setUser,
      setToken,
      clearUser
    }
},
  {persist: {
    storage: persistedState.localStorage,
  }},)


  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
  
  }