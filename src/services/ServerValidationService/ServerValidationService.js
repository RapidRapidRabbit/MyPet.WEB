
export const GetServerErrors = (errorsArr) =>{
    let arr = [];    
    
    for (let key in errorsArr) {         
        errorsArr[key].forEach((item) => {
          
          arr.push(item);          
        });            
      }
 return arr;     
}