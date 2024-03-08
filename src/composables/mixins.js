
let debounce_timeout;
export const debounce = (fn,value)=>{
  // clear old timeout
  if(debounce_timeout) clearTimeout(debounce_timeout);

  // set new timeout
  debounce_timeout = setTimeout(() => {
    // execute the function after the timeout period
    fn(value);
  }, 1000);
}



export const filterV =(n,filteredItem)=>{
  filteredItem.value = items.filter((i)=>{
      return i.toLowerCase().includes(n.toLowerCase())
  }) 

}

export const filterByKey = (key,arr) =>{
  return arr.filter((arr,index,self)=>index===self.findIndex((t)=> (t[key]===arr[key])))
}



export const validEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const verifyPasswordPattern = (input) =>{
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{:;'?/>,.<>\|]).{6,}$/;
    return pattern.test(input);
}

// export const checkPassword = (password) => {
//   containsUppercase.value = /[A-Z]/.test(password);
//   containsLowercase.value = /[a-z]/.test(password);
//   containsSpecialCharacter.value = /[!@#$%^&*()_+}{:;'?/>,.<>\|]/.test(password);
//   containsNumeral.value = /\d/.test(password);
  
//   passwordIsValid.value =
//     containsUppercase.value &&
//     containsLowercase.value &&
//     containsSpecialCharacter.value &&
//     containsNumeral.value &&
//     password.value.length >= 8;
// };


export const copyToClipboard = async (string) => {
    // copyToClipBoard(string);
    return true;
  };


export const getFormattedTime = (date) => {
  const timestamp = date;
  const dateObject = new Date(timestamp);
  
  // Extracting time components
  const hours = dateObject.getUTCHours(); // 20
  const minutes = dateObject.getUTCMinutes(); // 46
  const seconds = dateObject.getUTCSeconds(); // 44
  
  // Format the time as needed
  const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

  return formattedTime
};


export const monthNames = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

export const getFormattedDate = (dt) => {
  const timestamp = dt;
const dateObject = new Date(timestamp);

// Extracting date components
const year = dateObject.getFullYear(); // 2024
const month = dateObject.getMonth() + 1; // 2 (January is 0-based)
const day = dateObject.getDate(); // 2

// Format the date as needed
const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
 return formattedDate
};


  
// How to format a number with commas as thousands separators
export const numberWithCommas =(numberToFilterWithComma) =>{
  return numberToFilterWithComma.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export const getUserId = ()=>{
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  return userId
}