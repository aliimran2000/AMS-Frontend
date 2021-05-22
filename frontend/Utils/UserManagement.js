



export function useUser() {

    var User;
    if (process.browser) {
      var name = localStorage.getItem('User_Name')
      //var type = localStorage.getItem('User_Type')
      var balance = localStorage.getItem('Balance')
      
      if (name === null)
        return null; 

      return {name,type,balance}
    }
    
    
}

export function setUser(value) {

    if (process.browser) {
      localStorage.setItem('User_Name',value.username)
      //localStorage.setItem('User_Type',value.type)
      localStorage.setItem('Balance',value.walletBalance)
    }
        
}   


export function setWallet(value){
  if (process.browser) {
    localStorage.setItem('Balance',value)
  }
}


