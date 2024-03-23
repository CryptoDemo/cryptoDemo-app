import {cloudinaryAPIKey,cloudinaryURL} from '@/composables/configs'

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





//uploading to cloudinary
export const asyncRequest = async (url, options, json = true) => {
  return fetch(url, options)
    .then((response) => (json ? response.json() : response.text()))
    .then((data) => {
      return data;
    })


    .catch((error) => {
      return error;
    });
};


export const uploadToCloudinary = async ( file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "laioclwf");
  data.append("resource_type", "auto");
  data.append("api_key", cloudinaryAPIKey);
  data.append("folder", `/Gallery`);

  return await asyncRequest(cloudinaryURL, {
    method: "POST",
    body: data,
  });
};



// export const uploadFile = async (file,imgUrl)=>{
  

//     const data = await fetch(`${baseURL}file/upload`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-access-token' : `${pinia.state.user?.token}`
//       },

//       body: JSON.stringify(file)

//     }).then(res => res.json());

//     if(data.success){
//         imgUrl.value = data.data
//     } 

// }

export const handleFileChange = async (event, selectedFile ,profileImg=null)=>{
  const file = event.target.files[0];
  if(!file) return;
  selectedFile.value = file

  if(file?.type=="image/jpeg" || file?.type=="image/png" || file?.type=="image/jpg"  &&  profileImg){
      const reader = new FileReader();
      reader.onload = (event) => {
          profileImg.src = event.target.result;
      };

      reader.readAsDataURL(file);
  }

}





// Function to fetch the price ticker for a given symbol
export const getSymbolPrice = async(symbol) => {

  try {
      const response = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbols=${symbol}`,{headers: {'Accept': 'application/json'}});
      if (!response.ok) {
          throw new Error('Failed to fetch symbol price');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching symbol price:', error);
      throw error;
  }

}


// to create minutes
export const createMinutes = (mnts = 5) => {
  let now = new Date();
  now.setMinutes(now.getMinutes() + mnts);
  return now.toISOString();
};



// date are formatted in this form (24th Nov 2023)
export const formatDate = (dat) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(dat);
  // Extract the date components
  const year = date.getFullYear();
  const monthIndex = date.getMonth(); // Months are zero-indexed
  const day = date.getDate();

  // Format the date components into a desired format
  let formattedDate = `${day}`;
  if (day % 10 === 1 && day !== 11) {
    formattedDate += "st ";
  } else if (day % 10 === 2 && day !== 12) {
    formattedDate += "nd ";
  } else if (day % 10 === 3 && day !== 13) {
    formattedDate += "rd ";
  } else {
    formattedDate += "th ";
  }

  formattedDate += `${months[monthIndex]}. ${year}`;

  return formattedDate;
};