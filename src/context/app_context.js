import { useState, createContext } from "react";
import employeeList from "../model/employeeList";

export const AppContext = createContext();

function AppContextProvider(props){
    const [person, setPerson] = useState(employeeList[0]); // current employee
    const [employees, setEmployees] = useState(employeeList); // all employees

    console.log(employeeList)

    // return
    return (
    <AppContext.Provider
        value={{
        // props??
        person, setPerson,
        employees, setEmployees
        }}>
        {/* props */}
        {props.children}
    </AppContext.Provider>
    )
}

export default AppContextProvider;