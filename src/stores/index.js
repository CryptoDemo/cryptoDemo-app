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
      code: false,
      isPinSet: false,
      isFingerprintSet: false,
      isTwoFactorSet: false,
      loading: false,
      email:null,
      country:null,
      twoFactor:null
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
  const setTwoFactor = (payload) => {
      state.twoFactor = payload;
      
  };

  const setCountry = (payload) => {
      state.country = payload;
      
  };

  const setCode = (payload) => {
      state.code = payload;
      // state.isPinSet = true;
  };


  const verifyPin =(pin) => {
    return pin === this.pin;
  };

  
  const clearUser = () => {
      state.user = null;
      state.isAuthenticated = false;
      state.isPinSet = false;
      state.isFingerprintSet = false;
      state.twoFactor = []
      navigateTo('/login')
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
      clearUser,
      setCountry,
      setCode,
      setTwoFactor
    }
},
  {persist: {
    storage: persistedState.localStorage,
  }},)


  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
  
  }