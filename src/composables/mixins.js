
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



export const validEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const verifyPasswordPattern = (input) =>{
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{:;'?/>,.<>\|]).{6,}$/;
    return pattern.test(input);
}


export const copyToClipboard = async (string) => {
    // copyToClipBoard(string);
    return true;
  };


export const getFormattedTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
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
  const date = dt.getDate();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][dt.getMonth()];
  return `${date}${nth(date)} ${month}, ${dt.getFullYear()}`;
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