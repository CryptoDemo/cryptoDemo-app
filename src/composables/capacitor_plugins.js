import { Keyboard } from '@capacitor/keyboard';
import { App } from "@capacitor/app";
import {PushNotifications} from "@capacitor/push-notifications";
import { Device } from "@capacitor/device";
import { FCM } from "@capacitor-community/fcm";


export const app = App;

export const deviceInfo = async () => {
  const info = await Device.getInfo();
  return info;
};

// keyboard plugin
export const keyboardVisible = ref(false);
 
export const initialize = async () => {
  Keyboard.addListener('keyboardDidShow', () => {
    keyboardVisible.value = true;
  });

  Keyboard.addListener('keyboardDidHide', () => {
    keyboardVisible.value = false;
  });
};

export  const showKeyboard = async () => {
    await Keyboard.show();
  };


  const getDeviceToken = (context)=>{
    alert("howdy3...")
    FCM.getToken()
    .then((r) => {
      alert(r.token)
      console.log("ONCALL_DECIVE_TOKEN...............",r.token)
      // setPushNotifications(context, r.token);
    })
    
    .catch(() => {
      alert("an error occurred");
      // context.$store.dispatch("storePushNotification", {enabled: false,tokenId: "",savedToDB: false});
    });
  }
  
  export const initPushNotification = async(context,platform)=>{
    // init event listeners
    // initPushNotificationListeners(context);
  
    alert("howdy1...")
    if(platform=='android'){
      alert("howdy2...")
      await FCM.setAutoInit({ enabled: true })
      await PushNotifications.requestPermissions();
      await PushNotifications.register();
      getDeviceToken(context);
      return;
    };
  
    // for ios
    // const permission = await PushNotifications.requestPermissions();
    // if(permission.receive==='granted'){
    //   PushNotifications.register();
    //   getDeviceToken(context);
    // }
  }