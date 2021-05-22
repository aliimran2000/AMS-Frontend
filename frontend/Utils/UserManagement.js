



export function useUser() {

    var User;
    if (process.browser) {
      var name = localStorage.getItem('User_Name')
      var type = localStorage.getItem('User_Type')
      
      if (name === null)
        return null; 

      return {name,type}
    }
    
    
}


export function setUser(value) {

    if (process.browser) {
      localStorage.setItem('User_Name',value.name)
      localStorage.setItem('User_Type',value.type)
    }
        
}   

