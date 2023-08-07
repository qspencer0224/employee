// import React, { useContext } from 'react'
import Header from './Header'
// import EmployeeList from './EmployeeList'
// import EmployeeListItem from './EmployeeListItem'
import { useContext } from 'react';
import { AppContext } from '../context/app_context'
// import EditEmployee from './EditEmployee';
// import EditEmployeePage from './EditEmployeePage';

function EmployeePage() {
    // attempt to close page *edit to
    let openPage = true;
    let {person} = useContext(AppContext);

    // testing
    // const show =() =>{
    //   if(openPage === true){
    //     openPage = false;
    //   }
    //   // <EditEmployeePage />
    // }


  return (
    <div id='employeePage'>
      {/* <h1>EMPLOYEE PAGE</h1> */}
      {openPage ? (
      <>  
      <Header />
      {/* <button className='testBtn' onClick={()=> show()}></button> */}
      {/* employee card top */}
      <div className='employeeCard'>
        <img src={person.img} alt="" className='cardImg'/>
        <div className='employeeCardTxt'>
            <p className='cardName'>{person.name}</p>
            <p>{person.title}</p>
        </div>
      </div>

      {/* <EmployeeList /> */}

      {/* contact info */}
      <div id='contactWrapper'>
        <div className='contactInfo'>
          <h4>Call Office</h4>
          <p>{person.office}</p>
        </div>
        <div className='contactInfo'>
          <h4>Call Mobile</h4>
          <p>{person.mobile}</p>
        </div>
        <div className='contactInfo'>
          <h4>SMS</h4>
          <p>{person.sms}</p>
        </div>
        <div className='contactInfo'>
          <h4>Email</h4>
          <p>{person.email}</p>
        </div>
        {/* EDIT btn */}
        <div className='editBox'>
          {/* <EditEmployee /> */}
        </div>
      </div>
      </>
      ):(
        <p>*404 NO PAGE*</p>
      )}

    </div>
  );
}

export default EmployeePage