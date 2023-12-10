import React from 'react'
import '../style/style.css'
function Skill() {
  return (
    <div className='px-4 py-5' id='skill'>
      
        <h4 className=" my-3 mt-4 fw-bolder">Skills</h4>
        <div style={{display : 'flex'}} className='s'>
            <p className='sp'>Node.js</p>
            <p className='sp'>React.js</p>
            <p className='sp'>Express.js</p>
            <p className='sp'>MongoDB</p>
            <p className='sp'>Html</p>
        </div>
        <br />
        <div style={{display : 'flex'}} className='s sop'>
            <p className='sp'>Javascript</p>
            <p className='sp'>Postgres</p>
            <p className='sp'>Css</p>
            <p className='sp'>core java</p>
            <p className='sp'>oops</p>
            <p className='sp'>Sql</p>
        </div>
        
    </div>
  )
}

export default Skill
