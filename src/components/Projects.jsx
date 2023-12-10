import React from 'react'

function Projects() {
  return (
    <div className='pr ' id='projects'><br />
      <h2 className=' fw-bolder wh pd'>Projects</h2>
      <br />
      <div style={{display : 'flex'}} className='pdr'>
        <div className='pdrd blur fl-col'>
            <div className='fl-row' style={{height : '59.51px'}}>
                <div className='di fw-bolder wh di1' >Antivirus Ecom</div>
                <a href="https://github.com/aayushgupta895/Ecom-Antivirus" target='blank'><button className='ur'></button></a>
            </div>
            <div className='' style={{height : 'auto', margin: '0px 10px 0px 10px', padding : '5px'}}>
              <div className='fl-row p1' >
                <p className='pi'>Node.js</p>
                <p className='pi'>Express.js</p>
                <p className='pi'>Sequelize</p>
                <p className='pi'>jwt-auth</p>
              </div>
              <div className='fl-row p1' >
                <p className='pi'>payment-integration</p>
                <p className='pi'>Nodemailer</p>
                <p className='pi'>git</p>
              </div>
              <div className='fl-row p1' >
                <p className='pi'>postgres</p>
                <p className='pi'>crud-ops</p>
                <p className='pi'>postman</p>
                <p className='pi'>github</p>
              </div>
            </div>
            <div className='p2'>
              <p style={{color: 'rgb(211 211 211 / 70%)'}}>
              This is an E-commerce website for different types of antiviruses build using Express, Nodejs, Sequelize, Postgres.
              It uses Json web token for Authentication. It has payment integration using razorpay.
              It uses nodemailer for sending emails and product key deliveries.
              It uses tools like postman, git, nodemailer.

              </p>
            </div>
        </div>
        <div className='pdrd blur fl-col'>
            <div className='fl-row'>
                <div className='di fw-bolder wh di1' style={{marginLeft : '15px'}}>School Management System</div>
               <a href="https://github.com/aayushgupta895/school_management_system" target='blank'> <button className='ur' style={{marginLeft : '5px'}}></button></a>
            </div>
            <div className='' style={{height : 'auto', margin: '0px 10px 0px 10px', padding : '5px'}}>
              <div className='fl-row p1' >
                <p className='pi'>Node.js</p>
                <p className='pi'>Express.js</p>
                <p className='pi'>MongoDB</p>
                <p className='pi'>mongoose</p>
              </div>
              <div className='fl-row p1' >
                <p className='pi'>jwt-auth</p>
                <p className='pi'>postman</p>
                <p className='pi'>crud-ops</p>
                <p className='pi'>morgon</p>
              </div>
              <div className='fl-row p1' >
                <p className='pi'>git</p>
                <p className='pi'>github</p>
              </div>
            </div>
            <div className='p2'>
              <p style={{ color: 'rgb(211 211 211 / 70%)'}}>This is an api build using Express, Nodejs, Mongodb.
              It uses Json web token for Authentication. Students and Faculty can signup and signin.
Students can see their progress report card. And faculty can make CRUD operations on students info.
It uses tools like postman, morgon, git.
</p>
            </div>
        </div>
        <div className='pdrd blur fl-col'>
            <div className='fl-row'>
                <div className='di fw-bolder wh di1' style={{marginLeft : '100px'}}>Dessert App</div>
                <a href="https://github.com/aayushgupta895/dessert-ordering-app" target='blank'><button className='ur'></button></a>
            </div>
            <div className='' style={{height : 'auto', margin: '0px 10px 0px 10px', padding : '5px'}}>
              <div className='fl-row p1' >
                <p className='pi'>React.js</p>
                <p className='pi'>html</p>
                <p className='pi'>css</p>
                <p className='pi'>javascript</p>
                <p className='pi'>react-hooks</p>
              </div>
              <div className='fl-row p1' >
                <p className='pi'>context-Api</p>
                <p className='pi'>git</p>
                <p className='pi'>postman</p>
                <p className='pi'>github</p>
                
              </div>
              <div className='fl-row p1' >
              </div>
            </div>
            <div className='p2'>
              <p style={{    color: 'rgb(211 211 211 / 70%)'}}>This is a Reactjs application.
It is dessert ordering app which has lot of options to select.
It has user friendly interface designed using html css and js.
It uses React hooks for the state management.</p>
            </div>
        </div>
      </div>
      <a href="https://github.com/aayushgupta895" target='_blank' style={{color : 'white'}}>
        <div className='mr'>
          More
        </div>
      </a>
    </div>
  )
}

export default Projects
