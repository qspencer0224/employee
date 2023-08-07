import React, { createContext, useState } from "react";

 const AppContext = createContext();


  const AppContextProvider = (props) => {
    //this will map through our data and load each employee
  const [employee, setEmployee] = useState(null);
  //this will load the employee/"worker" that's selected through the searchbar
  const [worker, setWorker] = useState(null)
    return (
        <AppContext.Provider value={{
            employee,
            setEmployee,
            worker,
            setWorker
        }}>
            {props.children}
        </AppContext.Provider>
    )
  }

  export default AppContextProvider