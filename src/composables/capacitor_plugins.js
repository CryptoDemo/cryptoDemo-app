import { Keyboard } from '@capacitor/keyboard';




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