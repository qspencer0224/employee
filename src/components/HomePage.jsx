import React from 'react'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

function HomePage() {
  return (
    <div id='homePage'>
      <p className='homeHeader'>Employee Directory</p>
      <SearchBar />
      <EmployeeList />
    </div>
  )
}

export default HomePage
