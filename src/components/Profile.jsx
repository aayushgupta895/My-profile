import React from 'react'
// import '../style/style.css'
function Profile() {
  return (
    <div>
      <div className="profile-head">
               <div className="ahp vh-100">
                   <div className='fl-row vh-100 prof'>
                        <div style={{width : '50%'}} className='drp'>

                        <b className="fs-6">Hellow I am, Aayush Gupta</b>
                        <h1 className="fw-bold mb-4 fs-1">MERN Stack Developer</h1>
                        <p>Hi, I am a computer science graduate studied from Samrat Ashok
technological Institute, Vidisha. I am enthusiast and always ready to evolve better.  </p>
                        <a href="https://drive.google.com/file/d/1sLL4aCothJ4zvns6Fzx3jArPQzyC7WNr/view?usp=sharing" target='blank'><button className="btn btn-outline-primary fw-bolder fs-7 px-4 py-2 mt-3 rounded-pill">Download Resume</button></a>
                        </div>
                        <div className="imgcover mb-4 apm" style={{width : '50%'}}>
                            <img src="assets/images/profile.jpg" className="bg-white p-2 shadow " style={{maxWidth : '350px'}} alt=""/>
                        </div>
                    </div>
               </div>
            </div>
    </div>
  )
}

export default Profile
