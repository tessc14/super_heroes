import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
  // const [checked, setChecked] = useState('')

  const handleMaleFilter = () => {

  }
  const handleFemaleFilter = () => {

  }

  return (
    <div>
      <h3>Set your preferences below: </h3>
      <form >
        <input type="checkbox" id='male_filter' name='male_filter' checked={false} onChange={handleMaleFilter}/>
        <label htmlFor='male_filter'>I am interested in Males</label>
        <input type="checkbox" id='female_filter' name='female_filter' checked={false} onChange={handleFemaleFilter}/>
        <label htmlFor='female_filter'>I am interested in Females</label>

      </form>
        
    </div>
  )
}

export default Home
